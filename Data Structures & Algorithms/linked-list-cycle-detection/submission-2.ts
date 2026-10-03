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
    hasCycle(head: ListNode | null): boolean {
        const map = new Map<ListNode, boolean>();


        let curr: ListNode | null = head;

        while(curr !== null) {
            if(map.has(curr.next)) return true;
            else map.set(curr, true);

            curr = curr.next;
        }

        return false;
    }
}
