/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true
        function traverse(branch){
            if (!branch) {
                return 0
            }
            let balanceDepthLeft = traverse(branch.left)
            let balanceDepthRight = traverse(branch.right)

            if (Math.abs(balanceDepthLeft - balanceDepthRight) > 1) {
                isBalanced = false
                return
            }

            return 1 + Math.max(balanceDepthLeft, balanceDepthRight)
        }
        traverse(root)
        return isBalanced
    }
}
