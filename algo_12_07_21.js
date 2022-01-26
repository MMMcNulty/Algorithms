class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

/**
 * Class to represent a queue using a Linked List to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class LinkedListQueue {
    /**
     * The constructor is executed when instantiating a new LinkedListQueue() to construct
     * a new instance.
     * @returns {Queue} This new LinkedListQueue instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.head = null;
        this.len = 0;
    }

    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner != null) {
            arr.push(runner.data);
            runner = runner.next;
        }
        console.log(arr);
        return arr;
    }

    /**
     * Adds a new given item to the back of the queue and returns the new size of the queue
     * - Time: O(?)
     * - Space: O(?)
     * @param {any} item - The item to be added to the back of the queue
     * @returns {number} The new size of the queue
     */
    enQ(item) {
        if (this.head == null) {
            this.head = new Node(item);
            this.len = 1;
            return 1;
        }
        let count = 1;
        let runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
            count++;
        }
        runner.next = new Node(item);
        count++;
        this.len++;
        return count;
    }

    /**
     * Removes the item from the front of the queue
     * - Time: O(?)
     * - Space: O(?)
     * @returns {any} The removed item or undefined if the queue was empty
     */
    DQ() {
        let temp = this.head;
        this.head = this.head.next;
        this.len--;
        return temp;
    }

    /**
     * Returns whether or not this queue is empty
     * - Time: O(?)
     * - Space: O(?)
     * @returns {boolean} Whether or not the queue is empty
     */
    isEmpty() {
        return this.head == null;
    }

    /**
     * Returns the length of the queue
     * - Time: O(?)
     * - Space: O(?)
     * @returns {number} The length of the queue
     */
    size() {
        return this.len;
    }

    /**
     * Retrieves the item at the front of the queue without removing it.
     * - Time: O(?)
     * - Space: O(?)
     * @returns {any} The item at the front of the queue
     */
    front() {
        return this.head.data;
    }
}


let slinkyList = new LinkedListQueue()

slinkyList.isEmpty();
slinkyList.enQ(5);
slinkyList.enQ(8);
slinkyList.enQ(4);
slinkyList.enQ(2);
slinkyList.DQ();
console.log(slinkyList.front() + " is at the front");
console.log(slinkyList.size() + " is it's size")
slinkyList.toArr()
slinkyList.isEmpty();