"use strict";

// 関数編　　//前12講座

let a = prompt("何か入力してみてください");

let n; //代入せず宣言だけ

if (Number(a) <= 70) {
  n = "こんにちは";
} else {
  n = "誰ですか？";
}

document.getElementById("fire").innerHTML = n;

// ↑遊び

//  #01 関数の仕組みを理解しよう  ←明日は、ここから
