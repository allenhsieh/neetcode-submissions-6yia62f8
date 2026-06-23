class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        // create the set to return
        const subsets = []

        // backtrack helper, input of index and empty set
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