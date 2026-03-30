class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Array(nums.length).fill(-1)
        memo[0] = nums[0]
        if (memo.length === 1) {
            return nums[0]
        }

        function recurse(n){
            if (n < 0) {
                return 0
            }

            if (n <= 1) {
                memo[n] = nums[n]
                return memo[n]
            }

            if (memo[n] !== -1) {
                return memo[n]
            }

            memo[n] = nums[n] + Math.max(recurse(n - 2), recurse(n - 3))
            return memo[n]
        }

        return Math.max(recurse(nums.length - 1), recurse(nums.length - 2))
    }
}
