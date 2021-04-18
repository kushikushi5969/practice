function middleSubstring(str) {
  if (str.length <= 2) return str[0];

  let back_textCount = Math.floor(str.length / 2);
  let cut_textCount = Math.ceil(back_textCount / 2);

  let cut_text = str.substring(cut_textCount);
  return cut_text.substring(0, back_textCount);
}
console.log("A→" +middleSubstring("A"))
console.log("AB→" +middleSubstring("AB"))
console.log("ABC→" +middleSubstring("ABC"))
console.log("I am a perfect human!→" +middleSubstring("I am a perfect human!"))
console.log("We try to escape from prison called Impel Down.→" +middleSubstring("We try to escape from prison called Impel Down."))
