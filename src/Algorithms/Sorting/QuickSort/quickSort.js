function partition(arr, start, end) {
    //Taking the last element as the pivot
    const pivotValue = arr[end];

    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], [arr[i]]];
            pivotIndex++;
        }
    }
    // Putting the pivot value in the middle

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    /*  
    Here, we are taking the last element as the pivot. We are using a variable pivotIndex to keep track of the "middle" position where all the elements to the left are less, and all the elements to the right are more than the pivotValue.

    As the last step, we swap the pivot, which is the last element in our case, with the pivotIndex. So, in the end, our pivot element would end up in the "middle." With all elements less than the pivot to the left side of it, and all elements greater than or equal to the pivot to the right of the pivot.
*/
    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }

    // Returns pivotIndex

    let index = partition(arr, start, end);

    // Recursively apply the same logic to the left and right subarrays

    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

function quickSortIterative(arr) {
    stack = [];

    stack.push(0);
    stack.push(arr.length - 1);

    while (stack[stack.length - 1] >= 0) {
        // Extracting the top unsorted subarray
        end = stack.pop();
        start = stack.pop();

        pivotIndex = partition(arr, start, end);

        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}
