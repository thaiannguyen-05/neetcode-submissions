class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        const set = new Set<number>();

        for(let i = 0 ; i < nums.length ; i++) {
            console.log(set)
            if(set.has(nums[i])) {
                nums.splice(i,1);
                --i;
            } else {
                set.add(nums[i]);
            }
        }

        return nums.length;
    }
}
