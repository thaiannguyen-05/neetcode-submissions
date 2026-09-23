class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const ans = new Map<string, number[]>();

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (nums[i] === -sum) {
                    const triple = [
                        nums[i],
                        nums[left],
                        nums[right],
                    ];

                    const key = triple.join(',');

                    if (!ans.has(key)) {
                        ans.set(key, triple);
                    }

                    left++;
                    right--;
                } else if (nums[i] >= -sum) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return Array.from(ans.values());
    }
}