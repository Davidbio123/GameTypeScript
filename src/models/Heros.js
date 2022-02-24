"use strict";
exports.__esModule = true;
exports.Heros = void 0;
var Heros = /** @class */ (function () {
    function Heros(pname) {
        this.defense = 55;
        this.nbrAttack = 30;
        this.nbrLive = 100;
        this.selDefense = 0;
        this.name = pname;
    }
    Heros.prototype.Attack = function () {
        return this.nbrAttack;
    };
    Heros.prototype.Resurrect = function () {
        this.nbrLive = 100;
        return "You are dead";
    };
    Heros.prototype.MyDefense = function (pNumber) {
        if (pNumber < 5)
            this.selDefense = 0;
        else
            this.selDefense = 1;
        return this.selDefense;
    };
    Heros.prototype.attackMe = function (pNumber) {
        if (this.selDefense == 1)
            pNumber = pNumber / 2;
        this.nbrLive = this.nbrLive - pNumber;
        if (this.nbrLive <= 0) {
            this.Resurrect();
            return "I resurect you !!!";
        }
        else
            return "You still have " + this.nbrLive.toString();
    };
    return Heros;
}());
exports.Heros = Heros;
