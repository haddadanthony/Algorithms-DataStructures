// 1- Node class with properties data, left, right
// 2- BinarySearchTree class with property root and methods: insert, remove, inorder traversal, preorder traversal, and postorder and then some helper functions: findMinNode(node) so starting the search from a given node and search(node, data) so search for data starting from a given node

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertNode(node, el) {
        if(node.data > el.data && !node.left) {
            node.left = el;
            return;
        }

        if(node.data < el.data && !node.right) {
            node.right = el;
            return;
        }

        if(node.data < el.data) {
            this.insertNode(node.right, el);
        } else {
            this.insertNode(node.left, el);
        }

    }

    insert(el) {
        let node = new Node(el);

        if(!this.root) {
            this.root = node;
            return;
        } else {
            this.insertNode(this.root, node);
        }
    }

    findMin(curr) {
        if(!curr.left) {
            return curr;
        }
        return this.findMin(curr.left)
    }

    remove(el) {
        if(this.root.data === el) {
            let node = this.findMin(this.root);
            this.root = node;
            node = null;
        }
    }

    search(node, el) {
        if(node.data === el) {
            return node;
        }
        
        if(node.left) {
            return this.search(node.left, el);
        } else if(node.right) {
            return this.search(node.right, el);
        }
    }
}

const tree = new BST();
tree.insert(12);
tree.insert(8);
tree.insert(1);
tree.insert(52);
tree.insert(2);

console.log(tree.search(tree.root, 1));
// console.log(tree);