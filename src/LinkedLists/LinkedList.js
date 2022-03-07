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

    insertLast(data) {
        //Create a new node
        let node = new Node(data);

        let current;

        //If there isn't a head, make this node a head
        if (!this.head) {
            this.head = node;
        } else {
            // If there's already a head there, make current = head
            current = this.head;
            // While that head have something to point to, move me to that node until I reach the last one
            while (current.next) {
                current = current.next;
            }
            //Add a node at the end of the linked list
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        //check for out of range index
        if (index > 0 && index > this.size) {
            return;
        }
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        //I begin at the head
        current = this.head;

        let count = 0;
        while (count < index) {
            //I start counting at 0
            //Make the previous be the current node
            //Make the current be the next to the one I'm at
            //Basically I move up one step, count goes up, repeat until index === count
            previous = current;
            count++;
            current = current.next;
        }

        //Make this node point to itself
        node.next = current;

        //Make the previously last node point to this node
        previous.next = node;

        this.size++;
    }
}

export default LinkedList;
