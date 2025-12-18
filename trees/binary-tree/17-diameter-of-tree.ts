// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root. The length of a path between two nodes is
// represented by the number of edges between them.

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Input: root = [1,2]
// Output: 1

import { TreeNode } from "../tree-utils.ts";

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // Update diameter at this node
        diameter = Math.max(diameter, leftHeight + rightHeight);

        // Return height
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return diameter;
}

//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log(diameterOfBinaryTree(root));