'use strict';

function newStack() {
  let top = null;

  function makeNode(value, succ) {
    return {
      value,
      succ,
    }
  }

  return {
    push(value) {
      let oldTop = top;
      top = makeNode(value, oldTop);
    },

    pop() {
      let oldTop = top;

      if (top !== null) {
        top = top.succ;
      }

      return oldTop.value;
    },

    printStack() {
      let node = top;
      while(node) {
        console.log(node.value);
        node = node.succ
      }
    },
  }
}

let stack = newStack();
stack.push(5);
stack.push('hello');
stack.push(8);
stack.printStack();
stack.pop();
stack.printStack();
