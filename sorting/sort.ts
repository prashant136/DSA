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
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
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
