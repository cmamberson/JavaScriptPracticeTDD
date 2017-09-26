(function(){
  

function hangManLite(word, letter){


//checks if letter is in the word
  if (word.includes(letter)){

  //splits word at the defined letter. takes the length of that minus 1 to determine times it is in the word
      var numOfTimes = word.split(letter).length - 1;
      return numOfTimes;
  }
  //if letter isn't included, return 0
  else{
    numOfTimes = 0;
    return numOfTimes;
  }
}

module.exports = hangManLite;


})()
