class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort()
        const result = [];
        function backtrack(i, current) {
            result.push([...current])

            for (let j = i; j < nums.length; j++){
                if (j > i && nums[j] === nums[j-1]){
                    continue
                }
                current.push(nums[j])
                backtrack(j+1, current)
                current.pop()
            }
        }
        backtrack(0,[])
        return result
    }
}
