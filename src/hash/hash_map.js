class Node {
  constructor(k, v) {
    this.v = v;
    this.k = k;
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.size = 1000;
    this.len = 0;
    this.hashSet = Array.from({ length: this.size }, () => new Node(0, 0));
  }

  hash(key) {
    return key % this.hashSet.length;
  }

  rehash() {
    const oldSet = this.hashSet;
    this.size *= 2;
    this.len = 0;
    this.hashSet = Array.from({ length: this.size }, () => new Node(0, 0));

    for (let i = 0; i < oldSet.length; i++) {
      let cur = oldSet[i].next;
      while (cur) {
        this.put(cur.k, cur.v);
        cur = cur.next;
      }
    }
  }

  put(key, value) {
    if (this.size / 2 === this.len) {
      this.rehash();
    }

    const index = this.hash(key);
    const newNode = new Node(key, value);

    let cur = this.hashSet[index];

    while (cur.next) {
      if (cur.next.k === key) {
        cur.next.v = value;
        return;
      }
      cur = cur.next;
    }

    this.len++;
    cur.next = newNode;
  }

  remove(key) {
    const index = this.hash(key);
    let cur = this.hashSet[index];

    while (cur.next) {
      if (cur.next.k === key) {
        cur.next = cur.next.next;
        this.len--;
        return;
      }

      cur = cur.next;
    }
  }

  get(key) {
    const index = this.hash(key);
    let cur = this.hashSet[index];

    while (cur.next) {
      if (cur.next.k === key) {
        return cur.next.v;
      }

      cur = cur.next;
    }

    return -1;
  }
}

module.exports = HashMap;
