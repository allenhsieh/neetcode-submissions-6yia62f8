class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let mid = Math.floor(nums.length / 2)
        let lowest = 0
        let highest = nums.length - 1

        while (lowest <= highest) {
            if (nums[mid] === target) {
                return mid
            }
            if (nums[mid] < target) {
                lowest = mid + 1

            }
            if (nums[mid] > target) {
                highest = mid - 1
            }
            mid = Math.floor((lowest + highest)/2)
        }

        return -1
    }
}
