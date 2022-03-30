# Heap

In computer science, a heap is a specialized tree-based data structure that satisfies the heap property described below.

In a min heap, if P is a parent node of C, then the key (the value) of P is less than or equal to the key of C.

![Heap Representation](https://camo.githubusercontent.com/065e525a8985291e9506599ebaeb6e39e635f204bcfe98a121ff5b1e662c16ea/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36392f4d696e2d686561702e706e67)

In a max heap, the key of P is greater than or equal to the key of C

## Why do we need heaps?

Heaps is primarily used for getting the minimum or the maximum value present in a heap in O(1) time. The linear data structures like Arrays or LinkedList can get you this value in O(n) time while non-linear data structures like Binary Search Trees(BST) can get you this value in O(log n) time where n is the number of elements.
<br>
Here’s the time complexity of various operations performed on a heap with n elements:
<br>

-   Access the min/max value: O(1)
-   Inserting an element: O(log n)
-   Removing an element: O(log n)

## Implementation

![Heaps](https://miro.medium.com/max/1400/1*ZyMG4K50VjgBVkY_Bfcxaw.png)

But why we follow this particular arrangement of filling the array level by level? <br>
If you carefully observe, the minimum and the maximum elements are placed at the 0th index in their respective arrays. We can access these elements in constant O(1) time. <br>
If a parent is at 0th index, its two child nodes are at 1st and the 2nd position in the array. Here’s the relationship between the parent and the child nodes in a binary heap:

![relationship of array indices of the parent and the child node](https://miro.medium.com/max/662/1*VzH_-Gq0LOMRLTktzflc5g.png)

From the above image, we can deduce that the child nodes of any element at index i are placed at indexes 2*i + 1 and 2*i + 2. Also, we can go reverse and find out the parent node of any element at i using the formula i/2. Please note: this is applicable only for Binary Heaps.
<br>
Heaps can be implemented using Arrays or LinkedList but the common way of implementing them is by using Arrays.

## Inserting elements

![Inserting elements](https://miro.medium.com/max/1400/1*to65iKzq3VLUYPyOclk2lQ.png)

-   insert(10): Binary Heap is empty and we’d want to insert 10 as the first node. 10 gets added at the first position. Easy!
-   insert(23): Heaps are filled from left to right. Now, 23 gets added as the left child of 10. And since 10 (parent node) is already less than the child node, we don’t have to do anything more here!
-   insert(36): Node 36 gets added as the right child of 10. We don’t have to shuffle any nodes here as the minHeap property is already taken care of.
-   insert(18): Node 18 gets added as the left child of 23 and this disturbs the minHeap property — The child nodes should be less than the parent node. Now, we go up the chain and find a suitable place for node 18. We start by comparing it with its parent node 23 and since 18 is less than 23, these two nodes are swapped. Now we compare 18 with 10. 18 is greater than 10 which means it is at the correct position in the heap.

