function splitAndAdd(str) {
  let string = String(str);
  let number = string.split('').map(Number);
  let result = 0;

  let total = number.reduce(function(sum, element){
    return sum + element;
  }, 0);
  if (String(total).length < 2) {
    result = total;
  } else {
    let string = String(total)
    let number = string.split('').map(Number);
    let totalsecond = number.reduce(function(sum, element){
      return sum + element;
    }, total);
    result = totalsecond;
  }
  console.log(result);
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
splitAndAdd(test);
console.log(test2);
splitAndAdd(test2);
console.log(test3);
splitAndAdd(test3);
console.log(test4);
splitAndAdd(test4);
console.log(test5);
splitAndAdd(test5);
console.log(test6);
splitAndAdd(test6);
console.log(test7);
splitAndAdd(test7);
