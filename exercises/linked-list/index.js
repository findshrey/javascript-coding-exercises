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

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }

    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    while (node && node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }

    if (!this.head.next) {
      this.head = null
      return
    }

    let prevNode = this.head
    let node = this.head.next

    while (node.next) {
      prevNode = node
      node = node.next
    }

    prevNode.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    if (index < 0) {
      return
    }

    let node = this.head
    let counter = 0

    while (node) {
      if (counter === index) break
      counter++
      node = node.next
    }

    return node
  }

  // getAt(index) {
  //   let node = this.head

  //   for (let counter; counter < index; counter++) {
  //     if (!node) {
  //       return
  //     }

  //     node = node.next
  //   }

  //   return node
  // }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      const headNode = this.head
      this.head = headNode.next
      return
    }

    const prevNode = this.getAt(index - 1)

    if (!prevNode || !prevNode.next) {
      return
    }

    prevNode.next = prevNode.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prevNode = this.getAt(index - 1)

    // Out of bounds scenario
    if (!prevNode) {
      const lastNode = this.getLast()
      lastNode.next = new Node(data)
      return
    }

    prevNode.next = new Node(data, prevNode.next)
  }

  forEach(fn) {
    let node = this.head
    let counter = 0

    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let node = this.head

    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }
