class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    nums.sort((a, b) => a - b);

    const set = new Set();
    let kMax = [0];
    let tempK = 0;
    let temp = 0;

    for (let num of nums) {
        if (set.size === 0) {
            set.add(num);
            temp = num;
            tempK = set.size;
            kMax.push(tempK);
            continue;
        }

        if (temp === num - 1 || temp === num) {
            set.add(num);
            temp = num;
            tempK = set.size;
            kMax.push(tempK);
        } else {
            temp = num;
            kMax.push(tempK);
            set.clear();
            set.add(num);
        }
    }

    return Math.max(...kMax);
}
}
