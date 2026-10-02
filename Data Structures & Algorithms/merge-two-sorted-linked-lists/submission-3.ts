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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let arr = [];


        let p1: ListNode | null = list1;
        let p2: ListNode | null = list2;

        while (p1 !== null && p2 !== null) {
            if (p1.val > p2.val) {
                arr.push(p2.val);
                p2 = p2.next;
            } else {
                arr.push(p1.val);
                p1 = p1.next;

            }
        }

        while (p1 !== null) {
            arr.push(p1.val);
            p1 = p1.next;
        }

        while (p2 !== null) {
            arr.push(p2.val);
            p2 = p2.next;
        }

        let final = new ListNode(0);
        let cur = final;
        for (const val of arr) {
            cur.next = new ListNode(val);
            cur = cur.next;
        }

        return final.next;
    }
}
