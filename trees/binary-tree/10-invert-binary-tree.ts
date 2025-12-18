import { TreeNode } from "../tree-utils.ts";

function invertTree(root: TreeNode | null) {
    if(root === null) return null;

    invertTree(root.left);
    invertTree(root.right);

    [root.left, root.right] = [root.right, root.left]
    return root;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);
console.log(invertTree(root));


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

//                 4
//              /    \
//            2        7
//          /  \     /   \
//        1     3   6     9
//                 |
//                 |
//            turned into
//                 |
//                 |
//                 4
//              /    \
//            7       2
//          /  \     /   \
//         9    6   3     1

// Input: root = [2,1,3]
// Output: [2,3,1]
//                 2
//              /    \
//             1      3
//                 |
//                 |
//            turned into
//                 |
//                 |
//                 2
//              /    \
//             3      1
