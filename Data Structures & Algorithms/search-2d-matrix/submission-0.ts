class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right) {
            const mid = Math.floor(( right - left)/ 2 + left);
            if(nums[mid] === target) return true;
            else if(nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false;

    }

    searchMatrix(matrix: number[][], target: number): boolean {
        for(let row = 0 ; row < matrix.length ; row++) {
            if(this.search(matrix[row], target)) return true;
        }
        return false;

    }
}
