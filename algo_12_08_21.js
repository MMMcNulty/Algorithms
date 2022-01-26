class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(n) - Linear, because we're traversing to the back of the stack to find the length
     * - Space: O(1) - Constant
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) { 
        let newTopOfStack = new Node(item);

        newTopOfStack.next = this.head;
        this.head = newTopOfStack;

        return this.length();
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {any} The removed item or null if this stack was empty.
     */
    pop() { 
        if(this.isEmpty()) {
            return null;
        }

        let removedItem = this.head;
        this.head = removedItem.next;

        return removedItem.data;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) - Linear
     * - Space: O(1) - Constant
     * @returns {any} The top / last item of this stack or null if empty.
     */
    peek() { 
        return this.head ? this.head.data : null; // OH HOW FANCY
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {boolean}
     */
    isEmpty() { 
        return this.head == null;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(n) - Linear
     * - Space: O(1) - Constant
     * @returns {number} The length.
     */
    size() { 
        let runner = this.head;
        let length = 0;
        while(runner) {
            length++;
            runner = runner.next;
        }
        return length;
    }
}


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
        // To cut down on time complexity, we can add 2 new properties:
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new given item to the back of the queue and returns the new size of the queue
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @param {any} item - The item to be added to the back of the queue
     * @returns {number} The new size of the queue
     */
    enqueue(item) {
        let newItem = new Node(item);
        // EDGE CASE: Empty?
        if (this.isEmpty()) {
            this.head = newItem;
        } else {   // Since we're using a tail, let's set the tail's next node to be our newly created item
            this.tail.next = newItem;
        }
        // Then, set the tail as the new item
        this.tail = newItem;
        // And increment our length before returning it
        this.length++;
        return this.length;
    }

    /**
     * Removes the item from the front of the queue
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {any} The removed item or undefined if the queue was empty
     */
    dequeue() {
        // Edge Cases: 
        //  1. Empty queue
        //  2. Only 1 item in the queue
        if (this.isEmpty()) {
            // this is just in case somebody's been messing with our data structure
            this.length = 0;
            // and return undefined
            return undefined;
        } else if (this.length == 1) { // If the queue only contains 1 item
            // hold onto the current head
            let removed = this.head;
            // set both the head and tail to null (because removing the only item means emptying the queue)
            this.head = null;
            this.tail = null;
            // set the length to 0
            this.length = 0;
            // and return the removed item's data
            return removed.data;
        }

        // hold onto the current head before removing it
        let removed = this.head;
        // set the head to the 2nd item
        this.head = removed.next;
        // decrement our length
        this.length--;
        // remove the removed node's reference to any other item
        removed.next = null;
        // and return its data
        return removed.data;
    }

    /**
     * Returns whether or not this queue is empty
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {boolean} Whether or not the queue is empty
     */
    isEmpty() {
        return this.head == null;
    }

    /**
     * Returns the length of the queue
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {number} The length of the queue
     */
    size() {
        return this.length;
    }

    /**
     * Retrieves the item at the front of the queue without removing it.
     * - Time: O(1) - Constant
     * - Space: O(1) - Constant
     * @returns {any} The item at the front of the queue
     */
    front() {
        // Gotta love ternary operators
        return this.head ? this.head.data : undefined;

        // The above line of code is just a shorthand for:
        if (this.head) {
            return this.head.data;
        } else {
            return undefined;
        }
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) { }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() { }

}