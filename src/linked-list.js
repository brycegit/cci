class LinkedList {
  constructor(val) {
    this._createInitialHeadNode(val);
  }

  _createInitialHeadNode(val) {
    this.listHead = this._createNode(val);
    this.listTail = this.listHead;
    this.listTail.previous = {};
  }

  _createNode(val) {
    return { val: val, next: {}, previous: {} };
  }

  add(val) {
    const headHasValue = this.listHead.val;

    if (headHasValue) {
      const newTail = this._createNode(val);

      this.listTail.next = newTail;

      this._replaceTail();
    } else {
      this._setInitialVal(val);
    }
  }

  _replaceTail() {
    this.listTail.next.previous = this.listTail;
    this.listTail = this.listTail.next;
  }

  _setInitialVal(val) {
    this.listHead.val = val;
    this.listTail = this.listHead;
  }

  remove() {
    if (this.listTail === this.listHead) {
      this._removeHeadVal();
    } else {
      this.listTail = this.listTail.previous;

      this.listTail.next = {};
    }
  }

  _removeHeadVal() {
    this.listHead = this._createNode(null);

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
