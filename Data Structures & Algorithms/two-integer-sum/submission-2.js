class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if (map.has(difference)) {
                let coord = map.get(difference)
                return [coord, i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
