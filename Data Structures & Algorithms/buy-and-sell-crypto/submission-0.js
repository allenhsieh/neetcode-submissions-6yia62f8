class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
            let maxProfit = 0
    let lowest = prices[0]
    let highest = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
            highest = prices[i]
        } else if (prices[i] > highest) {
            highest = prices[i]
        }
        if (highest - lowest > maxProfit) {
            maxProfit = highest - lowest
        }
    }
    return Math.max(maxProfit, 0)
    }
}
