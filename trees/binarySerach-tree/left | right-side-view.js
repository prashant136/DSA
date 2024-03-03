// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,null,3]
// Output: [1,3]

// Input: root = []
// Output: []

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function rightSideView(root) {
    if (!root) return [];

    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
}

function leftSideView(root) {
    if (!root) return [];

    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (i === 0) {
                result.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
}

let root = new Node(10)
root.left = new Node(2) 
root.right = new Node(3)
root.left.left = new Node(7)
root.left.right = new Node(8) 
root.right.right = new Node(15) 
root.right.left = new Node(12)
root.right.right.left = new Node(14)

console.log(rightSideView(root));
console.log(leftSideView(root));
