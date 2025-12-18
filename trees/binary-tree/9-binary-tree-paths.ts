import { TreeNode } from "../tree-utils.ts";

function binaryTreePaths(root: TreeNode | null) {
    const result: string[] = [];
    if (root === null) result;

    function dfs(root: TreeNode | null, path: string) {
        if (root === null) return;

        path += root.value.toString();
        // if node is leaf -> add to result
        if (root.left === null && root.right === null) {
            result.push(path);
            return;
        }

        path += "->";
        if (root.left) dfs(root.left, path);
        if (root.right) dfs(root.right, path);
    }
    dfs(root, "");

    return result;
}
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);
