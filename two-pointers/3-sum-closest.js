// similer to three sum --
function threeSumClosest(arr, target) {
    arr.sort((a, b) => a - b);

    let resultSum = arr[0] + arr[1] + arr[2];
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 2; i++) {
        let l = i + 1;
        let r = arr.length - 1;
        while (l < r) {
            let sum = arr[i] + arr[l] + arr[r];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
            
            let minDiff = Math.abs(sum - target);
            if (minDiff < minVal) {
                resultSum = sum;
                minVal = minDiff;
            }
        }
    }
    return resultSum
}

let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target));
