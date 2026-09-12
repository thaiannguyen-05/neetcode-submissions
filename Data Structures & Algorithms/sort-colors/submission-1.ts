class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const ans: number[] = [];

        for (const num of nums) {
            if (num === 0) ans.push(num);
        }

        for (const num of nums) {
            if (num === 1) ans.push(num);
        }

        for (const num of nums) {
            if (num === 2) ans.push(num);
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = ans[i];
        }
    }
}
