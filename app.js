"use strict";
// これで厳格なルール設定ができる？

// １、アラート
// alert(100);

// ２、コンソール
// console.log(100);

// 3、数値を表現してみよう
/*
console.log(100);
console.log(-10);
console.log(2.5);
//
console.log(1.2e4); //e←10の4乗をかけたもの
console.log(1.2 - 5); //e←10のマイナス５乗かけたものの表現
*/

//４、コメントについて
/**/
// ↑だと複数ぎょう
// ←１行とのこと
// ＠taguchi ←実務ではこんな感じでコメントを残している？

// 5、数値の演算
/*
console.log(10 + 3); //13　　足し算
console.log(10 - 3); //7　　引き算
console.log(10 * 3); //30　　掛け算
console.log(10 ** 3); //1000　べき乗
console.log(10 / 3); // 3.3333....　割り算 ←最後５になっているがこれは近似値になってしまうとのこと
console.log(10 % 3); //１　　あまりの計算
//
console.log(10 + 2 * 3); //16
console.log((10 + 2) * 3); //36  //+を優先させたい場合は括弧で処理
*/

// ６、定数を使ってみよう
// console.log(150 * 120 * 1.1);
// console.log(150 * 130 * 1.1);
// console.log(150 * 140 * 1.1);

/*
const price = 150; //定数に値を入れることを代入すると呼ぶ
const first = useContext(second) rate = 1.1; //イコールのことを代入演算子という
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);
*/

// 7、変数を使ってみよう
// constで定数は、その後のコード値を再代入しては、いけない
// 変数を使いたい場合は、letで定義しよう　letの場合は、
/*
let price; //letだとconstと違って値を代入しなくても後で代入できるとのこと
const rate = 1.1;
price = 150;

console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);
*/

// ８、定数と変数の違いを理解しよう
// 定数や変数に対して直接代入することリテラル（文字通りの）と呼ぶ

// 基本的には定数（const）でどうしても変数を使わないといけない場合は変数（let）でという考えかたで
// 記述しないと変数がどこで変わったかみたいなのがわからなくなる可能性が高いので危険

// ９、変数に値を再代入しよう
/*
let price;
const rate = 1.1;
price = 150;

console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

price = price + 1; //現在のpriceに対して+1という意味
price += 1; //これも上記と同じ意味になる
price *= 1; //掛け算でもイコールの前に*的な表記が使える
price++; //単に1を足して再代入
price--; //単に1を足して再代入
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);
*/

// 10、文字列を表現しよう
/*
console.log("It's  a pen"); //シングルクオーテーションでくくっている場合は、バックスラッシュが必要なときがある
console.log("It's \na \npen"); //  \nを使うことで改行をすることができる<br/>タグみたいに
*/

// 11、文字列を操作してみよう
// My name is Taro Yamada, call me Taro!
/*
const fname = "Taro";
const lname = "Yamada";
console.log("My name is " + fname + "" + lname + ",call me" + fname + "!");
// テンプレートリテラルでの記述方法　←これ結構今までに見てきたAstroのブログ構築でも
console.log(`My name is ${fname} ${lname},call me ${fname} `);
*/

//　12、数値か文字列かを意識しておこう
/*
console.log(50 + "20"); //　この場合は、計算されず連結されて文字列の2050になる
const n = prompt("Any numver?"); //これめっちゃおもろいpromptは、使ったことなかった
console.log(n + 10); //文字列の連結として機能してしまっている。基本promptで入力された値は、文字列として認識されるから
// これを回避するには？
console.log(Number(n) + 10); //Number(n)とすることで数値と認識できるみたいだTsみたいだねこれ
*/

////////////////////////// ここからがかなり重要なポイント//////////////////
/////////////////////////////////////////////////////////////////////////////

// 13、ifで分岐してみよう

/*
比較演算子一覧

> ~より大きい
<　~より小さい
>=　~以上
<=  ~以下
=== ~と等しい
!=== ~と等しくない

if (score >= 90) {
  console.log("A!");
} 

*/

//　14、　if...else...で条件分岐をしてみよう
/*
const score = Number(prompt("Score?")); //この段階で直接Numberで数値に変換
if (score >= 90) {
  alert("A!");
} else {
  alert("Not A!");
}
*/

// 15、 else if ... で条件をつなげてみよう

// const score = Number(prompt("Score?"));

// if (score >= 90) {
//   alert("A!");
// } else if (score >= 70) {
//   alert("B!");
// } else {
//   alert("C!");
// }
// 自習
// const hoge = Number(prompt("number ?"));
// if (hoge >= 80) {
//   alert("合格!");
// } else if (hoge >= 50) {
//   alert("頑張ろう！");
// } else {
//   alert("1からやり直そう");
// }

// 16、switchで条件分岐をしてみよう ←これあんまり使ったことない
// ifでも表現できるが取りうる値が決まっている場合は、switchの方がスッキリ描ける場合がある
// とのこと

/*
const color = prompt("Color?");
switch (color) {
  case "red":
    alert("Stop!");
    break;
  case "yellow":
    alert("Slow Down");
    break;
  case "blue":
  case "green": //case二つでcase1もしくは、case2の場合的なことができる
    alert("Go!");
    break;
  default: // ←上記のどれにも当てはまらない場合
    alert("Wrong Color!");
}
 */

// 17、forの仕組みを理解しよう　反復処理について
/*
//letを使っている理由がポイントiに1を足して再代入するのでletにしている
for (let i = 0; i < 3; i++) {
  alert("Hello");
}
*/

// 18、forで反復処理をしてみよう

// for (let i = 0; i < 10; i++) {
//   //   alert("Hellow");
//   console.log(`${i}:Hello`);
// }
/*
//　Q, i の略は？　A,indexもしくはiteratorの略と解釈していることが多いように思います
for (let i = 1; i <= 10; i++) {
  //   alert("Hellow");
  console.log(`${i}:Hello`);
}
  */

// 19、forの中でforをつかてみよう

// amount ←数量

const rate = 1.1;

for (let price = 150; price <= 160; price++) {
  console.log(`Price: ${price}`);
  for (let amount = 120; amount <= 140; amount += 10)
    console.log(price * amount * rate);
}
