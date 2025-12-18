/**
 * This is the same problem flipped, so the intuition becomes VERY simple once you see the symmetry.

    🔑 Key Insight (Mirror of Kth Smallest)

    You already know:
        Inorder (Left → Root → Right) = sorted in ascending order

    So naturally:
        Reverse inorder (Right → Root → Left) = sorted in descending order

    👉 Kth largest = Kth element in reverse inorder traversal
 */
import { TreeNode } from "../tree-utils.ts";

function kthLargest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = -1;

    function reverseInorder(node: TreeNode | null): void {
        if (node === null || count >= k) return;

        reverseInorder(node.right);

        count++;
        if (count === k) {
            result = node.value;
            return;
        }

        reverseInorder(node.left);
    }

    reverseInorder(root);
    return result;
}



function kthLargestItr(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let curr: TreeNode | null = root;

    while (curr !== null || stack.length > 0) {
        // Go as right as possible
        while (curr !== null) {
            stack.push(curr);
            curr = curr.right;
        }

        curr = stack.pop()!;
        k--;
        if (k === 0) return curr.value;

        if(curr) curr = curr.left;
    }

    return -1;
}


const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.right = new TreeNode(3);

console.log(kthLargest(root, 2));
console.log(kthLargestItr(root, 2));
