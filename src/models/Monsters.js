"use strict";
exports.__esModule = true;
exports.Monsters = void 0;
var Monsters = /** @class */ (function () {
    function Monsters(pname) {
        this.defense = 50;
        this.nbrAttack = 35;
        this.nbrLive = 100;
        this.selDefense = 0;
        this.name = pname;
    }
    Monsters.prototype.Attack = function () {
        return this.nbrAttack;
    };
    Monsters.prototype.Resurrect = function () {
        this.nbrLive = 100;
        return "You are dead !!!";
    };
    Monsters.prototype.MyDefense = function (pNumber) {
        if (pNumber < 5)
            this.selDefense = 0;
        else
            this.selDefense = 1;
        return this.selDefense;
    };
    Monsters.prototype.attackMe = function (pNumber) {
        if (this.selDefense == 1)
            pNumber = pNumber / 2;
        this.nbrLive = this.nbrLive - pNumber;
        if (this.nbrLive <= 0) {
            this.Resurrect();
            return "I resurrect you !!!";
        }
        return "You still have " + this.nbrLive.toString();
    };
    return Monsters;
}());
exports.Monsters = Monsters;
