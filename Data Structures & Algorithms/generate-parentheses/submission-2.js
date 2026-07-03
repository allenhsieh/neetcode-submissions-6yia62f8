class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = []
        let openCtr = 0
        let closedCtr = 0
        function backtrack(pairs) {
            if (openCtr === n && closedCtr === n) {
                results.push(pairs)
                return
            }

            if (openCtr < n) {
                pairs += "("
                openCtr++
                backtrack(pairs)
                openCtr--
                pairs = pairs.slice(0, pairs.length - 1)
            }

            if (closedCtr < n && closedCtr < openCtr) {
                pairs += ")"
                closedCtr++
                backtrack(pairs)
                closedCtr--
                pairs = pairs.slice(0, pairs.length-1)
            }
        }
        backtrack("")
        return results

    }
}
