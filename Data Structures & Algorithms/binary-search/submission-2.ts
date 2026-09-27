class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            const mid = Math.floor((right + left) / 2);

            if(target === nums[mid]) {
                return mid;
            } else if (nums[mid] > target ) {
                --right;
            } else {
                ++left;
            }
        }

        return -1;
    }
}
