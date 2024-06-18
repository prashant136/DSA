class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }

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

    // brute force method is first calcuale size of list then remove (size-n) element.
    
    // fast and slow pointers
    removeNthFromEnd(head, n) {
        let fast = head;
        let slow = head;
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        if (fast == null) return head.next;
        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;
        return head;
    }

    print(head) {
        for (let temp = head; temp !== null; temp = temp.next) {
            console.log(temp.data);
        }
    }
}

const ll = new LL();
const arr = [10, 23, 4, 1, 15, 20];
let head = ll.constructLLfromArray(arr);
head = ll.removeNthFromEnd(head, 2);
ll.print(head);
