class MinStack {
    constructor() {
        this.minStack = [];
        this.history = [];
        this.minVal = Number.MAX_SAFE_INTEGER;
    }
    push(value) {
        if (value <= this.minVal) {
            this.history.push(this.minVal);
            this.minVal = value;
        }
        this.minStack.push(value);
    }
    pop() {
        if (this.minStack[this.minStack.length - 1] === this.minVal) {
            this.minVal = this.history.pop();
        }
        this.minStack.pop();
    }
    top() {
        return this.minStack[this.minStack.length - 1];
    }
    getMin() {
        return this.minVal;
    }
}