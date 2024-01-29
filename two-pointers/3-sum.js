// --------------- 2 sum approch --------------
// 🚩 but in this approch indexing of array is changed.
function twoSum(arr, target) {
    // sort the given array
    arr.sort();
    let i = 0,
        j = arr.length - 1;

    while (i < j) {
        if (arr[i] + arr[j] < target) {
            i++;
        } else if (arr[i] + arr[j] > target) {
            j--;
        } else {
            return true;
        }
    }
}

/***
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 * and nums[i] + nums[j] + nums[k] == 0.  
 * Notice that the solution set must not contain duplicate triplets.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
 */
function threeSum(arr, target = 0) {
    let ans = [];
    if (!arr.length || arr.length < 3) {
        return ans;
    }

    arr.sort((a, b) => a - b);

    console.log(arr);

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        let sum = arr[i] + arr[left] + arr[right];
        while (left < right) {
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                ans.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            }
        }
    }
    console.log(ans);
}

let arr = [-1, 0, 1, 2, -1, -4];
threeSum(arr);
// Output: [
//     [-1, -1, 2],
//     [-1, 0, 1]
// ];
