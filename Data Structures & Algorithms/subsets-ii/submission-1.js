class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort()
        const result = []
        const current = []        
        function backtrack(idx) {
            result.push([...current])

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i-1]) {
                    continue
                }
                current.push(nums[i])
                backtrack(i + 1)
                current.pop()
            }
        }

        backtrack(0)
        return result
    }
}
