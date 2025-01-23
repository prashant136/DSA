function nextGreaterElement(nums) {
    let stack = []
    let result = []

    for (let i = nums.length - 1; i >= 0; i--) {
        // run a loop till stack is empty or top element is greater than nums[i] 
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        // if stack is empty then push -1 into your ans array, 
        // else you are found stack[top element] > nums[i] then push stack[top] in ans array
        if (!stack.length) {
            result[i] = -1;
        } else {
            // stack is not empty and stack[top] > nums[i]
            result[i] = stack[stack.length - 1];
        }
        stack.push(nums[i]);
    }
    return result
}
let nums = [1, 2, 3, 4, 3]  // [ 2, 3, 4, -1, -1 ]
console.log(nextGreaterElement(nums));


// Steps :-
// stack is empty = insert -1 to result array, then push arr[i] into stack
// stack[top] > arr[i] = push stack[top] to result array, afterthat push arr[i] into stack
// stack[top] <= arr[i] = pop stack[top]
//                           /    \         
//                          /      \          
//                         /        \       
//           till {stack is empty} OR {top element of stack is GREATER THAN arr[i]}, then push arr[i] into stack