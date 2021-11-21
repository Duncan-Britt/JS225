(function() {
  const _ = function(collection) {
    function randomIndex() {
       return Math.floor(Math.random() * collection.length);
    }

    function hasPropertiesOf(obj, other) {
      return Object.getOwnPropertyNames(other).every(key => {
        return obj[key] === other[key];
      });
    }

    return {
      first() {
        return collection[0];
      },

      last() {
        return collection[collection.length - 1];
      },

      without(...values) {
        return collection.filter(e => !values.includes(e));
      },

      lastIndexOf(value) {
        let index = collection.length - 1;

        while (collection[index] !== value && index >= 0) {
          index -= 1;
        }

        return index;
      },

      sample(size) {
        if (arguments.length === 0) return collection[randomIndex()];

        const sampleArray = new Array(size);

        for (let i = 0; i < size; i++) {
          sampleArray[i] = this.sample();
        }

        return sampleArray
      },

      findWhere(obj) {
        for (let i = 0; i < collection.length; i++) {
          if (hasPropertiesOf(collection[i], obj)) return collection[i];
        }
      },

      where(obj) {
        return collection.filter(e => hasPropertiesOf(e, obj));
      },

      pluck(prop) {
        return collection.filter(e => e.hasOwnProperty(prop))
                    .map(e => e[prop]);
      },

      keys() {
        return Object.getOwnPropertyNames(collection);
      },

      values() {
        return Object.values(collection);
      },

      pick(prop) {
        const newObj = {};
        newObj[prop] = collection[prop];
        return newObj;
      },

      omit(...props) {
        const newObj = Object.assign({}, collection);
        props.forEach(prop => delete newObj[prop]);


        return newObj;
      },

      has(prop) {
        return ({}).hasOwnProperty.call(collection, prop);
      },

      isElement() {
        return collection.nodeType === 1;
      },

      isArray() {
        return Array.isArray(collection);
      },

      isObject() {
        return typeof collection === 'object' || typeof collection === 'function';
      },

      isFunction() {
        return typeof collection === 'function';
      },

      isBoolean() {
        const str = toString.call(collection);
        return str === '[object Boolean]';
      },

      isString() {
        return toString.call(collection) === "[object String]";
      },

      isNumber() {
        return toString.call(collection) === "[object Number]";
      },
    };
  }

  _.range = function() {
    const [ start, end ] = arguments.length === 1 ? [0, arguments[0]] :
                                                    [arguments[0], arguments[1]];
    let n = start;
    let i = 0;
    const newArray = new Array(end - start);

    while (n !== end) {
      newArray[i] = n;
      i += 1;
      n += 1;
    }

    return newArray;
  }

  _.extend = function(...args) {
    const [ h, ...t ] = args;
    if (t.length === 1) return Object.assign(h, t[0]);
    return Object.assign(h, _.extend(...t));
  };

  Object.getOwnPropertyNames(_()).forEach(methodName => {
    _[methodName] = function(arg) {
      return _(arg)[methodName]();
    }
  });

  window._ = _;
}());
