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
    reorderList(head: ListNode | null): void {
        let n = 0;

        let pHead: ListNode | null = head;
        const temp: number[] = [];
        while (pHead !== null) {
            temp.push(pHead.val);
            ++n;
            pHead = pHead.next;
        }

        const result: number[] = [temp[0]];

        for (let i = 1; i < temp.length; i++) {
            if (n <= result.length) break;
            result.push(temp[n - i]);
            if (n <= result.length) break;
            result.push(temp[i]);
        }

        pHead = head;
        let count = 0;
        while(pHead !== null && count < result.length) {
            pHead.val = result[count];
            ++count;
            pHead = pHead.next;
        }

    }
}
