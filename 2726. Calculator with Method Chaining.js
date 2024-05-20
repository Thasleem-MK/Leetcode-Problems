class Calculator {

    constructor(value) {
        this.initialValue = value
    }
    add(value) {
        this.initialValue += value;
        return this;
    }
    subtract(value) {
        this.initialValue -= value;
        return this;
    }
    multiply(value) {
        this.initialValue *= value;
        return this;
    }
    divide(value) {
        if (value == 0) {
            throw new Error("Division by zero is not allowed")
        }
        this.initialValue /= value;
        return this;
    }
    power(value) {
        this.initialValue **= value;
        return this;
    }
    getResult() {
        return this.initialValue
    }
}

const Obj = new Calculator(10);
const result = Obj.add(5).subtract(7).getResult();
console.log(result);