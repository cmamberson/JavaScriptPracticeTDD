(function(){

    //Write a function called greaterThan that takes two parameters and returns true if the second parameter is greater than the first. Otherwise the function should return false.

    function greaterThan(num1, num2){
        if (num2>num1){
            return true;
        }
        else {
            return false;
        }
  }

  module.exports = greaterThan;
})();
