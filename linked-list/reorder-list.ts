// https://leetcode.com/problems/reorder-list/?envType=problem-list-v2&envId=stack

function reorderList(head: ListNode | null): void {

    if(!head && !head.next) return;
    let fast = head;
    let slow = head;

   while (fast.next && fast.next.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let stack = [];
    let temp = slow.next || null;
    while(temp != null) {
        stack.push(temp);
        temp = temp.next;
    }

    // 🧠 Disconnect first and second halves BEFORE merge (duplicated node appears here)
    slow.next = null;

    let curr = head;

    while(stack.length > 0) {
        let next = curr.next;
        const popEle = stack.pop();
        curr.next = popEle;
        popEle.next = next;
        curr = next;
    }
};