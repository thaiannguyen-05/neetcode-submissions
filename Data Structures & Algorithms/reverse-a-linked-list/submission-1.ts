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
    reverseList(head: ListNode | null): ListNode {
        const arr: number[] = [];

        let p: ListNode | null = head;

        while (p !== null) {
            arr.push(p.val);
            p = p.next;
        }

        let list: ListNode | null = null;
        for(let i = 0 ; i < arr.length ; i++) {
            list = new ListNode(arr[i], list);
        }

        return list;

        
    }
}
