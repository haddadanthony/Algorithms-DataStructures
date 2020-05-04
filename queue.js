class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(el) {
        this.queue.unshift(el);
    }

    dequeue() {
        this.queue.pop();
    }

    front() {
        return this.queue[this.queue.length - 1];
    }

    print() {
        return this.queue;
    }

    isEmpty() {
        return this.queue.length ? false : true;
    }
}

const queueOne = new Queue();
console.log(queueOne.isEmpty());
queueOne.enqueue(1);
console.log(queueOne.isEmpty());