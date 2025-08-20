import { TreeNode } from "../tree-utils.ts";

// ---------------------------------------- In-Order Traversal  ------------------------------------------------
const inOrderTraversal = <T>(root: TreeNode<T> | null, result: T[] = []): T[] => {
    if (root) {
        inOrderTraversal(root.left, result)
        result.push(root.value);
        inOrderTraversal(root.right, result);
    }
    return result;
}
// using stack - left -> root -> right
const inOrderTraversalStack = <T>(root: TreeNode<T>): T[] => {
    const result: T[] = [];
    const stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = root;

    while (current !== null || stack.length > 0) {
        // Traverse to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        const node = stack.pop();
        if (node) {
            result.push(node.value); // Push the node's value to the result array
            current = node.right;   // Move to the right subtree
        }
    }
    return result;
}

// ---------------------------------------- Pre-Order Traversal --------------------------------------------
const preOrderTraversal = <T>(root: TreeNode<T> | null, result: T[] = []): T[] => {
    if (root) {
        result.push(root.value);
        preOrderTraversal(root.left, result)
        preOrderTraversal(root.right, result);
    }
    return result;
};
// using stack - root -> left -> right
const preOrderTraversalStack = <T>(root: TreeNode<T>): T[] => {
    let result: T[] = [];
    let stack: TreeNode<T>[] = [];
    if (!root) return result;

    stack.push(root);
    while (stack.length) {
        const popElement = stack.pop();
        if (popElement) {
            result.push(popElement?.value);
            if (popElement?.right) stack.push(popElement.right);
            if (popElement?.left) stack.push(popElement.left);
        }
    }
    return result;
};

// ----------------------------------------- Post-Order Traversal ------------------------------------------
const postOrderTraversal = <T>(root: TreeNode<T> | null, result: T[] = []): T[] => {
    if (root) {
        postOrderTraversal(root.left, result);
        postOrderTraversal(root.right, result);
        result.push(root.value);
    }
    return result;
};
// using stack - left -> right -> root
const postOrderTraversalStack = <T>(root: TreeNode<T>): T[] => {
    let result: T[] = [];
    let stack: TreeNode<T>[] = [];
    let node: TreeNode<T> | null = root;

    // Continue traversal until both the stack is empty and the current node is null
    while (node !== null || stack.length) {
        // Step 1: Traverse the left subtree as deep as possible
        while (node) {
            stack.push(node); // Push the current node to the stack
            node = node.left; // Move to the left child
        }

        // Step 2: Handle the right subtree or process the current node
        if (stack[stack.length - 1].right !== null) {
            // Case 1: If the right child exists, move to the right child
            node = stack[stack.length - 1].right;
        } else {
            // Case 2: If the right child does not exist, process nodes in postorder
            let temp = stack.pop(); // Pop the current node from the stack
            if (temp) result.push(temp.value); // Add the node's value to the result array

            // Check if the popped node was the right child of its parent
            while (stack.length && temp === stack[stack.length - 1].right) {
                temp = stack.pop(); // Pop the parent node
                if (temp) result.push(temp.value); // Add the parent node's value to the result array
            }
        }
    }
    return result;
};

/**
    - How It Works:
        👉 Two-Stack Approach:
        👉 Stack 1 is used to perform a reverse pre-order traversal (Root → Right → Left).
        👉 Nodes are pushed into Stack 2 during this traversal.
        👉 Stack 2 then stores the nodes in post-order (Left → Right → Root).
    - Processing:
        👉 Start with the root, push it to Stack 1.
        👉 Push its left and right children to Stack 1 as you traverse.
        👉 Pop nodes from Stack 1 and push them to Stack 2.
        👉 Finally, pop all nodes from Stack 2 to get the result in post-order.
 */
const postOrderTraversalTwoStack = <T>(root: TreeNode<T> | null): T[] => {
    const result: T[] = [];
    if (!root) return result;

    const stack1: TreeNode<T>[] = [];
    const stack2: TreeNode<T>[] = [];

    stack1.push(root);

    // First stack is used for traversal
    while (stack1.length > 0) {
        const node = stack1.pop();
        if (node) {
            stack2.push(node); // Push to second stack
            if (node.left) stack1.push(node.left);   // Push left child
            if (node.right) stack1.push(node.right); // Push right child
        }
    }

    // Second stack gives post-order traversal
    while (stack2.length > 0) {
        const node = stack2.pop();
        if (node) result.push(node.value);
    }

    return result;
};



const root = new TreeNode(10);
root.left = new TreeNode(6);
root.right = new TreeNode(15);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.right.right = new TreeNode(20);

// Perform DFS Traversals
console.log("In-Order Traversal:", inOrderTraversal(root));
console.log("Pre-Order Traversal:", preOrderTraversal(root));
console.log("Post-Order Traversal:", postOrderTraversal(root));
console.log("In-Order Traversal using stack:", inOrderTraversalStack(root));
console.log("Pre-Order Traversal using stack:", preOrderTraversalStack(root));
console.log("Post-Order Traversal using stack:", postOrderTraversalStack(root));
console.log("Post-Order Traversal using two stack:", postOrderTraversalTwoStack(root));
