class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right && left >= 0 && right >= 0) {
        const mid = Math.floor((right - left) / 2 + left);
        console.log(nums[mid]);
        if (nums[mid] === target)
            return mid;
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && nums[mid] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return -1;
}
}
