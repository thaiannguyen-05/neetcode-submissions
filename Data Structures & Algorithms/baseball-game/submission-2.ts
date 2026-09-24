class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (const operation of operations) {
            if (operation === "C") {
                stack.pop();

            } else if (operation === "D") {
                const last = stack[stack.length - 1];
                stack.push(last * 2);

            } else if (operation === "+") {
                const last = stack[stack.length - 1];
                const secondLast = stack[stack.length - 2];

                stack.push(last + secondLast);

            } else {
                stack.push(Number(operation));
            }
        }

        return stack.reduce((sum, score) => sum + score, 0);
    }
}