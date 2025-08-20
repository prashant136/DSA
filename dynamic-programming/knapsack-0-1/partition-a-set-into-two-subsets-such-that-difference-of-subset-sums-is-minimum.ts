/**
 * 
 *  🧠 Intuition:
        We’re trying to split the array into two subsets such that their sum difference is as small as possible.
        
        Let:
            sum = total sum of the whole array
            sumCalculated = sum of one subset we’ve built so far
            sum - sumCalculated = sum of the other subset (since total - first subset = second subset)
        
        The difference between subset sums is:
            
            Difference = |(sum of subset 2) - (sum of subset 1)|
                       = |(sum - sumCalculated) - sumCalculated|
        
        So,
            (sum - sumCalculated) - sumCalculated
            = sum - 2 * sumCalculated
            We take the absolute value because difference is always non-negative.
 */

function findMinDifference(arr: number[], n: number, sumCalculated: number, sum: number) {
    if (n === 0) {
        return Math.abs((sum - 2 * sumCalculated));
    }

    let include = findMinDifference(arr, n - 1, sumCalculated + arr[n - 1], sum);

    let exclude = findMinDifference(arr, n - 1, sumCalculated, sum);

    return Math.min(include, exclude);
}

// recursion + memoization -
function findMinDifferenceTopDown(arr: number[], n: number, sumCalculated: number, sum: number, memo: number[][]) {
    if (n === 0) {
        return Math.abs((sum - 2 * sumCalculated));
    }

    let include = findMinDifference(arr, n - 1, sumCalculated + arr[n - 1], sum);

    let exclude = findMinDifference(arr, n - 1, sumCalculated, sum);

    return Math.min(include, exclude);
}

function minDifference(arr: number[]) {
    const sum = arr.reduce((a, b) => a + b, 0)
    // return findMinDifference(arr, arr.length, 0, sum);

    let memo = Array.from({ length: arr.length + 1 }, () => Array(sum + 1).fill(-1));

    return findMinDifferenceTopDown(arr, arr.length, 0, sum, memo);
}

// tabulation approch -
function minDifferenceBottomUp(arr: number[]) {
    const sum = arr.reduce((a, b) => a + b, 0)

    let n = arr.length;

    let dp = Array.from({ length: arr.length + 1 }, () => Array(sum + 1).fill(false));

    dp[0][0] = true;

    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let t = 0; t <= sum; t++) {
            dp[i][t] = dp[i - 1][t];  // exclude

            if (arr[i - 1] <= t) {
                dp[i][t] = dp[i][t] || dp[i - 1][t - arr[i - 1]];
            }
        }
    }

    console.table(dp)
    // Find the minimum difference
    let minDiff = Infinity;

    // // Iterate over all possible subset sums and 
    // // find the minimum difference
    for (let t = 0; t <= sum / 2; t++) {
        if (dp[n][t]) {
            minDiff = Math.min(minDiff, Math.abs(sum - 2 * t));
        }
    }

    return minDiff;
}

let arr = [1, 6, 11, 5];
// console.log(minDifference(arr));
console.log(minDifferenceBottomUp(arr));
