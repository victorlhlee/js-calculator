/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

  function calculatorModule(){

    //private variables can only be accessed by private functions and priviledged methods
    var memory = 0;
    var total = 0;

    var calculator = {
      load: _load,
      getTotal : _getTotal,
      add: _add,
      subtract: _subtract,
      multiply: _multiply,
      divide: _divide,
      recallMemory: _recallMemory,
      saveMemory: _saveMemory,
      clearMemory: _clearMemory,
    };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  
    function _load(newTotal){
      if(typeof (newTotal) === 'number'){ //typeof operator returns a string indicating the type of the unevaluated operand
        total = newTotal;
        return total;
      } else {
        return 'digits yo!';
      }
    }


  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal(){
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  
  function _add(number){
    if(typeof (number) === 'number'){
      total += number;
    }else{
      return 'digits yo!';
    }
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function _subtract(number){
    if(typeof (number) === 'number'){
      total -= number;
    }else{
      return 'digits yo?';
    }
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function _multiply(number){
    if(typeof (number) === 'number'){
      total *= number;
    }else{
      return 'digits yo!';
    }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   function _divide(number){
    if(typeof (number) === 'number'){
      total /= number;
    }else{
      return 'digits yo!';
    }
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   function _recallMemory(){
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
  
  function _saveMemory(){
    memory = total;
  }


  /**
   * Clear the value stored at `memory`
   */
  
  function _clearMemory(){
    memory = 0;
  }

  /**
   * Validation
   */
   return calculator;
}