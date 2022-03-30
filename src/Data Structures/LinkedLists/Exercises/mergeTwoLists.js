/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null && list2 === null) return null;
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }
    const merge = (L1, L2) => {
        let current = L1; // clone list1
        while (current.next) {
            current = current.next; // make current the last node
        }
        current.next = L2; // connect both nodes
    };

    merge(list1, list2); // at this point, list1 === list1 + list2

    let isSorted = false;

    const checkIfSorted = (linkedList) => {
        let clone = linkedList; // clone merged linkedList
        while (clone.next) {
            if (clone.val > clone.next.val) {
                console.log("list unsorted, had to stop");
                isSorted = false;
                return;
            }
            clone = clone.next;
            if (clone.next === null) {
                isSorted = true;
                console.log("I'm sorted, don't worry about me");
            }
        }
    };

    const sortList = (linkedList) => {
        let clone = linkedList;
        while (clone.next) {
            // runs once and swipes values if left > right
            if (clone.val > clone.next.val) {
                let storage = clone.val;
                clone.val = clone.next.val;
                clone.next.val = storage;
            }
            clone = clone.next;
        }
    };

    while (!isSorted) {
        checkIfSorted(list1); //runs once and stops once it finds an unordered item
        sortList(list1);
    }

    return list1;
};
