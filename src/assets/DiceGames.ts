export function DiceGames ():number
{
    const min : number = 1;
    const max : number = 10;
    const result : number = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}