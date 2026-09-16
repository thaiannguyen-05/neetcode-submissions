class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;

        const prefix = Array(n + 1).fill(1);
        const suffix = Array(n + 1).fill(1);

        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] * nums[i];
        }

        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i];
        }

        const ans: number[] = [];

        for (let i = 0; i < n; i++) {
            ans.push(prefix[i] * suffix[i + 1]);
        }

        return ans;

    }
}