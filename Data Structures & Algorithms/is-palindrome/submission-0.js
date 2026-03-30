class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            let cleanStr = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '')

    let l = 0
    let r = cleanStr.length - 1
    while (l < r) {
        if (cleanStr[l] !== cleanStr[r]) {
            return false
        }
        l++
        r--
    }

    return true
    }
}
