class Heap {
  private heapSize: number;  // Current number of elements in heap
  private heap: number[]; // Array representation of heap
  private capacity: number; // Maximum capacity of heap

  constructor(arr: number[]) {
    this.heap = arr;
    this.heapSize = arr.length;
    this.capacity = arr.length;
  }

  // Swap two elements in the heap
  public swap = (i: number, j: number) => {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Heapify function to maintain max-heap property
  public heapify(index: number) {
    // Initially assume node is the largest. then we will compare the node with their left and right child and update the largest.
    let largest = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    // Compare with left child
    if (leftChildIndex < this.heapSize && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }
    // Compare with right child
    if (rightChildIndex < this.heapSize && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }
    // If largest is not the current node, swap and heapify again
    if (largest != index) {
      this.swap(index, largest);
      this.heapify(largest);
    }
  }

  // Extracts the maximum element (root of heap)
  public extarctMax() {
    if (!this.heapSize) return -1;   // Return -1 if heap is empty
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heapSize - 1];  // Replace root with last element
    this.heapSize--;  // Reduce heap size
    this.heapify(0);  // Restore heap property
    return max;
  }

  // Increase the key value at given index
  public increaseKey(index: number, newValue: number) {
    if (index < 0 || index >= this.heapSize || this.heap[index] >= newValue) {
      return;
    }
    this.heap[index] = newValue;
    // Move the node up while it's greater than its parent
    while (index > 0 && this.heap[index] > this.heap[Math.ceil((index / 2) - 1)]) {
      this.swap(index, Math.ceil((index / 2) - 1));
      index = Math.ceil((index / 2) - 1);
    }
  }

  // Decrease the key value at given index
  public decreseKey(index: number, newValue: number) {
    if (index < 0 || index >= this.heapSize || this.heap[index] <= newValue) {
      return;
    }

    this.heap[index] = newValue;
    this.heapify(index);   // Restore heap property
  }

  // Increases heap capacity when full
  // private increseCapacity() {
  //   this.capacity *= 2; // Double the capacity
  //   let newHeap = new Array(this.capacity);
  //   for (let i = 0; i < this.heapSize; i++) {
  //     newHeap[i] = this.heap[i];
  //   }
  //   this.heap = newHeap;
  // }

  public insert(newValue: number) {
    // if (this.heapSize + 1 >= this.capacity) {
    //   this.increseCapacity();  // Expand capacity if needed
    // }

    this.heapSize += 1;
    this.heap[this.heapSize - 1] = newValue;
    let index = this.heapSize - 1;
    // Move the new element up while it's greater than its parent
    while (index > 0 && this.heap[index] > this.heap[Math.ceil((index / 2) - 1)]) {
      this.swap(index, Math.ceil((index / 2) - 1));
      index = Math.ceil((index / 2) - 1);
    }
  }

  // Helper function to extract max and store at the end for heap sort
  private extractMaxAndStore() {
    if (!this.heapSize) return;
    // store the root
    const max = this.heap[0];
    // swap last and first element in heap
    this.heap[0] = this.heap[this.heapSize - 1];
    this.heap[this.heapSize - 1] = max;   // Place max element at the end
    this.heapSize--;  // reduce heap size
    this.heapify(0);  // Restore heap property
  }

  // Sorts the heap using Heap Sort algorithm
  public heapSort() {
    this.buildTree();   // Convert array to max heap
    for (let i = 0; i < this.heapSize; i++) {
      this.extractMaxAndStore();  // Extract max elements one by one
    }
    return this.heap;   //sorted array
  }

  // Builds a max heap from an unordered array
  public buildTree = () => {
    // n / 2 to n - 1  // leaf nodes
    // 0 to ((n / 2) - 1)  // non leaf nodes
    for (let i = Math.ceil((this.heapSize / 2) - 1); i >= 0; i--) {   // apply heapify to non leaf nodes [ 0 - (n/2)-1 ] size. we don't apply heapify at leaf nodes.
      this.heapify(i);  // Apply heapify to non-leaf nodes
    }
  }

  // Prints the current heap state
  public printTree() {
    let arr: number[] = [];
    for (let i = 0; i < this.heapSize; i++) {
      arr.push(this.heap[i]);
    }
    console.log('--- printTree ---', arr);
  }
}

// Heaps are not unique for a given array, as sibling relations are not fixed.
let arr = [10, 5, 20, 6, 11];
const obj = new Heap(arr);
obj.buildTree();
// console.log('after the removal of max element', obj.extarctMax());
// obj.increaseKey(4, 15);
// obj.decreseKey(0, 4);
// obj.insert(25);
// console.log('heapsort', obj.heapSort());
// obj.printTree();