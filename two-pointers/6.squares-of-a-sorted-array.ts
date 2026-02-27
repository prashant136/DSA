/*
    Given an integer array nums sorted in non-decreasing order, 
    return an array of the squares of each number sorted in non-decreasing order.

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
*/

/*
    🧠 Why Naive Sorting Works But Isn’t Optimal -

        You can do: return nums.map(x => x*x).sort((a,b) => a-b);

        Time: O(n log n)
        But since the array is already sorted, we can do O(n).

    🧠 Two-Pointer Optimal Approach (O(n)) -

        Negatives become positive when squared
        Largest square is from:
            Either leftmost negative
            Or rightmost positive
        So compare from both ends

        We’ll fill the result from end to beginning
*/

function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const res: number[] = new Array(n);

    let left = 0;
    let right = n - 1;
    let idx = n - 1;

    while (left <= right) {
        const leftSq = nums[left] * nums[left];
        const rightSq = nums[right] * nums[right];

        if (leftSq > rightSq) {
            res[idx] = leftSq;
            left++;
        } else {
            res[idx] = rightSq;
            right--;
        }
        idx--;
    }

    return res;
}


/*
    🔍 Dry Run

        Let’s use: nums = [-4, -1, 0, 3, 10]

        Initialize:

        left = 0  → -4
        right = 4 → 10
        idx = 4

        ---------------------------------
        
        Compare Squares
        (-4)² = 16
        (10)² = 100
        → 100 is bigger

        res[4] = 100
        right--
        idx = 3

        ---------------------------------

        Next:

        left = 0 (-4)
        right = 3 (3)
        (−4)² = 16
        3² = 9
        → 16 bigger

        res[3] = 16
        left++
        idx = 2

        ----------------------------------

        Then:

        left = 1 (-1)
        right = 3 (3)
        (-1)² = 1
        3² = 9

        res[2] = 9
        right--
        idx = 1

        ----------------------------------

        Now:

        left = 1 (−1) → 1
        right = 2 (0)  → 0

        res[1] = 1
        left++
        idx = 0

        --------------------------------

        Finally:

        res[0] = 0
        🟢 Final Output
        [0, 1, 9, 16, 100]

*/