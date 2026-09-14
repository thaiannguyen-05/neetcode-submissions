class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
    
        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        return [...map.entries()].sort((a,b) => b[1] - a[1]).splice(0 , k).map(([num]) => num);
    }
}
