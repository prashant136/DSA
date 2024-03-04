/***
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
    
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]

    Input: root = [1]
    Output: [[1]]

    Input: root = []
    Output: []
 */

function levelOrder(root) {
    if (!root) return []; // Handle edge case when root is null

    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length) {
        let levelSize = queue.length;
        let currentLevel = []; // Array to store nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            // Loop through the nodes in the current level
            let node = queue.shift();
            currentLevel.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel); // Push the nodes of the current level into the result array
    }
    return result;
}

// Test case
let root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

console.log(levelOrder(root)); // Output: [[3],[9,20],[15,7]]
