
// 👋 ------- brute force -------- time - O(nk), space - O(1)
// const firstNegativeInteger = (arr, k) => {
//     for (let i = 0; i+k < arr.length; i++) {
//         for (let j = i; j < i+k; j++) {
//             if (arr[j] < 0) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// let arr = [12, -1, -7, 8, -15, 30, 16, 28];
// let k = 4
// console.log(firstNegativeInteger(arr, k));


// 👋 -------- using array deque --------
function findNegative(nums, i, j) {
    while (i <= j) {
        if (nums[i] < 0) return nums[i]
        i += 1
    }
    return 0
}
const firstNegativeIntegerSlidingWindow = (nums, k) => {
    let i = 0;
    let j = 0;
    let ans = [];
    while (j < nums.length) {
        if (j - i + 1 < k) {
            j += 1
        }
        else if (j - i + 1 == k) {
            ans.push(findNegative(nums, i, j))
            j++;
            i++;
        }
        // else {
        //     i += 1
        //     ans.push(findNegative(nums, i, j))
        //     j += 1
        // }
    }
    return ans
}

let arr = [12, -1, -7, 8, 15, 30, 16, -28];
let k = 4
console.log(firstNegativeIntegerSlidingWindow(arr, k));  // [ -1, -1, -7, 0, -28 ]


