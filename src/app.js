"use strict";
exports.__esModule = true;
var DiceGames_1 = require("./assets/DiceGames");
// import { Heros } from './models/Heros'
// import { Monsters } from './models/Monsters'
// let Gaetan = new Monsters("Gaetan");
// let David = new Heros("David");
console.log("merde");
console.log((0, DiceGames_1.DiceGames)());
// console.log(DiceGames());
/////////////////////////
var btnAdd = document.querySelector("#add");
var btnRemove = document.querySelector("#removeone");
var cpt = document.querySelector("#compteur");
var warn = document.querySelector("#warning");
//ici le ! pour interdire le null
var num = 0;
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
btnAdd.addEventListener("click", function () {
    AddRemove(btnAdd);
});
btnRemove.addEventListener("click", function () {
    AddRemove(btnRemove);
});
/////////////////////////////////////////////////////////////////////////////////
function consoleSize(arg) {
    return arg;
}
var af = consoleSize(['3', 2]);
function gestUsers(arg) {
    return arg.id;
}
