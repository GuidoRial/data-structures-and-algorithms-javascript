class Node {
    //Create a node with data and a pointer, by default it points to null
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default Node;
