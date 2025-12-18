/**
 * 
 *   In a Binary Search Tree: Inorder traversal (Left → Root → Right) gives values in sorted order

    👉 Kth smallest = Kth element in this inorder sequence


    🧠 Intuition (Think Like This)

        Imagine:
         - You are walking through the BST in sorted order
         - You carry a counter
         - Every time you visit a node:
            count++
            When count === k → 🎯 this node is the answer

         - You don’t need to sort anything
         - You don’t need extra logic
         - Just walk in order and count
 */
import { TreeNode } from "../tree-utils.ts";

function kthSmallest(root: TreeNode | null, k: number): number {
    let res = -1;
    let count = 0;

    function helper(root: TreeNode | null) {
        if (root === null) return;
        
        helper(root.left);
        count++;
        if (count === k) {
            res = root.value;
            return
        };
        helper(root.right);
    }
    helper(root);
    return res;
};


const kthSmallestlIterative = (root: TreeNode, k: number): number | undefined => {
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current !== null || stack.length > 0) {
        // Traverse to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        const node = stack.pop()!;
        k--;
        if(k === 0) return node.value;
        if (node) {
            current = node.right;   // Move to the right subtree
        }
    }
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.right = new TreeNode(3);

console.log(kthSmallest(root, 1));
console.log(kthSmallestlIterative(root, 1));