function linearSearch(key, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    }
    return -1;
}
