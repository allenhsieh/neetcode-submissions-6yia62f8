class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = []

        function backtrack(current, used) {
            if (current.length === nums.length) {
                result.push([...current]);
                return
            }
        
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) {
                continue
            }
        
        current.push(nums[i])
        used.add(i)
        backtrack(current, used)

        current.pop()
        used.delete(i)
        }
        }
        backtrack([], new Set())
        return result
    }
}
