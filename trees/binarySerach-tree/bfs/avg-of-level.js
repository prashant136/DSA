// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/***
    Input: root = [3,9,20,null,null,15,7]
    Output: [3.00000,14.50000,11.00000]
    Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
    Hence return [3, 14.5, 11].
    
 */
function averageOfLevels(root) {
    if (!root) return [];

    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length) {
        let levelSize = queue.length;
        let averageLevels = 0;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            averageLevels += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        averageLevels = averageLevels / levelSize;
        result.push(averageLevels); // Push the nodes of the current level into the result array
    }
    return result;
}
