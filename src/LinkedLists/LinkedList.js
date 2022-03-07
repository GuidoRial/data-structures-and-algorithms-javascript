import Node from "./Node";

class LinkedList {
    constructor() {
        //By default it has no head and 0 size
        this.head = null;
        this.size = 0;
    }

    //Create a new head for this linked list, give it some data and make it point to itself
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
}

export default LinkedList;
