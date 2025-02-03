class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (node === null) {
            return -1;
        }
        return node.height;
    }
    isEmpty() {
        return this.root === null;
    }

    // insert(value, node = this.root) {
    //     if (this.root === null) {
    //         this.root = new Node(value);
    //         return;
    //     }

    //     if (value < node.value) {
    //         if (node.left === null) {
    //             node.left = new Node(value);
    //         } else {
    //             this.insert(value, node.left);
    //         }
    //     } else if (value > node.value) {
    //         if (node.right === null) {
    //             node.right = new Node(value);
    //         } else {
    //             this.insert(value, node.right);
    //         }
    //     }
    // }

    insert(value) {
        this.root = this.insertHelper(value, this.root);
    }

    insertHelper(value, node) {
        if (node === null) {
            const node = new Node(value);
            return node;
        }
        if (value < node.value) {
            node.left = this.insertHelper(value, node.left);
        }
        if (value > node.value) {
            node.right = this.insertHelper(value, node.right);
        }
        return node;
    }

    populate(arr) {
        for (const ele of arr) {
            this.insert(ele);
        }
    }

    populateSorted(arr, start, end) {
        if (start >= end) {
            return;
        }

        let mid = Math.floor((start + end) / 2);
        this.insert(arr[mid]);
        this.populateSorted(arr, start, mid);
        this.populateSorted(arr, mid + 1, end);
    }

    display(node = this.root) {
        if (node !== null) {
            this.display(node.left);
            this.display(node.right);
            console.log(node.value);
        }
    }
}

const bst = new BinarySearchTree();
// let arr = [15, 10, 2, 20, 18, 12];
// bst.populate(arr);
// bst.display();
let arr = [2, 4, 8, 10, 20, 30];
bst.populateSorted(arr, 0, arr.length);
bst.display();
