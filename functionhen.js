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
