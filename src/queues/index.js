
export class Queue {
  constructor() {
    this.queue = []  // A linked list would be more efficient for implementing a queue
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }

  peek() {
    return this.queue[0]
  }

  size() {
    return this.queue.length
  }

  isEmpty() {
    return this.size() === 0
  }
}
