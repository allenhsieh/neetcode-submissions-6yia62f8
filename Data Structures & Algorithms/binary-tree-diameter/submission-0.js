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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
    let maxDiameter = 0
    function traverse(node) {
        if (!node) {
            return 0
        }

        let lHeight = traverse(node.left)
        let rHeight = traverse(node.right)
        maxDiameter = Math.max(maxDiameter, lHeight + rHeight)
        
        return 1 + Math.max(lHeight, rHeight)
    }

    traverse(root)
    return maxDiameter
    }
}
