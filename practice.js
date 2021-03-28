function LetterCountI(str) {
  var maxCount = 0;
  var word = '-1';

  //split string into words based on spaces and count repeated characters
  str.toLowerCase().split(" ").forEach(function(currentWord){
      var hash = {};

      //split word into characters and increment a hash map for repeated values
      currentWord.split('').forEach(function(letter){
          if (hash.hasOwnProperty(letter)) {
              hash[letter]++;
          } else {
              hash[letter] = 1;
          }
      });

      //covert the hash map to an array of character counts
      var characterCounts = Object.keys(hash).map(function(key){ return hash[key]; });

      //find the maximum value in the squashed array
      var currentMaxRepeatedCount = Math.max.apply(null, characterCounts);

      //if the current word has a higher repeat count than previous max, replace it
      if (currentMaxRepeatedCount > maxCount) {
          maxCount = currentMaxRepeatedCount;
          word = currentWord;
      }
  });

  return word;
}
