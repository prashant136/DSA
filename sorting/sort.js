// select the minimum then swap with first element
function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //swap
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

// push the maximum at last by adjcent swap
function bubbleSort(arr, n) {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// take the element and place to currect order
function insertionSort(arr, n) {
    for (let i = 0; i <= n - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            //swap
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
}

// const arr = [13, 46, 24, 52, 20, 9];
// console.log(selectionSort(arr, arr.length));
// console.log(bubbleSort(arr, arr.length));
// console.log(insertionSort(arr, arr.length));

// merge sort -
function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    // two halves: [low....mid] & [mid+1....high]
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // coping left-out element from left half
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    // coping left-out element from right half
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    // inserting from temp array to original array.
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

// quick sort -
function quickSort(arr, low, high) {
    if (low >= high) return;
    let partionIndex = partition(arr, low, high);
    quickSort(arr, low, partionIndex - 1);
    quickSort(arr, partionIndex + 1, high);
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) i++;
        while (arr[j] > pivot && j >= low - 1) j--;
        if (i < j) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap pivot
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

// const arr = [4, 6, 2, 5, 7, 9, 1, 3];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
