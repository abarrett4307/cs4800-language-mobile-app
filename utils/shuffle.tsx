// Use this to shuffle an array
export function shuffle(arr: any[]): any[] {
  // Create a shallow copy to avoid mutating the original levelData
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
