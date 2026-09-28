class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        while(left <= right) {
            mid = Math.floor((right + left) / 2);


            if(nums[mid] === target) {
                return mid;
            } else if(nums[mid] >= target) {
                --right;
            } else {
                ++left;
            }
        }

        return left;
    }
}
