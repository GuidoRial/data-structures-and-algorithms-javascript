# Binary Search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

![BinarySearch](https://camo.githubusercontent.com/7b6a4e06ad8dcff3d88fa30c04fbe4d94e619ddd8d14d196796e3d9cfbf49d4f/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667)

## Complexity

**Time complexity:** `O(log(n))` since we split search area by two for every next iteration
