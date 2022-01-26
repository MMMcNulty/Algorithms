/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
 class Queue {
    /**
     * The constructor is executed when instantiating a new Queue() to construct
     * a new instance.
     * @returns {Queue} This new Queue instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of the queue and returns the new size of the queue
     * - Time: O(?)
     * - Space: O(?)
     * @param {any} item - The item to be added to the back of the queue
     * @returns {number} The new size of the queue
     */
    enqueue(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes the item from the front of the queue
     * - Time: O(n)
     * - Space: O(?)
     * @returns {any} The removed item or undefined if the queue was empty
     */
    dequeue() {
        if (this.isEmpty()){return undefined}
        let removed = this.items[0];
        this.items.shift();👻 🎈🎈🎈🦄
        return removed; (☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜) a little bit of unicorns and test
    }

    /**
     * Returns whether or not this queue is empty
     * - Time: O(?)
     * - Space: O(?)
     * @returns {boolean} Whether or not the queue is empty
     */
    isEmpty() {
        return this.items.length == 0;
    }

    /**
     * Returns the length of the queue
     * - Time: O(?)
     * - Space: O(?)
     * @returns {number} The length of the queue
     */
    size() {
        return this.items.length;
    }

    /**
     * Retrieves the item at the front of the queue without removing it.
     * - Time: O(?)
     * - Space: O(?)
     * @returns {any} The item at the front of the queue
     */
    front() {
        return this.items[0];
    }
}

let Q = new Queue();
console.log(Q.isEmpty());
console.log(Q)
console.log(Q.enqueue(5));
console.log(Q.enqueue(4));
console.log(Q.enqueue(3));
console.log(Q.enqueue(2));
console.log(Q.enqueue(1));
console.log(Q.dequeue() + " was removed");
console.log("the size is " + Q.size());
console.log(Q.isEmpty());
console.log(Q.front() + " is at the front.");
