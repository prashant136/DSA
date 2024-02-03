
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
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
        newNode.next = current.next;
        current.next = newNode;
    }

    deleteFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    deleteLast() {
        if (!this.head) {
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

const linkedlist = new LinkedList();
linkedlist.addFirst(10);
linkedlist.addFirst(20);
linkedlist.addLast(30);
linkedlist.addLast(100);
linkedlist.addAt(40, 3);
linkedlist.deleteFirst();
linkedlist.deleteLast();
linkedlist.deleteAt(1);
linkedlist.print();