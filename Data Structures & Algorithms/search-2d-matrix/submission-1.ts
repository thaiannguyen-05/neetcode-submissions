class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(arr: number[], target: number): boolean {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false;
    }


    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0;
        for (let i = 0; i < matrix.length; i++) {
            let right = matrix[i].length - 1;
            if (matrix[i][right] < target) {
                continue;
            }

            if (this.binarySearch(matrix[i], target)) return true;

        }

        return false;
    }
}
