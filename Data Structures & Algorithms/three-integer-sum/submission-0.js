class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    const map = new Map();
    nums = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]))
            continue;
        let right = nums.length - 1;
        let left = i + 1;
        while (left < right) {
            const tempSum = nums[i] + nums[left] + nums[right];
            if (tempSum > 0)
                right = right - 1;
            else if (tempSum < 0)
                left = left + 1;
            else {
                result.push([nums[i], nums[left], nums[right]]);
                ++left;
                while (nums[left - 1] === nums[left]) {
                    ++left;
                }
            }
        }
        map.set(nums[i], true);
    }
    return result;
}
}
