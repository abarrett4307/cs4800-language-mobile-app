import { GamemodeModal, Gamemodes } from "@/utils/gamemodes";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function ModalScreen() {
  const { gamemodeKey } = useLocalSearchParams();
  const gamemode = Gamemodes[gamemodeKey];
  return (
    <>
      <Stack.Screen options={{ title: gamemode.title }} />
      <GamemodeModal gamemode={gamemode} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
