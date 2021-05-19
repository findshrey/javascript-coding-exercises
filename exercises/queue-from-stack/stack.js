class Stack {
  constructor() {
    this.data = []
  }

  push(record) {
    this.data.unshift(record)
  }

  pop() {
    return this.data.shift()
  }

  peek() {
    return this.data[0]
  }
}

module.exports = Stack
