
import './style.css'

// const button = document.querySelector("button");
// const input = document.querySelector("input"); // input要素を取得
// const shit = document.querySelector("h1");
// console.log(shit)
// console.log(input);
// button.addEventListener("click", updateName);

// function updateName() {
//   const name = input.value; // inputに入力された文字列を取得
//   if (name) {
//     button.textContent = `Player 1: ${name}`;
//   } else {
//     alert("名前を入力してください");
//   }
// }

const plus = document.querySelector("button");
const total = document.querySelector("h2");
const number_1 = document.querySelector("#number-1");
const number_2 = document.querySelector("#number-2");
plus.addEventListener("click", rabin);

function rabin(){
  const number1 = number_1.value;
  const number2 = number_2.value;
  const sum = Number(number1) + Number(number2);
  
  if (isNaN(sum)){
    alert("fuck u bitch");
  } else {
    total.textContent = `${sum}`;
  }
};
