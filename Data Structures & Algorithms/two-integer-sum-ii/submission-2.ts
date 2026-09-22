class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < numbers.length; i++) {
            if (map.has(numbers[i])) {
                if (map.get(numbers[i]) < i) {
                    return [map.get(numbers[i]) + 1, i + 1];
                }
            }

            map.set(target - numbers[i], i);
        }

        return [];
    }
}
