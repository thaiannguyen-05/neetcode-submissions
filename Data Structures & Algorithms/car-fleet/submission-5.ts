class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const fleets = position.map((pos, i) => [
            pos, (target - pos) / speed[i]
        ]);

        fleets.sort((a,b) => b[0] - a[0]);

        const result: number[] = [];

        for(const [,time] of fleets) {
            if(result.length === 0 || time > result[result.length -1]) {
                result.push(time);
            }
        }

        return result.length;

    }
}
