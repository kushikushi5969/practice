function splitAndAdd(str) {
  if (parseInt(str) < 10) {
    console.log(str.toString());
  } else {
    let sum = 0;
    for (var i = 0; i < String(str).length; i++){
      sum = sum + parseInt(String(str).substr(i, 1));
    }
    console.log(sum.toString());
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
