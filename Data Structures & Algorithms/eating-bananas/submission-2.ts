class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0;
        let right = Math.max(...piles);
        let result = 0;


        while(left <= right) {
            const mid = Math.floor((right + left) / 2);

            let total = 0 ;
            for(const pile of piles) {
                total += Math.ceil(pile/ mid);
            }

            if(total <= h) {
                right = mid - 1;
                result = mid;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
