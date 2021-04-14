function stringReverse(str) {
  console.log(str
    .split("")
    .reverse()
    .join(""))
}

// 元のデータ
var test = "Ocean";
var test2 = "test";
var test3 = "My name is kussy";
var test4 = "I am a software engineer";
// 出力内容
console.log("文字列反転");
console.log(test);
stringReverse(test);
console.log(test2);
stringReverse(test2);
console.log(test3);
stringReverse(test3);
console.log(test4);
stringReverse(test4);
