import { TreeNode } from "../tree-utils.ts";

/**
 * We first find the middle element of the array and make it the root of the tree. Then we recursively repeat the same process 
 * for left subarray and right subarray.
 */

function sortedArrayToBST(arr: number[]) {
    function helper(start: number, end: number) {
        if (start > end) return null;
    
        let mid = start + Math.floor((end - start) / 2);
        let root = new TreeNode(arr[mid]);
    
        // Divide from middle element
        root.left = helper(start, mid - 1);
        root.right = helper(mid + 1, end);
    
        return root;
    }
    return helper(0, arr.length - 1);
}

const arr = [1, 5, 9, 14, 23, 27];
console.log(sortedArrayToBST(arr));