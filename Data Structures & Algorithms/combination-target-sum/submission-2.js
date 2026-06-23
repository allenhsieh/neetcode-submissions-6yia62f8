class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let combos = []

        if (nums.length === 0) {
            return nums
        }
        
        function backtrack(i, set, sum) {
            if (sum === target) {
                combos.push([...set])
                return
            }

            if (i >= nums.length || sum > target) {
                return
            }

            set.push(nums[i])
            backtrack(i, set, sum + nums[i])

            set.pop()
            backtrack(i+1, set, sum)
        }

        backtrack(0,[],0)
        return combos
    }
}
