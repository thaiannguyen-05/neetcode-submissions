class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let ans: number = 0;

        for (let i = 0; i < nums.length; i++) {
            let current = i;

            let sum = nums[i];
            ++current;
            if (sum === k) ++ans;
            while (current < nums.length) {
                sum += nums[current];
                if (sum === k) {
                    ++ans;
                }
                ++current;
            }
        }

        return ans;
    }
}
