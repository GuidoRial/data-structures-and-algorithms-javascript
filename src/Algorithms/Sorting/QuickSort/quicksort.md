# Quicksort

Quicksort is a divide and conquer algorithm.
Quicksort first divides a large array into two smaller
sub-arrays: the low elements and the high elements.
Quicksort can then recursively sort the sub-arrays

The steps are:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with
   values less than the pivot come before the pivot, while all
   elements with values greater than the pivot come after it
   (equal values can go either way). After this partitioning,
   the pivot is in its final position. This is called the
   partition operation.
3. Recursively apply the above steps to the sub-array of
   elements with smaller values and separately to the
   sub-array of elements with greater values.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| Name           |     Best      |    Average    |     Worst     | Memory | Stable | Comments                                                      |
| -------------- | :-----------: | :-----------: | :-----------: | :----: | :----: | :------------------------------------------------------------ |
| **Quick sort** | n&nbsp;log(n) | n&nbsp;log(n) | n<sup>2</sup> | log(n) |   No   | Quicksort is usually done in-place with O(log(n)) stack space |

## Understanding the logic behind quicksort

1. Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
2. Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called **partitioning**. If an element is equal to the pivot, it doesn't matter on which side it goes.
3. Repeat this process individually for the left and right side of the pivot, until the array is sorted.

Let's understand these steps further by walking through an example. Consider an array of unsorted elements [7, -2, 4, 1, 6, 5, 0, -4, 2]. We'll choose the last element to be the pivot. The step-by-step breakdown of the array would be as shown in the image below:

![QuicksortExample](https://stackabuse.s3.amazonaws.com/media/quicksort-in-javascript-1.jpg)

Elements that have been chosen as a pivot in one step of the algorithm have a colored outline. After partitioning, pivot elements are always in their correct positions in the array.

Arrays that have a bolded black outline represent the end of that specific recursive branch since we ended up with an array that contained only one element.

We can see the resulting sorting of this algorithm by simply going through the lowest element in each "column".
