class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let combos = []
        nums = nums.sort()

        function backtrack(i, current, sum) {
            if (sum === target) {
                combos.push([...current])
                return
            }

            if (sum > target || i >= nums.length) {
                return
            }

            current.push(nums[i])
            backtrack(i, current, sum + nums[i])

            current.pop()
            backtrack(i+1, current, sum)

        }

        backtrack(0, [], 0)
        return combos
    }
}
