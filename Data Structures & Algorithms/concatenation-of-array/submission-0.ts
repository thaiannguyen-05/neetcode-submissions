class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        const nn = 2 * n;
        const ans: number[] = [];
        ans.splice(0, n, ...nums);

        for(let i = 0 ; i < n ; i++) {
            ans[nn - n + i] = nums[i];
        }


        return ans;
    }
}
