function primeNumber(number) {
  if (number === 2) return true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log("素数判別");
console.log("1は" +primeNumber(1));
console.log("2は" +primeNumber(2));
console.log("3は" +primeNumber(3));
console.log("4は" +primeNumber(4));
console.log("5は" +primeNumber(5));
console.log("6は" +primeNumber(6));
console.log("7は" +primeNumber(7));
console.log("8は" +primeNumber(8));
console.log("9は" +primeNumber(9));
console.log("10は" +primeNumber(10));
console.log("11は" +primeNumber(11));
console.log("12は" +primeNumber(12));
console.log("13は" +primeNumber(13));



