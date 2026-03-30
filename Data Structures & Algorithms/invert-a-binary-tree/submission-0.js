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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) {
            return root
        }

        let storeTree = structuredClone(root)
        root.left = this.invertTree(storeTree.right)
        root.right = this.invertTree(storeTree.left)

        return root
    }
}
