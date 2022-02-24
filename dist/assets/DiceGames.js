export function DiceGames() {
    const min = 1;
    const max = 10;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}
