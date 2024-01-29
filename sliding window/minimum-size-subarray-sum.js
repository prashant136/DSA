/***
 * 
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a 
    subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


    Example 1:
    Input: target = 7, nums = [2,3,1,2,4,3]
    Output: 2
    Explanation: The subarray [4,3] has the minimal length under the problem constraint.
    
    Example 2:
    Input: target = 4, nums = [1,4,4]
    Output: 1
    
    Example 3:
    Input: target = 11, nums = [1,1,1,1,1,1,1,1]
    Output: 0
 */

// varible size sliding window
const maxSubArrayLen = (arr, target) => {
    let i = 0;
    let j = 0;
    let ans = 0;
    let sum = 0;
    while (j < arr.length) {
        sum = sum + arr[j];
        // sum < target -> increase window size
        if (sum < target) {
            j++;
        }
        // sum === target -> find ans (calculate subarray length)
        else if (sum === target) {
            ans = Math.max(ans, j - i + 1);
        }
        // sum > target -> decrease window size
        else if (sum > target) {
            while (sum > target) {
                sum = sum - arr[i];
                i++;
            }
            if (sum === target) {
                ans = Math.max(ans, j - i + 1);
            }
            j++;
        }
    }
    return ans;
};

// -------- MY APPROCH ------- (some edge case missed)
// const minSubArrayLen = (arr, target) => {
//     let i = 0;
//     let j = 0;
//     let ans = Number.MAX_SAFE_INTEGER;
//     let sum = 0;
//     while (j < arr.length) {
//         sum = sum + arr[j];
//         // sum < target -> increase window size
//         if (sum < target) {
//             j++;
//         }
//         // sum === target -> find ans (calculate subarray length)
//         else if (sum === target) {
//             ans = Math.min(ans, j - i + 1);
//         }
//         // sum > target -> decrease window size
//         else if (sum > target) {
//             while (sum > target) {
//                 sum = sum - arr[i];
//                 i++;
//             }
//             if (sum === target) {
//                 ans = Math.min(ans, j - i + 1);
//             }
//             j++;
//         }
//     }
//     console.log({ i, j });
//     return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
// };

//todo - perfect code ->>>
const minSubArrayLen = (target, nums) => {
    let i = 0;
    let j = 0;
    let ans = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    while (j < nums.length) {
        sum += nums[j];

        // If the current sum is greater than or equal to the target, try to shrink the window
        while (sum >= target) {
            ans = Math.min(ans, j - i + 1);
            sum -= nums[i];
            i++;
        }

        // Move to the next element
        j++;
    }

    // If ans is still the maximum safe integer, no subarray found
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

// let target = 7;
// let nums = [2, 3, 1, 2, 4, 3];
// let target = 4;
// let nums = [1, 4, 4];
// let target = 11;
// let nums = [1,1,1,1,1,1,1,1];
let target = 11;
let nums = [1, 2, 3, 4, 5];

console.log(minSubArrayLen(nums, target));
console.log(maxSubArrayLen(nums, target));
