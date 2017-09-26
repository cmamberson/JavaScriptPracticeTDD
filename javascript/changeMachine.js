(function(){

function changeMachine(amount){
  var bills =[];

  if(amount >= 20){
    //take index 0, divides by 20 and drops the decimal with parseInt
        bills[0] = parseInt(amount/20);
    //updates the amount to be the remainder
        amount = amount % 20;
    
  }

  if(amount >= 10){
    
        bills[1] =parseInt(amount/10);
        amount = amount % 10;
    
  }

  if(amount >= 5){
    
        bills[2] = parseInt(amount/5);
        amount = amount % 5;
    
  }

  if(amount >= 1){
    
        bills[3] =parseInt(amount/1);
        amount = amount % 1;
    
  }

      return bills;
}
  
module.exports = changeMachine;

})()
