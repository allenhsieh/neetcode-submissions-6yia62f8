class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let floors = cost.length 
        const memo = new Array(floors).fill(-1) 
        memo[0] = cost[0]
        memo[1] = cost[1]
        function recurse(floor) {
            if (floor <= 1) {
                return cost[floor] 
            }
            
            if (memo[floor] === -1){
                memo[floor] = cost[floor] + Math.min(recurse(floor - 1), recurse(floor - 2))
                return memo[floor]
            } else {
                return memo[floor]
            }
        }

        recurse(floors - 1)
        return Math.min(memo[memo.length - 1], memo[memo.length - 2])
    }
}
