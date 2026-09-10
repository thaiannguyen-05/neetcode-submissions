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
    mergeTwoLists(list1, list2) {
    let newList = new ListNode(0);
    let tail = newList;
    let p1 = list1;
    let p2 = list2;
    console.log(tail);
    while (p1 != null && p2 != null) {
        if (p1.val > p2.val) {
            tail.next = p2;
            p2 = p2.next;
        }
        else {
            tail.next = p1;
            p1 = p1.next;
        }
        tail = tail.next;
    }
    if (p1 !== null)
        tail.next = p1;
    if (p2 !== null)
        tail.next = p2;
    return newList.next;
}
}
