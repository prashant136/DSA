// // 👋 ------------- recursive approch -------------
// function knapSack(W, weight, profit, n) {
//     // Base Case
//     if (n == 0 || W == 0) return 0;

//     // If weight of the nth item is
//     // more than Knapsack capacity W,
//     // then this item cannot be included in the optimal solution
//     if (weight[n - 1] > W) return knapSack(W, weight, profit, n - 1);
//     // Return the maximum of two cases:
//     // (1) nth item included
//     // (2) not included
//     else
//         return Math.max(
//             profit[n - 1] + knapSack(W - weight[n - 1], weight, profit, n - 1),
//             knapSack(W, weight, profit, n - 1)
//         );
// }

// let profit = [60, 100, 120];
// let weight = [10, 20, 30];
// let W = 50;
// let n = profit.length;
// console.log(knapSack(W, weight, profit, n));

// // 👋 ----------- recursion + memoization = DP -------------
// function knapSackDP(W, weight, profit, n, dp) {
//     // Base condition
//     if (n == 0 || W == 0) return 0;

//     if (dp[n][W] != -1) return dp[n][W];

//     if (weight[n - 1] > W)
//         // Store the value of function call
//         // stack in table before return
//         return (dp[n][W] = knapSackDP(W, weight, profit, n - 1, dp));
//     // Return value of table after storing
//     else
//         return (dp[n][W] = Math.max(
//             profit[n - 1] + knapSackDP(W - weight[n - 1], weight, profit, n - 1, dp),
//             knapSackDP(W, weight, profit, n - 1, dp)
//         ));
// }

// let profit = [60, 100, 120];
// let weight = [10, 20, 30];
// let W = 50;
// let n = profit.length;

// let dp = new Array(n + 1).fill(-1).map((el) => new Array(W + 1).fill(-1));

// console.log(knapSackDP(W, weight, profit, n, dp));

// 👋 -------------- iterative ----------------
function knapSack(W, weight, profit, n) {
    let dp = new Array(n + 1).fill(-1).map((el) => new Array(W + 1).fill(-1));

    // Initialize the base case (i.e., for 0 items or 0 capacity)
    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < W + 1; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            }
        }
    }

    // Fill the dp table based on previous computed results
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < W + 1; j++) {
            if (weight[i - 1] > j) {
                dp[i][j] = dp[i - 1][j]; // Cannot include the item
            } else {
                dp[i][j] = Math.max(
                    profit[i - 1] + dp[i - 1][j - weight[i - 1]], // Include the item
                    dp[i - 1][j] // Exclude the item
                );
            }
        }
    }

    // Return the result at dp[n][W]
    return dp[n][W];
}

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let n = profit.length;
console.log(knapSack(W, weight, profit, n));
