class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */

  isNumber(value: string): boolean {
    return /^-?\d+$/.test(value);
  }


  evalRPN(tokens: string[]): number {
    let stack: number[] = [];

    for (const token of tokens) {
      if (this.isNumber(token)) {
        stack.push(Number(token));
        continue;
      }

      const b = stack.pop()!;
      const a = stack.pop()!;

      switch (token) {
        case '+': {
          stack.push(a + b);
          break;
        }
        case '-': {
          stack.push(a - b);
          break;
        }
        case '*': {
          stack.push(a * b);
          break;
        }
        case '/': {
          stack.push(Math.trunc(a / b));
          break;
        }
      }
    }

    return stack[0];
  }
}
