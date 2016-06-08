/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };

  function load(newTotal){
    if(typeof(newTotal)=== 'number'){ //typeOf operator to find type of Javascript data type
      total = newTotal;
      return total;
    }else{
      return "enter a number";
    }
  }

  function getTotal(){
    return total;
  }

  function add(number){
    if(typeof(number) === 'number'){
      total += number;
    }else{
      return "enter a number";
    }
  }

  function subtract(number){
    if(typeof(number)=== 'number'){
      total -= number;
    }else{
      return "enter a number";
    }
  }

  function multiply(number){
    if(typeof(number)=== 'number'){
      total *= number;
    }else{
      return 'enter a number';
    }
  }

  function divide(number){
    if(typeof(number) === 'number'){
      total /= number;
    }else{
      return 'enter a number';
    }
  }

  function recallMemory(){
    return memory;
  }

  function saveMemory(){
    memory = total;
  }

  function clearMemory(){
    memory = 0;
  }


  return calculator;
}

