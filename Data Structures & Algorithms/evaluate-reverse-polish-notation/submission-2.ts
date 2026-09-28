class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isNumber(value: string): boolean {
        return /^-?\d+$/.test(value);
    }



    evalRPN(tokens: string[]): number {
        let arr: number[] = [];

        for (const token of tokens) {
            if (this.isNumber(token)) {
                arr.push(Number(token));
                continue;
            }

            const b = arr.pop();
            const a = arr.pop();

            switch (token) {
                case '+': {
                    arr.push(a + b);
                    break;
                }
                case '-': {
                    arr.push(a - b);
                    break;
                }
                case '*': {
                    arr.push(a * b);
                    break;
                }
                case '/': {
                    arr.push(Math.trunc(a / b));
                    break;
                }
            }
        }

        return arr[arr.length - 1];
    }
}
