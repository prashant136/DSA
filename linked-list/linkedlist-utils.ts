export class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null = null) {
        this.value = value;
        this.next = next;
    }
}

export class DoublyLinkedListNode<T> {
    value: T;
    next: DoublyLinkedListNode<T> | null;
    prev: DoublyLinkedListNode<T> | null;

    constructor(value: T, next: DoublyLinkedListNode<T> | null = null, prev: DoublyLinkedListNode<T> | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

