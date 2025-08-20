/**
 * 
 * 🧠 Intuation: 
 *  Calculate the sum of the array. If the sum is odd, this cannot be two subsets with an equal sum, so return false.
 *  If the sum of the array elements is even, calculate sum/2 and find a subset of the array with a sum equal to sum/2.
 */
function isSubsetSum(arr:number[], n: number, sum: number) {
    if (sum == 0) 
        return true;
    if (n == 0) 
        return false;

    // If element is greater than sum, then ignore it
    if (arr[n - 1] > sum) {
        return isSubsetSum(arr, n-1, sum);
    }

    // Check if sum can be obtained by any of the following
    // (a) including the current element
    // (b) excluding the current element
    return isSubsetSum(arr,  n-1, sum) || 
           isSubsetSum(arr, n-1, sum - arr[n - 1]);
}

// 0/1 knapsack - top down
function isSubsetSumTopDown(arr: number[], n: number, sum: number, memo) {
    if (sum == 0) 
        return true;
    if (n == 0) 
        return false;

    if (memo[n - 1][sum] !== -1) 
        return memo[n - 1][sum];

    if (arr[n - 1] > sum) 
        return isSubsetSumTopDown(arr, n-1, sum, memo);

    memo[n - 1][sum] = isSubsetSumTopDown(arr, n-1, sum, memo) ||   // exclude
                       isSubsetSumTopDown(arr, n - 1, sum - arr[n - 1], memo);   // include

    return memo[n - 1][sum];
}

// 0/1 knapsack - bottom up
function subsetSumBottomUp(arr: number[]) {
    let sum = arr.reduce((a, b) => a + b, 0);
    
    if (sum % 2 !== 0) return false;

    let dp = Array.from({ length: arr.length + 1 }, () => Array(sum / 2 + 1).fill(false));

    // base case
    for (let i = 0; i < arr.length; i++) dp[i][0] = true; 

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 1; j <= sum / 2; j++) {
            if (arr[i - 1] > j) 
                dp[i][j] = dp[i - 1][j]     // not taken
            else 
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];  // not taken || taken
        }
    }
    return dp[arr.length][sum / 2];
}

function equalPartition(arr: number[]) {
    let sum = arr.reduce((a, b) => a + b, 0);

    // If sum is odd, there cannot be two subsets with equal sum
    if (sum % 2 !== 0) return false;

    // return isSubsetSum(arr, arr.length, sum / 2);

    // top down approch -
    let memo = Array.from({ length: arr.length + 1 }, () => Array(sum / 2 + 1).fill(-1));
    return isSubsetSumTopDown(arr, arr.length, sum / 2, memo);
}

const arr = [1, 5, 11, 5, 2];
// console.log(equalPartition(arr));
console.log(subsetSumBottomUp(arr));



