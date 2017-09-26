(function(){

  function cherokeeHare (startingPopulation, birthRate, numOfWeeks){

  //runs for loop for amount of weeks to increment population
  //parseInt so that only whole numbers are displayed
  for (let i = 0; i < numOfWeeks; i++){
    startingPopulation = parseInt(startingPopulation + (startingPopulation * birthRate));
  }

    return startingPopulation;

  }
 
  module.exports = cherokeeHare;
})()
