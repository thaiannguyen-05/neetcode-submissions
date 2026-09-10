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
     * @return {boolean}
     */
hasCycle(head) {
    const set = new Set();
    let p = head;
    while (p) {
        if (set.has(p.next))
            return true;
        set.add(p);
        p = p.next;
    }
    return false;
}
}
