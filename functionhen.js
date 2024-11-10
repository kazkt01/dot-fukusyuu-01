"use strict";

// 関数編　　//前12講座
/*
let a = prompt("何か入力してみてください");

let n; //代入せず宣言だけ

if (Number(a) <= 70) {
  n = "こんにちは";
} else {
  n = "誰ですか？";
}

document.getElementById("fire").innerHTML = n;

*/

// ↑遊び

////////////////////////////////////////////////////

//  #01 関数の仕組みを理解しよう  ←明日は、ここから
// {
//   // 自作
//   let e = Number(prompt("入力してください"));
//   const func1 = () => {
//     return e + 20;
//   };
//   document.getElementById("fire").innerHTML = func1();
// }

// num ←仮引数
//letで変数を定義する必要がない←ここ注意点
// function double(num) {
//   return num * 2;
// }

//  #02 関数を作ってみよう

// console.log(double(10)); //実引数
// console.log(double(4) * 3);

// let num = Number(prompt("number?"));
// function func1(num) {
//   return num * 20 + 10;
// }
// document.getElementById("fire").innerHTML = func1(num);

//  #03 処理の流れを確認しよう　←ここが関数の理解の肝

// 自作の関数とIf文の組み合わせ

// let num = Number(prompt("数値を入力してください"));
// let result;
// function funcA(num) {
//   return num * 0.8; // ←掛け算
// }
// const resultValue = funcA(num); // ここに格納

// console.log(resultValue);
// if (resultValue >= 90) {
//   result = `結果は、${resultValue}で合格です `;
// } else if (resultValue >= 70) {
//   result = `結果は、${resultValue}です、頑張りましょう `;
// } else {
//   result = `結果は、${resultValue}です、もっと頑張りましょう `;
// }

// document.getElementById("fire").innerHTML = result;

let num = Number(prompt("number?")); // 入力された値を検知
let resultA;

function funcA(num) {
  //promptで入力されたnumを使用し計算する関数
  return num + 1;
}

const resultB = funcA(num); //　ここに格納

console.log(resultB); // 確認

if (resultB >= 50) {
  resultA = `${resultB}で合格です`;
} else {
  resultA = `${resultB}です.頑張ってください`;
}

document.getElementById("fire").innerHTML = resultA;

/*           memo
> ~より大きい
> <　~より小さい
> =　~以上
> <= ~以下
> === ~と等しい
> !=== ~と等しくない
//////////////////////////
||　　←　もしくは
&&←尚且つ
! は、では、なかったらになる

*/
