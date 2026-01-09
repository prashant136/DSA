
/* 

1️⃣ What is a Heap (in one sentence)
    A heap is a complete binary tree stored in an array, where the smallest element is always at the root (for Min Heap).


2️⃣ Why we use an Array
            1
          /   \
         3     6
        / \
       5   9

    Stored as array:
        index: 0 1 2 3 4
        value: 1 3 6 5 9

    for index i:
        parent = (i - 1) / 2
        left   = 2*i + 1
        right  = 2*i + 2
*/

/*
4️⃣ heapifyUp — explained VERY simply 🧠 
        When does it run?
        👉 After insertion

    Problem it solves
        You insert a value at the end, but:
        * It might be smaller than its parent
        * Heap property is broken


    Example -
        Insert 1 into this heap:

        Before insert:
        [3, 5, 6, 9]

        Insert 1:
        [3, 5, 6, 9, 1]
                        ↑ problem


    What heapifyUp does ::
        "If I am smaller than my parent, swap with parent."

        1 < 5 → swap
        [3, 1, 6, 9, 5]

        1 < 3 → swap
        [1, 3, 6, 9, 5]

    🔥 Now heap is valid ✅


    Code logic (plain English) :-
    while (current node is smaller than its parent) {
        swap with parent
        move up
    }
*/

/*
    5️⃣ heapifyDown — explained VERY simply 🧠
            When does it run?
            👉 After deletion (poll)

        Problem it solves
            When you remove root:
            * You put the last element at the root
            * That element may be larger than its children
        

        Example -    
            Before poll:
            [1, 3, 6, 5, 9]

            After removing 1:
            [9, 3, 6, 5]
            ↑ problem

    What heapifyDown does ::
        "Compare me with my children, swap with the smallest child."

        9 > 3 → swap
        [3, 9, 6, 5]

        9 > 5 → swap
        [3, 5, 6, 9]

    
    Code logic (plain English) :-
    find smallest among (current, left child, right child)
    if smallest is not current:
        swap
        continue downward


    
    6️⃣ Why heap operations are O(log n)
        Heap height = log n
        heapifyUp moves up
        heapifyDown moves down
        One level at a time

    7️⃣ Mental model (INTERVIEW GOLD)
        Insert → bubble UP
        Delete → sink DOWN             
*/

// 3️⃣ Min Heap Implementation (Java)
class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // ---------- Utility ----------
    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number): void {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // ---------- Public APIs ----------

    add(val: number): void {
        this.heap.push(val);                 // 1. Insert at end
        this.heapifyUp(this.heap.length - 1); // 2. Fix heap
    }

    peek(): number {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
        return this.heap[0];
    }

    poll(): number {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }

        const min = this.heap[0];

        // Move last element to root
        const last = this.heap.pop()!;
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    size(): number {
        return this.heap.length;
    }

    // ---------- Heapify Methods ----------

    private heapifyUp(index: number): void {
        while (
            index > 0 &&
            this.heap[this.parent(index)] > this.heap[index]
        ) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    private heapifyDown(index: number): void {
        let smallest = index;

        const left = this.left(index);
        const right = this.right(index);

        if (
            left < this.heap.length &&
            this.heap[left] < this.heap[smallest]
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

const heap = new MinHeap();

heap.add(5);
heap.add(3);
heap.add(8);
heap.add(1);

while (!heap.isEmpty()) {
    console.log(heap.poll());
}
