import {TreeNode} from "../tree-utils.ts";

/*
    Intuition ::
    - Inorder traversal should be sorted
    - Any descending pair means something is wrong
    - First wrong larger value is first
    - Last wrong smaller value is second
    - Swap them → BST restored
*/
function recoverTree(root: TreeNode | null): TreeNode | null {
    let first: TreeNode | null = null;
    let second: TreeNode | null = null;
    let prev: TreeNode | null = null;

    function inorder(node: TreeNode | null): void {
        if (node === null) return;

        inorder(node.left);

        if (prev !== null && prev.value > node.value) {
            if (first === null) {
                first = prev;
            }
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    if (first && second) {
        [first.value, second.value] = [second.value, first.value];
    }
    return root;
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);
console.log(recoverTree(root));