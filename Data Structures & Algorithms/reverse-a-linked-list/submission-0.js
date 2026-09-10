/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
    if (!head)
        return null;
    let p = head;
    const arr = [];
    while (p !== null) {
        arr.push(p.val);
        p = p.next;
    }
    let newHead = null;
    for (let i = 0; i < arr.length; i++) {
        newHead = new ListNode(arr[i], newHead);
    }
    return newHead;
}
}
