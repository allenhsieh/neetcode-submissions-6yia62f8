class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let combos = []
        candidates = candidates.sort()
        function backtrack(i, current, sum){
            if (sum === target) {
                combos.push([...current])
                return
            }
            if (sum > target || i >= candidates.length) {
                return
            }

            current.push(candidates[i])
            backtrack(i + 1, current, sum + candidates[i])

            current.pop()
            while(candidates[i] === candidates[i+1]){
                i++
            } 
            backtrack(i + 1, current, sum)
        }
        backtrack(0, [], 0)
        return combos
    }
}
