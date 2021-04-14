function Hint(str) {
  let array = str.split("");
  if (array.length < 6) {
    console.log("There is no Hint.");
  } else {
    let result = array.slice(-4);
    console.log("Hint is:" + result.join(""))
  }
}

// 元のデータ
var test = "Ocean";
var test2 = "test";
var test3 = "My name is kussy";
var test4 = "How about you?";
// 出力内容
console.log("末尾４文字のヒントを出力（６文字未満はヒント無し）");
console.log(test);
Hint(test);
console.log(test2);
Hint(test2);
console.log(test3);
Hint(test3);
console.log(test4);
Hint(test4);
