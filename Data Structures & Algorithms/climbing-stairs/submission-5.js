class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
      const memo = new Array(n + 1).fill(-1)
      
      function recurse(n, memo) {
        if (n === 1) {
            return 1
        }

        if (n === 2) {
            return 2
        }

        if (memo[n] !== -1) {
            return memo[n]
        }

        memo[n] = recurse(n - 1, memo) + recurse(n - 2, memo)

        return memo[n]
      }

      return recurse(n, memo)
    }
}
