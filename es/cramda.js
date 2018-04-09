export var curry = function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.length > args.length ? curry(fn.bind.apply(fn, [null].concat(args))) : fn.apply(undefined, args);
  };
};

export var any = curry(function (pred, list) {
  if (list && list.some && typeof list.some === "function") {
    return list.some(pred);
  } else {
    return list.reduce(function (acc, item) {
      return acc || pred(item);
    }, false);
  }
});

export var prop = curry(function (propName, obj) {
  return obj[propName];
});

export var propEq = curry(function (propName, val, obj) {
  if (!obj) {
    return false;
  } else {
    return val === obj[propName];
  }
});

export var find = curry(function (pred, list) {
  return list.reduce(function (acc, item) {
    if (pred(item)) {
      return item;
    } else {
      return acc;
    }
  }, undefined);
});

export var equals = curry(function (a, b) {
  return a === b;
});

export var findIndex = curry(function (finder, list) {
  if (!list) {
    return -1;
  }

  var itemIndex = -1;

  for (var i = 0; i < list.length; i++) {
    if (finder(list[i])) {
      itemIndex = i;
      break;
    }
  }

  return itemIndex;
});

export function first(list) {
  return list[0];
}

export var head = first;

export function tail(list) {
  return list.slice(1);
}

export var startsWith = curry(function (prefix, str) {
  if (!str) {
    return false;
  } else {
    return str.indexOf(prefix) === 0;
  }
});