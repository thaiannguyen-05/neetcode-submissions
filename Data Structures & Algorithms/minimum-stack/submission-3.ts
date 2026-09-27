class MinStack {
    private stack: number[];
    private minVal: number[];
    constructor() {
        this.stack = [];
        this.minVal = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (!this.minVal.length) {
            this.minVal.push(val);
        } else if (this.minVal[this.minVal.length - 1] >= val) {
            this.minVal.push(val);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.stack.pop();
        if (val === this.minVal[this.minVal.length - 1]) {
            this.minVal.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minVal[this.minVal.length - 1];
    }
}
