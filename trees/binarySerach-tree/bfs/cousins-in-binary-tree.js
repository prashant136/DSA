// Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y,
// return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

//                 1
//              /    \
//            2        3
//          /
//        4
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

//                 1
//              /    \
//            2       3
//             \       \
//              4       5
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true

//                 1
//              /    \
//             2      3
//              \
//               4
// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
// ---------------------------------------------------------------------------------------------------

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// this is for general purpose (logics)
// 🚩 -------------------- find any node ----------------------
// function findNode(node, x) {
//     if (node === null) {
//         return null;
//     }
//     if (node.val === x) {
//         return node;
//     }
//     let ans = findNode(node.left, x);
//     if (ans) {
//         return ans;
//     }
//     return findNode(node.right, x);
// }
function findNode(node, x) {
    if (node === null) {
        return null;
    }
    if (node.val === x) {
        return node;
    }
    // let l = findNode(node.left, x);
    // let r = findNode(node.right, x);
    // return l || r;
    return findNode(node.left, x) || findNode(node.right, x);
}

// 🚩 ------------------------ find siblings -------------------------
function isSibling(node, x, y) {
    if (node === null) {
        return null;
    }

    if (
        (node.left === x && node.right === y) ||
        (node.right === x && node.left === y)
    ) {
        return true;
    }
    return isSibling(node.left, x, y) || isSibling(node.right, x, y);

    // return (
    //     (node.left === x && node.right === y) ||
    //     (node.right === x && node.left === y) ||
    //     isSibling(node.left, x, y) ||
    //     isSibling(node.right, x, y)
    // );
}

// 🚩 -------------------- find level -------------------
function findLevel(node, x, level) {
    if (node === null) {
        return 0;
    }
    if (node.val == x) {
        return level;
    }
    // let l = findLevel(node.left, x, level + 1);
    // if (l != 0) {
    //     return l;
    // }
    // return findLevel(node.right, x, level + 1)
    return (
        findLevel(node.left, x, level + 1) ||
        findLevel(node.right, x, level + 1)
    );
}

// 👋 both are in same level but they should not belong to same parent(they ain't sibling)
function isCousins(root, x, y) {
    let xx = findNode(root, x);
    let yy = findNode(root, y);

    return (
        findLevel(root, x, 0) === findLevel(root, y, 0) &&
        !isSibling(root, xx, yy)
    );
}

let root = null;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// console.log(findNode(root, 2));
// console.log(isSibling(root, root.left.left, root.left.right));
// console.log(findLevel(root, 5, 0));
console.log(isCousins(root, 5, 6));
