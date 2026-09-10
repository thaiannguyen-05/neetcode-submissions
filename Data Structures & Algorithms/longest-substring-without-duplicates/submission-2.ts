class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;

        for(let left = 0 ; left < s.length ; left++) {
            const set = new Set<string>();

            let right = left;
            while(!set.has(s[right]) && right < s.length) {
                set.add(s[right]);
                ++right;
            }
            maxLength = Math.max(maxLength, set.size)
        }

        return maxLength;
    }
}
