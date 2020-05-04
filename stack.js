class Stack {
    constructor() {
        this.array = [];
    }

    // O(1)
    push(el) {
        this.array.push(el);
        console.log(`"${el}" has been pushed to the stack`);
    }

    // O(1)
    peek() {
        return this.array[this.array.length - 1];
    }

    // O(1)
    pop() {
        const last = this.array.pop();
        console.log(`"${last}" has been removed from the stack`);
    }

    // O(1)
    isEmpty() {
        if(this.array.length) return false;
        return true;
    }

    // O(1)
    print() {
        console.log(this.array);
    }
}

const stackOne = new Stack();

console.log(stackOne.isEmpty());
stackOne.push(5);
stackOne.push(2);
stackOne.push(8);
console.log(stackOne.peek());
stackOne.print();

stackOne.pop();
console.log(stackOne.peek());
stackOne.print();
console.log(stackOne.isEmpty());
