/**
 * 
 * 
 */
// function countSubsets(arr: number[], n: number, currentSum: number, target: number) {
//     if (n === 0) {
//         return currentSum === target ? 1 : 0
//     }

//     const exclude = countSubsets(arr, n - 1, currentSum, target);
//     let include = 0;
//     if(currentSum + arr[n-1] <= target) {    // Only include the current element if adding it does not exceed the target sum
//         include = countSubsets(arr, n - 1, currentSum + arr[n - 1], target);
//     }
//     return exclude + include;
// }

// const arr = [1, 2, 3, 3];
// const target = 6;
// console.log(countSubsets(arr, arr.length, 0, target));


/** top down approch */
function Dfs(arr: number[], n: number, currentSum: number, target: number, memo: number[][]) {
    if (n === 0) {
        return currentSum === target ? 1 : 0
    }

    if(memo[n][currentSum] !== -1) return memo[n][currentSum];

    const exclude = Dfs(arr, n - 1, currentSum, target, memo);
    let include = 0;
    if(currentSum + arr[n-1] <= target) {
        include = Dfs(arr, n - 1, currentSum + arr[n - 1], target, memo);
    }
    
    return memo[n][currentSum] = exclude + include;
}

function countSubsetsTopDown(arr: number[], target: number) {
    const memo = Array.from({length : arr.length + 1}, () => Array(target + 1).fill(-1));
    return Dfs(arr, arr.length, 0, target, memo);
}

// const arr = [ 1, 2, 3, 3 ];
// const target = 6;
// console.log(countSubsetsTopDown(arr, target));


// bottom up approch -
function countSubsetsBottomUp(arr: number[], target: number) {
    const dp = Array.from({length : arr.length + 1}, () => Array(target + 1).fill(0));

    // Base case: There's one way to achieve
    // a sum of 0 (by selecting no elements)
    dp[0][0] = 1;

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];  // exclude

            if (arr[i - 1] <= j) {
                dp[i][j] += dp[i - 1][j - arr[i - 1]];
            }
        }
    }

    return dp[arr.length][target];
}

const arr = [ 1, 2, 3, 3 ];
const target = 6;
console.log(countSubsetsBottomUp(arr, target));