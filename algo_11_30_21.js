/**
 * Converts this list into an array containing the data of each node.
 * - Time: O(n) linear.
 * - Space: O(n).
 * @returns {Array<any>} An array of each node's data.
 */
toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
        arr.push(runner.data);
        runner = runner.next;
    }
    return arr;
}

/**
 * Creates a new node with the given data and inserts that node at the front
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @param {any} data The data for the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtFront(data) { }

/**
* Removes the first node of this list.
* - Time: (?).
* - Space: (?).
* @returns {any} The data from the removed node.
*/
removeHead() { }

// EXTRA
/**
* Calculates the average of this list.
* - Time: (?).
* - Space: (?).
* @returns {number|NaN} The average of the node's data.
*/
average() { }
    

const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().seedFromArr([1]);
const biNodeList = new SinglyLinkedList().seedFromArr([1, 2]);
const firstThreeList = new SinglyLinkedList().seedFromArr([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().seedFromArr([4, 5, 6]);
const unorderedList = new SinglyLinkedList().seedFromArr([
    -5, -10, 4, -3, 6, 1, -7, -2,
]);

// node 4 connects to node 1, back to head
const perfectLoopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head;

// node 4 connects to node 2
const loopList = new SinglyLinkedList().seedFromArr([1, 2, 3, 4]);
loopList.head.next.next.next = loopList.head.next;

const sortedDupeList = new SinglyLinkedList().seedFromArr([
    1, 1, 1, 2, 3, 3, 4, 5, 5,
]);