class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        if(s.length < 1) s;

        let i = 0;
        let j = s.length - 1;
        while(i < j) {
            const swapVal = s[j];
            s[j] = s[i];
            s[i] = swapVal;

            ++i;
            --j;
        }
    }
}
