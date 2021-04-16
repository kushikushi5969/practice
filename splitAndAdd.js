function splitAndAdd(str) {
  let string = String(str);
  let number = string.split('').map(Number);
  let result = 0;
  let total = 0;

  let add = number.reduce(function(sum, element){
    return sum + element;
  }, 0);
  result = add;
  total = add;

  console.log(String(total) + " =total2");
  console.log(String(result) + " =result2");
  for (var i = 1; i < String(total).length; i++) {
    // if (String(total).length < 2) {
    //   console.log(result + "if文");
    // } else {
    //   let string = String(result)
    //   let number = string.split('').map(Number);
    //   let total = number.reduce(function(sum, element){
    //     return sum + element;
    //   }, result);
    //   result = total;
    // }
    let string = String(total);
    let number = string.split('').map(Number);
    let add = number.reduce(function(sum, element){
      return sum + element;
    }, result);
    total = add;
    result = add;
    console.log(String(total) + " =total2");
    console.log(String(result) + " =result2");
  }
  console.log(String(result));

  // for (var i = 1; i < String(str).length; i++) {
  //   let string = String(str);
  //   let number = string.split('').map(Number);
  //   let total = number.reduce(function(sum, element){
  //     return sum + element;
  //   }, result);
  //   result += total;
  // }
  // console.log(result);

  // if (String(total).length < 2) {
  //   console.log(result);
  // } else {
  //   let string = String(result)
  //   let number = string.split('').map(Number);
  //   let total = number.reduce(function(sum, element){
  //     return sum + element;
  //   }, result);
  //   result = total;
  // }
  // console.log(String(result));
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
