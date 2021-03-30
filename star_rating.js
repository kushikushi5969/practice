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
var test2 = "0.38";
var test3 = "4.95";
var test4 = "3.76";
// 出力内容
console.log("評価を表示");
console.log(test);
starRating(test);
console.log(test2);
starRating(test2);
console.log(test3);
starRating(test3);
console.log(test4);
starRating(test4);
