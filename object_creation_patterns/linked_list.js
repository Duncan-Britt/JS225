// function List(...elements) {
//   function isList(value) {
//     return this.constructor === value.constructor
//   }
//
//   function nodeAt(idx) {
//     let i = 0
//     let node = head
//     while (i < idx && node.succ) {
//       node = node.succ
//       ++i
//     }
//     return node
//   }
//
//   if (elements.length !== 0) {
//     i = elements.length - 1
//     node = { data: elements[i], succ: null }
//     while (i > 0) {
//       --i
//       node = { data: elements[i], succ: node }
//     }
//   } else {
//     node = null;
//   }
//
//   let head = node;
//   let size = elements.length;
//
//   return {
//     each(callback) {
//       if (head === null) return;
//       let node = head
//       callback(node.data)
//       while (node.succ) {
//         node = node.succ;
//         callback(node.data)
//       }
//     },
//
//     print() {
//       this.each(e => console.log(e))
//     },
//
//     inspect() {
//       let str = '( ';
//       this.each(e => str += e + ' ');
//       console.log(str += ')');
//     },
//
//     size() {
//       return size;
//     },
//
//     itemAt(idx) {
//       return this.nodeAt(idx).data
//     },
//
//     prepend(...values) {
//       for (let i = 0; i < values.length; i++) {
//         size++;
//         head = { data: values[i], succ: head }
//       }
//       return size;
//     },
//
//     append(...values) {
//       let i = 0;
//       if (head === null && values.length >= 1) {
//         head = { data: values[i++], succ: null };
//         size += 1;
//       }
//       let node = head;
//       for (; node.succ; node = node.succ) {}
//       for (; i < values.length; i++) {
//         node.succ = { data: values[i], succ: null };
//         node = node.succ;
//         size += 1;
//       }
//       return size;
//     },
//
//     insertAt(index, value) {
//       if (index === 0) {
//         size++;
//         return this.prepend(value);
//       }
//
//       size++;
//       let node = this.nodeAt(index - 1);
//       let succ = node.succ
//       node.succ = { data: value, succ: succ };
//     },
//
//     deleteAt(index) {
//       if (index === 0) {
//         size--;
//         return (head = head.succ).data;
//       }
//
//       size--;
//       let pred = this.nodeAt(index - 1);
//       let deleted = pred.succ
//       let succ = deleted.succ
//       pred.succ = succ
//       return deleted.data
//     },
//
//     concat(...args) {
//       const result = new List();
//       this.each(e => result.append(e));
//       args.forEach(arg => {
//         if (isList(arg)) {
//           arg.each(e => result.append(e));
//         } else {
//           result.append(arg);
//         }
//       });
//       return result;
//     },
//
//     equals(otherList) { // Could be optimized by breaking out of iteration.
//       let i = 0;        // To do so, replace each with a loop.
//       let bool = true;
//       this.each(e => {
//         if (e !== otherList.itemAt(i++)) {
//           bool = false;
//         }
//       });
//       return bool;
//     },
//
//     pop() {
//       const lastItem = this.itemAt(size - 1);
//       const newTail = this.nodeAt(size - 2);
//       newTail.succ = null;
//       size -= 1;
//       return lastItem;
//     },
//
//     shift() {
//       const firstItem = head.data;
//       head = head.succ;
//       size -= 1;
//       return firstItem;
//     },
//
//     slice(begin = 0, end = size) {
//       const newList = new List();
//       if (head === null) return newList;
//       end = end < size ? end : size;
//
//       let node = this.nodeAt(begin)
//       let i = begin;
//       while (i < end) {
//         newList.append(node.data);
//         node = node.succ;
//         i += 1;
//       }
//
//       return newList;
//     },
//   }
// }

function List(...elements) {
    function isList(value) {
      return this.constructor === value.constructor
    }

    function nodeAt(idx) {
      let i = 0
      let node = head
      while (i < idx && node.succ) {
        node = node.succ
        ++i
      }
      return node
    }

    if (elements.length !== 0) {
      i = elements.length - 1
      node = { data: elements[i], succ: null }
      while (i > 0) {
        --i
        node = { data: elements[i], succ: node }
      }
    } else {
      node = null;
    }

    let head = node;
    let size = elements.length;

    this.each = function(callback) {
      if (head === null) return;
      let node = head
      callback(node.data)
      while (node.succ) {
        node = node.succ;
        callback(node.data)
      }
    }

    this.size = function() {
      return size;
    }

    this.itemAt = function(idx) {
      return nodeAt(idx).data
    }

    this.prepend = function(...values) {
      for (let i = 0; i < values.length; i++) {
        size++;
        head = { data: values[i], succ: head }
      }
      return size;
    }

    this.append = function(...values) {
      let i = 0;
      if (head === null && values.length >= 1) {
        head = { data: values[i++], succ: null };
        size += 1;
      }
      let node = head;
      for (; node.succ; node = node.succ) {}
      for (; i < values.length; i++) {
        node.succ = { data: values[i], succ: null };
        node = node.succ;
        size += 1;
      }
      return size;
    }

    this.insertAt = function(index, value) {
      if (index === 0) {
        size++;
        return this.prepend(value);
      }

      size++;
      let node = this.nodeAt(index - 1);
      let succ = node.succ
      node.succ = { data: value, succ: succ };
    }

    this.deleteAt = function(index) {
      if (index === 0) {
        size--;
        return (head = head.succ).data;
      }

      size--;
      let pred = this.nodeAt(index - 1);
      let deleted = pred.succ
      let succ = deleted.succ
      pred.succ = succ
      return deleted.data
    }

    this.concat = function(...args) {
      const result = new List();
      this.each(e => result.append(e));
      args.forEach(arg => {
        if (isList(arg)) {
          arg.each(e => result.append(e));
        } else {
          result.append(arg);
        }
      });
      return result;
    }

    this.equals = function(otherList) { // Could be optimized by breaking out of iteration.
      let i = 0;        // To do so, replace each with a loop.
      let bool = true;
      this.each(e => {
        if (e !== otherList.itemAt(i++)) {
          bool = false;
        }
      });
      return bool;
    }

    this.pop = function() {
      const lastItem = this.itemAt(size - 1);
      const newTail = this.nodeAt(size - 2);
      newTail.succ = null;
      size -= 1;
      return lastItem;
    }

    this.shift = function() {
      const firstItem = head.data;
      head = head.succ;
      size -= 1;
      return firstItem;
    }

    this.slice = function(begin = 0, end = size) {
      const newList = new List();
      if (head === null) return newList;
      end = end < size ? end : size;

      let node = this.nodeAt(begin)
      let i = begin;
      while (i < end) {
        newList.append(node.data);
        node = node.succ;
        i += 1;
      }

      return newList;
    }
}

(function() {
  List.prototype.print = function() {
    this.each(e => console.log(e))
  }

  List.prototype.inspect = function() {
    let str = '( ';
    this.each(e => str += e + ' ');
    console.log(str += ')');
  }
})();

// const l1 = new List(1, 2, 3, 4);
// const l2 = l1.slice();
// l2.inspect();

const l1 = new List(1, 2, 3);
const l2 = new List(4, 5, 6);
l1.inspect();
l2.inspect();
const l3 = l1.concat(l2);
// const l3 = l1.concat(l2, 'a', 'b', 'c');
// l3.inspect();
// console.log(l1.equals(l2) === false);
// const l4 = new List(1, 2, 3);
// console.log(l1.equals(l4) === true);
// const l5 = new List();
// const l6 = new List();
// console.log(l5.equals(l6) === true);

// const l1 = new List(1, 2, 3, 4, 5);
// console.log(l1);

// l1.inspect();
// console.log(l1.size);
// console.log(l1.itemAt(3));
// l1.prepend(0);
// l1.inspect();
// l1.append(6);
// l1.inspect();
// console.log(l1.size);
// l1.insertAt(3, 2.5);
// l1.inspect();
// l1.deleteAt(3);
// l1.inspect();
// console.log(l1.size);
//
// const l2 = new List(1, 3, 5, 7, 9);
// l2.inspect();
// console.log(l2.size);
