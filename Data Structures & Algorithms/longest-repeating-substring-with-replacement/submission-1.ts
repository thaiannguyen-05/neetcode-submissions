class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Map<string , number>();
        let left = 0;
        let maxFrequent = 0;
        let result = 0;


        for(let right = 0 ; right < s.length ; right++) {
            const char = s[right];

            count.set(char, (count.get(char) ?? 0)  + 1);

            maxFrequent = Math.max(maxFrequent, count.get(char)!);

            while((right - left) + 1 - maxFrequent > k) {
                const char2 = s[left];
                count.set(char2, count.get(char2)! - 1);
                ++left;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
