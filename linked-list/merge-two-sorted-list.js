class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // construct linked list
    constructLLfromArray(arr) {
        this.head = new ListNode(arr[0]);
        let mover = this.head;
        for (let i = 1; i < arr.length; i++) {
            const node = new ListNode(arr[i]);
            mover.next = node;
            mover = mover.next;
        }
        return this.head;
    }

    // ⛈️ 🌧️ ----
    merge(l1, l2) {
        let headRef = new ListNode(-1);
        let current = headRef;
        while (l1 !== null && l2 !== null) {
            if (l1.data < l2.data) {
                current.next = l1;
                current = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                current = l2;
                l2 = l2.next;
            }
        }
        // If one list is exhausted, point to the remaining elements of the other list
        if (l1) {
            current.next = l1;
        } else {
            current.next = l2;
        }
        // The merged list is next to the dummy node
        return headRef.next;
    }

    print(head) {
        for (let temp = head; temp !== null; temp = temp.next) {
            console.log(temp.data);
        }
    }
}

const list = new LinkedList();
// const arr1 = [2, 4, 8, 10];
// const arr2 = [1, 3, 3, 6, 11, 14];
const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];
let l1 = list.constructLLfromArray(arr1);
let l2 = list.constructLLfromArray(arr2);
let head = list.merge(l1, l2);
list.print(head);
