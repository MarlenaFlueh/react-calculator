import math from "mathjs";

class CalculatorLogic {
  result = "";
  cache = [];
  currentValue = "";

  inputValue(number) {
    if (this.result) {
      this.clear();
    }

    this.currentValue += number;
  }

  operatorFunction(operator) {
    this.cache.push(this.currentValue);
    this.cache.push(operator);
    this.currentValue = "";
  }

  add() {
    this.operatorFunction("+");
  }

  minus() {
    this.operatorFunction("-");
  }

  multiply() {
    this.operatorFunction("*");
  }

  divide() {
    this.operatorFunction("/");
  }

  equal() {
    this.cache.push(this.currentValue);
    const tempResult = this.cache.join(" ");
    this.result = math.eval(tempResult);

    this.currentValue = "";
  }

  clear() {
    this.currentValue = "";
    this.result = "";
    this.cache = [];
  }
}

export default new CalculatorLogic();