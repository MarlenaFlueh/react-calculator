import math from "mathjs";

class CalculatorLogic {
  result = "";
  cache = [];
  currentValue = "";

  inputValue(number) {
    if (this.result) {
      this.result = "";
      this.currentValue = "";
      this.cache = [];
    }

    this.currentValue += number;
  }

  add() {
    this.cache.push(this.currentValue);
    this.cache.push("+");
    this.currentValue = "";
  }

  minus() {
    this.cache.push(this.currentValue);
    this.cache.push("-");
    this.currentValue = "";
  }

  multiply() {
    this.cache.push(this.currentValue);
    this.cache.push("*");
    this.currentValue = "";
  }

  divide() {
    this.cache.push(this.currentValue);
    this.cache.push("/");
    this.currentValue = "";
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

  getCache() {
    return this.cache.join();
  }

  getResult() {
    return this.result;
  }

  getCurrentValue() {
    return this.currentValue;
  }
}
export default new CalculatorLogic();
