// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Consider the following binary tree
//                 1
//              /    \
//            2        3
//          /  \     /   \
//        4     5   6     7
//      /  \      /  \
//     8   9     10  11
//

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function zigzagLevelOrder(root) {
    if (!root) return [];

    let isReverse = false;

    let deque = [];
    let result = [];
    deque.push(root);

    while (deque.length) {
        let levelSize = deque.length;
        let currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            if (isReverse) {
                let node = deque.pop();
                currentLevel.push(node.val);
                if (node.right) {
                    deque.unshift(node.right);
                }
                if (node.left) {
                    deque.unshift(node.left);
                }
            } else {
                let node = deque.shift();
                currentLevel.push(node.val);
                if (node.left) {
                    deque.push(node.left);
                }
                if (node.right) {
                    deque.push(node.right);
                }
            }
        }
        isReverse = !isReverse;
        result.push(currentLevel);
    }
    return result;
}

let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: { val: 8, left: null, right: null },
            right: { val: 9, left: null, right: null }
        },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: { val: 10, left: null, right: null },
            right: { val: 11, left: null, right: null }
        },
        right: { val: 7, left: null, right: null }
    }
};

// let root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);
// root.right.right = new Node(7);
// root.left.left.left = new Node(8);
// root.left.left.right = new Node(9);
// root.right.left.left = new Node(10);
// root.right.left.right = new Node(11);

console.log(zigzagLevelOrder(root));
