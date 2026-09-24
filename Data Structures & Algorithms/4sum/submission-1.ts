class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        const ans = new Map<string, number[]>();
        nums.sort((a,b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const aim = target - nums[i] - nums[j];

                let left = j + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum = nums[left] + nums[right];
                    if (sum === aim) {
                        const triple = [
                            nums[i],
                            nums[j],
                            nums[left],
                            nums[right],
                        ];

                        const key = triple.sort().join(',');

                        if (!ans.has(key)) {
                            ans.set(key, triple);
                        }

                        left++;
                        right--;
                    } else if (sum >= aim) {
                        right--;
                    } else {
                        left++;
                    }
                }

            }
        }

        return Array.from(ans.values());
    }
}
