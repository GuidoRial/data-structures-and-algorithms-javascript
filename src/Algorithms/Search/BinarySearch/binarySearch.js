function binarySearch(sortedArr, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArr[middle] === key) {
            // Found the key
            return middle;
        } else if (sortedArr[middle] < key) {
            // Continue searching to the right
            start = middle + 1;
        } else {
            // Continue searching to the left
            end = middle - 1;
        }
    }
    // Key wasn't found
    return -1;
}
