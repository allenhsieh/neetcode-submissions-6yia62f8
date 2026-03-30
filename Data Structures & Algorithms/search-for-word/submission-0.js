class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let used = Array.from({length: board.length}, () => Array(board[0].length).fill(false))
        let found = false

        function recursion(col, row, idx){
            if (used[col][row] || board[col][row] !== word[idx]) {
                console.log("works1")
                return
            }

            if (idx === word.length - 1) {
                found = true
                return
            }

            used[col][row] = true
            for (const coord of [[col + 1, row], [col - 1, row], [col, row + 1], [col, row - 1]]) {
                console.log("works3:", col, row)
                let [y, x] = coord
                if (y < 0 || x < 0 || y >= board.length || x >= board[0].length) {
                    console.log("works2")
                    continue 
                }
                recursion(y, x, idx+1)
                if (found) {
                    return
                }
            }
            used[col][row] = false
        }

        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                console.log(y, x)
                recursion(y, x, 0)
                if (found) {
                    return true
                }
            }
        }

        return found
    }
}
