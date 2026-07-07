class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let floors = cost.length 
        const cache = new Array(floors).fill(-1) 
        function recurse(i) {
            if (i >= floors) {
                return 0 
            }

            if (cache[i] !== -1) {
                return cache[i]
            }

            cache[i] = cost[i] + (Math.min(recurse(i + 1), recurse(i + 2)))
            return cache[i]
        }
        return Math.min(recurse(0), recurse(1)) 
    }
}
