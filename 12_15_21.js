/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class Node {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         */
        this.left = null;
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         */
        this.root = null;
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(1) - Constant.
     * - Space: O(1) - Constant.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) - Linear in relation to the height of the tree.
     * - Space: O(1) - Constant.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        // Edge Case: Empty tree
        if (!current) {
            return null;
        }
        // Finding the smallest is just going to the left as much as you can
        while (current.left) {
            current = current.left;
        }

        return current.data;

    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) - Linear in relation to the height of the tree.
     * - Space: O(1) - Constant.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        // This is going to be identical to min, but to the right
        if (!current) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }

        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) - Linear with relation to the height of the tree.
     * - Space: O(h) - Linear with relation to the height of the tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (!current) {
            return null;
        } else if (!current.left) {
            return current.data;
        } else {
            return this.minRecursive(current.left);
        }
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) - Linear with relation to the height of the tree.
     * - Space: O(h) - Linear with relation to the height of the tree.
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (!current) {
            return null;
        } else if (!current.right) {
            return current.data;
        } else {
            return this.maxRecursive(current.right);
        }
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(h) - Linear with relation to height.
     * - Space: O(1) - Constant.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        // We'll start our runner (called current) at the root
        let current = this.root;

        // And while current is actually pointing at a node
        while (current) {
            // Check if that node's data matches our searchVal
            if (current.data === searchVal) {
                // If it does, return true
                return true;
                // Otherwise, if searchVal is less than current's data, let's move current to the left
            } else if (searchVal < current.data) {
                current = current.left;
                // And with our options exhausted, it means we'll send it to the right
            } else {
                current = current.right;
            }
        }

        // If we made it through the height of the tree without finding our searchVal,
        // the tree doesn't contain our value.
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(h) - Linear with relation to height (worst case at least).
     * - Space: O(h) - Linear with relation to height (because recursion).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        // If current is null, then it's not here
        if (!current) {
            return false;
        } else if (current.data === searchVal) { // If the current node's data matches, return true
            return true;
        } else if (searchVal < current.data) { // But if the searchVal is less than current's data, send it to the left recursively
            return this.containsRecursive(searchVal, current.left);
        } else { // Otherwise, we need to check right
            return this.containsRecursive(searchVal, current.right);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(hL + hR) - Linear with relation to the left and right (sub)heights.
     * - Space: O(1) - Constant.
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        // EDGE CASE: startNode is null? (i.e. empty tree or the startNode doesn't exist)
        if (!startNode) {
            return null;
        }

        // We previously already built the min and max methods, so simply
        // calculate the difference between what comes back and return it
        return this.max(startNode) - this.min(startNode);
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserve
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        // let follow = null
        // let current = this.root;
        // if(current == null){
        //     current == new Node(newVal)
        //     return this;
        // }
        // while(current != null){
        //     follow = current
        // }
        // while(current < newVal){
        //     current = current.left
        // }
        // while(current >= newVal ) {
        //     current = current.right
        // }
        // current.right = newVal
        // return 
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserve
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) { }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new Node(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new Node(10);
twoLevelTree.root.left = new Node(5);
twoLevelTree.root.right = new Node(15);

twoLevelTree.print();

/**  fullTree
 *                 root
 *              <-- 25 -->
 *            /            \
 *           15             50
 *         /    \         /    \
 *       10      22      35     70
 *      /  \    /  \    /  \   /  \
 *     4   12  18  24  31  44 66  90
 */
// Oh hey! Now we can use this!
const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);
fullTree.print();