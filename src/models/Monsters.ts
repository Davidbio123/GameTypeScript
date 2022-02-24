import {IPersonnage} from './IPersonnage'


export class Monsters implements IPersonnage
{
    name: string;
    defense: number = 50;
    nbrAttack: number = 35;
    nbrLive: number = 100;
    selDefense: number = 0;

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
        return "You are dead !!!"
        
    }
    MyDefense(pNumber : number)
    {
        if (pNumber < 5) this.selDefense = 0
        else this.selDefense = 1
        return this.selDefense
    }
    attackMe(pNumber : number)
    {
        if(this.selDefense == 1) pNumber = pNumber / 2;
    
        this.nbrLive = this.nbrLive - pNumber;
    
        if(this.nbrLive <= 0)
         {
             this.Resurrect();
             return "I resurrect you !!!"
         }
        
        
        return "You still have " + this.nbrLive.toString();
    }
    
}