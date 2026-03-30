class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let combos = []
        nums = nums.sort()

        function backtrack(i, current) {
            let sum = current.reduce((x, y) => x + y, 0)
            if (sum === target) {
                combos.push([...current])
                return
            }
            
            if (sum > target) {
                return
            }
            if (i >= nums.length) {
                return
            }

            current.push(nums[i])
            if (sum < target) {
                backtrack(i, current)
            }

            current.pop()
            backtrack(i+1, current)
        }

        backtrack(0, [])
        return combos
    }
}
