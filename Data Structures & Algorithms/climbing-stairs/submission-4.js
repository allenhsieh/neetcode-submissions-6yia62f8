class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = [1, 2]
        if (n === 1) {
            return 1
        }

        if (n === 2) {
            return 2
        }

        for (let i = 2; i < n; i++) {
            cache.push(cache[i-1] + cache[i-2])
        } 

        return cache[n-1]
    }
}
