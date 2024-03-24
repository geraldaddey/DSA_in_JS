class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyHashSet = function () {
  this.size = 1000;
  this.len = 0;
  this.hashSet = Array.from({ length: this.size }, () => new Node(0));
};

MyHashSet.prototype.hash = function (key) {
  return key % this.hashSet.length;
};

MyHashSet.prototype.rehash = function () {
  const oldSet = this.hashSet;
  this.size *= 2;
  this.len = 0;
  this.hashSet = Array.from({ length: this.size }, () => new Node(0));

  for (let i = 0; i < oldSet.length; i++) {
    let cur = oldSet[i].next;
    while (cur) {
      this.add(cur.val);
      cur = cur.next;
    }
  }
};

MyHashSet.prototype.add = function (key) {
  if (this.size / 2 === this.len) {
    this.rehash();
  }

  const index = this.hash(key);
  const newNode = new Node(key);

  let cur = this.hashSet[index];

  while (cur.next) {
    if (cur.next.val === key) return;
    cur = cur.next;
  }

  this.len++;
  cur.next = newNode;
};

MyHashSet.prototype.remove = function (key) {
  const index = this.hash(key);
  let cur = this.hashSet[index];

  while (cur.next) {
    if (cur.next.val === key) {
      cur.next = cur.next.next;
      this.len--;
      return;
    }

    cur = cur.next;
  }
};

MyHashSet.prototype.contains = function (key) {
  const index = this.hash(key);
  let cur = this.hashSet[index];

  while (cur.next) {
    if (cur.next.val === key) {
      return true;
    }

    cur = cur.next;
  }

  return false;
};

module.exports = MyHashSet;
