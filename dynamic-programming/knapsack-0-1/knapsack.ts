

/***
 * 
 * 🎯 Problem Statement: 0/1 Knapsack
      You are given:
        - N items, each with a weight and a value.
        - A knapsack with a maximum capacity W.

      Your goal is to select a subset of items such that:
        - The total weight ≤ W
        - The total value is maximized
        - You cannot pick an item more than once (hence "0/1")

    💡 Real-world Analogy
        Imagine you’re a thief robbing a house, and you have a backpack with limited space (say 10kg). 
        Each item in the house (laptop, gold, books) has:
            A value (how useful or profitable it is),
            A weight (how heavy it is).
        
        You need to pick items such that the total weight doesn't exceed your backpack limit, and the value is maximized.

    🧠 Intuition Behind DP in Knapsack
        function knapsack(i: number, w: number): number
       The main idea is to decide for each item:
        - Include it (and reduce remaining capacity accordingly)
        - Exclude it (move on to next item)
        We evaluate both choices recursively and take the maximum of the two.

    
    🔁 Recursive + Memoization (Top-Down) ::

        💥 Recurrence Relation:
            If weight[i] > w:
                => Can't include item i, so move to i-1
                return knapsack(i-1, w)
            Else:
                => Max of two options:
                    1. Exclude i: knapsack(i-1, w)
                    2. Include i: value[i] + knapsack(i-1, w - weight[i])
                
            Where:
                i = index of current item
                w = remaining capacity
                Return = max value achievable from items 0...i with remaining capacity w

        🧊 Memoization: 
        Store answers in a 2D cache:
        dp[i][w] = result of knapsack(i, w)

        ✅ Base Cases:
        If i < 0 or w <= 0, return 0

        
        🔍 Top-Down Code (Memoized) -

        function knapsack(weights: number[], values: number[], W: number): number {
            const n = weights.length;
            const memo = Array.from({ length: n }, () => Array(W + 1).fill(-1));

            function dp(i: number, w: number): number {
                if (i < 0 || w === 0) return 0;
                if (memo[i][w] !== -1) return memo[i][w];

                if (weights[i] > w) {
                    memo[i][w] = dp(i - 1, w);
                } else {
                    const include = values[i] + dp(i - 1, w - weights[i]);
                    const exclude = dp(i - 1, w);
                    memo[i][w] = Math.max(include, exclude);
                }
                return memo[i][w];
            }

            return dp(n - 1, W);
        }
*/

function knapsackTopDown(weights: number[], values: number[], W: number): number {
    const n = weights.length;
    const memo = Array.from({ length: n }, () => Array(W + 1).fill(-1));

    function dp(i: number, w: number): number {
        if (i < 0 || w === 0) return 0;
        if (memo[i][w] !== -1) return memo[i][w];

        if (weights[i] > w) {
            memo[i][w] = dp(i - 1, w);
        } else {
            const include = values[i] + dp(i - 1, w - weights[i]);
            const exclude = dp(i - 1, w);
            memo[i][w] = Math.max(include, exclude);
        }
        return memo[i][w];
    }

    return dp(n - 1, W);
}

/**        
    📥 Tabulation (Bottom-Up) ::
        In tabulation, we build a table from smaller subproblems (no recursion).
    
        🧱 DP Table:
            Let dp[i][w] = max value we can get with first i items and capacity w

            If weight[i-1] > w:
                dp[i][w] = dp[i-1][w]   // can’t include current item
            Else:
                dp[i][w] = max(
                    dp[i-1][w],                          // exclude
                    value[i-1] + dp[i-1][w - weight[i-1]] // include
                )
        
        ✅ Base Case:
            dp[0][w] = 0 for all w
            dp[i][0] = 0 for all i (0 capacity ⇒ 0 value)
        

        📄 Bottom-Up Code -

        🧠 What You Learn from Memoization
            From recursive calls, you discover which dp[i][w] values get computed, and in what order.
            Memoization tells you:

            You only need previous row to compute current row.
            dp[i][w] depends on dp[i-1][w] and dp[i-1][w - weights[i]]
            This is exactly what we use in tabulation.

        function knapsack(weights: number[], values: number[], W: number): number {
            const n = weights.length;
            const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

            for (let i = 1; i <= n; i++) {
                for (let w = 0; w <= W; w++) {
                    if (weights[i - 1] > w) {
                        dp[i][w] = dp[i - 1][w]; // can't include
                    } else {
                        dp[i][w] = Math.max(
                            dp[i - 1][w], // exclude
                            values[i - 1] + dp[i - 1][w - weights[i - 1]] // include
                        );
                    }
                }
            }

            return dp[n][W];
        }

*/

function knapsackBottomUp(weights: number[], values: number[], W: number): number {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (weights[i - 1] > w) {
                dp[i][w] = dp[i - 1][w]; // can't include
            } else {
                dp[i][w] = Math.max(
                    dp[i - 1][w], // exclude
                    values[i - 1] + dp[i - 1][w - weights[i - 1]] // include
                );
            }
        }
    }

    return dp[n][W];
}
