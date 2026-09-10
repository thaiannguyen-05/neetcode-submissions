class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        const map = new Map<number, number>();
        
        for(let i = 0 ; i<nums.length ; i++) {


            map.set(nums[i], (map.get(nums[i]) || 0) + 1);

                        if(map.has(nums[i]) && map.get(nums[i]!) >= 2) {
                return nums[i];
            }
        }

        return null;
    }
}
