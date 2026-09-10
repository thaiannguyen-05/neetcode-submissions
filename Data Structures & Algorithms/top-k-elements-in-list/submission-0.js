class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
            const map = new Map();

    for (let num of nums) {
        (!map.has(num)) 
            ? map.set(num, 1) 
            : map.set(num, (map.get(num) || 0) + 1);
    }

    const sortedMap = new Map(
        [...map].sort(([k1, val1], [k2, val2]) => val2 - val1)
    );

    return Array.from(sortedMap.keys()).slice(0, k);
    }
}
