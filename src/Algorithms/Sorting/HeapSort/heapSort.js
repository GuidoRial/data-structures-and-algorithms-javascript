/* 
Since the difference between a max-heap and a min-heap is trivial and does not affect the general logic behind the Heap Sort algorithm, the implementation of the min-heap and, therefore, creation of an ascending order via heap sort is a matter of changing the comparison operators.
*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    insert(item) {
        this.heap.push(item);
        let index = this.heap.length - 1;
        let parent = this.parentIndex(index);

        while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
        }
    }

    delete() {
        let item = this.heap.shift();
        /* 
        The method starts by harvesting the largest element -therefore, the first element in the array representation of the heap. The built-in shift() method removes the first element of the array and returns the removed element, which we then store in the item variable.
        */
        this.heap.unshift(this.heap.pop());
        /* 
        The last element of the heap gets removed via pop() and gets placed to the recently emptied first space of heap via unshift(). unshift() is a built-in JavaScript method that works as the counterpart to shift(). While shift() removes the first element of the array and shifts the rest of the elements one space back, unshift() pushes an element to the beginning of the array and shifts the rest of the elements one space forward.
        */
        let index = 0;
        let leftChild = this.leftChildIndex(index);
        let rightChild = this.rightChildIndex(index);
        /*
        To be able to bubble the new root downward, pointers to the location of it, which is initially 0, and its two children (index, rightChild, leftChild) gets created.
        */
        while (
            (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
            this.heap[rightChild] > this.heap[index]
        ) {
            /* 
            The while() loop checks whether there exists a left child to the index node to ensure the existence of another level below (does not check for a right child yet) and if any of the children in this level is bigger than the node at [index].
            If the condition inside the while loop is met, a max variable is created to declare that the left node is the maximum value the method has encountered yet. Then inside the loop, in an if clause, we check whether a right child exists, and if it does, whether it is bigger than the left child we first checked. If the value of the right child is indeed bigger, its index replaces the value in max. 
            Whichever child holding the bigger value gets swapped with its parent via this.swap(max, index).
            The method moves its imaginary cursor one level down at the end of the while loop and goes on to execute the code inside the while loop over and over until its condition no longer holds.
            */
            let max = leftChild;
            if (
                this.heap[rightChild] &&
                this.heap[rightChild] > this.heap[max]
            ) {
                max = rightChild;
            }
            this.swap(max, index);
            index = max;
            leftChild = this.leftChildIndex(max);
            rightChild = this.rightChildIndex(max);
        }
        return item;
    }
}

function heapSort(arr) {
    let sorted = [];
    let myHeap = new MaxHeap();

    for (let i = 0; o < arr.length; i++) {
        myHeap.insert(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        sorted.push(myHeap.delete());
    }

    return sorted;
}
