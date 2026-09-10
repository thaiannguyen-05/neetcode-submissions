class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;

        for (let left = 0; left < prices.length; left++) {

            let right = left + 1;

            while (right < prices.length) {

                maxProfit = Math.max(
                    maxProfit,
                    prices[right] - prices[left]
                );

                right++;
            }
        }

        return maxProfit;

    }
}
