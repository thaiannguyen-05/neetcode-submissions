class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((p, i) => [
            p,
            (target - p) / speed[i]
        ]);

        cars.sort((a, b) => b[0] - a[0]);
        
        const result: number[] = [];

        for(const [, time] of cars) {
            if(result.length === 0 || time > result[result.length - 1]) {
                result.push(time);
            }
        }

        return result.length;
    }
}
