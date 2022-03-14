/*
Given the head of a singly linked list, return true if it is a palindrome.
Input: head = [1,2,2,1]
Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverse = (head) => {
    // reverse linked list
    let curr = head;
    let prev = null;
    let next;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    let startPointer = head;
    //initialize three copies
    let length = 0;

    while (fast && fast.next) {
        //when fast gets to the end, slow it's at the middle
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }

    let mid = reverse(slow); //we reverse it

    while (length) {
        //while length !== 0;
        length--;
        if (mid.val !== startPointer.val) return false; //If the number we see at the beginning and at the end of the linked list are not the same, go one step closer to mid
        mid = mid.next;
        startPointer = startPointer.next;
    }
    return true;
};
