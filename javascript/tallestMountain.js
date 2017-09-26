(function(){

  function tallestMountain(mountains){
    //function to have .sort sort numbers from smallest to largest
    function sortNum (num1, num2){
      return num1 - num2;
    }
    //sorts array and applys function within the .sort
    mountains.sort(sortNum);

    //stores largest number in variable
    let result = mountains[mountains.length - 1];

    return result;

  }

  module.exports = tallestMountain;
 
})()
