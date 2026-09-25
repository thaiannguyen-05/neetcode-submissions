class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            ']': '[',
            ')' : '(',
            '}': '{'
        };

        const ans = [];

        for(const char of s) {
            if(char in map) {
                const current = ans.pop();
                if(current !== map[char]) return false;
            } else {
                ans.push(char);
            }
        }

        return !ans.length;


    }
}
