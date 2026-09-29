class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        for(let left = 0 ; left < nums.length ; left++) {
            let current = left + 1;

            while(current < nums.length) {
                if(nums[current] === nums[left] && Math.abs(current - left) <=k) return true;
                ++current;
            }
        }

        return false;
    }
}
