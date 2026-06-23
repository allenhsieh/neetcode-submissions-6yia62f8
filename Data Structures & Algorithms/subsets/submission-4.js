class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = []

        function backtrack(i, curSet) {
            if (i === nums.length) {
                subsets.push([...curSet])
                return
            }
                curSet.push(nums[i])
                backtrack(i+1, curSet)

                curSet.pop()
                backtrack(i+1, curSet)
        }

        backtrack(0, [])
        return subsets
    }
}