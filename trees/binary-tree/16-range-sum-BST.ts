/* 

    Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
    Output: 32
    Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

                   10
                 /    \
                5      15
               / \       \
              3   7      18


    Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
    Output: 23
    Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

                   10
                 /    \
                5      15
               / \     / \
              3   7   13  18
             /   /   
            1   6

*/
import { TreeNode } from "../tree-utils.ts";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let sum = 0;

    function dfs(root: TreeNode | null) {
        if(root === null) return;

        if(root.value >= low && root.value <= high) {
            sum += root.value;
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return sum;
};


const root = new TreeNode(10)
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.right.right = new TreeNode(18);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

console.log(rangeSumBST(root, 7, 15))
