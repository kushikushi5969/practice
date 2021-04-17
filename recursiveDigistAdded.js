function recursiveDigitsAddedHelper(digits, total, finalTotal) {
  if (digits < 10) {
    total = digits + total;
    if (total < 10) {
      let result = total + finalTotal;
      console.log(result.toString());
    } else {
      return recursiveDigitsAddedHelper(total, 0, finalTotal + total);
    }
  } else {
    return recursiveDigitsAddedHelper(Math.floor(digits/10), (digits % 10) + total, finalTotal);
  }
}

function recursiveDigitsAdded(digits) {
  return recursiveDigitsAddedHelper(digits, 0, 0);
}

// 例え）3528
// 10進数で考える
// ①：3528 / 10 = 352 として、一の位を切り出す（floorで少数は切り捨て）→ digitsへ引き渡す
// ②：3528 % 10 = 8 切り出した数を加算していく → (digits % 10) + total
// ③：①〜②をdigitsが一桁になるまで繰り返す

// function recursiveDigitsAddedHelper(digits, total, finalTotal)
// function recursiveDigitsAddedHelper(3528, 0, 0)
// function recursiveDigitsAddedHelper(352, 8 {0 + 8}, 0)
// function recursiveDigitsAddedHelper(35, 10 {8 + 2}, 0)
// function recursiveDigitsAddedHelper(3*, 15 {10 + 5}, 0)
// digitsが一桁になったので・・・
// if文内の、total = digits + total(18 = 3 + 15)を実行
// しかし、totalは「18」と二桁なので再帰する必要がある
// よって、新たなdigitsとfinalTotalに「18」を引き渡す
// function recursiveDigitsAddedHelper(18, 0, 18)
// function recursiveDigitsAddedHelper(1*, 8 {0 + 8}, 18)
// digitsが一桁になったので・・・
// if文内の、total = digits + total(9 = 1 + 8)を実行
// totalも一桁になったので・・・
// result = total + finalTotal(27 = 9 + 18)を実行
// Q.E.D!!!!!!


// 元のデータ
var test = 5;
var test2 = 12;
var test3 = 98;
var test4 = 3528;
var test5 = 99999999999884;
var test6 = 45622943;
var test7 = 5462;

// 出力内容
console.log("数列を分解して加算");
console.log(test);
recursiveDigitsAdded(test);
console.log(test2);
recursiveDigitsAdded(test2);
console.log(test3);
recursiveDigitsAdded(test3);
console.log(test4);
recursiveDigitsAdded(test4);
console.log(test5);
recursiveDigitsAdded(test5);
console.log(test6);
recursiveDigitsAdded(test6);
console.log(test7);
recursiveDigitsAdded(test7);
