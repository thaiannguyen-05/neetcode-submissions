class MyStack {
    private queue: number[];
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[this.queue.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !this.queue.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
