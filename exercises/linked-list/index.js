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
      return (this.head = null)
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
  //       return null
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
      return (this.head = headNode.next)
    }

    const prevNode = this.getAt(index - 1)

    if (!prevNode || !prevNode.next) {
      return
    }

    prevNode.next = prevNode.next.next
  }
}

module.exports = { Node, LinkedList }
