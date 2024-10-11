const mybutton = document.getElementById("mybtn");
const label1 = document.getElementById("lb1");
const label2 = document.getElementById("lb2");
const label3 = document.getElementById("lb3");
const label4 = document.getElementById("lb4");
const label5 = document.getElementById("lb5");
const label6 = document.getElementById("lb6");

let min = 1;
let max = 6;
let randomNum1, randomNum2, randomNum3, randomNum4, randomNum5, randomNum6;

mybutton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    randomNum5 = Math.floor(Math.random() * max) + min;
    randomNum6 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    label4.textContent = randomNum4;
    label5.textContent = randomNum5;
    label6.textContent = randomNum6;

}