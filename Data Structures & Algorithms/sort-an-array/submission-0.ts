class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        if(nums.length <= 1) return nums;

        const mid = (nums.length /2);

        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }


    merge(arr1: number[], arr2: number[]) {
        let i = 0; 
        let j = 0;

        const ans: number[] = [];


        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                ans.push(arr1[i]);
                ++i;
            } else {
                ans.push(arr2[j]);
                ++j;
            }
        }


        while(i < arr1.length) {
            ans.push(arr1[i])
            ++i;
        }


        while(j < arr2.length) {
            ans.push(arr2[j])
            ++j;
        }

        return ans;
    }
}
