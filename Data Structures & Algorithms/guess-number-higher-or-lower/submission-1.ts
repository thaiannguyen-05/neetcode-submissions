/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left = 0;
        let right = n;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);


            const check = guess(mid);

            if(check === 0) return mid;
            else if(check === -1) right = mid -1;
            else left = mid + 1;
        }

        return -1;
    }
}
