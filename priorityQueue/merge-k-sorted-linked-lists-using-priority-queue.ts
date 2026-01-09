// import java.util.PriorityQueue;

// class ListNode {
//     int val;
//     ListNode next;

//     ListNode() {}
//     ListNode(int val) { this.val = val; }
//     ListNode(int val, ListNode next) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     public ListNode mergeKLists(ListNode[] lists) {

//         // Min heap based on node value
//         PriorityQueue<ListNode> pq = new PriorityQueue<>(
//             (a, b) -> a.val - b.val
//         );

//         // 1. Push head of each list
//         for (ListNode head : lists) {
//             if (head != null) {
//                 pq.offer(head);
//             }
//         }

//         // Dummy node to build result
//         ListNode dummy = new ListNode(0);
//         ListNode tail = dummy;

//         // 2. Process heap
//         while (!pq.isEmpty()) {
//             ListNode node = pq.poll();

//             tail.next = node;
//             tail = tail.next;

//             if (node.next != null) {
//                 pq.offer(node.next);
//             }
//         }

//         return dummy.next;
//     }
// }



class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    private heap: ListNode[];

    constructor() {
        this.heap = [];
    }

    // public displayHeap() {
    //     console.log(":: HEAP ::", this.heap);
    // }

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

    add(node: ListNode): void {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    poll(): ListNode {
        const min = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown(0);
        }

        return min;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private heapifyUp(index: number): void {
        while (
            index > 0 &&
            this.heap[this.parent(index)].val > this.heap[index].val
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
            this.heap[left].val < this.heap[smallest].val
        ) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right].val < this.heap[smallest].val
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap = new MinHeap();

    // Step 1: push heads of all lists
    for (const head of lists) {
        if (head !== null) {
            heap.add(head);
        }
    }

    // console.log(heap.displayHeap());

    // Step 2: dummy node
    const dummy = new ListNode(0);
    let tail = dummy;

    // Step 3: process heap
    // first find smallest element (TOP Element)
    // declare a dummy node so that we can attach our nodes from this. return dummy.next;
    // if node.next is there -> add to heap so that in the next iteration -> heap can give small node and attach to linked list.
    while (!heap.isEmpty()) {
        const node = heap.poll();

        console.log("node ->", node);
        // console.log('heap after polling', heap.displayHeap());

        tail.next = node;
        tail = tail.next;

        if (node.next !== null) {
            console.log("NODE.next", node.next);
            heap.add(node.next);
        }
        // console.log("after adding node.next 🔥", heap.displayHeap(), "\n");
    }

    return dummy.next;
}


// List 1: 1 → 4 → 5
const l1 = new ListNode(1,
    new ListNode(4,
        new ListNode(5)
    )
);

// List 2: 1 → 3 → 4
const l2 = new ListNode(1,
    new ListNode(3,
        new ListNode(4)
    )
);

// List 3: 2 → 6
const l3 = new ListNode(2,
    new ListNode(6)
);

// Merge
const result = mergeKLists([l1, l2, l3]);

// Print result
let curr = result;
const output: number[] = [];
while (curr !== null) {
    output.push(curr.val);
    curr = curr.next;
}

console.log(output.join(" -> "));
