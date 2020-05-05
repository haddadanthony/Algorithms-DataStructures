class Node {
  constructor(element) {
    this.element = element;
    this.pointer = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.pointer) {
        current = current.pointer;
      }
      current.pointer = node;
    }

    this.size++;
  }

  print() {
    let current = this.head;
    while(current.pointer) {
      console.log(current.element);
      current = current.pointer;
    }
    console.log(current.element);
  }

  insertAt(element, index) {
    const node = new Node(element);

    // Check if index is valid
    if(index > this.size) {
      console.log(`LL is only ${this.size} indexes long`);
      return;
    }

    let current = this.head;
    let previous = this.head;
    let counter = 0;

    // Traverse the LL until we reach the desired spot
    while(counter !== index) {
      previous = current;
      current = current.pointer;
      counter++;
    }

    // Insert at head
    if(index === 0) {
      this.head = node;
      node.pointer = current;
      this.size++;
      return;
    }
    previous.pointer = node;
    node.pointer = current;
    // Increment size
    this.size++;
  }

  removeFromIndex(index) {
    if(index > this.size - 1) {
      console.log('Index not found!');
      return
    }

    let current = this.head;
    let previous = this.head;
    let counter = 0;

    while(counter !== index) {
      previous = current;
      current = current.pointer;
      counter++;
    }

    if(index === 0) {
      this.head = current.pointer;
      this.size--;
      return;
    }
    previous.pointer = current.pointer;
    current.pointer = null;

    this.size--;
  }

  removeElement(el) {
    let current = this.head;
    let previous = this.head;
    let counter = 0;

    while(current.pointer) {
      if(current.element === el) {
        if(counter === 0) {
          this.head = current.pointer;
          current.pointer = null;
          this.size--;
          return;
        }
        previous.pointer = current.pointer;
        current.pointer = null;
        counter++;
        this.size--;
        return;
      }
      previous = current;
      current = current.pointer;
    }
    
    if(current.element === el) {
      previous.pointer = current.pointer;
      current.pointer = null;
      this.size--;
      return;
    } else {
      console.log('Element not found!');
    }
  }

  getSize() {
    console.log(`LL size is ${this.size}`);
  }

  isEmpty() {
    console.log(`${this.head ? false : true}`);
  }
}

const LL = new LinkedList();
LL.add(5);
LL.add(3);
LL.add(18);
LL.add(13);
LL.removeElement(20);
LL.print();
LL.getSize();
LL.isEmpty();

