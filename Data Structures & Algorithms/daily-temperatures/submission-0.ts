class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            const curr = temperatures[i];
            let temp = i + 1;
            while (temperatures[temp] <= curr && temp < temperatures.length) {
                temp++;
            }

            if (temp === temperatures.length) {
                result.push(0);
            } else {
                result.push(temp - i);
            }
        }

        return result;
    }
}