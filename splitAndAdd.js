function recursiveDigitsAdded(str) {
  let total = 0;
  let value = str.toString().split("");
  let dig_list = value.map(Number);
  let sum = dig_list.reduce(function(a,b) {
    return a + b;
  }, 0);
  let result = sum;

  function splitAndAdd(result, total) {
    let value = result.toString().split("");
    let dig_list = value.map(Number);
    let sum = dig_list.reduce(function(c, d) {
      return c + d;
    });
    if (sum < 10) {
      total += sum;
      console.log(total.toString());
    } else {
      total += sum;
      return splitAndAdd(sum, total);
    }
  }

  if (result < 10) {
    result + total;
    console.log(result.toString());
  } else {
    total += result;
    return splitAndAdd(result, total);
  }

}

// 元のデータ
var test = 5;
var test2 = 12;
var test3 = 98;
var test4 = 3528;
var test5 = 99999999999884;
var test6 = 45622943;
var test7 = 5462;

// 出力内容
console.log("文字列反転");
console.log(test);
recursiveDigitsAdded(test);
// console.log(test2);
// recursiveDigitsAdded(test2);
// console.log(test3);
// recursiveDigitsAdded(test3);
console.log(test4);
recursiveDigitsAdded(test4);
console.log(test5);
recursiveDigitsAdded(test5);
// console.log(test6);
// recursiveDigitsAdded(test6);
// console.log(test7);
// recursiveDigitsAdded(test7);
