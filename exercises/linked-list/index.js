// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    if (!this.head) {
      this.head = new Node(data)
    } else {
      const node = new Node(data, this.head)
      this.head = node
    }
  }
}

module.exports = { Node, LinkedList }
