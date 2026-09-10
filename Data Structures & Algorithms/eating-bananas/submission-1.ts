class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {

        let start = 1;

        while (true) {
            let total = 0;
            for (let i = 0; i < piles.length; i++) {
                total += (Math.ceil(piles[i] / start))
            }

            if (total <= h) return start;
            ++start;
        }

    }
}
