class LinkedList {
  constructor(val) {
    this.createInitialHeadNode(val);
  }

  createInitialHeadNode(val) {
    this.listHead = this.createNode(val);
    this.listTail = this.listHead;
    this.listTail.previous = {};
  }

  createNode(val) {
    return { val: val, next: {}, previous: {} };
  }

  add(val) {
    const headHasValue = this.listHead.val;

    if (headHasValue) {
      const newTail = this.createNode(val);

      this.listTail.next = newTail;

      this.replaceTail();
    } else {
      this.setInitialVal(val);
    }
  }

  replaceTail() {
    this.listTail.next.previous = this.listTail;
    this.listTail = this.listTail.next;
  }

  setInitialVal(val) {
    this.listHead.val = val;
    this.listTail = this.listHead;
  }

  remove() {
    if (this.listTail === this.listHead) {
      this.removeHeadVal();
    } else {
      this.listTail = this.listTail.previous;

      this.listTail.next = {};
    }
  }

  removeHeadVal() {
    this.listHead = this.createNode(null);

    this.listTail = this.listHead;
  }

  find(val, node = this.listHead) {
    let result;

    while (result === undefined) {
      if (node.val === val) {
        result = node;
      }

      if (!node.next) {
        result = false;
      }

      node = node.next;
    }

    return result;
  }

  get head() {
    return this.listHead;
  }

  get tail() {
    return this.listTail;
  }
}

module.exports = LinkedList;
