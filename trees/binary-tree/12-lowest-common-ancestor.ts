import { TreeNode } from "../tree-utils.ts";

type rootType = TreeNode | null;

function lowestCommonAncestor(root: rootType, p: rootType, q: rootType): rootType {
  if (root === null) return null;
  if (root.value === p?.value || root.value === q?.value) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  if (left) return left;
  if (right) return right;
}

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

const p = new TreeNode(6), q = new TreeNode(7);
console.log(lowestCommonAncestor(root, p, q)?.value);


//                 3
//              /    \
//            5        1
//          /  \     /   \
//        6     2   0     8
//             /  \
//            7    4
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
//
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.