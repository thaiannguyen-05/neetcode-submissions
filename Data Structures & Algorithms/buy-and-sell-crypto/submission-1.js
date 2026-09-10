class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    // let maxBenefit = 0;
    // for(let i = 0 ; i < prices.length ; i++) {
    //     let startWindow = i + 1;
    //     while(startWindow < prices.length) {
    //         if(prices[i] < prices[startWindow]) {
    //             maxBenefit = Math.max(maxBenefit, (prices[startWindow] - prices[i]));
    //         }
    //         ++startWindow;
    //     }
    // }
    // return maxBenefit;
    let min_price = Number.MAX_SAFE_INTEGER;
    let maxBenefit = 0;
    for (const price of prices) {
        if (price < min_price) {
            min_price = price;
        }
        const profit = price - min_price;
        maxBenefit = Math.max(profit, maxBenefit);
    }
    return maxBenefit;
}
}
