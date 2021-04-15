function splitAndAdd(str) {
  // console.log(str
  //   .split("")
  //   .reverse()
  //   .join(""))

  let string = String(str);
  var N = string.split('').map(Number);

  let result = 0;
  // for文「while文」、++x：加算
  // i = 数字の数、つまりsplitした数字の数だけ以下の処理を実行する
  for (var i = 0; i < N.length; i++) {
    let total = N.reduce(function(sum, element){
      return sum + element;
    }, 0);
    result = total;
    // // a = 単語の文字数、つまり単語内の文字の数だけ以下の処理を実行する
    // for (var a = 0; a < arr[i].length; a++) {
    //   var countNew = 0; // カウントの再定義
    //   // b = 重複した文字、つまり単語内の文字aに対して重複があるだけ以下の処理を実行する
    //   for (var b = a + 1; b < arr[i].length; b++) {
    //     // 重複を発見次第、countNewにカウント
    //     if(arr[i][a] === arr[i][b])
    //         countNew += 1;
    //   }
    //   // 上記のfor文を繰り返し、countNewの値が0より大きい場合、countに定義。左記の処理を行った単語をwordに定義
    //   if (countNew > count) {
    //     count = countNew;
    //     word = arr[i];
    //   }
    //   // wordの値を返す
    //   return word;
    // }
  }
  console.log(result);
}

// 元のデータ
var test = 5;
var test2 = 14;
var test3 = 98;
var test4 = 5462;
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
