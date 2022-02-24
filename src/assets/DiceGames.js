"use strict";
exports.__esModule = true;
exports.DiceGames = void 0;
function DiceGames() {
    var min = 1;
    var max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.DiceGames = DiceGames;
