function starRating(str) {
  var rating = parseFloat(str);
  var result = "";
  var starCount = 0;

  while (starCount < 5) {
    if (rating >= 1) {
      result += "★ ";
      rating -= 1;
    }
    else if (rating > 0) {
      if (rating + 0.25 >= 1) {
        result += "★ ";
      }
      else if (rating + 0.25 >= 0.5) {
        result += "☆ ";
      }
      else {
        result += "* ";
      }
      rating -= rating;
    }
    else {
      result += "* "
    }
    starCount++
  }
  console.log(result);
}

// 星で出力する元のデータ
var test = "2.36";
// 出力内容
console.log("評価を表示");
console.log(test);
console.log(starRating(test));
