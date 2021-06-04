function getPrime(number) {
  let primes = [];
  let result = 0;
  let i,j;
  if (number < 3) return 0;
  let value = number - 1;

  for (i = 2; i <= value; i++)
    primes[i] = true;
  for(i=2; i<=Math.sqrt(value); i++){
    if(primes[i] === true){
      for(j = i*2; j<=value; j+=i)
        primes[j] = false;
    }
  }
  for(i=2; i<=value; i++){
    if(primes[i] === true){
      result++;
    }
  }
  return result
}
console.log("素数の数をカウント")
console.log("2未満までの内、素数は" +getPrime(2) + "個")
console.log("10未満までの内、素数は" +getPrime(10) + "個")
console.log("36未満までの内、素数は" +getPrime(36) + "個")
console.log("89未満までの内、素数は" +getPrime(89) + "個")
console.log("100未満までの内、素数は" +getPrime(100) + "個")
console.log("500未満までの内、素数は" +getPrime(500) + "個")
console.log("800未満までの内、素数は" +getPrime(800) + "個")
console.log("1000未満までの内、素数は" +getPrime(1000) + "個")
