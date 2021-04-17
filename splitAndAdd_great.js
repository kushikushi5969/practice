function splitAndAddHelper(digits, total) {
  if (digits < 10) {
    let result = digits + total;
    console.log(result.toString());
  } else {
    return splitAndAddHelper(Math.floor(digits/10), (digits % 10) + total)
  }
}

function splitAndAdd(digits) {
  return splitAndAddHelper(digits, 0);
}

// 10進数
// 898 % 10 = 8
// 898 / 10 = 89
// function splitAndAddHelper(898, 0)
// function splitAndAddHelper(89, 8)
// function splitAndAddHelper(8, 17)
// function splitAndAddHelper(8, 17)
// 8 + 17 = 25

// 元のデータ
var test = 5;
var test2 = 12;
var test3 = 98;
var test4 = 3528;
var test7 = 5462;

// 出力内容
console.log("数列を分解して加算");
console.log(test);
splitAndAdd(test);
console.log(test2);
splitAndAdd(test2);
console.log(test3);
splitAndAdd(test3);
console.log(test4);
splitAndAdd(test4);
console.log(test7);
splitAndAdd(test7);
