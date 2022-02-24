import { DiceGames } from './assets/DiceGames';
import { Heros } from './models/Heros';
import { Monsters } from './models/Monsters';
let Gaetan = new Monsters("Gaetan");
let David = new Heros("David");
console.log("merde");
console.log(DiceGames());
console.log(DiceGames());
/////////////////////////
const btnAdd = document.querySelector("#add");
const btnRemove = document.querySelector("#removeone");
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
        warn.innerText = num.toString();
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
