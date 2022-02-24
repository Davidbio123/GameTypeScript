export class Heros {
    constructor(pname) {
        this.defense = 55;
        this.nbrAttack = 30;
        this.nbrLive = 100;
        this.selDefense = 0;
        this.name = pname;
    }
    Attack() {
        return this.nbrAttack;
    }
    Resurrect() {
        this.nbrLive = 100;
        return "You are dead";
    }
    MyDefense(pNumber) {
        if (pNumber < 5)
            this.selDefense = 0;
        else
            this.selDefense = 1;
        console.log("DICEGAMES IS " + pNumber);
        return this.selDefense;
    }
    attackMe(pNumber) {
        let kravmaga = "";
        if (this.selDefense == 1) {
            pNumber = pNumber / 2;
            kravmaga = "Good Defense, ";
        }
        this.nbrLive = this.nbrLive - pNumber;
        if (this.nbrLive <= 0) {
            this.Resurrect();
            return "I resurect you !!!";
        }
        else
            return kravmaga + "You still have " + this.nbrLive.toString() + "your attack is " + pNumber;
    }
}
