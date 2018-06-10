import math from "mathjs";

let currentValue = "";
let result = "";
let cache = [];

class CalculatorLogic {
  constructor() {
    currentValue = "";
    result = "";
    cache = [];
  }

  inputValue(number) {
    currentValue += number;
  }

  add() {
    cache.push(currentValue);
    cache.push("+");
    currentValue = "";
  }

  minus() {
    cache.push(currentValue);
    cache.push("-");
    currentValue = "";
  }

  equal() {
    cache.push(currentValue);
    const tempResult = cache.join(" ");
    result = math.eval(tempResult);

    currentValue = "";
  }

  clear() {
    currentValue = "";
    result = "";
    cache = [];
  }

  getCache() {
    return cache.join();
  }

  getResult() {
    return result;
  }

  getCurrentValue() {
    return currentValue;
  }
}

export default CalculatorLogic;
