class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = []
        let openCtr = 0
        let closedCtr = 0
        function backtrack(p) {
            if (openCtr === n && closedCtr === n) {
                results.push(p)
                return
            }

            if (openCtr < n) {
                p += "("
                openCtr++
                backtrack(p)
                p = p.slice(0, -1)
                openCtr--
            }

            if (closedCtr < openCtr) {
                p += ")"
                closedCtr++
                backtrack(p)
                p = p.slice(0, -1)
                closedCtr--
            }
        }

        backtrack("")
        return results

    }
}
