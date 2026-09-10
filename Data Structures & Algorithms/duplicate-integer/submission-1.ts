class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set(nums);
        
        console.log(set)
        console.log(nums)

        if(nums.length === set.size) return false;
        return true;
    }
}
