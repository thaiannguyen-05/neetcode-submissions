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
            const mid = Math.floor(( right - left)/ 2 + left);
            console.log(mid)
            console.log(nums[mid])
            if(nums[mid] === target) return mid;
            else if(nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return -1;

    }
}
