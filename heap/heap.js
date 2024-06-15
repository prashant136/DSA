class Heap {
    constructor() {
        this.list = [];
    }

    swap(first, second) {
        // let temp = this.list[first];
        // this.list[first] = this.list[second];
        // this.list[second] = temp;
        [this.list[first], this.list[second]] = [
            this.list[second],
            this.list[first]
        ];
    }

    // find parent
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // find left child
    leftChild(index) {
        return 2 * index + 1;
    }

    // find right child
    rightChild(index) {
        return 2 * index + 2;
    }

    // insert
    insert(value) {
        // added value at last
        this.list.push(value);
        // then swap bottom to up - upheap
        this.upheap(this.list.length - 1);
    }
    // 👉 upheap
    upheap(index) {
        if (index === 0) return;
        const p = this.parent(index);
        if (this.list[index] < this.list[p]) {
            this.swap(index, p);
            this.upheap(p);
        }
    }

    // remove
    remove() {
        try {
            if (!this.list.length) {
                return new ReferenceError("can't remove from empty list");
            }
            // get topmost element (first element)
            const top = this.list[0];
            // remove last element
            const last = this.list.pop();
            // after removing last element, check for list is emepty
            if (this.list.length) {
                // replace last element to first element
                this.list[0] = last;
                // then downheap
                this.downheap(0);
            }
            return top;
        } catch (error) {}
    }

    // 👉 downheap
    downheap(index) {
        let min = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.list.length && this.list[left] < this.list[min]) {
            min = left;
        }

        if (right < this.list.length && this.list[right] < this.list[min]) {
            min = right;
        }

        if (min !== index) {
            this.swap(min, index);
            this.downheap(min);
        }
    }
}

const heap = new Heap();
heap.insert(34);
heap.insert(45);
heap.insert(22);
heap.insert(89);
heap.insert(76);
heap.insert(15);

console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
