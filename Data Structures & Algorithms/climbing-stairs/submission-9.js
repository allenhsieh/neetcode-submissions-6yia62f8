class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2 ) {
            return n
        }
        let one = 1
        let two = 2

        for (let i = 3; i <= n; i++) {
            const current = one + two;
            one = two
            two = current
        }

        return two
    }
}
