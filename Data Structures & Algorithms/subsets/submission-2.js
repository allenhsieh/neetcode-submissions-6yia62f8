class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let sets = []

        function backtrack(i, current) {
            if (i === nums.length) {
                sets.push([...current])
                return
            }

            current.push(nums[i])
            backtrack(i + 1, current)

            current.pop()
            backtrack(i + 1, current)

        }

        backtrack(0, [])
        return sets
    }
}