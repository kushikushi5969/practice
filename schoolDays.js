// 学校のある日は「true」、学校の無い日は「false」を返す
// 土日あるいは祝日は休み
function schoolDays(day, isHoliday) {
  if (day == "Sunday" || day == "Saturday" || isHoliday) return "休み";
  return "学校";
}
console.log("日曜日なので" + schoolDays("Sunday",false));
console.log("月曜日なので" + schoolDays("Monday",false));
console.log("火曜日なので" + schoolDays("Tuesday",false));
console.log("水曜日だけど祝日なので" + schoolDays("Wednesday",true));
console.log("木曜日なので" + schoolDays("Thursday",false));
console.log("金曜日だけど祝日なので" + schoolDays("Fridat",true));
console.log("土曜日なので" + schoolDays("Saturday", false));
