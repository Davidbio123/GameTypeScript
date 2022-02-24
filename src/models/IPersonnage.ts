export interface IPersonnage
{
    name : string
    defense  : number
    nbrAttack : number
    nbrLive : number
    selDefense : number

    Attack () :number;
    Resurrect():string;
    MyDefense(pNumber : number):number;
    attackMe(pNumber : number):string;

}