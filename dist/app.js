import { DiceGames } from './assets/DiceGames.js';
import { Heros } from './models/Heros.js';
import { Monsters } from './models/Monsters.js';
let Gaetan = new Monsters("Gaetan");
let David = new Heros("David");
console.log("merde");
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
David.MyDefense(DiceGames());
console.log(David.attackMe(Gaetan.Attack()));
console.log(David);
/////////////////////////
const btnAdd = document.querySelector("#add");
const btnRemove = document.querySelector("#removeone");
const cpt = document.querySelector("#compteur");
const warn = document.querySelector("#warning");
//ici le ! pour interdire le null
let num = 0;
// const increment : (e : string | number ) => void = (e : string | number ) =>
// {
//     let compteurSpan =<HTMLSpanElement>document.querySelector("#compteur")
//     compteurSpan.innerText = num.toString()
// }
// btnAdd.addEventListener("click",() =>
// {
//         warn.innerText=""
//         ++num
//     increment("e")
// })
// btnRemove.addEventListener("click",()=>
// {
//     if (num == 0)
//     {
//         warn.innerText="NON NON TOTO PAS DE - 0"
//         num = 0
//     }
//     else 
//     {
//         warn.innerText=""
//         --num
//     }
//     increment("e")
// })
function AddRemove(but) {
    if (but === document.querySelector("#add")) {
        ++num;
        cpt.innerText = num.toString();
        warn.innerText = "";
    }
    else {
        if (but === document.querySelector("#removeone")) {
            if (num === 0) {
                warn.innerText = "NON NON TOTO PAS DE - 0";
                num = 0;
            }
            else {
                warn.innerText = "";
                --num;
                cpt.innerText = num.toString();
            }
        }
    }
    return but;
}
btnAdd.addEventListener("click", () => {
    AddRemove(btnAdd);
});
btnRemove.addEventListener("click", () => {
    AddRemove(btnRemove);
});
/////////////////////////////////////////////////////////////////////////////////
function consoleSize(arg) {
    return arg;
}
const af = consoleSize(['3', 2]);
function gestUsers(arg) {
    return arg.id;
}
