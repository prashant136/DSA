import { TreeNode } from "../tree-utils.ts";

class DiameterOfTree<T extends number> {

    // diameter of tree - total edges between 2 leaf nodes. 
    // diameter of node = (left height + right height) for node
    findHeight = (root: TreeNode<T>, result: { value: number }): number => {
        if (!root) return 0;
        let lh = 0;
        let rh = 0;
        if (root.left) lh = this.findHeight(root.left, result);
        if (root.right) rh = this.findHeight(root.right, result);
        result["value"] = Math.max(result["value"], (lh + rh));
        return (1 + Math.max(lh, rh));
    }
    diameterOfBinaryTree = (root: TreeNode<T>): number => {
        if (!root) return 0;
        let result = { value: 0 };   // you can use an object to hold the result value, as objects are passed by reference.
        this.findHeight(root, result);
        return result.value;
    }
}

// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);
// const obj = new DiameterOfTree();
// console.log(obj.diameterOfBinaryTree(root));



// facebook
// Given a root of an N-ary tree, you need to compute the length of the diameter of the tree. The diameter of an N-ary
//  tree is the length of the longest path between any two nodes in the tree. This path may or may not pass through the root.
//  (Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.)
// https://www.youtube.com/watch?v=mPTJyH6Qs4c&list=PLQ7ZAf76c0ZM7k15502F8oSiRSQyBX6R0&index=14 - shashCode

class NaryTreeNode<T> {
    value: T;
    children: NaryTreeNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }
}

class NaryTreeDiameter<T> {
    private maxDiameter: number = 0;

    findDiameter(root: NaryTreeNode<T> | null): number {
        if (!root) return 0;

        this.calculateHeight(root);
        return this.maxDiameter;
    }

    private calculateHeight(node: NaryTreeNode<T> | null): number {
        if (!node) return 0;

        let firstMax = 0, secondMax = 0;

        for (const child of node.children) {
            const childHeight = this.calculateHeight(child);

            if (childHeight > firstMax) {
                secondMax = firstMax;
                firstMax = childHeight;
            } else if (childHeight > secondMax) {
                secondMax = childHeight;
            }
        }

        // Update the maximum diameter seen so far
        this.maxDiameter = Math.max(this.maxDiameter, firstMax + secondMax);

        // Return height of the subtree rooted at `node`
        return firstMax + 1;
    }
}

const root = new NaryTreeNode(1);
root.children.push(new NaryTreeNode(2));
root.children.push(new NaryTreeNode(3));
root.children.push(new NaryTreeNode(4));

root.children[0].children.push(new NaryTreeNode(5));
root.children[0].children.push(new NaryTreeNode(6));

root.children[2].children.push(new NaryTreeNode(7));
root.children[2].children.push(new NaryTreeNode(8));
root.children[2].children.push(new NaryTreeNode(9));

const treeDiameter = new NaryTreeDiameter<number>();
console.log(treeDiameter.findDiameter(root)); // Output: Diameter length
