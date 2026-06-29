class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let combos = []
        candidates.sort()

        function backtrack(i, combo, total) {
            if (total === target) {
                combos.push([...combo])
                return
            }
            if (total > target || i >= candidates.length) {
                return
            } 

            combo.push(candidates[i])
            backtrack(i+1, combo, total + candidates[i])

            combo.pop()
            while(candidates[i] === candidates[i+1]){
                i++
            }
            backtrack(i+1, combo, total)
        }
        backtrack(0,[],0)
        return combos
    }
}
