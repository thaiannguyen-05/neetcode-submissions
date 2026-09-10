class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const map = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    const arr = [];
    for (const char of s) {
        if (char in map) {
            const currPop = arr.pop();
            if (currPop !== map[char]) {
                return false;
            }
        }
        else {
            arr.push(char);
        }
    }
    return !arr.length;
}
}
