(function(){

  function findingPalindromes(word){
    //takes word, splits it, reverses it, joins it
    let wordSplit = word.split("");
    let reversedWord = wordSplit.reverse("");
    let joinWord = reversedWord.join("");

    //compared reversed word to original word
    if (joinWord === word){
      return true;
    }
    else{
      return false;
    }
  }

  module.exports = findingPalindromes;
 
})()
