/* cycle sort -  It finds the correct position for this element in the cycle by repeatedly swapping
                it with the element currently at that position until the correct position is reached.
*/
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function cycleSort(arr) {
    let i = 0;
    while (i < arr.length) {
        let corrent = arr[i] - 1;
        if (arr[i] !== arr[corrent]) {
            // swap(arr, i, corrent);
            [arr[i], arr[corrent]] = [arr[corrent], arr[i]];
        } else {
            i++;
        }
    }
    return arr;
}

let arr = [3, 5, 2, 1, 4];
console.log(cycleSort(arr));

// 🚩 👉 whe given number from range 1 to N => apply cycle sort
