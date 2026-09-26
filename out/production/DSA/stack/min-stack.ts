
// https://leetcode.com/problems/min-stack/description/
/*
    ⭐ Optimal Approach — Two Stacks

    We maintain:
        📌 1. stack — holds all values
        📌 2. minStack — holds current minimums

    Push Logic:
        Push value to stack.
        Also push onto minStack if value is ≤ current min.

    Pop Logic:
        If popped value equals top of minStack, pop from minStack too.
        This keeps them in sync.

    getMin():
        Simply peek minStack for current minimum.

    👉 This gives O(1) for all operations.
*/


class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        // if empty or new val <= current min, push to minStack
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const popValue = this.stack.pop();
        // sync minStack
        if(popValue === this.minStack[this.minStack.length-1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length-1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length-1];
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
