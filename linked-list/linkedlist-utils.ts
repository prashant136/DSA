export class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;

    constructor(value: T, next: LinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

export class doublyLinkedListNode<T> {
    value: T;
    next: doublyLinkedListNode<T> | null;
    prev: doublyLinkedListNode<T> | null;

    constructor(value: T, next: doublyLinkedListNode<T> | null = null, prev: doublyLinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

