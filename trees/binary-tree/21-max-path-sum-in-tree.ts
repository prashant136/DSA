import { TreeNode } from "../tree-utils.ts";

function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;

        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));

        // Path through this node
        maxSum = Math.max(maxSum, node.value + left + right);

        // Return path upward
        return node.value + Math.max(left, right);
    }

    dfs(root);
    return maxSum;
}

