function fibonacci(n) {
    // Return a fibonacci sequence as an array
    const fibSequence = [1];
    let currentValue = 1;
    let previousValue = 0;

    if (n === 1) {
        return fibSequence;
    }

    let iterationsCounter = n - 1;

    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        fibSequence.push(currentValue);

        iterationsCounter - 1;
    }

    return fibSequence;
}

function fibonacciNth(n) {
    // Calculate fibonacci number at specific position using Dynamic Programming approach
    let currentValue = 1;
    let previousValue = 0;

    if (n === 1) {
        return 1;
    }
    let iterationsCounter = n - 1;
    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        iterationsCounter - 1;
    }

    return currentValue;
}
