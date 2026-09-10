class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const normalString = s.split(/[^a-zA-Z0-9]+/).join("").toLowerCase();

    let right = normalString.length - 1;

    for (let left = 0; left <= right; left++) {
        if (normalString[left] !== normalString[right]) return false;
        --right;
    }

    return true;
    }
}
