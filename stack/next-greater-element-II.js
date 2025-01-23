function nextGreaterElementII(nums) {
    let stack = []
    let result = []

    let len = nums.length;
    for (let i = 2 * (len - 1); i >= 0; i--) { 
        while (stack.length && stack[stack.length - 1] <= nums[i % len]) {
            stack.pop();
        }
        // if stack is empty => insert -1 in result, 
        // else if stack[top element] > nums[i] => insert stack[top] in result
        if (i < len) {
            result[i] = stack.length ? stack[stack.length - 1]: -1;
            // if (!stack.length) {
            //     result[i] = -1;
            // } else {
            //     // stack is not empty and stack[top] > nums[i]
            //     ans.push(stack[stack.length - 1]);
            // }
        }
        stack.push(nums[i % len]);
    }
    return result
}
let nums = [1, 2, 3, 4, 3]  // [ 2, 3, 4, -1, 4 ]
console.log(nextGreaterElementII(nums));


// in a circular case, Imagine this array is doubled size, means [1,2,3,4,3,  1,2,3,4,3] -> 2*n size

