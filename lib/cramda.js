"use strict";

exports.__esModule = true;
exports.first = first;
exports.tail = tail;
var curry = exports.curry = function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return fn.length > args.length ? curry(fn.bind.apply(fn, [null].concat(args))) : fn.apply(undefined, args);
  };
};

var any = exports.any = curry(function (pred, list) {
  if (list && list.some && typeof list.some === "function") {
    return list.some(pred);
  } else {
    return list.reduce(function (acc, item) {
      return acc || pred(item);
    }, false);
  }
});

var prop = exports.prop = curry(function (propName, obj) {
  return obj[propName];
});

var propEq = exports.propEq = curry(function (propName, val, obj) {
  if (!obj) {
    return false;
  } else {
    return val === obj[propName];
  }
});

var find = exports.find = curry(function (pred, list) {
  return list.reduce(function (acc, item) {
    if (pred(item)) {
      return item;
    } else {
      return acc;
    }
  }, undefined);
});

var equals = exports.equals = curry(function (a, b) {
  return a === b;
});

var findIndex = exports.findIndex = curry(function (finder, list) {
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

function first(list) {
  return list[0];
}

var head = exports.head = first;

function tail(list) {
  return list.slice(1);
}

var startsWith = exports.startsWith = curry(function (prefix, str) {
  if (!str) {
    return false;
  } else {
    return str.indexOf(prefix) === 0;
  }
});