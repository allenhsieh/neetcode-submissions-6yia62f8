class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const subsets = []
        function backtrack(idx, current) {
            if (idx === nums.length) {
                subsets.push([...current])
                return
            }
            current.push(nums[idx])
            backtrack(idx + 1, current)

            current.pop()
            backtrack(idx + 1, current)
        }
        backtrack(0,[])
        return subsets        
    }
}
