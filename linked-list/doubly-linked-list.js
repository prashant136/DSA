class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        // if there is no node initially
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    addAt(data, index) {
        const newNode = new Node(data);
        if (index < 0 || index > this.size()) {
            console.log("Invalid Error");
            return;
        }

        if (index === 0) {
            this.addFirst(data);
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        // first link newNode to current and current.next node
        newNode.prev = current;
        newNode.next = current.next;
        if (current.next) {
            current.next.prev = newNode;
        }
        current.next = newNode;
    }

    deleteFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
    }

    deleteLast() {
        if (!this.head) {
            return;
        }
        // if there is only one node present
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    deleteAt(index) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid Error");
            return;
        }

        if (index === 0) {
            this.deleteFirst();
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            if (current.next) {
                current.next.prev = current;
            }
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const dll = new DoublyLinkedList();
dll.addFirst(10);
dll.addLast(100);
dll.addLast(200);
dll.addLast(30);
dll.addAt(-11, 3);
dll.deleteFirst();
dll.deleteLast();
dll.deleteAt(2);

dll.print()
