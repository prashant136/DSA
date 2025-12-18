import { TreeNode } from "../tree-utils.ts";

/**
 * 
 * A binary tree is height-balanced if:
    - The left and right subtrees of every node differ in height by at most 1.
    - The left subtree is balanced.
    - The right subtree is balanced.
 */

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;
    let res = true;
    function dfs(root: TreeNode|null): number {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        if (Math.abs(left - right) > 1) {
            res = false;
        }
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(isBalanced(root));