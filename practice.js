function LetterCountI(str) {

  // to LowerCase：呼び出す文字列を小文字に変換
  str.toLowerCase();

  var arr = str.split(" ");

  var count = 0;
  var word = "-1";

  // for文「while文」、++x：加算
  // i = 単語の数、つまりsplitした単語の数だけ以下の処理を実行する
  for (var i = 0; i < arr.length; i++) {
    // a = 単語の文字数、つまり単語内の文字の数だけ以下の処理を実行する
    for (var a = 0; a < arr[i].length; a++) {
      var countNew = 0; // カウントの再定義
      // b = 重複した文字、つまり単語内の文字aに対して重複があるだけ以下の処理を実行する
      for (var b = a + 1; b < arr[i].length; b++) {
        // 重複を発見次第、countNewにカウント
        if(arr[i][a] === arr[i][b])
            countNew += 1;
      }
      // 上記のfor文を繰り返し、countNewの値が0より大きい場合、countに定義。左記の処理を行った単語をwordに定義
      if (countNew > count) {
        count = countNew;
        word = arr[i];
      }
      // wordの値を返す
      return word;
    }
  }
}
