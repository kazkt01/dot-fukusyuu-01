"use strict";

{
  let a = Number(prompt("数値を入力してください"));
  let b = 20;

  function funcA(a, b) {
    if (b <= 20) {
      return a + b;
    } else {
      return a * b;
    }
  }

  const result = funcA(a, b);

  console.log(result);
}
