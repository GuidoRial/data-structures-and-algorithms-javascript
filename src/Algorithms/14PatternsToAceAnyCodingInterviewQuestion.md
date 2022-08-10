# 14 Patterns to Ace Any Coding Interview Question

## Sliding Window
The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.

![Sliding Window](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FG9YRlqC9joZNTWsi1ul7tRkO6tv1-8i6d3wi0.jpg&w=828&q=75)

**Following are some ways you can identify that the given problem might require a sliding window:**

  - The problem input is a linear data structure such as a linked list, array, or string
  - You’re asked to find the longest/shortest substring, subarray, or a desired value

## Two Pointers or Iterators
Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

Two pointers are needed because with just pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.

![Two pointers](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FG9YRlqC9joZNTWsi1ul7tRkO6tv1-x4da3w5y.jpg&w=828&q=75)

**Ways to identify when to use the Two Pointer method:**
  - It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints.
  - The set of elements in the array is a pair, a triplet, or even a subarray

## Fast and Slow pointers
The Fast and Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is quite useful when dealing with cyclic linked lists or arrays.

By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

![Fast and slow pointers](https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FG9YRlqC9joZNTWsi1ul7tRkO6tv1-suft3wtu.jpg&w=828&q=75)

**How do you identify when to use the Fast and Slow pattern?**

  - The problem will deal with a loop in a linked list or array
  - When you need to know the position of a certain element or the overall length of the linked list.

*When should I use it over the Two Pointer method mentioned above?*
There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to determine if a linked list is a palindrome.