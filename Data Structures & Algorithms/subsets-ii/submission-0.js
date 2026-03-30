class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums = nums.sort()
        const result = []

        function backtrack(idx, current) {
            result.push([...current])

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i-1]) {
                    continue
                }
                current.push(nums[i])
                backtrack(i + 1, current)
                current.pop()
            }
        }

        backtrack(0, [])
        return result
    }
}
