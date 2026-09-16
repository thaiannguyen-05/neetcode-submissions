class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const limit =  Math.round(nums.length /2)
        const map = new Map<number, number>();

        for(let i = 0 ; i < nums.length ; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }

            if(map.get(nums[i]) >= limit) return nums[i];
        }

        return null;
    }
}
