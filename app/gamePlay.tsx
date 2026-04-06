import { Gamemodes } from "@/utils/gamemodes";
import { levelData } from "@/utils/questions";
import { useColors } from "@/utils/theme";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

// ── Types ────────────────────────────────────────────────────────────────────

interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  npcSpeech: string;
  choices: Choice[];
}

type AnswerState = "unanswered" | "correct" | "incorrect";
type Mood = "happy" | "confused" | "angry";

// ── Mood helpers ──────────────────────────────────────────────────────────────

const MOOD_LADDER: Mood[] = ["angry", "confused", "happy"];

function stepMoodUp(current: Mood): Mood {
  const i = MOOD_LADDER.indexOf(current);
  return MOOD_LADDER[Math.min(i + 1, MOOD_LADDER.length - 1)];
}

function stepMoodDown(current: Mood): Mood {
  const i = MOOD_LADDER.indexOf(current);
  return MOOD_LADDER[Math.max(i - 1, 0)];
}

// ── Question Bank ─────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    npcSpeech: "Salut! Comment réponds-tu à cette salutation en français?",
    choices: [
      { id: "a", text: "Bonjour, comment ça va?", isCorrect: true },
      { id: "b", text: "Gracias, mucho gusto.", isCorrect: false },
      { id: "c", text: "Ciao, come stai?", isCorrect: false },
    ],
  },
  {
    npcSpeech: "Comment dit-on 'Thank you' en français?",
    choices: [
      { id: "a", text: "S'il vous plaît", isCorrect: false },
      { id: "b", text: "Merci", isCorrect: true },
      { id: "c", text: "Pardon", isCorrect: false },
    ],
  },
  {
    npcSpeech: "Quelle est la traduction de 'I am hungry'?",
    choices: [
      { id: "a", text: "J'ai soif", isCorrect: false },
      { id: "b", text: "Je suis fatiqué", isCorrect: false },
      { id: "c", text: "J'ai faim", isCorrect: true },
    ],
  },
  {
    npcSpeech: "Comment dit-on 'Good night' en français?",
    choices: [
      { id: "a", text: "Bonne nuit", isCorrect: true },
      { id: "b", text: "Bon matin", isCorrect: false },
      { id: "c", text: "Bonne chance", isCorrect: false },
    ],
  },
  {
    npcSpeech: "Qu'est-ce que signifie 'bibliothèque'?",
    choices: [
      { id: "a", text: "Bookstore", isCorrect: false },
      { id: "b", text: "Pharmacy", isCorrect: false },
      { id: "c", text: "Library", isCorrect: true },
    ],
  },
];

// ── Subcomponents ─────────────────────────────────────────────────────────────

function ProgressBar({
  current,
  total,
  styles,
}: {
  current: number;
  total: number;
  styles: ReturnType<typeof StyleSheet.create>;
}) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: current / total,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [current]);

  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.progressTrack}>
      <Animated.View style={[styles.progressFill, { width: barWidth }]} />
    </View>
  );
}

function NPCBubble({
  name,
  avatarUri,
  speech,
  styles,
}: {
  name: string;
  avatarUri?: string;
  speech: string;
  styles: ReturnType<typeof StyleSheet.create>;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-10)).current;

  // Re-animate speech bubble when speech changes
  useEffect(() => {
    fadeAnim.setValue(0);
    slideAnim.setValue(-10);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 80,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, [speech]);

  // Bounce the avatar whenever the mood (avatarUri) changes
  const avatarScaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(avatarScaleAnim, {
        toValue: 1.18,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.spring(avatarScaleAnim, {
        toValue: 1,
        tension: 200,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [avatarUri]);

  return (
    <View style={styles.npcRow}>
      <View style={styles.avatarWrapper}>
        <Animated.View
          style={[
            styles.avatarRing,
            { transform: [{ scale: avatarScaleAnim }] },
          ]}
        >
          {avatarUri ? (
            <Image source={avatarUri} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarFallback}>
              <Text style={styles.avatarInitial}>{name[0]}</Text>
            </View>
          )}
        </Animated.View>
        <Text style={styles.npcName}>{name}</Text>
      </View>

      <Animated.View
        style={[
          styles.speechBubble,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.bubbleTail} />
        <Text style={styles.speechText}>{speech}</Text>
      </Animated.View>
    </View>
  );
}

function ChoiceCard({
  choice,
  index,
  onPress,
  selectedId,
  answerState,
  styles,
}: {
  choice: Choice;
  index: number;
  onPress: (choice: Choice) => void;
  selectedId: string | null;
  answerState: AnswerState;
  styles: ReturnType<typeof StyleSheet.create>;
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 70,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.96,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 200,
        friction: 10,
        useNativeDriver: true,
      }),
    ]).start();
    onPress(choice);
  };

  const isSelected = selectedId === choice.id;
  const isAnswered = answerState !== "unanswered";
  const showAsCorrect = isAnswered && choice.isCorrect;
  const showAsWrong = isAnswered && isSelected && !choice.isCorrect;
  const isDimmed = isAnswered && !isSelected && !choice.isCorrect;

  const cardBg = showAsCorrect
    ? CORRECT_COLOR
    : showAsWrong
      ? WRONG_COLOR
      : isSelected
        ? ACCENT
        : CARD_BG;

  const labels = ["A", "B", "C"];

  return (
    <Animated.View
      style={[
        styles.choiceCardWrapper,
        {
          opacity: isDimmed
            ? fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.35],
              })
            : fadeAnim,
          transform: [{ scale: scaleAnim }, { translateY: slideAnim }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handlePress}
        disabled={isAnswered}
        style={[styles.choiceCard, { backgroundColor: cardBg }]}
      >
        <View
          style={[
            styles.choiceLabel,
            (isSelected || showAsCorrect) && styles.choiceLabelSelected,
          ]}
        >
          <Text
            style={[
              styles.choiceLabelText,
              (isSelected || showAsCorrect) && styles.choiceLabelTextSelected,
            ]}
          >
            {showAsCorrect ? "✓" : showAsWrong ? "✗" : labels[index]}
          </Text>
        </View>
        <Text
          style={[
            styles.choiceText,
            (isSelected || showAsCorrect) && styles.choiceTextSelected,
          ]}
        >
          {choice.text}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

function FeedbackBanner({
  answerState,
  styles,
}: {
  answerState: AnswerState;
  styles: ReturnType<typeof StyleSheet.create>;
}) {
  const slideAnim = useRef(new Animated.Value(60)).current;

  useEffect(() => {
    if (answerState === "unanswered") {
      slideAnim.setValue(60);
      return;
    }
    Animated.spring(slideAnim, {
      toValue: 0,
      tension: 120,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [answerState]);

  if (answerState === "unanswered") return null;

  const isCorrect = answerState === "correct";

  return (
    <Animated.View
      style={[
        styles.feedbackBanner,
        { backgroundColor: isCorrect ? CORRECT_COLOR : WRONG_COLOR },
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.feedbackEmoji}>{isCorrect ? "🎉" : "❌"}</Text>
      <Text style={styles.feedbackText}>
        {isCorrect ? "Correct! Well done." : "Not quite — keep going!"}
      </Text>
    </Animated.View>
  );
}

function SummaryScreen({
  score,
  total,
  onRetry,
  onHome,
  styles,
}: {
  score: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
  styles: ReturnType<typeof StyleSheet.create>;
}) {
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 80,
        friction: 9,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const pct = Math.round((score / total) * 100);
  const emoji = pct === 100 ? "🏆" : pct >= 70 ? "⭐" : pct >= 40 ? "👍" : "📚";
  const message =
    pct === 100
      ? "Perfect score!"
      : pct >= 70
        ? "Great job!"
        : pct >= 40
          ? "Good effort!"
          : "Keep practicing!";

  return (
    <Animated.View
      style={[
        styles.summaryContainer,
        { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
      ]}
    >
      <Text style={styles.summaryEmoji}>{emoji}</Text>
      <Text style={styles.summaryTitle}>{message}</Text>
      <Text style={styles.summaryScore}>
        {score} / {total}
      </Text>
      <Text style={styles.summaryPct}>{pct}% correct</Text>

      <View style={styles.summaryButtons}>
        <TouchableOpacity style={styles.playButton} onPress={onRetry}>
          <Text style={styles.playButtonText}>Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={onHome}>
          <Text style={styles.playButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

function showLeaveAlert() {
  Alert.alert("End Game", "Are you sure you want to leave?", [
    { text: "Stay", style: "cancel" },
    {
      text: "Leave",
      onPress: () => {
        router.dismiss();
        router.replace("/");
      },
    },
  ]);
}

// ── Main Screen ───────────────────────────────────────────────────────────────

const AUTO_ADVANCE_DELAY = 1500;

export default function GameplayScreen() {
  const { gamemodeKey, language } = useLocalSearchParams();
  const gamemode = Gamemodes[gamemodeKey as string];

  const [npcName] = useState<string>(gamemode.npcName);
  const [questions, setQuestions] = useState(levelData[gamemodeKey][language]);
  const [mood, setMood] = useState<Mood>("happy");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalQuestions = questions.length;
  const currentQuestion = questions[questionIndex];

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const advanceQuestion = useCallback(() => {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= totalQuestions) {
      setIsGameOver(true);
    } else {
      setQuestionIndex(nextIndex);
      setSelectedId(null);
      setAnswerState("unanswered");
    }
  }, [questionIndex, totalQuestions]);

  const handleChoice = useCallback(
    (choice: Choice) => {
      if (answerState !== "unanswered") return;

      setSelectedId(choice.id);

      if (choice.isCorrect) {
        setScore((s) => s + 1);
        setMood((m) => stepMoodUp(m));
        setAnswerState("correct");
      } else {
        setMood((m) => stepMoodDown(m));
        setAnswerState("incorrect");
      }

      timerRef.current = setTimeout(advanceQuestion, AUTO_ADVANCE_DELAY);
    },
    [answerState, advanceQuestion],
  );

  const handleRetry = () => {
    setQuestionIndex(0);
    setSelectedId(null);
    setAnswerState("unanswered");
    setScore(0);
    setMood("happy");
    setIsGameOver(false);
  };

  const handleHome = () => {
    router.dismiss();
    router.replace("/");
  };

  const colors = useColors();

  const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: colors.surface },
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 12,
      paddingBottom: 24,
    },

    // ── Header
    header: { marginBottom: 8 },
    questionCounter: {
      fontFamily: "Artz",
      fontSize: 28,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 10,
    },
    questionCounterMuted: {
      color: colors.text,
      fontWeight: "400",
      fontSize: 22,
    },
    progressTrack: {
      height: 4,
      backgroundColor: colors.surfaceAlt,
      borderRadius: 2,
      overflow: "hidden",
    },
    progressFill: {
      height: 4,
      backgroundColor: colors.accent,
      borderRadius: 2,
    },

    // ── NPC Area
    npcArea: { flex: 3, justifyContent: "center", paddingTop: 8 },
    npcRow: { flexDirection: "row", alignItems: "flex-start", gap: 14 },
    avatarWrapper: { alignItems: "center", gap: 6, paddingTop: 4 },
    avatarRing: {
      width: 62,
      height: 62,
      borderRadius: 31,
      borderWidth: 2.5,
      borderColor: colors.accent,
      padding: 2,
      overflow: "hidden",
    },
    avatarImage: { width: "100%", height: "100%", borderRadius: 28 },
    avatarFallback: {
      flex: 1,
      backgroundColor: colors.accent,
      borderRadius: 28,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarInitial: { color: "#fff", fontSize: 24, fontWeight: "700" },
    npcName: {
      color: colors.primary,
      fontSize: 11,
      letterSpacing: 1,
      textTransform: "uppercase",
      fontWeight: "600",
      fontFamily: "Artz",
    },
    speechBubble: {
      flex: 1,
      backgroundColor: "white",
      borderRadius: 18,
      borderTopLeftRadius: 4,
      padding: 18,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 6,
      position: "relative",
    },
    bubbleTail: {
      position: "absolute",
      left: -9,
      top: 14,
      width: 0,
      height: 0,
      borderTopWidth: 8,
      borderBottomWidth: 8,
      borderRightWidth: 10,
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: "white",
    },
    speechText: {
      fontSize: 17,
      lineHeight: 26,
      color: "#1A1A2E",
      fontStyle: "italic",
    },

    // ── Divider
    dividerRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginVertical: 20,
    },
    dividerLine: { flex: 1, height: 1, backgroundColor: "#2E2E48" },
    dividerLabel: {
      color: "#6b6b8a",
      fontSize: 11,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      fontWeight: "600",
    },

    // ── Choices
    choicesArea: { flex: 5, justifyContent: "center", gap: 12 },
    choiceCardWrapper: { borderRadius: 16 },
    choiceCard: {
      borderRadius: 16,
      paddingVertical: 18,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    choiceLabel: {
      width: 34,
      height: 34,
      borderRadius: 10,
      backgroundColor: colors.text,
      alignItems: "center",
      justifyContent: "center",
    },
    choiceLabelSelected: { backgroundColor: colors.text },
    choiceLabelText: {
      color: MUTED,
      fontSize: 13,
      fontWeight: "700",
      letterSpacing: 0.5,
    },
    choiceLabelTextSelected: { color: colors.background },
    choiceText: { flex: 1, color: SAND, fontSize: 16, lineHeight: 22 },
    choiceTextSelected: { color: "#fff", fontWeight: "600" },

    // ── Feedback Banner
    feedbackBanner: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 14,
      marginTop: 16,
    },
    feedbackEmoji: { fontSize: 22 },
    feedbackText: { color: "#fff", fontSize: 15, fontWeight: "600", flex: 1 },

    // ── Summary
    summaryContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 32,
      gap: 12,
    },
    summaryEmoji: { fontSize: 72, marginBottom: 8 },
    summaryTitle: {
      fontFamily: "Artz",
      fontSize: 30,
      fontWeight: "700",
      color: colors.text,
      textAlign: "center",
    },
    summaryScore: {
      fontSize: 48,
      fontWeight: "800",
      color: colors.accent,
      letterSpacing: 2,
    },
    summaryPct: { fontSize: 16, color: MUTED, letterSpacing: 1 },
    summaryButtons: {
      flexDirection: "column",
      gap: 8,
      marginTop: 24,
      width: "100%",
    },
    summaryBtn: {
      paddingVertical: 16,
      borderRadius: 16,
      alignItems: "center",
    },
    summaryBtnPrimary: { backgroundColor: colors.accent },
    summaryBtnSecondary: {
      backgroundColor: "transparent",
      borderWidth: 1.5,
      borderColor: MUTED,
    },
    summaryBtnTextPrimary: { color: "#fff", fontSize: 17, fontWeight: "700" },
    summaryBtnTextSecondary: { color: MUTED, fontSize: 17, fontWeight: "600" },
    playButton: {
      borderRadius: 500,
      color: useColors().text,
      backgroundColor: useColors().tint,
      paddingVertical: 12,
      marginVertical: 20,
    },
    playButtonText: {
      fontFamily: "Artz",
      fontSize: 28,
      textAlign: "center",
    },
    backButton: {
      borderRadius: 500,
      color: useColors().text,
      backgroundColor: "#f3f3e3",
      paddingVertical: 12,
    },
  });

  return (
    <>
      <Stack.Screen options={{ title: gamemode?.title ?? "Game" }} />
      <View style={styles.safe}>
        <View style={styles.container}>
          {isGameOver ? (
            <SummaryScreen
              score={score}
              total={totalQuestions}
              onRetry={handleRetry}
              onHome={handleHome}
              styles={styles}
            />
          ) : (
            <>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.questionCounter}>
                  {questionIndex + 1}{" "}
                  <Text style={styles.questionCounterMuted}>
                    / {totalQuestions}
                  </Text>
                </Text>
                <ProgressBar
                  current={questionIndex + 1}
                  total={totalQuestions}
                  styles={styles}
                />
              </View>

              {/* NPC */}
              <View style={styles.npcArea}>
                <NPCBubble
                  name={npcName}
                  avatarUri={gamemode.avatars[mood]}
                  speech={currentQuestion.npcSpeech}
                  styles={styles}
                />
              </View>

              {/* Divider */}
              <View style={styles.dividerRow}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerLabel}>Your response</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Choices */}
              <View style={styles.choicesArea}>
                {currentQuestion.choices.map((choice, i) => (
                  <ChoiceCard
                    key={`${questionIndex}-${choice.id}`}
                    choice={choice}
                    index={i}
                    onPress={handleChoice}
                    selectedId={selectedId}
                    answerState={answerState}
                    styles={styles}
                  />
                ))}

                <FeedbackBanner answerState={answerState} styles={styles} />
              </View>

              {/* Leave */}
              <View>
                <TouchableOpacity onPress={showLeaveAlert}>
                  <Text
                    style={{ color: MUTED, textAlign: "center", marginTop: 8 }}
                  >
                    Leave
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
}

// ── Constants ─────────────────────────────────────────────────────────────────

const SAND = "#F5ECD7";
const ACCENT = "#E8632A";
const CARD_BG = "#242438";
const MUTED = "#6B6B8A";
const CORRECT_COLOR = "#2E7D32";
const WRONG_COLOR = "#C62828";
