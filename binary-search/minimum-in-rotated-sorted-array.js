// Find Minimum in Rotated Sorted Array
// https://www.youtube.com/watch?v=nhEMDKMB44g&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=7 - take u forwoard

function minimun(arr) {
    let s = 0;
    let e = arr.length - 1;
    let ans = Number.MAX_VALUE;

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        // search space is already sorted
        // then always arr[low] is will be smaller
        // in that search space
        if (arr[s] <= arr[e]) {
            ans = Math.min(ans, arr[s]);
            break;
        }
        if (arr[s] <= arr[mid]) {
            // left part is sorted, minimum value of sorted array will be first element of thyta portion
            ans = Math.min(ans, arr[s]);
            s = mid + 1;
        } else {
            ans = Math.min(ans, arr[mid]);
            e = mid - 1;
        }
    }
    return ans;
}

let arr = [9, 15, 2, 3, 6];
console.log(minimun(arr));
