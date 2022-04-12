# Heap Sort

Heap Sort is a comparison-based sorting algorithm.
Heap Sort can be thought of as an improved selection
sort: like that algorithm, it divides its input into
a sorted and an unsorted region, and it iteratively
shrinks the unsorted region by extracting the largest
element and moving that to the sorted region. The
improvement consists of the use of a heap data structure
rather than a linear-time search to find the maximum.

It does not require auxiliary data structures - it sorts the data in place and affects the original data (in-place). It doesn't preserve the relative order or equal elements. If you have two elements with the same value in an unsorted collection, their relative order might be changed (or stay the same) in the sorted collection (non-stable). Finally, the elements are compared to each other to find their order (comparison-based).

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Complexity

| Name          |     Best      |    Average    |     Worst     | Memory | Stable | Comments |
| ------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------- |
| **Heap sort** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) |   1    |   No   |          |

### What is a heap?

A heap is a tree-like data structure. The type of heap we will use for our purposes will be a binary tree (a data structure that resembles a tree branch and is bound to start with one node and if were to branch out, is allowed a maximum of two successors extending from each node). While there exist few types of heaps, there are two distinctive features of a heap:

1. A heap must be complete, meaning that each level of the tree should be filled from left to right, and one is not allowed to create another level of the tree without filling all the possible nodes remaining on the last level.
   ![HeapOne](https://s3.stackabuse.com/media/articles/heap-sort-in-javascript-1.png)
2. Each node has to hold a value that is greater than or equal to (in the case of a min-heap, smaller than or equal to) the value of every one of its descendants. This is called the "heap condition".

### Mapping a heap to an array

What we have defined and depicted as a heap up until this point is merely a diagram, a collection of circles and lines. To use this structure in a JavaScript-based computer program, we need to rework it into an array or a list.

Luckily, this is a fairly straightforward operation that mimics the way we build the heap in the first place. We read and shift the elements off of the heap into an array in the same order we have placed them into the heap: from left to right and level by level.

An example of a heap and its array counterpart, after this shift:
![HeapToArray](https://s3.stackabuse.com/media/articles/heap-sort-in-javascript-2.png)

This way, not only can we manage to express a heap in code, but we also gain a compass with which to navigate inside that heap. We can deduct three equations that, given each node's index, will point us to the location of its parent and its right and left children inside the array:

![HeapPosition](https://s3.stackabuse.com/media/articles/heap-sort-in-javascript-3.png)

