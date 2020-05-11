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

    findMin(child, parent) {
        if(!child.left) {
            return [child, parent];
        }
    
        return this.findMin(child.left, child);
    }

    remove(el) {
        let next = this.root;
        let curr = this.root;
        let [child, parent] = this.search(curr, el, null);
        let nodeToDelete = child;
        if(nodeToDelete) {
            if(nodeToDelete.right && !nodeToDelete.left) {
                if(parent===null){
                    this.root = nodeToDelete.right;
                }
                else if(parent.right === nodeToDelete) {
                    parent.right = nodeToDelete.right;
                } else{
                    parent.left = nodeToDelete.right;
                }
            } else if(nodeToDelete.left && !nodeToDelete.right) {
                if(parent===null){
                    this.root = nodeToDelete.left;
                }
                else if(parent.right === nodeToDelete) {
                    parent.right = nodeToDelete.right;
                } else {
                    parent.right = nodeToDelete.left;   
                }
            } else if(nodeToDelete.left && nodeToDelete.right) {
                let [minChild, minParent] = this.findMin(child.right, child);
                if(parent===null){
                    this.root.data = minChild.data;
                    minParent.left = null;
                }
                else if(parent.right === nodeToDelete) {
                    parent.right.data = minChild.data;
                    minParent.left = null;
                } else {
                    parent.left.data = minChild.data;
                    minParent.left = null;
                }
            } else if(!nodeToDelete.left && !nodeToDelete.right) {
                if(parent.right === nodeToDelete) {
                    parent.right = null;
                } else {
                    parent.left = null;
                }
            }
        }
    }

    search(node, el, parent) {
        if(!node) {
            return [null, parent];
        }

        if(node.data === el) {
            return [node, parent];
        };
        
        if(node.data > el) {
            return this.search(node.left, el, node);
        } else if(node.data < el) {
            return this.search(node.right, el, node);
        }
    }

    preOrder(node) {
        if(!node) {
            return;
        }

        console.log(node.data)
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    
    inOrder(node) {
        if(!node) {
            return;
        }

        this.inOrder(node.left);
        console.log(node.data)
        this.inOrder(node.right);
    }

    postOrder(node) {
        if(!node) {
            return;
        }

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }
}

const tree = new BST();
tree.insert(6);
tree.insert(8);
tree.insert(4);
tree.insert(12);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(14);


// tree.inOrder(tree.root);
tree.postOrder(tree.root);