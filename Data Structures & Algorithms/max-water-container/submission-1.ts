class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h: number[]): number {
        let left  = 0 ; 
        let right = h.length - 1;

        let maxArea = 0;

        while(left < right){
            const height = Math.min(h[left], h[right]);
            const width = right - left;

            maxArea = Math.max((width * height), maxArea);
            
            if(h[left] < h[right]) ++left;
            else --right;
        }

        return maxArea;
    }
}
