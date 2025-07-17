// https://www.geeksforgeeks.org/subset-sum-problem-dp-25/

// [Naive Approach] Using Recursion – O(2^n) Time and O(n) Space
// function isSubsetSumRec(arr, n, sum) {
//     // Base Cases
//     if (sum === 0) return true;
//     if (n === 0) return false;    

//     // If the last element is greater than
//     // the sum, ignore it
//     if (arr[n - 1] > sum) {
//         return isSubsetSumRec(arr, n - 1, sum);
//     }

//     // Check if sum can be obtained by including
//     // or excluding the last element
//     return isSubsetSumRec(arr, n - 1, sum) || 
//            isSubsetSumRec(arr, n - 1, sum - arr[n - 1]);
// }
// const arr = [3, 34, 4, 12, 5, 2];
// const sum = 9;
// console.log(isSubsetSumRec(arr, arr.length, sum));


// Using Bottom-Up DP (Tabulation) - O(sum*n) Time and O(sum*n) Space
// function isSubsetSum(arr: number[], sum: number) {
//     const n = arr.length;

//     const dp = Array.from(Array(n + 1), () => Array(sum + 1).fill(false));

//     // If sum is 0, then answer is
//     // true (empty subset)
//     for (let i = 0; i <= n; i++) {
//         dp[i][0] = true;
//     }

//     // Fill the dp table in bottom-up manner
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= sum; j++) {
//             if (j < arr[i - 1]) {
            
//                 // Exclude the current element
//                 dp[i][j] = dp[i - 1][j];
//             } else {
            
//                 // Include or exclude
//                 dp[i][j] = dp[i - 1][j] 
//                 || dp[i - 1][j - arr[i - 1]];
//             }
//         }
//     }

//     return dp[n][sum];
// }
// const arr = [3, 34, 4, 12, 5, 2];
// const sum = 9;
// console.log(isSubsetSum(arr, sum));


let arr = [2,3,4,5,6]

arr.forEach((ele, index) => {
    console.log('it', ele);
    if(index == 2) return
})
