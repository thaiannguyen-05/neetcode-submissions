class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
     maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const currWidth = right - left;
        const currHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(currWidth * currHeight, maxArea);
        if (height[left] < height[right]) {
            ++left;
        }
        else {
            --right;
        }
    }
    return maxArea;
}
    
}
