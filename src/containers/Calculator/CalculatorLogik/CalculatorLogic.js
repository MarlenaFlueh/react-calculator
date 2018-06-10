let currentValue = "";
let result = "";
let history = [];
let cache = [];

class CalculatorLogic {
  constructor() {
    currentValue = "";
    result = "";
    history = [];
    cache = [];
  }

  clear() {
    currentValue = "";
    result = "";
    history = [];
    cache = [];
  }

  inputValue(number) {
    currentValue += number;
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

  getHistory() {
    return history;
  }
}

export default CalculatorLogic;
