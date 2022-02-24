import {IPersonnage} from './IPersonnage'


export class Heros implements IPersonnage
{
    name: string;
    defense: number = 55;
    nbrAttack: number = 30;
    nbrLive: number = 100;
    selDefense: number =0;

    constructor(pname:string)
    {
        this.name = pname;
    }
    Attack()
    {
        return this.nbrAttack;
    }
    Resurrect()
    {
        this.nbrLive = 100;
        return "You are dead"
    }
    MyDefense(pNumber : number)
    {
        if (pNumber < 5) this.selDefense = 0
        else this.selDefense = 1
console.log("DICEGAMES IS " +pNumber)
        return this.selDefense
    }
    attackMe(pNumber : number)
    {
        let kravmaga :string ="";

        if(this.selDefense == 1)
        {
            pNumber = pNumber / 2;
            kravmaga = "Good Defense, "
        }
        this.nbrLive = this.nbrLive - pNumber;
        
    
        if(this.nbrLive <= 0)
        {
            this.Resurrect();
            return "I resurect you !!!"
        }
        else return kravmaga + "You still have " + this.nbrLive.toString() + "your attack is " + pNumber;
    }
    
}