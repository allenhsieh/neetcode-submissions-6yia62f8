class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const results = []
        let openCtr = 0
        let closedCtr = 0
        function backtrack(str) {
            if (openCtr === n && closedCtr === n) {
                results.push(str)
                return
            }

            if (openCtr < n) {
                str = str + "("
                openCtr++
                backtrack(str)
                openCtr--
                str = str.slice(0, -1)
            }

            if (closedCtr < openCtr) {
                str = str + ")"
                closedCtr++
                backtrack(str)
                closedCtr--
                str = str.slice(0, -1)
            }

        }

        backtrack("")
        return results

    }
}
