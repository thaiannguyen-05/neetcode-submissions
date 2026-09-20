class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const ans = new Set<number>();
        const map = new Map<number, number>();
        const guard = Math.trunc(nums.length/3);

        for(let i = 0 ; i<nums.length ; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 0);
            }

            if(map.get(nums[i]) >= guard) {
                ans.add(nums[i]);
            }
        }

        return Array.from(ans);
    }
}
