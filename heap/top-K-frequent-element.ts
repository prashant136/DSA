// https://leetcode.com/problems/top-k-frequent-elements/description/
/**
 Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order. 

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

    Input: nums = [1], k = 1
    Output: [1]
    
    Constraints:
    # 1 <= nums.length <= 105
    # -104 <= nums[i] <= 104
    # k is in the range [1, the number of unique elements in the array].
    # It is guaranteed that the answer is unique.
    
    👋 Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

// HashMap + Max Heap (Priority Queue)
class MaxHeap<T> {
    private heap: T[];
    private compareFn: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number) {
        this.heap = [];
        this.compareFn = compareFn; // Custom comparator function
    }

    // Swap two elements in the heap
    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Heapify up to maintain max heap property
    private heapifyUp(index: number) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.compareFn(this.heap[parent], this.heap[index]) < 0) {
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    // Heapify down to maintain max heap property
    private heapifyDown(index: number) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.compareFn(this.heap[left], this.heap[largest]) > 0) {
            largest = left;
        }
        if (right < this.heap.length && this.compareFn(this.heap[right], this.heap[largest]) > 0) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    // Insert a new element
    public insert(value: T) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
        console.log('heap after insert', this.heap);
    }

    // Extract max element (highest priority)
    public extractMax(): T | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    public size(): number {
        return this.heap.length;
    }
}

// Function to find top K frequent elements using generics
function topKFrequentMaxHeap<T>(nums: T[], k: number): T[] {
    const frequencyMap = new Map<T, number>();

    // Count frequency of each element
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Define a comparator for the heap based on frequency
    const prioritQueue = new MaxHeap<[T, number]>((a, b) => a[1] - b[1]);
    console.log('frequencyMap-', frequencyMap);

    // Insert elements into max heap
    for (let [num, freq] of frequencyMap.entries()) {
        prioritQueue.insert([num, freq]);
    }

    // Extract top K elements
    const result: T[] = [];
    for (let i = 0; i < k; i++) {
        const max = prioritQueue.extractMax();
        if (max) result.push(max[0]);
    }

    return result;
}

// Example usage with numbers
// const nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
// const k = 2;
// console.log(topKFrequent(nums, k)); // Output: [4, 1]

// Example usage with strings
const words = ["apple", "banana", "apple", "orange", "banana", "banana", "apple", "grape"];
console.log(topKFrequentMaxHeap(words, 2)); // Output: ["apple", "banana"]




class MinHeap {
    private heap: [number, number][]; // Stores [num, frequency] pairs

    constructor() {
        this.heap = [];
    }

    // Swap two elements in the heap
    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Heapify up to maintain min heap property
    private heapifyUp(index: number) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent][1] > this.heap[index][1]) { // Min Heap Condition
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    // Heapify down to maintain min heap property
    private heapifyDown(index: number) {
        let smallest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left][1] < this.heap[smallest][1]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right][1] < this.heap[smallest][1]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Insert a new element (ensuring min heap property)
    public insert(value: [number, number]) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Extract min element (least frequent)
    public extractMin(): [number, number] | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);

        return min;
    }

    // Get the minimum frequency without removing it
    public getMin(): [number, number] | undefined {
        return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    public size(): number {
        return this.heap.length;
    }

    public getHeap(): [number, number][] {
        return this.heap;
    }
}

// Function to find top K frequent elements
function topKFrequentMinHeap(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>();

    // Step 1: Count frequency of each element
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: Use a Min Heap of size K
    const minHeap = new MinHeap();

    for (let [num, freq] of frequencyMap.entries()) {
        if (minHeap.size() < k) {
            minHeap.insert([num, freq]);
        } else if (minHeap.getMin()![1] < freq) {
            minHeap.extractMin(); // Remove least frequent
            minHeap.insert([num, freq]);
        }
    }

    // Step 3: Extract elements from Min Heap
    return minHeap.getHeap().map(([num, _]) => num);
}

const nums = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
const k = 2;
console.log(topKFrequentMinHeap(nums, k)); // Output: [4, 1]
