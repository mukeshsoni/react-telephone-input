require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var baseSlice = require('../internal/baseSlice'),
    isIterateeCall = require('../internal/isIterateeCall');

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  if (guard ? isIterateeCall(array, n, guard) : n == null) {
    n = 1;
  }
  return baseSlice(array, n < 0 ? 0 : n);
}

module.exports = drop;

},{"../internal/baseSlice":38,"../internal/isIterateeCall":57}],2:[function(require,module,exports){
var createFindIndex = require('../internal/createFindIndex');

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(chr) {
 *   return chr.user == 'barney';
 * });
 * // => 0
 *
 * // using the `_.matches` callback shorthand
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.findIndex(users, 'active', false);
 * // => 0
 *
 * // using the `_.property` callback shorthand
 * _.findIndex(users, 'active');
 * // => 2
 */
var findIndex = createFindIndex();

module.exports = findIndex;

},{"../internal/createFindIndex":47}],3:[function(require,module,exports){
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @alias head
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
  return array ? array[0] : undefined;
}

module.exports = first;

},{}],4:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],5:[function(require,module,exports){
var drop = require('./drop');

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @alias tail
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
  return drop(array, 1);
}

module.exports = rest;

},{"./drop":1}],6:[function(require,module,exports){
module.exports = require('./some');

},{"./some":12}],7:[function(require,module,exports){
var arrayFilter = require('../internal/arrayFilter'),
    baseCallback = require('../internal/baseCallback'),
    baseFilter = require('../internal/baseFilter'),
    isArray = require('../lang/isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias select
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * _.filter([4, 5, 6], function(n) {
 *   return n % 2 == 0;
 * });
 * // => [4, 6]
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // using the `_.matches` callback shorthand
 * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
 * // => ['barney']
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.pluck(_.filter(users, 'active', false), 'user');
 * // => ['fred']
 *
 * // using the `_.property` callback shorthand
 * _.pluck(_.filter(users, 'active'), 'user');
 * // => ['barney']
 */
function filter(collection, predicate, thisArg) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  predicate = baseCallback(predicate, thisArg, 3);
  return func(collection, predicate);
}

module.exports = filter;

},{"../internal/arrayFilter":17,"../internal/baseCallback":21,"../internal/baseFilter":23,"../lang/isArray":73}],8:[function(require,module,exports){
var baseEach = require('../internal/baseEach'),
    createFind = require('../internal/createFind');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.result(_.find(users, function(chr) {
 *   return chr.age < 40;
 * }), 'user');
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.result(_.find(users, 'active', false), 'user');
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * _.result(_.find(users, 'active'), 'user');
 * // => 'barney'
 */
var find = createFind(baseEach);

module.exports = find;

},{"../internal/baseEach":22,"../internal/createFind":46}],9:[function(require,module,exports){
var baseMatches = require('../internal/baseMatches'),
    find = require('./find');

/**
 * Performs a deep comparison between each element in `collection` and the
 * source object, returning the first element that has equivalent property
 * values.
 *
 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Objects are compared by
 * their own, not inherited, enumerable properties. For comparing a single
 * own or inherited property value see `_.matchesProperty`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Object} source The object of property values to match.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
 * // => 'barney'
 *
 * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
 * // => 'fred'
 */
function findWhere(collection, source) {
  return find(collection, baseMatches(source));
}

module.exports = findWhere;

},{"../internal/baseMatches":33,"./find":8}],10:[function(require,module,exports){
var arrayMap = require('../internal/arrayMap'),
    baseCallback = require('../internal/baseCallback'),
    baseMap = require('../internal/baseMap'),
    isArray = require('../lang/isArray');

/**
 * Creates an array of values by running each element in `collection` through
 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
 * arguments: (value, index|key, collection).
 *
 * If a property name is provided for `iteratee` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `iteratee` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
 * `sum`, `uniq`, and `words`
 *
 * @static
 * @memberOf _
 * @alias collect
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function timesThree(n) {
 *   return n * 3;
 * }
 *
 * _.map([1, 2], timesThree);
 * // => [3, 6]
 *
 * _.map({ 'a': 1, 'b': 2 }, timesThree);
 * // => [3, 6] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // using the `_.property` callback shorthand
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee, thisArg) {
  var func = isArray(collection) ? arrayMap : baseMap;
  iteratee = baseCallback(iteratee, thisArg, 3);
  return func(collection, iteratee);
}

module.exports = map;

},{"../internal/arrayMap":18,"../internal/baseCallback":21,"../internal/baseMap":32,"../lang/isArray":73}],11:[function(require,module,exports){
var arrayReduce = require('../internal/arrayReduce'),
    baseEach = require('../internal/baseEach'),
    createReduce = require('../internal/createReduce');

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` through `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not provided the first element of `collection` is used as the initial
 * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
 * and `sortByOrder`
 *
 * @static
 * @memberOf _
 * @alias foldl, inject
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.reduce([1, 2], function(total, n) {
 *   return total + n;
 * });
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
 *   result[key] = n * 3;
 *   return result;
 * }, {});
 * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
 */
var reduce = createReduce(arrayReduce, baseEach);

module.exports = reduce;

},{"../internal/arrayReduce":19,"../internal/baseEach":22,"../internal/createReduce":48}],12:[function(require,module,exports){
var arraySome = require('../internal/arraySome'),
    baseCallback = require('../internal/baseCallback'),
    baseSome = require('../internal/baseSome'),
    isArray = require('../lang/isArray'),
    isIterateeCall = require('../internal/isIterateeCall');

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is bound to `thisArg` and invoked
 * with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias any
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // using the `_.matches` callback shorthand
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.some(users, 'active', false);
 * // => true
 *
 * // using the `_.property` callback shorthand
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, thisArg) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
    predicate = undefined;
  }
  if (typeof predicate != 'function' || thisArg !== undefined) {
    predicate = baseCallback(predicate, thisArg, 3);
  }
  return func(collection, predicate);
}

module.exports = some;

},{"../internal/arraySome":20,"../internal/baseCallback":21,"../internal/baseSome":39,"../internal/isIterateeCall":57,"../lang/isArray":73}],13:[function(require,module,exports){
var getNative = require('../internal/getNative');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeNow = getNative(Date, 'now');

/**
 * Gets the number of milliseconds that have elapsed since the Unix epoch
 * (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @category Date
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => logs the number of milliseconds it took for the deferred function to be invoked
 */
var now = nativeNow || function() {
  return new Date().getTime();
};

module.exports = now;

},{"../internal/getNative":54}],14:[function(require,module,exports){
var isObject = require('../lang/isObject'),
    now = require('../date/now');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed invocations. Provide an options object to indicate that `func`
 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * Subsequent calls to the debounced function return the result of the last
 * `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the the debounced function is
 * invoked more than once during the `wait` timeout.
 *
 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading
 *  edge of the timeout.
 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
 *  delayed before it's invoked.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
 *  edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // avoid costly calculations while the window size is in flux
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // ensure `batchLog` is invoked once after 1 second of debounced calls
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', _.debounce(batchLog, 250, {
 *   'maxWait': 1000
 * }));
 *
 * // cancel a debounced call
 * var todoChanges = _.debounce(batchLog, 1000);
 * Object.observe(models.todo, todoChanges);
 *
 * Object.observe(models, function(changes) {
 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
 *     todoChanges.cancel();
 *   }
 * }, ['delete']);
 *
 * // ...at some point `models.todo` is changed
 * models.todo.completed = true;
 *
 * // ...before 1 second has passed `models.todo` is deleted
 * // which cancels the debounced `todoChanges` call
 * delete models.todo;
 */
function debounce(func, wait, options) {
  var args,
      maxTimeoutId,
      result,
      stamp,
      thisArg,
      timeoutId,
      trailingCall,
      lastCalled = 0,
      maxWait = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = wait < 0 ? 0 : (+wait || 0);
  if (options === true) {
    var leading = true;
    trailing = false;
  } else if (isObject(options)) {
    leading = !!options.leading;
    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
    }
    lastCalled = 0;
    maxTimeoutId = timeoutId = trailingCall = undefined;
  }

  function complete(isCalled, id) {
    if (id) {
      clearTimeout(id);
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
    if (isCalled) {
      lastCalled = now();
      result = func.apply(thisArg, args);
      if (!timeoutId && !maxTimeoutId) {
        args = thisArg = undefined;
      }
    }
  }

  function delayed() {
    var remaining = wait - (now() - stamp);
    if (remaining <= 0 || remaining > wait) {
      complete(trailingCall, maxTimeoutId);
    } else {
      timeoutId = setTimeout(delayed, remaining);
    }
  }

  function maxDelayed() {
    complete(trailing, timeoutId);
  }

  function debounced() {
    args = arguments;
    stamp = now();
    thisArg = this;
    trailingCall = trailing && (timeoutId || !leading);

    if (maxWait === false) {
      var leadingCall = leading && !timeoutId;
    } else {
      if (!maxTimeoutId && !leading) {
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled),
          isCalled = remaining <= 0 || remaining > maxWait;

      if (isCalled) {
        if (maxTimeoutId) {
          maxTimeoutId = clearTimeout(maxTimeoutId);
        }
        lastCalled = stamp;
        result = func.apply(thisArg, args);
      }
      else if (!maxTimeoutId) {
        maxTimeoutId = setTimeout(maxDelayed, remaining);
      }
    }
    if (isCalled && timeoutId) {
      timeoutId = clearTimeout(timeoutId);
    }
    else if (!timeoutId && wait !== maxWait) {
      timeoutId = setTimeout(delayed, wait);
    }
    if (leadingCall) {
      isCalled = true;
      result = func.apply(thisArg, args);
    }
    if (isCalled && !timeoutId && !maxTimeoutId) {
      args = thisArg = undefined;
    }
    return result;
  }
  debounced.cancel = cancel;
  return debounced;
}

module.exports = debounce;

},{"../date/now":13,"../lang/isObject":76}],15:[function(require,module,exports){
var MapCache = require('../internal/MapCache');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is coerced to a string and used as the
 * cache key. The `func` is invoked with the `this` binding of the memoized
 * function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoizing function.
 * @example
 *
 * var upperCase = _.memoize(function(string) {
 *   return string.toUpperCase();
 * });
 *
 * upperCase('fred');
 * // => 'FRED'
 *
 * // modifying the result cache
 * upperCase.cache.set('fred', 'BARNEY');
 * upperCase('fred');
 * // => 'BARNEY'
 *
 * // replacing `_.memoize.Cache`
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'barney' };
 * var identity = _.memoize(_.identity);
 *
 * identity(object);
 * // => { 'user': 'fred' }
 * identity(other);
 * // => { 'user': 'fred' }
 *
 * _.memoize.Cache = WeakMap;
 * var identity = _.memoize(_.identity);
 *
 * identity(object);
 * // => { 'user': 'fred' }
 * identity(other);
 * // => { 'user': 'barney' }
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new memoize.Cache;
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"../internal/MapCache":16}],16:[function(require,module,exports){
var mapDelete = require('./mapDelete'),
    mapGet = require('./mapGet'),
    mapHas = require('./mapHas'),
    mapSet = require('./mapSet');

/**
 * Creates a cache object to store key/value pairs.
 *
 * @private
 * @static
 * @name Cache
 * @memberOf _.memoize
 */
function MapCache() {
  this.__data__ = {};
}

// Add functions to the `Map` cache.
MapCache.prototype['delete'] = mapDelete;
MapCache.prototype.get = mapGet;
MapCache.prototype.has = mapHas;
MapCache.prototype.set = mapSet;

module.exports = MapCache;

},{"./mapDelete":63,"./mapGet":64,"./mapHas":65,"./mapSet":66}],17:[function(require,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[++resIndex] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],18:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],19:[function(require,module,exports){
/**
 * A specialized version of `_.reduce` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initFromArray] Specify using the first element of `array`
 *  as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initFromArray) {
  var index = -1,
      length = array.length;

  if (initFromArray && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],20:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],21:[function(require,module,exports){
var baseMatches = require('./baseMatches'),
    baseMatchesProperty = require('./baseMatchesProperty'),
    bindCallback = require('./bindCallback'),
    identity = require('../utility/identity'),
    property = require('../utility/property');

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

module.exports = baseCallback;

},{"../utility/identity":83,"../utility/property":84,"./baseMatches":33,"./baseMatchesProperty":34,"./bindCallback":41}],22:[function(require,module,exports){
var baseForOwn = require('./baseForOwn'),
    createBaseEach = require('./createBaseEach');

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./baseForOwn":27,"./createBaseEach":44}],23:[function(require,module,exports){
var baseEach = require('./baseEach');

/**
 * The base implementation of `_.filter` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

},{"./baseEach":22}],24:[function(require,module,exports){
/**
 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
 * without support for callback shorthands and `this` binding, which iterates
 * over `collection` using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element
 *  instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;

},{}],25:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],26:[function(require,module,exports){
var createBaseFor = require('./createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./createBaseFor":45}],27:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"../object/keys":78,"./baseFor":26}],28:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  if (pathKey !== undefined && pathKey in toObject(object)) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./toObject":68}],29:[function(require,module,exports){
var baseIsEqualDeep = require('./baseIsEqualDeep'),
    isObject = require('../lang/isObject'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

module.exports = baseIsEqual;

},{"../lang/isObject":76,"./baseIsEqualDeep":30,"./isObjectLike":60}],30:[function(require,module,exports){
var equalArrays = require('./equalArrays'),
    equalByTag = require('./equalByTag'),
    equalObjects = require('./equalObjects'),
    isArray = require('../lang/isArray'),
    isTypedArray = require('../lang/isTypedArray');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqualDeep;

},{"../lang/isArray":73,"../lang/isTypedArray":77,"./equalArrays":49,"./equalByTag":50,"./equalObjects":51}],31:[function(require,module,exports){
var baseIsEqual = require('./baseIsEqual'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./baseIsEqual":29,"./toObject":68}],32:[function(require,module,exports){
var baseEach = require('./baseEach'),
    isArrayLike = require('./isArrayLike');

/**
 * The base implementation of `_.map` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;

},{"./baseEach":22,"./isArrayLike":55}],33:[function(require,module,exports){
var baseIsMatch = require('./baseIsMatch'),
    getMatchData = require('./getMatchData'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === value && (value !== undefined || (key in toObject(object)));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

module.exports = baseMatches;

},{"./baseIsMatch":31,"./getMatchData":53,"./toObject":68}],34:[function(require,module,exports){
var baseGet = require('./baseGet'),
    baseIsEqual = require('./baseIsEqual'),
    baseSlice = require('./baseSlice'),
    isArray = require('../lang/isArray'),
    isKey = require('./isKey'),
    isStrictComparable = require('./isStrictComparable'),
    last = require('../array/last'),
    toObject = require('./toObject'),
    toPath = require('./toPath');

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

module.exports = baseMatchesProperty;

},{"../array/last":4,"../lang/isArray":73,"./baseGet":28,"./baseIsEqual":29,"./baseSlice":38,"./isKey":58,"./isStrictComparable":62,"./toObject":68,"./toPath":69}],35:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],36:[function(require,module,exports){
var baseGet = require('./baseGet'),
    toPath = require('./toPath');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

module.exports = basePropertyDeep;

},{"./baseGet":28,"./toPath":69}],37:[function(require,module,exports){
/**
 * The base implementation of `_.reduce` and `_.reduceRight` without support
 * for callback shorthands and `this` binding, which iterates over `collection`
 * using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initFromCollection Specify using the first or last element
 *  of `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initFromCollection
      ? (initFromCollection = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;

},{}],38:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],39:[function(require,module,exports){
var baseEach = require('./baseEach');

/**
 * The base implementation of `_.some` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;

},{"./baseEach":22}],40:[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],41:[function(require,module,exports){
var identity = require('../utility/identity');

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

module.exports = bindCallback;

},{"../utility/identity":83}],42:[function(require,module,exports){
/**
 * Used by `_.trim` and `_.trimLeft` to get the index of the first character
 * of `string` that is not found in `chars`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @param {string} chars The characters to find.
 * @returns {number} Returns the index of the first character not found in `chars`.
 */
function charsLeftIndex(string, chars) {
  var index = -1,
      length = string.length;

  while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
  return index;
}

module.exports = charsLeftIndex;

},{}],43:[function(require,module,exports){
/**
 * Used by `_.trim` and `_.trimRight` to get the index of the last character
 * of `string` that is not found in `chars`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @param {string} chars The characters to find.
 * @returns {number} Returns the index of the last character not found in `chars`.
 */
function charsRightIndex(string, chars) {
  var index = string.length;

  while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
  return index;
}

module.exports = charsRightIndex;

},{}],44:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength'),
    toObject = require('./toObject');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      return eachFunc(collection, iteratee);
    }
    var index = fromRight ? length : -1,
        iterable = toObject(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./getLength":52,"./isLength":59,"./toObject":68}],45:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{"./toObject":68}],46:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFind = require('./baseFind'),
    baseFindIndex = require('./baseFindIndex'),
    isArray = require('../lang/isArray');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFind(eachFunc, fromRight) {
  return function(collection, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, fromRight);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
  };
}

module.exports = createFind;

},{"../lang/isArray":73,"./baseCallback":21,"./baseFind":24,"./baseFindIndex":25}],47:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFindIndex = require('./baseFindIndex');

/**
 * Creates a `_.findIndex` or `_.findLastIndex` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFindIndex(fromRight) {
  return function(array, predicate, thisArg) {
    if (!(array && array.length)) {
      return -1;
    }
    predicate = baseCallback(predicate, thisArg, 3);
    return baseFindIndex(array, predicate, fromRight);
  };
}

module.exports = createFindIndex;

},{"./baseCallback":21,"./baseFindIndex":25}],48:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseReduce = require('./baseReduce'),
    isArray = require('../lang/isArray');

/**
 * Creates a function for `_.reduce` or `_.reduceRight`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over an array.
 * @param {Function} eachFunc The function to iterate over a collection.
 * @returns {Function} Returns the new each function.
 */
function createReduce(arrayFunc, eachFunc) {
  return function(collection, iteratee, accumulator, thisArg) {
    var initFromArray = arguments.length < 3;
    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
      ? arrayFunc(collection, iteratee, accumulator, initFromArray)
      : baseReduce(collection, baseCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
  };
}

module.exports = createReduce;

},{"../lang/isArray":73,"./baseCallback":21,"./baseReduce":37}],49:[function(require,module,exports){
var arraySome = require('./arraySome');

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

module.exports = equalArrays;

},{"./arraySome":20}],50:[function(require,module,exports){
/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

module.exports = equalByTag;

},{}],51:[function(require,module,exports){
var keys = require('../object/keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

module.exports = equalObjects;

},{"../object/keys":78}],52:[function(require,module,exports){
var baseProperty = require('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":35}],53:[function(require,module,exports){
var isStrictComparable = require('./isStrictComparable'),
    pairs = require('../object/pairs');

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

module.exports = getMatchData;

},{"../object/pairs":80,"./isStrictComparable":62}],54:[function(require,module,exports){
var isNative = require('../lang/isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"../lang/isNative":75}],55:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":52,"./isLength":59}],56:[function(require,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],57:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isIndex = require('./isIndex'),
    isObject = require('../lang/isObject');

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

module.exports = isIterateeCall;

},{"../lang/isObject":76,"./isArrayLike":55,"./isIndex":56}],58:[function(require,module,exports){
var isArray = require('../lang/isArray'),
    toObject = require('./toObject');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

module.exports = isKey;

},{"../lang/isArray":73,"./toObject":68}],59:[function(require,module,exports){
/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],60:[function(require,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],61:[function(require,module,exports){
/**
 * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
 * character code is whitespace.
 *
 * @private
 * @param {number} charCode The character code to inspect.
 * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
 */
function isSpace(charCode) {
  return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
    (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
}

module.exports = isSpace;

},{}],62:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"../lang/isObject":76}],63:[function(require,module,exports){
/**
 * Removes `key` and its value from the cache.
 *
 * @private
 * @name delete
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
 */
function mapDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

module.exports = mapDelete;

},{}],64:[function(require,module,exports){
/**
 * Gets the cached value for `key`.
 *
 * @private
 * @name get
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the cached value.
 */
function mapGet(key) {
  return key == '__proto__' ? undefined : this.__data__[key];
}

module.exports = mapGet;

},{}],65:[function(require,module,exports){
/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a cached value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapHas(key) {
  return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
}

module.exports = mapHas;

},{}],66:[function(require,module,exports){
/**
 * Sets `value` to `key` of the cache.
 *
 * @private
 * @name set
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to cache.
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache object.
 */
function mapSet(key, value) {
  if (key != '__proto__') {
    this.__data__[key] = value;
  }
  return this;
}

module.exports = mapSet;

},{}],67:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('./isIndex'),
    isLength = require('./isLength'),
    keysIn = require('../object/keysIn');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = shimKeys;

},{"../lang/isArguments":72,"../lang/isArray":73,"../object/keysIn":79,"./isIndex":56,"./isLength":59}],68:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

module.exports = toObject;

},{"../lang/isObject":76}],69:[function(require,module,exports){
var baseToString = require('./baseToString'),
    isArray = require('../lang/isArray');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

module.exports = toPath;

},{"../lang/isArray":73,"./baseToString":40}],70:[function(require,module,exports){
var isSpace = require('./isSpace');

/**
 * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the first non-whitespace character.
 */
function trimmedLeftIndex(string) {
  var index = -1,
      length = string.length;

  while (++index < length && isSpace(string.charCodeAt(index))) {}
  return index;
}

module.exports = trimmedLeftIndex;

},{"./isSpace":61}],71:[function(require,module,exports){
var isSpace = require('./isSpace');

/**
 * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedRightIndex(string) {
  var index = string.length;

  while (index-- && isSpace(string.charCodeAt(index))) {}
  return index;
}

module.exports = trimmedRightIndex;

},{"./isSpace":61}],72:[function(require,module,exports){
var isArrayLike = require('../internal/isArrayLike'),
    isObjectLike = require('../internal/isObjectLike');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Native method references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) &&
    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
}

module.exports = isArguments;

},{"../internal/isArrayLike":55,"../internal/isObjectLike":60}],73:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var arrayTag = '[object Array]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

module.exports = isArray;

},{"../internal/getNative":54,"../internal/isLength":59,"../internal/isObjectLike":60}],74:[function(require,module,exports){
var isObject = require('./isObject');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

module.exports = isFunction;

},{"./isObject":76}],75:[function(require,module,exports){
var isFunction = require('./isFunction'),
    isObjectLike = require('../internal/isObjectLike');

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isNative;

},{"../internal/isObjectLike":60,"./isFunction":74}],76:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],77:[function(require,module,exports){
var isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}

module.exports = isTypedArray;

},{"../internal/isLength":59,"../internal/isObjectLike":60}],78:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isArrayLike = require('../internal/isArrayLike'),
    isObject = require('../lang/isObject'),
    shimKeys = require('../internal/shimKeys');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

module.exports = keys;

},{"../internal/getNative":54,"../internal/isArrayLike":55,"../internal/shimKeys":67,"../lang/isObject":76}],79:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('../internal/isIndex'),
    isLength = require('../internal/isLength'),
    isObject = require('../lang/isObject');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keysIn;

},{"../internal/isIndex":56,"../internal/isLength":59,"../lang/isArguments":72,"../lang/isArray":73,"../lang/isObject":76}],80:[function(require,module,exports){
var keys = require('./keys'),
    toObject = require('../internal/toObject');

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;

},{"../internal/toObject":68,"./keys":78}],81:[function(require,module,exports){
var baseToString = require('../internal/baseToString');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to search.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = baseToString(string);
  position = position == null
    ? 0
    : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

  return string.lastIndexOf(target, position) == position;
}

module.exports = startsWith;

},{"../internal/baseToString":40}],82:[function(require,module,exports){
var baseToString = require('../internal/baseToString'),
    charsLeftIndex = require('../internal/charsLeftIndex'),
    charsRightIndex = require('../internal/charsRightIndex'),
    isIterateeCall = require('../internal/isIterateeCall'),
    trimmedLeftIndex = require('../internal/trimmedLeftIndex'),
    trimmedRightIndex = require('../internal/trimmedRightIndex');

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  var value = string;
  string = baseToString(string);
  if (!string) {
    return string;
  }
  if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = (chars + '');
  return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
}

module.exports = trim;

},{"../internal/baseToString":40,"../internal/charsLeftIndex":42,"../internal/charsRightIndex":43,"../internal/isIterateeCall":57,"../internal/trimmedLeftIndex":70,"../internal/trimmedRightIndex":71}],83:[function(require,module,exports){
/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],84:[function(require,module,exports){
var baseProperty = require('../internal/baseProperty'),
    basePropertyDeep = require('../internal/basePropertyDeep'),
    isKey = require('../internal/isKey');

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = property;

},{"../internal/baseProperty":35,"../internal/basePropertyDeep":36,"../internal/isKey":58}],85:[function(require,module,exports){
'use strict';

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', '+.. ... ... ...'], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32', '+.. ... .. .. ..'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', '+. (...) ...-....', 1, ['204', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', '', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86', '+.. ..-........'], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506', '+... ....-....'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', '', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45', '+.. .. .. .. ..'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', '', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503', '+... ....-....'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', '+... .. ... .. ..'], ['France', 'fr', '33', '+.. . .. .. .. ..'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49', '+.. ... .......'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', '', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502', '+... ....-....'], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509', '+... ....-....'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852', '+... .... ....'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354', '+... ... ....'], ['India (भारत)', 'in', '91', '+.. .....-.....'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353', '+... .. .......'], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', '+.. ... ......', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81', '+.. ... .. ....'], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', '+. ... ...-..-..', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60', '+.. ..-....-....'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212'], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31', '+.. .. ........'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64', '+.. ...-...-....'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', '+.. ... .. ...'], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92', '+.. ...-.......'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63', '+.. ... ....'], ['Poland (Polska)', 'pl', '48', '+.. ...-...-...'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', '', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262'], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', '+. ... ...-..-..', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy (Saint-Barthélemy)', 'bl', '590', '', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', '', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65', '+.. ....-....'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34', '+.. ... ... ...'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46', '+.. .. ... .. ..'], ['Switzerland (Schweiz)', 'ch', '41', '+.. .. ... .. ..'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90', '+.. ... ... .. ..'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', '+.. .... ......'], ['United States', 'us', '1', '+. (...) ...-....', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', '+.. .. .... ....', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna', 'wf', '681'], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263']];

// we will build this in the loop below
var allCountryCodes = {};
var allCountriesIso2Lookup = {};
var addCountryCode = function addCountryCode(iso2, dialCode, priority) {
  if (!(dialCode in allCountryCodes)) {
    allCountryCodes[dialCode] = [];
  }
  var index = priority || 0;
  allCountryCodes[dialCode][index] = iso2;
};

// loop over all of the countries above
// allCountries2 = _.map(allCountries, function(country) {
//   return {
//     name: country[0],
//     iso2: country[1],
//     dialCode: country[2],
//     format: country[3],
//     hasAreaCodes: country.length > 4
//   }
// });

for (var i = 0; i < allCountries.length; i++) {
  // countries
  var c = allCountries[i];
  allCountries[i] = {
    name: c[0],
    iso2: c[1],
    dialCode: c[2],
    priority: c[4] || 0
  };
  // format
  if (c[3]) {
    allCountries[i].format = c[3];
  }

  // area codes
  if (c[5]) {
    allCountries[i].hasAreaCodes = true;
    for (var j = 0; j < c[5].length; j++) {
      // full dial code is country code + dial code
      var dialCode = c[2] + c[5][j];
      addCountryCode(c[1], dialCode);
    }
  }

  // dial codes
  addCountryCode(c[1], c[2], c[4]);

  allCountriesIso2Lookup[allCountries[i].iso2] = i;
}

module.exports = {
  allCountries: allCountries,
  allCountriesIso2Lookup: allCountriesIso2Lookup,
  allCountryCodes: allCountryCodes
};

},{}],"react-telephone-input":[function(require,module,exports){
'use strict';

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

var some = require('lodash/collection/some');
var findWhere = require('lodash/collection/findWhere');
var reduce = require('lodash/collection/reduce');
var map = require('lodash/collection/map');
var filter = require('lodash/collection/filter');
var any = require('lodash/collection/any');
var findIndex = require('lodash/array/findIndex');
var first = require('lodash/array/first');
var rest = require('lodash/array/rest');
var debounce = require('lodash/function/debounce');
var memoize = require('lodash/function/memoize');
// import lodash string methods
var trim = require('lodash/string/trim');
var startsWith = require('lodash/string/startsWith');

var React = require('react');
var ReactDOM = require('react-dom');
var onClickOutside = require('react-onclickoutside');
var classNames = require('classnames');
var countryData = require('./country_data');
var allCountries = countryData.allCountries;
var allCountriesIso2Lookup = countryData.allCountriesIso2Lookup;

if (typeof document !== 'undefined') {
    var isModernBrowser = Boolean(document.createElement('input').setSelectionRange);
} else {
    var isModernBrowser = true;
}

var keys = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
};

function isNumberValid(inputNumber) {
    var countries = countryData.allCountries;
    return some(countries, function (country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

var ReactTelephoneInput = React.createClass({
    displayName: 'ReactTelephoneInput',

    mixins: [onClickOutside],
    getInitialState: function getInitialState() {
        var inputNumber = this.props.value || '';
        var selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        var selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);
        var preferredCountries = [];

        preferredCountries = this.props.preferredCountries.map(function (iso2) {
            return allCountriesIso2Lookup.hasOwnProperty(iso2) ? allCountries[allCountriesIso2Lookup[iso2]] : null;
        }).filter(function (val) {
            return val !== null;
        });

        // TODO: filter out nulls

        return {
            preferredCountries: preferredCountries,
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber,
            showDropDown: false,
            queryString: '',
            freezeSelection: false,
            debouncedQueryStingSearcher: debounce(this.searchCountry, 100)
        };
    },
    propTypes: {
        value: React.PropTypes.string,
        autoFormat: React.PropTypes.bool,
        defaultCountry: React.PropTypes.string,
        onlyCountries: React.PropTypes.arrayOf(React.PropTypes.object),
        preferredCountries: React.PropTypes.arrayOf(React.PropTypes.string),
        onChange: React.PropTypes.func,
        onEnterKeyPress: React.PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
        return {
            value: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[1].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function onEnterKeyPress() {}
        };
    },
    getNumber: function getNumber() {
        return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
    },
    getValue: function getValue() {
        return this.getNumber();
    },
    componentDidMount: function componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);

        this._cursorToEnd(true);
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
    scrollTo: function scrollTo(country, middle) {
        if (!country) {
            return;
        }

        var container = ReactDOM.findDOMNode(this.refs.flagDropdownList);

        if (!container) {
            return;
        }

        var containerHeight = container.offsetHeight;
        var containerOffset = container.getBoundingClientRect();
        var containerTop = containerOffset.top + document.body.scrollTop;
        var containerBottom = containerTop + containerHeight;

        var element = country;
        var elementOffset = element.getBoundingClientRect();

        var elementHeight = element.offsetHeight;
        var elementTop = elementOffset.top + document.body.scrollTop;
        var elementBottom = elementTop + elementHeight;
        var newScrollTop = elementTop - containerTop + container.scrollTop;
        var middleOffset = containerHeight / 2 - elementHeight / 2;

        if (elementTop < containerTop) {
            // scroll up
            if (middle) {
                newScrollTop -= middleOffset;
            }
            container.scrollTop = newScrollTop;
        } else if (elementBottom > containerBottom) {
            // scroll down
            if (middle) {
                newScrollTop += middleOffset;
            }
            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
        }
    },
    formatNumber: function formatNumber(text, pattern) {
        if (!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if (text && text.length < 2 || !pattern || !this.props.autoFormat) {
            return '+' + text;
        }

        var formattedObject = reduce(pattern, function (acc, character) {
            if (acc.remainingText.length === 0) {
                return acc;
            }

            if (character !== '.') {
                return {
                    formattedText: acc.formattedText + character,
                    remainingText: acc.remainingText
                };
            }

            return {
                formattedText: acc.formattedText + first(acc.remainingText),
                remainingText: rest(acc.remainingText)
            };
        }, { formattedText: '', remainingText: text.split('') });
        return formattedObject.formattedText + formattedObject.remainingText.join('');
    },

    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd: function _cursorToEnd(skipFocus) {
        var input = this.refs.numberInput;
        if (skipFocus) {
            this.handleInputFocus();
        } else {
            input.focus();

            if (isModernBrowser) {
                var len = input.value.length;
                input.setSelectionRange(len, len);
            }
        }
    },
    // memoize results based on the first 5/6 characters. That is all that matters
    guessSelectedCountry: memoize(function (inputNumber) {
        var secondBestGuess = findWhere(allCountries, { iso2: this.props.defaultCountry }) || this.props.onlyCountries[0];
        if (trim(inputNumber) !== '') {
            var bestGuess = reduce(this.props.onlyCountries, function (selectedCountry, country) {
                if (startsWith(inputNumber, country.dialCode)) {
                    if (country.dialCode.length > selectedCountry.dialCode.length) {
                        return country;
                    }
                    if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                        return country;
                    }
                }

                return selectedCountry;
            }, { dialCode: '', priority: 10001 }, this);
        } else {
            return secondBestGuess;
        }

        if (!bestGuess.name) {
            return secondBestGuess;
        }

        return bestGuess;
    }),
    getElement: function getElement(index) {
        return ReactDOM.findDOMNode(this.refs['flag_no_' + index]);
    },
    handleFlagDropdownClick: function handleFlagDropdownClick() {
        var _this = this;

        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: findWhere(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.props.onlyCountries, this.state.selectedCountry)
        }, function () {
            // only need to scrool if the dropdown list is alive
            if (_this.state.showDropDown) {
                _this.scrollTo(_this.getElement(_this.state.highlightCountryIndex + _this.state.preferredCountries.length));
            }
        });
    },
    handleInput: function handleInput(event) {
        var formattedNumber = '+',
            newSelectedCountry = this.state.selectedCountry,
            freezeSelection = this.state.freezeSelection;

        // if the input is the same as before, must be some special key like enter etc.
        if (event.target.value === this.state.formattedNumber) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        if (event.target.value.length > 0) {
            // before entering the number in new format, lets check if the dial code now matches some other country
            var inputNumber = event.target.value.replace(/\D/g, '');

            // we don't need to send the whole number to guess the country... only the first 6 characters are enough
            // the guess country function can then use memoization much more effectively since the set of input it gets has drastically reduced
            if (!this.state.freezeSelection || this.state.selectedCountry.dialCode.length > inputNumber.length) {
                newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6));
                freezeSelection = false;
            }
            // let us remove all non numerals from the input
            formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
        }

        var caretPosition = event.target.selectionStart;
        var oldFormattedText = this.state.formattedNumber;
        var diff = formattedNumber.length - oldFormattedText.length;

        this.setState({
            formattedNumber: formattedNumber,
            freezeSelection: freezeSelection,
            selectedCountry: newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : this.state.selectedCountry
        }, function () {
            if (isModernBrowser) {
                if (caretPosition == 1) {
                    caretPosition++;
                }

                if (diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.refs.numberInput.setSelectionRange(caretPosition, caretPosition);
                }
            }

            if (this.props.onChange) {
                this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
            }
        });
    },
    handleInputClick: function handleInputClick() {
        this.setState({ showDropDown: false });
    },
    handleFlagItemClick: function handleFlagItemClick(country) {
        var currentSelectedCountry = this.state.selectedCountry;
        var nextSelectedCountry = findWhere(this.props.onlyCountries, country);

        // tiny optimization
        if (currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            // TODO - the below replacement is a bug. It will replace stuff from middle too
            var newNumber = this.state.formattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode);
            var formattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

            this.setState({
                showDropDown: false,
                selectedCountry: nextSelectedCountry,
                freezeSelection: true,
                formattedNumber: formattedNumber
            }, function () {
                this._cursorToEnd();
                if (this.props.onChange) {
                    this.props.onChange(formattedNumber, nextSelectedCountry);
                }
            });
        } else {
            this.setState({ showDropDown: false });
        }
    },
    handleInputFocus: function handleInputFocus() {
        // if the input is blank, insert dial code of the selected country
        if (this.refs.numberInput.value === '+') {
            this.setState({ formattedNumber: '+' + this.state.selectedCountry.dialCode });
        }
    },
    _getHighlightCountryIndex: function _getHighlightCountryIndex(direction) {
        // had to write own function because underscore does not have findIndex. lodash has it
        var highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if (highlightCountryIndex < 0 || highlightCountryIndex >= this.props.onlyCountries.length + this.state.preferredCountries.length) {
            return highlightCountryIndex - direction;
        }

        return highlightCountryIndex;
    },
    // memoize search results... caching all the way
    _searchCountry: memoize(function (queryString) {
        if (!queryString || queryString.length === 0) {
            return null;
        }
        // don't include the preferred countries in search
        var probableCountries = filter(this.props.onlyCountries, function (country) {
            return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
        }, this);
        return probableCountries[0];
    }),
    searchCountry: function searchCountry() {
        var probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        var probableCandidateIndex = findIndex(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;

        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: '',
            highlightCountryIndex: probableCandidateIndex
        });
    },
    handleKeydown: function handleKeydown(event) {
        if (!this.state.showDropDown) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        var self = this;
        function _moveHighlight(direction) {
            self.setState({
                highlightCountryIndex: self._getHighlightCountryIndex(direction)
            }, function () {
                self.scrollTo(self.getElement(self.state.highlightCountryIndex), true);
            });
        }

        switch (event.which) {
            case keys.DOWN:
                _moveHighlight(1);
                break;
            case keys.UP:
                _moveHighlight(-1);
                break;
            case keys.ENTER:
                this.handleFlagItemClick(this.props.onlyCountries[this.state.highlightCountryIndex], event);
                break;
            case keys.ESC:
                this.setState({ showDropDown: false }, this._cursorToEnd);
                break;
            default:
                if (event.which >= keys.A && event.which <= keys.Z || event.which === keys.SPACE) {
                    this.setState({ queryString: this.state.queryString + String.fromCharCode(event.which) }, this.state.debouncedQueryStingSearcher);
                }
        }
    },
    handleInputKeyDown: function handleInputKeyDown(event) {
        if (event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    },
    handleClickOutside: function handleClickOutside() {
        if (this.state.showDropDown) {
            this.setState({
                showDropDown: false
            });
        }
    },
    getCountryDropDownList: function getCountryDropDownList() {

        var countryDropDownList = map(this.state.preferredCountries.concat(this.props.onlyCountries), function (country, index) {
            var itemClasses = classNames({
                country: true,
                preferred: country.iso2 === 'us' || country.iso2 === 'gb',
                active: country.iso2 === 'us',
                highlight: this.state.highlightCountryIndex === index
            });

            var inputFlagClasses = 'flag ' + country.iso2;

            return React.createElement('li', {
                ref: 'flag_no_' + index,
                key: 'flag_no_' + index,
                'data-flag-key': 'flag_no_' + index,
                className: itemClasses,
                'data-dial-code': '1',
                'data-country-code': country.iso2,
                onClick: this.handleFlagItemClick.bind(this, country) }, React.createElement('div', { className: inputFlagClasses, style: this.getFlagStyle() }), React.createElement('span', { className: 'country-name' }, country.name), React.createElement('span', { className: 'dial-code' }, '+' + country.dialCode));
        }, this);

        var dashedLi = React.createElement('li', { key: "dashes", className: 'divider' });
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        var dropDownClasses = classNames({
            'country-list': true,
            'hide': !this.state.showDropDown
        });
        return React.createElement('ul', { ref: 'flagDropdownList', className: dropDownClasses }, countryDropDownList);
    },
    getFlagStyle: function getFlagStyle() {
        return {
            width: 16,
            height: 11,
            backgroundImage: 'url(' + this.props.flagsImagePath + ')'
        };
    },
    handleInputBlur: function handleInputBlur() {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry);
        }
    },
    render: function render() {
        var arrowClasses = classNames({
            'arrow': true,
            'up': this.state.showDropDown
        });
        var inputClasses = classNames({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var flagViewClasses = classNames({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        var inputFlagClasses = 'flag ' + this.state.selectedCountry.iso2;

        return React.createElement('div', { className: 'react-tel-input' }, React.createElement('input', {
            onChange: this.handleInput,
            onClick: this.handleInputClick,
            onFocus: this.handleInputFocus,
            onBlur: this.handleInputBlur,
            onKeyDown: this.handleInputKeyDown,
            value: this.state.formattedNumber,
            ref: 'numberInput',
            type: 'tel',
            className: inputClasses,
            autoComplete: 'tel',
            placeholder: '+1 (702) 123-4567' }), React.createElement('div', { ref: 'flagDropDownButton', className: flagViewClasses, onKeyDown: this.handleKeydown }, React.createElement('div', { ref: 'selectedFlag', onClick: this.handleFlagDropdownClick, className: 'selected-flag', title: this.state.selectedCountry.name + ': + ' + this.state.selectedCountry.dialCode }, React.createElement('div', { className: inputFlagClasses, style: this.getFlagStyle() }, React.createElement('div', { className: arrowClasses }))), this.state.showDropDown ? this.getCountryDropDownList() : ''));
    }
});

module.exports = ReactTelephoneInput;

},{"./country_data":85,"classnames":undefined,"lodash/array/findIndex":2,"lodash/array/first":3,"lodash/array/rest":5,"lodash/collection/any":6,"lodash/collection/filter":7,"lodash/collection/findWhere":9,"lodash/collection/map":10,"lodash/collection/reduce":11,"lodash/collection/some":12,"lodash/function/debounce":14,"lodash/function/memoize":15,"lodash/string/startsWith":81,"lodash/string/trim":82,"react":undefined,"react-dom":undefined,"react-onclickoutside":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9kcm9wLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9maW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2ZpcnN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9sYXN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9yZXN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2FueS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9maWx0ZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vZmluZC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9maW5kV2hlcmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vbWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9zb21lLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9kYXRlL25vdy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2Z1bmN0aW9uL21lbW9pemUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL01hcENhY2hlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheUZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5UmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheVNvbWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VDYWxsYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUVhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGaWx0ZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGaW5kLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRmluZEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWxEZWVwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNNYXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVNsaWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlU29tZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NoYXJzTGVmdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jaGFyc1JpZ2h0SW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVGaW5kLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVGaW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZVJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxBcnJheXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2VxdWFsT2JqZWN0cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNTcGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNTdHJpY3RDb21wYXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcEdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvbWFwSGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBTZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3NoaW1LZXlzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90cmltbWVkTGVmdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90cmltbWVkUmlnaHRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNOYXRpdmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9zdHJpbmcvc3RhcnRzV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvc3RyaW5nL3RyaW0uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3V0aWxpdHkvcHJvcGVydHkuanMiLCIvVXNlcnMvamFyZWRzb2huL2dpdGh1Yi9mbGV4cG9ydF9naXRodWIvcmVhY3QtdGVsZXBob25lLWlucHV0L3NyYy9jb3VudHJ5X2RhdGEuanMiLCIvVXNlcnMvamFyZWRzb2huL2dpdGh1Yi9mbGV4cG9ydF9naXRodWIvcmVhY3QtdGVsZXBob25lLWlucHV0L3NyYy9SZWFjdFRlbGVwaG9uZUlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0FBV2IsSUFBSSxZQUFZLEdBQUcsQ0FDZixDQUNFLDRCQUE0QixFQUM1QixJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxvQkFBb0IsRUFDcEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usc0JBQXNCLEVBQ3RCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxxQkFBcUIsRUFDckIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsV0FBVyxFQUNYLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsV0FBVyxFQUNYLElBQUksRUFDSixJQUFJLEVBQ0osaUJBQWlCLENBQ2xCLEVBQ0QsQ0FDRSxzQkFBc0IsRUFDdEIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UseUJBQXlCLEVBQ3pCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxzQkFBc0IsRUFDdEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsdUJBQXVCLEVBQ3ZCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxvQkFBb0IsRUFDcEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usa0JBQWtCLEVBQ2xCLElBQUksRUFDSixJQUFJLEVBQ0osa0JBQWtCLENBQ25CLEVBQ0QsQ0FDRSxRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsZUFBZSxFQUNmLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLDhDQUE4QyxFQUM5QyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLGdDQUFnQyxFQUNoQyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx3QkFBd0IsRUFDeEIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHFCQUFxQixFQUNyQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxjQUFjLEVBQ2QsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usb0JBQW9CLEVBQ3BCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxxQkFBcUIsRUFDckIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixHQUFHLEVBQ0gsbUJBQW1CLEVBQ25CLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FDaFMsRUFDRCxDQUNFLHlCQUF5QixFQUN6QixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLEtBQUssRUFDTCxFQUFFLEVBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRSxnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0Usc0RBQXNELEVBQ3RELElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGNBQWMsRUFDZCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxPQUFPLEVBQ1AsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UsWUFBWSxFQUNaLElBQUksRUFDSixJQUFJLEVBQ0osaUJBQWlCLENBQ2xCLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0Usd0JBQXdCLEVBQ3hCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdEQUFnRCxFQUNoRCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxzQ0FBc0MsRUFDdEMsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsY0FBYyxFQUNkLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLGdCQUFnQixDQUNqQixFQUNELENBQ0UsZUFBZSxFQUNmLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLEVBQ0wsRUFBRSxFQUNGLENBQUMsQ0FDRixFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGtDQUFrQyxFQUNsQyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLElBQUksRUFDSixpQkFBaUIsQ0FDbEIsRUFDRCxDQUNFLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsMkNBQTJDLEVBQzNDLElBQUksRUFDSixHQUFHLEVBQ0gsRUFBRSxFQUNGLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQ3RCLEVBQ0QsQ0FDRSxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLGFBQWEsRUFDYixJQUFJLEVBQ0osS0FBSyxFQUNMLGdCQUFnQixDQUNqQixFQUNELENBQ0UsdUNBQXVDLEVBQ3ZDLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLG1DQUFtQyxFQUNuQyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx5QkFBeUIsRUFDekIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsTUFBTSxFQUNOLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGlCQUFpQixFQUNqQixJQUFJLEVBQ0osS0FBSyxFQUNMLG1CQUFtQixDQUNwQixFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixJQUFJLEVBQ0osbUJBQW1CLENBQ3BCLEVBQ0QsQ0FDRSxrQ0FBa0MsRUFDbEMsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usd0NBQXdDLEVBQ3hDLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usc0JBQXNCLEVBQ3RCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHVCQUF1QixFQUN2QixJQUFJLEVBQ0osSUFBSSxFQUNKLGlCQUFpQixDQUNsQixFQUNELENBQ0UsZUFBZSxFQUNmLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UsOEJBQThCLEVBQzlCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxFQUFFLEVBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRSxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsV0FBVyxFQUNYLElBQUksRUFDSixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsOEJBQThCLEVBQzlCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssRUFDTCxnQkFBZ0IsQ0FDakIsRUFDRCxDQUNFLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLEtBQUssRUFDTCxnQkFBZ0IsQ0FDakIsRUFDRCxDQUNFLHdCQUF3QixFQUN4QixJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxrQkFBa0IsRUFDbEIsSUFBSSxFQUNKLEtBQUssRUFDTCxlQUFlLENBQ2hCLEVBQ0QsQ0FDRSxjQUFjLEVBQ2QsSUFBSSxFQUNKLElBQUksRUFDSixpQkFBaUIsQ0FDbEIsRUFDRCxDQUNFLFdBQVcsRUFDWCxJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0Usa0JBQWtCLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUNMLGlCQUFpQixDQUNsQixFQUNELENBQ0UsbUJBQW1CLEVBQ25CLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osSUFBSSxFQUNKLGdCQUFnQixFQUNoQixDQUFDLENBQ0YsRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxZQUFZLEVBQ1osSUFBSSxFQUNKLElBQUksRUFDSixpQkFBaUIsQ0FDbEIsRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx3QkFBd0IsRUFDeEIsSUFBSSxFQUNKLEdBQUcsRUFDSCxrQkFBa0IsRUFDbEIsQ0FBQyxDQUNGLEVBQ0QsQ0FDRSxPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx5QkFBeUIsRUFDekIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGtCQUFrQixFQUNsQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxvQkFBb0IsRUFDcEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxrQkFBa0IsRUFDbEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsZUFBZSxFQUNmLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHFCQUFxQixFQUNyQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdDQUFnQyxFQUNoQyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSwyQkFBMkIsRUFDM0IsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFVBQVUsRUFDVixJQUFJLEVBQ0osSUFBSSxFQUNKLGtCQUFrQixDQUNuQixFQUNELENBQ0UsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLE1BQU0sRUFDTixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usa0JBQWtCLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSwyQkFBMkIsRUFDM0IsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsbUJBQW1CLEVBQ25CLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGlCQUFpQixFQUNqQixJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsNkJBQTZCLEVBQzdCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usd0JBQXdCLEVBQ3hCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFlBQVksRUFDWixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxxQkFBcUIsRUFDckIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UseUJBQXlCLEVBQ3pCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLDBCQUEwQixFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsT0FBTyxFQUNQLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGVBQWUsRUFDZixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx5QkFBeUIsRUFDekIsSUFBSSxFQUNKLElBQUksRUFDSixpQkFBaUIsQ0FDbEIsRUFDRCxDQUNFLG9DQUFvQyxFQUNwQyxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxhQUFhLEVBQ2IsSUFBSSxFQUNKLElBQUksRUFDSixrQkFBa0IsQ0FDbkIsRUFDRCxDQUNFLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxlQUFlLEVBQ2YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLE1BQU0sRUFDTixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsOEJBQThCLEVBQzlCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLDBCQUEwQixFQUMxQixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLElBQUksRUFDSixnQkFBZ0IsQ0FDakIsRUFDRCxDQUNFLGlCQUFpQixFQUNqQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLElBQUksRUFDSixpQkFBaUIsQ0FDbEIsRUFDRCxDQUNFLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGtCQUFrQixFQUNsQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsYUFBYSxFQUNiLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLGFBQWEsRUFDYixJQUFJLEVBQ0osSUFBSSxFQUNKLGNBQWMsQ0FDZixFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLElBQUksRUFDSixJQUFJLEVBQ0osaUJBQWlCLENBQ2xCLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsYUFBYSxFQUNiLElBQUksRUFDSixHQUFHLEVBQ0gsRUFBRSxFQUNGLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FDZixFQUNELENBQ0UsZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHNCQUFzQixFQUN0QixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UsaUJBQWlCLEVBQ2pCLElBQUksRUFDSixHQUFHLEVBQ0gsa0JBQWtCLEVBQ2xCLENBQUMsQ0FDRixFQUNELENBQ0UsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHFDQUFxQyxFQUNyQyxJQUFJLEVBQ0osS0FBSyxFQUNMLEVBQUUsRUFDRixDQUFDLENBQ0YsRUFDRCxDQUNFLGNBQWMsRUFDZCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSx1QkFBdUIsRUFDdkIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsYUFBYSxFQUNiLElBQUksRUFDSixNQUFNLENBQ1AsRUFDRCxDQUNFLGdEQUFnRCxFQUNoRCxJQUFJLEVBQ0osS0FBSyxFQUNMLEVBQUUsRUFDRixDQUFDLENBQ0YsRUFDRCxDQUNFLHNEQUFzRCxFQUN0RCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxrQ0FBa0MsRUFDbEMsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsT0FBTyxFQUNQLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSw2Q0FBNkMsRUFDN0MsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsNENBQTRDLEVBQzVDLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLG1CQUFtQixFQUNuQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGNBQWMsRUFDZCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxXQUFXLEVBQ1gsSUFBSSxFQUNKLElBQUksRUFDSixlQUFlLENBQ2hCLEVBQ0QsQ0FDRSxjQUFjLEVBQ2QsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0Usc0JBQXNCLEVBQ3RCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLHNCQUFzQixFQUN0QixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usc0JBQXNCLEVBQ3RCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGNBQWMsRUFDZCxJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxvQkFBb0IsRUFDcEIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNELENBQ0UsK0JBQStCLEVBQy9CLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osSUFBSSxFQUNKLGlCQUFpQixDQUNsQixFQUNELENBQ0UseUJBQXlCLEVBQ3pCLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsV0FBVyxFQUNYLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGtCQUFrQixFQUNsQixJQUFJLEVBQ0osSUFBSSxFQUNKLGtCQUFrQixDQUNuQixFQUNELENBQ0UsdUJBQXVCLEVBQ3ZCLElBQUksRUFDSixJQUFJLEVBQ0osa0JBQWtCLENBQ25CLEVBQ0QsQ0FDRSxrQkFBa0IsRUFDbEIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsYUFBYSxFQUNiLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLGFBQWEsRUFDYixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxNQUFNLEVBQ04sSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxxQkFBcUIsRUFDckIsSUFBSSxFQUNKLE1BQU0sQ0FDUCxFQUNELENBQ0UsbUJBQW1CLEVBQ25CLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGtCQUFrQixFQUNsQixJQUFJLEVBQ0osSUFBSSxFQUNKLG1CQUFtQixDQUNwQixFQUNELENBQ0UsY0FBYyxFQUNkLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLDBCQUEwQixFQUMxQixJQUFJLEVBQ0osTUFBTSxDQUNQLEVBQ0QsQ0FDRSxRQUFRLEVBQ1IsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UscUJBQXFCLEVBQ3JCLElBQUksRUFDSixNQUFNLENBQ1AsRUFDRCxDQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osSUFBSSxFQUNKLGlCQUFpQixDQUNsQixFQUNELENBQ0UsZUFBZSxFQUNmLElBQUksRUFDSixHQUFHLEVBQ0gsbUJBQW1CLEVBQ25CLENBQUMsQ0FDRixFQUNELENBQ0UsU0FBUyxFQUNULElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLDBCQUEwQixFQUMxQixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0UsbUNBQW1DLEVBQ25DLElBQUksRUFDSixJQUFJLEVBQ0osa0JBQWtCLEVBQ2xCLENBQUMsQ0FDRixFQUNELENBQ0UsV0FBVyxFQUNYLElBQUksRUFDSixJQUFJLENBQ0wsRUFDRCxDQUNFLG9CQUFvQixFQUNwQixJQUFJLEVBQ0osSUFBSSxDQUNMLEVBQ0QsQ0FDRSxtQkFBbUIsRUFDbkIsSUFBSSxFQUNKLEtBQUssQ0FDTixFQUNELENBQ0Usa0JBQWtCLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ04sRUFDRCxDQUNFLFFBQVEsRUFDUixJQUFJLEVBQ0osS0FBSyxDQUNOLEVBQ0QsQ0FDRSxVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7OztBQUdKLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFJLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztBQUNoQyxJQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQVksSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFDdEQsTUFBSSxFQUFFLFFBQVEsSUFBSSxlQUFlLENBQUEsRUFBRztBQUNsQyxtQkFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztHQUNoQztBQUNELE1BQUksS0FBSyxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFDMUIsaUJBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7Q0FDekMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUUxQyxNQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsY0FBWSxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQ2hCLFFBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1YsUUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVixZQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLFlBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztHQUNwQixDQUFDOztBQUVGLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ1IsZ0JBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQy9COzs7QUFHRCxNQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNOLGdCQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNwQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFbEMsVUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixvQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsQztHQUNKOzs7QUFHRCxnQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWpDLHdCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDcEQ7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNMLGNBQVksRUFBRSxZQUFZO0FBQzFCLHdCQUFzQixFQUFFLHNCQUFzQjtBQUM5QyxpQkFBZSxFQUFFLGVBQWU7Q0FDbkMsQ0FBQzs7O0FDN3dDVixZQUFZLENBQUM7Ozs7QUFJYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM3QyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUN2RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUMzQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNsRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN4QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNuRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7QUFFakQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDekMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXJELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDckQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDNUMsSUFBSSxzQkFBc0IsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7O0FBRWhFLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQ25DLFFBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Q0FDbEYsTUFBTTtBQUNMLFFBQUksZUFBZSxHQUFHLElBQUksQ0FBQztDQUM1Qjs7QUFFRCxJQUFJLElBQUksR0FBRztBQUNILE1BQUUsRUFBRSxFQUFFO0FBQ04sUUFBSSxFQUFFLEVBQUU7QUFDUixTQUFLLEVBQUUsRUFBRTtBQUNULFFBQUksRUFBRSxFQUFFO0FBQ1IsU0FBSyxFQUFFLEVBQUU7QUFDVCxPQUFHLEVBQUUsRUFBRTtBQUNQLFFBQUksRUFBRSxFQUFFO0FBQ1IsS0FBQyxFQUFFLEVBQUU7QUFDTCxLQUFDLEVBQUUsRUFBRTtBQUNMLFNBQUssRUFBRSxFQUFFO0NBQ2hCLENBQUM7O0FBRUYsU0FBUyxhQUFhLENBQUMsV0FBVyxFQUFFO0FBQ2hDLFFBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDekMsV0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVMsT0FBTyxFQUFFO0FBQ3JDLGVBQU8sVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDakcsQ0FBQyxDQUFDO0NBQ047O0FBRUQsSUFBSSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3hDLGVBQVcsRUFBRSxxQkFBcUI7O0FBQWxDLFVBQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQztBQUN4QixtQkFBZSxFQUFBLFNBQUEsZUFBQSxHQUFHO0FBQ2QsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0FBQ3pDLFlBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckYsWUFBSSx5QkFBeUIsR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDOUUsWUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDbkksWUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7O0FBRzVCLDBCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQzNELG1CQUFPLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDMUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNyQixtQkFBTyxHQUFHLEtBQUssSUFBSSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQzs7OztBQUlILGVBQU87QUFDSCw4QkFBa0IsRUFBRSxrQkFBa0I7QUFDdEMsMkJBQWUsRUFBRSxvQkFBb0I7QUFDckMsaUNBQXFCLEVBQUUseUJBQXlCO0FBQ2hELDJCQUFlLEVBQUUsZUFBZTtBQUNoQyx3QkFBWSxFQUFFLEtBQUs7QUFDbkIsdUJBQVcsRUFBRSxFQUFFO0FBQ2YsMkJBQWUsRUFBRSxLQUFLO0FBQ3RCLHVDQUEyQixFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQztTQUNqRSxDQUFDO0tBQ0w7QUFDRCxhQUFTLEVBQUU7QUFDUCxhQUFLLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQzdCLGtCQUFVLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO0FBQ2hDLHNCQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLHFCQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDOUQsMEJBQWtCLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkUsZ0JBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7QUFDOUIsdUJBQWUsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7S0FDeEM7QUFDRCxtQkFBZSxFQUFBLFNBQUEsZUFBQSxHQUFHO0FBQ2QsZUFBTztBQUNILGlCQUFLLEVBQUUsRUFBRTtBQUNULHNCQUFVLEVBQUUsSUFBSTtBQUNoQix5QkFBYSxFQUFFLFlBQVk7QUFDM0IsMEJBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUNwQyxtQkFBTyxFQUFFLGFBQWE7QUFDdEIsMEJBQWMsRUFBRSxXQUFXO0FBQzNCLDJCQUFlLEVBQUUsU0FBQSxlQUFBLEdBQVksRUFBRTtTQUNsQyxDQUFDO0tBQ0w7QUFDRCxhQUFTLEVBQUEsU0FBQSxTQUFBLEdBQUc7QUFDUixlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7S0FDL0U7QUFDRCxZQUFRLEVBQUEsU0FBQSxRQUFBLEdBQUc7QUFDUCxlQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUMzQjtBQUNELHFCQUFpQixFQUFBLFNBQUEsaUJBQUEsR0FBRztBQUNoQixnQkFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXpELFlBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEIsWUFBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtBQUMxQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRTtLQUNKO0FBQ0Qsd0JBQW9CLEVBQUEsU0FBQSxvQkFBQSxHQUFHO0FBQ25CLGdCQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMvRDtBQUNELFlBQVEsRUFBQSxTQUFBLFFBQUEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3RCLFlBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDVCxtQkFBTztTQUNWOztBQUVELFlBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVqRSxZQUFHLENBQUMsU0FBUyxFQUFFO0FBQ2IsbUJBQU87U0FDUjs7QUFFRCxZQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQzdDLFlBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3hELFlBQUksWUFBWSxHQUFHLGVBQWUsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakUsWUFBSSxlQUFlLEdBQUcsWUFBWSxHQUFHLGVBQWUsQ0FBQzs7QUFFckQsWUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLFlBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztBQUVwRCxZQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3pDLFlBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDN0QsWUFBSSxhQUFhLEdBQUcsVUFBVSxHQUFHLGFBQWEsQ0FBQztBQUMvQyxZQUFJLFlBQVksR0FBRyxVQUFVLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDbkUsWUFBSSxZQUFZLEdBQUcsZUFBZ0IsR0FBRyxDQUFDLEdBQUssYUFBYSxHQUFHLENBQUMsQ0FBRTs7QUFFL0QsWUFBSSxVQUFVLEdBQUcsWUFBWSxFQUFFOztBQUUzQixnQkFBSSxNQUFNLEVBQUU7QUFDUiw0QkFBWSxJQUFJLFlBQVksQ0FBQzthQUNoQztBQUNELHFCQUFTLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztTQUN0QyxNQUFNLElBQUksYUFBYSxHQUFHLGVBQWUsRUFBRTs7QUFFeEMsZ0JBQUcsTUFBTSxFQUFFO0FBQ1AsNEJBQVksSUFBSSxZQUFZLENBQUM7YUFDaEM7QUFDRCxnQkFBSSxnQkFBZ0IsR0FBRyxlQUFlLEdBQUcsYUFBYSxDQUFDO0FBQ3ZELHFCQUFTLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztTQUN6RDtLQUNKO0FBQ0QsZ0JBQVksRUFBQSxTQUFBLFlBQUEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3hCLFlBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDM0IsbUJBQU8sR0FBRyxDQUFDO1NBQ2Q7Ozs7QUFJRCxZQUFHLElBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2hFLG1CQUFBLEdBQUEsR0FBVyxJQUFJLENBQUc7U0FDckI7O0FBRUQsWUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFTLEdBQUcsRUFBRSxTQUFTLEVBQUU7QUFDM0QsZ0JBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQy9CLHVCQUFPLEdBQUcsQ0FBQzthQUNkOztBQUVELGdCQUFHLFNBQVMsS0FBSyxHQUFHLEVBQUU7QUFDbEIsdUJBQU87QUFDSCxpQ0FBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEdBQUcsU0FBUztBQUM1QyxpQ0FBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhO2lCQUNuQyxDQUFDO2FBQ0w7O0FBRUQsbUJBQU87QUFDSCw2QkFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDM0QsNkJBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUN6QyxDQUFDO1NBQ0wsRUFBRSxFQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ3ZELGVBQU8sZUFBZSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRjs7O0FBR0QsZ0JBQVksRUFBQSxTQUFBLFlBQUEsQ0FBQyxTQUFTLEVBQUU7QUFDcEIsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDbEMsWUFBSSxTQUFTLEVBQUU7QUFDWCxnQkFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0IsTUFBTTtBQUNILGlCQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWQsZ0JBQUksZUFBZSxFQUFFO0FBQ2pCLG9CQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUM3QixxQkFBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNyQztTQUNKO0tBQ0o7O0FBRUQsd0JBQW9CLEVBQUUsT0FBTyxDQUFDLFVBQVMsV0FBVyxFQUFFO0FBQ2hELFlBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hILFlBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUN6QixnQkFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVMsZUFBZSxFQUFFLE9BQU8sRUFBRTtBQUNwRSxvQkFBRyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMxQyx3QkFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUMxRCwrQkFBTyxPQUFPLENBQUM7cUJBQ2xCO0FBQ0Qsd0JBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFO0FBQzNHLCtCQUFPLE9BQU8sQ0FBQztxQkFDbEI7aUJBQ0o7O0FBRUQsdUJBQU8sZUFBZSxDQUFDO2FBQzFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RCxNQUFNO0FBQ0gsbUJBQU8sZUFBZSxDQUFDO1NBQzFCOztBQUVELFlBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2hCLG1CQUFPLGVBQWUsQ0FBQztTQUMxQjs7QUFFRCxlQUFPLFNBQVMsQ0FBQztLQUNwQixDQUFDO0FBQ0YsY0FBVSxFQUFBLFNBQUEsVUFBQSxDQUFDLEtBQUssRUFBRTtBQUNkLGVBQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLFVBQUEsR0FBWSxLQUFLLENBQUcsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsMkJBQXVCLEVBQUEsU0FBQSx1QkFBQSxHQUFHO0FBRXRCLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7O0FBQWpCLFlBQUksQ0FBQyxRQUFRLENBQUM7QUFDVix3QkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO0FBQ3RDLDRCQUFnQixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztBQUNqRixpQ0FBcUIsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7U0FDekYsRUFBRSxZQUFNOztBQUVMLGdCQUFHLEtBQUEsQ0FBSyxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3hCLHFCQUFBLENBQUssUUFBUSxDQUFDLEtBQUEsQ0FBSyxVQUFVLENBQUMsS0FBQSxDQUFLLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxLQUFBLENBQUssS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDM0c7U0FDSixDQUFDLENBQUM7S0FDTjtBQUNELGVBQVcsRUFBQSxTQUFBLFdBQUEsQ0FBQyxLQUFLLEVBQUU7QUFDZixZQUFJLGVBQWUsR0FBRyxHQUFHO1lBQUUsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO1lBQUUsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDOzs7QUFHekgsWUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtBQUNsRCxtQkFBTztTQUNWOzs7QUFHRCxZQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7QUFDckIsaUJBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQixNQUFNO0FBQ0gsaUJBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzdCOztBQUVELFlBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7QUFFOUIsZ0JBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7QUFJeEQsZ0JBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUU7QUFDL0Ysa0NBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsK0JBQWUsR0FBRyxLQUFLLENBQUM7YUFDM0I7O0FBRUQsMkJBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRTs7QUFFRCxZQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztBQUNoRCxZQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQ2xELFlBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOztBQUU1RCxZQUFJLENBQUMsUUFBUSxDQUFDO0FBQ1YsMkJBQWUsRUFBRSxlQUFlO0FBQ2hDLDJCQUFlLEVBQUUsZUFBZTtBQUNoQywyQkFBZSxFQUFFLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZTtTQUM1RyxFQUFFLFlBQVc7QUFDVixnQkFBRyxlQUFlLEVBQUU7QUFDaEIsb0JBQUcsYUFBYSxJQUFJLENBQUMsRUFBRTtBQUNuQixpQ0FBYSxFQUFFLENBQUM7aUJBQ25COztBQUVELG9CQUFHLElBQUksR0FBRyxDQUFDLEVBQUU7QUFDVCxpQ0FBYSxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUM7aUJBQ3hDOztBQUVELG9CQUFHLGFBQWEsR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUMsTUFBTSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7QUFDdkUsd0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztpQkFDekU7YUFDSjs7QUFFRCxnQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNwQixvQkFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUMvRTtTQUNKLENBQUMsQ0FBQztLQUVOO0FBQ0Qsb0JBQWdCLEVBQUEsU0FBQSxnQkFBQSxHQUFHO0FBQ2YsWUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ3hDO0FBQ0QsdUJBQW1CLEVBQUEsU0FBQSxtQkFBQSxDQUFDLE9BQU8sRUFBRTtBQUN6QixZQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0FBQ3hELFlBQUksbUJBQW1CLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHdkUsWUFBRyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsSUFBSSxFQUFFOztBQUV6RCxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsSCxnQkFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFbEcsZ0JBQUksQ0FBQyxRQUFRLENBQUM7QUFDViw0QkFBWSxFQUFFLEtBQUs7QUFDbkIsK0JBQWUsRUFBRSxtQkFBbUI7QUFDcEMsK0JBQWUsRUFBRSxJQUFJO0FBQ3JCLCtCQUFlLEVBQUUsZUFBZTthQUNuQyxFQUFFLFlBQVc7QUFDVixvQkFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLG9CQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3BCLHdCQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztpQkFDN0Q7YUFDSixDQUFDLENBQUM7U0FDTixNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN0QztLQUNKO0FBQ0Qsb0JBQWdCLEVBQUEsU0FBQSxnQkFBQSxHQUFHOztBQUVmLFlBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxLQUFLLEdBQUcsRUFBRTtBQUNwQyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLGVBQWUsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztTQUMvRTtLQUNKO0FBQ0QsNkJBQXlCLEVBQUEsU0FBQSx5QkFBQSxDQUFDLFNBQVMsRUFBRTs7QUFFakMsWUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQzs7QUFFekUsWUFBRyxxQkFBcUIsR0FBRyxDQUFDLElBQ3JCLHFCQUFxQixJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRztBQUN0RyxtQkFBTyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7U0FDNUM7O0FBRUQsZUFBTyxxQkFBcUIsQ0FBQztLQUNoQzs7QUFFRCxrQkFBYyxFQUFFLE9BQU8sQ0FBQyxVQUFTLFdBQVcsRUFBRTtBQUMxQyxZQUFHLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3pDLG1CQUFPLElBQUksQ0FBQztTQUNmOztBQUVELFlBQUksaUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFVBQVMsT0FBTyxFQUFFO0FBQ3ZFLG1CQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzVFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxlQUFPLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9CLENBQUM7QUFDRixpQkFBYSxFQUFBLFNBQUEsYUFBQSxHQUFHO0FBQ1osWUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckcsWUFBTSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzs7QUFFN0gsWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRTdELFlBQUksQ0FBQyxRQUFRLENBQUM7QUFDVix1QkFBVyxFQUFFLEVBQUU7QUFDZixpQ0FBcUIsRUFBRSxzQkFBc0I7U0FDaEQsQ0FBQyxDQUFDO0tBQ047QUFDRCxpQkFBYSxFQUFBLFNBQUEsYUFBQSxDQUFDLEtBQUssRUFBRTtBQUNqQixZQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDMUIsbUJBQU87U0FDVDs7O0FBR0QsWUFBRyxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQ3JCLGlCQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUIsTUFBTTtBQUNILGlCQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUM3Qjs7QUFFRCxZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsaUJBQVMsY0FBYyxDQUFDLFNBQVMsRUFBRTtBQUMvQixnQkFBSSxDQUFDLFFBQVEsQ0FBQztBQUNWLHFDQUFxQixFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUM7YUFDbkUsRUFBRSxZQUFNO0FBQ0wsb0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUUsQ0FBQyxDQUFDO1NBQ047O0FBRUQsZ0JBQU8sS0FBSyxDQUFDLEtBQUs7QUFDZCxpQkFBSyxJQUFJLENBQUMsSUFBSTtBQUNOLDhCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsc0JBQU07QUFBQSxpQkFDVCxJQUFJLENBQUMsRUFBRTtBQUNKLDhCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixzQkFBTTtBQUFBLGlCQUNULElBQUksQ0FBQyxLQUFLO0FBQ1Asb0JBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUYsc0JBQU07QUFBQSxpQkFDVCxJQUFJLENBQUMsR0FBRztBQUNULG9CQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN4RCxzQkFBTTtBQUFBO0FBRU4sb0JBQUcsS0FBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDL0Usd0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUMsRUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2lCQUMvQztBQUFBLFNBQ1I7S0FDSjtBQUNELHNCQUFrQixFQUFBLFNBQUEsa0JBQUEsQ0FBQyxLQUFLLEVBQUU7QUFDdEIsWUFBRyxLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDM0IsZ0JBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO0tBQ0o7QUFDRCxzQkFBa0IsRUFBQSxTQUFBLGtCQUFBLEdBQUc7QUFDakIsWUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtBQUN4QixnQkFBSSxDQUFDLFFBQVEsQ0FBQztBQUNWLDRCQUFZLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7U0FDTjtLQUNKO0FBQ0QsMEJBQXNCLEVBQUEsU0FBQSxzQkFBQSxHQUFHOztBQUVyQixZQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLFVBQVMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNuSCxnQkFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ3pCLHVCQUFPLEVBQUUsSUFBSTtBQUNiLHlCQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJO0FBQ3pELHNCQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJO0FBQzdCLHlCQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyxLQUFLO2FBQ3hELENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxnQkFBZ0IsR0FBQSxPQUFBLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBRzs7QUFFOUMsbUJBQ0ksS0FBQSxDQUFBLGFBQUEsQ0FFQSxJQUFJLEVBQ0o7QUFGSSxtQkFBRyxFQUFBLFVBQUEsR0FBYSxLQUFLO0FBQ3JCLG1CQUFHLEVBQUEsVUFBQSxHQUFhLEtBQUs7QUFDckIsK0JBQUEsRUFBQSxVQUFBLEdBQTBCLEtBQUs7QUFDL0IseUJBQVMsRUFBRSxXQUFXO0FBQ3RCLGdDQUFBLEVBQWUsR0FBRztBQUNsQixtQ0FBQSxFQUFtQixPQUFPLENBQUMsSUFBSTtBQUMvQix1QkFBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFBLEVBQ3JELEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssU0FBUyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUEsQ0FBSSxFQUNoRSxLQUFBLENBQUEsYUFBQSxDQUlBLE1BQU0sRUFDTixFQUxNLFNBQVMsRUFBQyxjQUFjLEVBQUEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFRLEVBQ3BELEtBQUEsQ0FBQSxhQUFBLENBUUEsTUFBTSxFQUNOLEVBVE0sU0FBUyxFQUFDLFdBQVcsRUFBQSxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFRLENBQzFELENBQ1A7U0FDTCxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFlBQU0sUUFBUSxHQUFJLEtBQUEsQ0FBQSxhQUFBLENBQUEsSUFBQSxFQUFBLEVBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFBLENBQUcsQ0FBRTs7QUFFN0QsMkJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFOUUsWUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDO0FBQy9CLDBCQUFjLEVBQUUsSUFBSTtBQUNwQixrQkFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQ25DLENBQUMsQ0FBQztBQUNILGVBQ0ksS0FBQSxDQUFBLGFBQUEsQ0FVQSxJQUFJLEVBQ0osRUFYSSxHQUFHLEVBQUMsa0JBQWtCLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBQSxFQUNoRCxtQkFBbUIsQ0FDbkIsQ0FDUDtLQUNMO0FBQ0QsZ0JBQVksRUFBQSxTQUFBLFlBQUEsR0FBRztBQUNYLGVBQU87QUFDSCxpQkFBSyxFQUFFLEVBQUU7QUFDVCxrQkFBTSxFQUFFLEVBQUU7QUFDViwyQkFBZSxFQUFBLE1BQUEsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBQSxHQUFHO1NBQ3ZELENBQUM7S0FDTDtBQUNELG1CQUFlLEVBQUEsU0FBQSxlQUFBLEdBQUc7QUFDaEIsWUFBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtBQUMxQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzRTtLQUNGO0FBQ0QsVUFBTSxFQUFBLFNBQUEsTUFBQSxHQUFHO0FBQ0wsWUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBQzFCLG1CQUFPLEVBQUUsSUFBSTtBQUNiLGdCQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQ2hDLENBQUMsQ0FBQztBQUNILFlBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUMxQiwwQkFBYyxFQUFFLElBQUk7QUFDcEIsNEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZGLENBQUMsQ0FBQzs7QUFFSCxZQUFJLGVBQWUsR0FBRyxVQUFVLENBQUM7QUFDN0IsMkJBQWUsRUFBRSxJQUFJO0FBQ3JCLDJCQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQzNDLENBQUMsQ0FBQzs7QUFFSCxZQUFJLGdCQUFnQixHQUFBLE9BQUEsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUc7O0FBRWpFLGVBQ0ksS0FBQSxDQUFBLGFBQUEsQ0FVQSxLQUFLLEVBQ0wsRUFYSyxTQUFTLEVBQUMsaUJBQWlCLEVBQUEsRUFDNUIsS0FBQSxDQUFBLGFBQUEsQ0FBQSxPQUFBLEVBQUE7QUFDSSxvQkFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO0FBQzFCLG1CQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtBQUM5QixtQkFBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7QUFDOUIsa0JBQU0sRUFBRSxJQUFJLENBQUMsZUFBZTtBQUM1QixxQkFBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7QUFDbEMsaUJBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWU7QUFDakMsZUFBRyxFQUFDLGFBQWE7QUFDakIsZ0JBQUksRUFBQyxLQUFLO0FBQ1YscUJBQVMsRUFBRSxZQUFZO0FBQ3ZCLHdCQUFZLEVBQUMsS0FBSztBQUNsQix1QkFBVyxFQUFDLG1CQUFtQixFQUFBLENBQUUsRUFDckMsS0FBQSxDQUFBLGFBQUEsQ0FZQSxLQUFLLEVBQ0wsRUFiSyxHQUFHLEVBQUMsb0JBQW9CLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQSxFQUNuRixLQUFBLENBQUEsYUFBQSxDQWNBLEtBQUssRUFDTCxFQWZLLEdBQUcsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUEsTUFBQSxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBQSxFQUN4SyxLQUFBLENBQUEsYUFBQSxDQWdCQSxLQUFLLEVBQ0wsRUFqQkssU0FBUyxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUEsRUFDeEQsS0FBQSxDQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsRUFBSyxTQUFTLEVBQUUsWUFBWSxFQUFBLENBQVEsQ0FDbEMsQ0FDSixFQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsQ0FDM0QsQ0FDSixDQUNSO0tBQ0w7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVNsaWNlJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzbGljZSBvZiBgYXJyYXlgIHdpdGggYG5gIGVsZW1lbnRzIGRyb3BwZWQgZnJvbSB0aGUgYmVnaW5uaW5nLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj0xXSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGRyb3AuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYSBjYWxsYmFjayBmb3IgZnVuY3Rpb25zIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMiwgM11cbiAqXG4gKiBfLmRyb3AoWzEsIDIsIDNdLCAyKTtcbiAqIC8vID0+IFszXVxuICpcbiAqIF8uZHJvcChbMSwgMiwgM10sIDUpO1xuICogLy8gPT4gW11cbiAqXG4gKiBfLmRyb3AoWzEsIDIsIDNdLCAwKTtcbiAqIC8vID0+IFsxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBkcm9wKGFycmF5LCBuLCBndWFyZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbChhcnJheSwgbiwgZ3VhcmQpIDogbiA9PSBudWxsKSB7XG4gICAgbiA9IDE7XG4gIH1cbiAgcmV0dXJuIGJhc2VTbGljZShhcnJheSwgbiA8IDAgPyAwIDogbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHJvcDtcbiIsInZhciBjcmVhdGVGaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVGaW5kSW5kZXgnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYHByZWRpY2F0ZWAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZm91bmQgZWxlbWVudCwgZWxzZSBgLTFgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLmZpbmRJbmRleCh1c2VycywgZnVuY3Rpb24oY2hyKSB7XG4gKiAgIHJldHVybiBjaHIudXNlciA9PSAnYmFybmV5JztcbiAqIH0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uZmluZEluZGV4KHVzZXJzLCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5maW5kSW5kZXgodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IDJcbiAqL1xudmFyIGZpbmRJbmRleCA9IGNyZWF0ZUZpbmRJbmRleCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRJbmRleDtcbiIsIi8qKlxuICogR2V0cyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgaGVhZFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZpcnN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAxXG4gKlxuICogXy5maXJzdChbXSk7XG4gKiAvLyA9PiB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5ID8gYXJyYXlbMF0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlyc3Q7XG4iLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG4iLCJ2YXIgZHJvcCA9IHJlcXVpcmUoJy4vZHJvcCcpO1xuXG4vKipcbiAqIEdldHMgYWxsIGJ1dCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgdGFpbFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucmVzdChbMSwgMiwgM10pO1xuICogLy8gPT4gWzIsIDNdXG4gKi9cbmZ1bmN0aW9uIHJlc3QoYXJyYXkpIHtcbiAgcmV0dXJuIGRyb3AoYXJyYXksIDEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3Q7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29tZScpO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUZpbHRlcicpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmRcbiAqIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIHNlbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZmlsdGVyKFs0LCA1LCA2XSwgZnVuY3Rpb24obikge1xuICogICByZXR1cm4gbiAlIDIgPT0gMDtcbiAqIH0pO1xuICogLy8gPT4gWzQsIDZdXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5maWx0ZXIodXNlcnMsIHsgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9KSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5J11cbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5maWx0ZXIodXNlcnMsICdhY3RpdmUnLCBmYWxzZSksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnXVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCAnYWN0aXZlJyksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leSddXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlGaWx0ZXIgOiBiYXNlRmlsdGVyO1xuICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXI7XG4iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRWFjaCcpLFxuICAgIGNyZWF0ZUZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVGaW5kJyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmRcbiAqIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGRldGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxLCAgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsIGZ1bmN0aW9uKGNocikge1xuICogICByZXR1cm4gY2hyLmFnZSA8IDQwO1xuICogfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucmVzdWx0KF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAncGViYmxlcydcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucmVzdWx0KF8uZmluZCh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKSwgJ3VzZXInKTtcbiAqIC8vID0+ICdmcmVkJ1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsICdhY3RpdmUnKSwgJ3VzZXInKTtcbiAqIC8vID0+ICdiYXJuZXknXG4gKi9cbnZhciBmaW5kID0gY3JlYXRlRmluZChiYXNlRWFjaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZDtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VNYXRjaGVzJyksXG4gICAgZmluZCA9IHJlcXVpcmUoJy4vZmluZCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCBhbmQgdGhlXG4gKiBzb3VyY2Ugb2JqZWN0LCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBoYXMgZXF1aXZhbGVudCBwcm9wZXJ0eVxuICogdmFsdWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBib29sZWFucywgYERhdGVgIG9iamVjdHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBhbmQgc3RyaW5ncy4gT2JqZWN0cyBhcmUgY29tcGFyZWQgYnlcbiAqIHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGb3IgY29tcGFyaW5nIGEgc2luZ2xlXG4gKiBvd24gb3IgaW5oZXJpdGVkIHByb3BlcnR5IHZhbHVlIHNlZSBgXy5tYXRjaGVzUHJvcGVydHlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH1cbiAqIF07XG4gKlxuICogXy5yZXN1bHQoXy5maW5kV2hlcmUodXNlcnMsIHsgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9KSwgJ3VzZXInKTtcbiAqIC8vID0+ICdiYXJuZXknXG4gKlxuICogXy5yZXN1bHQoXy5maW5kV2hlcmUodXNlcnMsIHsgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnZnJlZCdcbiAqL1xuZnVuY3Rpb24gZmluZFdoZXJlKGNvbGxlY3Rpb24sIHNvdXJjZSkge1xuICByZXR1cm4gZmluZChjb2xsZWN0aW9uLCBiYXNlTWF0Y2hlcyhzb3VyY2UpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kV2hlcmU7XG4iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheU1hcCcpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlTWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIGJ5IHJ1bm5pbmcgZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJvdWdoXG4gKiBgaXRlcmF0ZWVgLiBUaGUgYGl0ZXJhdGVlYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNhbGxiYWNrYCwgYGNodW5rYCwgYGNsb25lYCwgYGNyZWF0ZWAsIGBjdXJyeWAsIGBjdXJyeVJpZ2h0YCxcbiAqIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsIGBmaWxsYCwgYGZsYXR0ZW5gLCBgaW52ZXJ0YCwgYG1heGAsIGBtaW5gLFxuICogYHBhcnNlSW50YCwgYHNsaWNlYCwgYHNvcnRCeWAsIGB0YWtlYCwgYHRha2VSaWdodGAsIGB0ZW1wbGF0ZWAsIGB0cmltYCxcbiAqIGB0cmltTGVmdGAsIGB0cmltUmlnaHRgLCBgdHJ1bmNgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHNhbXBsZWAsIGBzb21lYCxcbiAqIGBzdW1gLCBgdW5pcWAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBjb2xsZWN0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiB0aW1lc1RocmVlKG4pIHtcbiAqICAgcmV0dXJuIG4gKiAzO1xuICogfVxuICpcbiAqIF8ubWFwKFsxLCAyXSwgdGltZXNUaHJlZSk7XG4gKiAvLyA9PiBbMywgNl1cbiAqXG4gKiBfLm1hcCh7ICdhJzogMSwgJ2InOiAyIH0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLm1hcCh1c2VycywgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5JywgJ2ZyZWQnXVxuICovXG5mdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlNYXAgOiBiYXNlTWFwO1xuICBpdGVyYXRlZSA9IGJhc2VDYWxsYmFjayhpdGVyYXRlZSwgdGhpc0FyZywgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheVJlZHVjZScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUVhY2gnKSxcbiAgICBjcmVhdGVSZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVSZWR1Y2UnKTtcblxuLyoqXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJvdWdoIGBpdGVyYXRlZWAsIHdoZXJlIGVhY2ggc3VjY2Vzc2l2ZVxuICogaW52b2NhdGlvbiBpcyBzdXBwbGllZCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cy4gSWYgYGFjY3VtdWxhdG9yYFxuICogaXMgbm90IHByb3ZpZGVkIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYCBpcyB1c2VkIGFzIHRoZSBpbml0aWFsXG4gKiB2YWx1ZS4gVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6XG4gKiAoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8ucmVkdWNlYCwgYF8ucmVkdWNlUmlnaHRgLCBhbmQgYF8udHJhbnNmb3JtYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhc3NpZ25gLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYHNvcnRCeUFsbGAsXG4gKiBhbmQgYHNvcnRCeU9yZGVyYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgZm9sZGwsIGluamVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnJlZHVjZShbMSwgMl0sIGZ1bmN0aW9uKHRvdGFsLCBuKSB7XG4gKiAgIHJldHVybiB0b3RhbCArIG47XG4gKiB9KTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnJlZHVjZSh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKHJlc3VsdCwgbiwga2V5KSB7XG4gKiAgIHJlc3VsdFtrZXldID0gbiAqIDM7XG4gKiAgIHJldHVybiByZXN1bHQ7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICdhJzogMywgJ2InOiA2IH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xudmFyIHJlZHVjZSA9IGNyZWF0ZVJlZHVjZShhcnJheVJlZHVjZSwgYmFzZUVhY2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZTtcbiIsInZhciBhcnJheVNvbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheVNvbWUnKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlU29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VTb21lJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yICoqYW55KiogZWxlbWVudCBvZiBgY29sbGVjdGlvbmAuXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhcyBzb29uIGFzIGl0IGZpbmRzIGEgcGFzc2luZyB2YWx1ZSBhbmQgZG9lcyBub3QgaXRlcmF0ZVxuICogb3ZlciB0aGUgZW50aXJlIGNvbGxlY3Rpb24uIFRoZSBwcmVkaWNhdGUgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkXG4gKiB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgYW55XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYHByZWRpY2F0ZWAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNvbWUoW251bGwsIDAsICd5ZXMnLCBmYWxzZV0sIEJvb2xlYW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uc29tZSh1c2VycywgeyAndXNlcic6ICdiYXJuZXknLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5zb21lKHVzZXJzLCAnYWN0aXZlJywgZmFsc2UpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnNvbWUodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gc29tZShjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlTb21lIDogYmFzZVNvbWU7XG4gIGlmICh0aGlzQXJnICYmIGlzSXRlcmF0ZWVDYWxsKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykpIHtcbiAgICBwcmVkaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT0gJ2Z1bmN0aW9uJyB8fCB0aGlzQXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgfVxuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvbWU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gZ2V0TmF0aXZlKERhdGUsICdub3cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBVbml4IGVwb2NoXG4gKiAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IERhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBsb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBmdW5jdGlvbiB0byBiZSBpbnZva2VkXG4gKi9cbnZhciBub3cgPSBuYXRpdmVOb3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4uL2RhdGUvbm93Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGludm9jYXRpb25zLiBQcm92aWRlIGFuIG9wdGlvbnMgb2JqZWN0IHRvIGluZGljYXRlIHRoYXQgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3RcbiAqIGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXMgaW52b2tlZFxuICogb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBpc1xuICogaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwOi8vZHJ1cGFsbW90aW9uLmNvbS9hcnRpY2xlL2RlYm91bmNlLWFuZC10aHJvdHRsZS12aXN1YWwtZXhwbGFuYXRpb24pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmVcbiAqICBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nXG4gKiAgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eFxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBpbnZva2UgYHNlbmRNYWlsYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzXG4gKiBqUXVlcnkoJyNwb3N0Ym94Jykub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBlbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzXG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwge1xuICogICAnbWF4V2FpdCc6IDEwMDBcbiAqIH0pKTtcbiAqXG4gKiAvLyBjYW5jZWwgYSBkZWJvdW5jZWQgY2FsbFxuICogdmFyIHRvZG9DaGFuZ2VzID0gXy5kZWJvdW5jZShiYXRjaExvZywgMTAwMCk7XG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMudG9kbywgdG9kb0NoYW5nZXMpO1xuICpcbiAqIE9iamVjdC5vYnNlcnZlKG1vZGVscywgZnVuY3Rpb24oY2hhbmdlcykge1xuICogICBpZiAoXy5maW5kKGNoYW5nZXMsIHsgJ3VzZXInOiAndG9kbycsICd0eXBlJzogJ2RlbGV0ZSd9KSkge1xuICogICAgIHRvZG9DaGFuZ2VzLmNhbmNlbCgpO1xuICogICB9XG4gKiB9LCBbJ2RlbGV0ZSddKTtcbiAqXG4gKiAvLyAuLi5hdCBzb21lIHBvaW50IGBtb2RlbHMudG9kb2AgaXMgY2hhbmdlZFxuICogbW9kZWxzLnRvZG8uY29tcGxldGVkID0gdHJ1ZTtcbiAqXG4gKiAvLyAuLi5iZWZvcmUgMSBzZWNvbmQgaGFzIHBhc3NlZCBgbW9kZWxzLnRvZG9gIGlzIGRlbGV0ZWRcbiAqIC8vIHdoaWNoIGNhbmNlbHMgdGhlIGRlYm91bmNlZCBgdG9kb0NoYW5nZXNgIGNhbGxcbiAqIGRlbGV0ZSBtb2RlbHMudG9kbztcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgYXJncyxcbiAgICAgIG1heFRpbWVvdXRJZCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YW1wLFxuICAgICAgdGhpc0FyZyxcbiAgICAgIHRpbWVvdXRJZCxcbiAgICAgIHRyYWlsaW5nQ2FsbCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwLFxuICAgICAgbWF4V2FpdCA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB3YWl0IDwgMCA/IDAgOiAoK3dhaXQgfHwgMCk7XG4gIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgdmFyIGxlYWRpbmcgPSB0cnVlO1xuICAgIHRyYWlsaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4V2FpdCA9ICdtYXhXYWl0JyBpbiBvcHRpb25zICYmIG5hdGl2ZU1heCgrb3B0aW9ucy5tYXhXYWl0IHx8IDAsIHdhaXQpO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgIH1cbiAgICBsYXN0Q2FsbGVkID0gMDtcbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZShpc0NhbGxlZCwgaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfVxuICAgIG1heFRpbWVvdXRJZCA9IHRpbWVvdXRJZCA9IHRyYWlsaW5nQ2FsbCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93KCkgLSBzdGFtcCk7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGNvbXBsZXRlKHRyYWlsaW5nQ2FsbCwgbWF4VGltZW91dElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChkZWxheWVkLCByZW1haW5pbmcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heERlbGF5ZWQoKSB7XG4gICAgY29tcGxldGUodHJhaWxpbmcsIHRpbWVvdXRJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzdGFtcCA9IG5vdygpO1xuICAgIHRoaXNBcmcgPSB0aGlzO1xuICAgIHRyYWlsaW5nQ2FsbCA9IHRyYWlsaW5nICYmICh0aW1lb3V0SWQgfHwgIWxlYWRpbmcpO1xuXG4gICAgaWYgKG1heFdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgbGVhZGluZ0NhbGwgPSBsZWFkaW5nICYmICF0aW1lb3V0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWF4VGltZW91dElkICYmICFsZWFkaW5nKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSBtYXhXYWl0IC0gKHN0YW1wIC0gbGFzdENhbGxlZCksXG4gICAgICAgICAgaXNDYWxsZWQgPSByZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiBtYXhXYWl0O1xuXG4gICAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIG1heFRpbWVvdXRJZCA9IGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgbWF4VGltZW91dElkID0gc2V0VGltZW91dChtYXhEZWxheWVkLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgdGltZW91dElkKSB7XG4gICAgICB0aW1lb3V0SWQgPSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpbWVvdXRJZCAmJiB3YWl0ICE9PSBtYXhXYWl0KSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHdhaXQpO1xuICAgIH1cbiAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiAhdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyBjb2VyY2VkIHRvIGEgc3RyaW5nIGFuZCB1c2VkIGFzIHRoZVxuICogY2FjaGUga2V5LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemluZyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVwcGVyQ2FzZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcpIHtcbiAqICAgcmV0dXJuIHN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICogfSk7XG4gKlxuICogdXBwZXJDYXNlKCdmcmVkJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqXG4gKiAvLyBtb2RpZnlpbmcgdGhlIHJlc3VsdCBjYWNoZVxuICogdXBwZXJDYXNlLmNhY2hlLnNldCgnZnJlZCcsICdCQVJORVknKTtcbiAqIHVwcGVyQ2FzZSgnZnJlZCcpO1xuICogLy8gPT4gJ0JBUk5FWSdcbiAqXG4gKiAvLyByZXBsYWNpbmcgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKiB2YXIgb3RoZXIgPSB7ICd1c2VyJzogJ2Jhcm5leScgfTtcbiAqIHZhciBpZGVudGl0eSA9IF8ubWVtb2l6ZShfLmlkZW50aXR5KTtcbiAqXG4gKiBpZGVudGl0eShvYmplY3QpO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJyB9XG4gKiBpZGVudGl0eShvdGhlcik7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICogdmFyIGlkZW50aXR5ID0gXy5tZW1vaXplKF8uaWRlbnRpdHkpO1xuICpcbiAqIGlkZW50aXR5KG9iamVjdCk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIGlkZW50aXR5KG90aGVyKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnYmFybmV5JyB9XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IG1lbW9pemUuQ2FjaGU7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCJ2YXIgbWFwRGVsZXRlID0gcmVxdWlyZSgnLi9tYXBEZWxldGUnKSxcbiAgICBtYXBHZXQgPSByZXF1aXJlKCcuL21hcEdldCcpLFxuICAgIG1hcEhhcyA9IHJlcXVpcmUoJy4vbWFwSGFzJyksXG4gICAgbWFwU2V0ID0gcmVxdWlyZSgnLi9tYXBTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS92YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG5hbWUgQ2FjaGVcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemVcbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7fTtcbn1cblxuLy8gQWRkIGZ1bmN0aW9ucyB0byB0aGUgYE1hcGAgY2FjaGUuXG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcEdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbKytyZXNJbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEZyb21BcnJheV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgXG4gKiAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRGcm9tQXJyYXkgJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnLi9iaW5kQ2FsbGJhY2snKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jYWxsYmFja2Agd2hpY2ggc3VwcG9ydHMgc3BlY2lmeWluZyB0aGVcbiAqIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW2Z1bmM9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBjYWxsYmFjay5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJhc2VDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBmdW5jO1xuICBpZiAodHlwZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaXNBcmcgPT09IHVuZGVmaW5lZFxuICAgICAgPyBmdW5jXG4gICAgICA6IGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCk7XG4gIH1cbiAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBiYXNlTWF0Y2hlcyhmdW5jKTtcbiAgfVxuICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgPyBwcm9wZXJ0eShmdW5jKVxuICAgIDogYmFzZU1hdGNoZXNQcm9wZXJ0eShmdW5jLCB0aGlzQXJnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2FsbGJhY2s7XG4iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vYmFzZUZvck93bicpLFxuICAgIGNyZWF0ZUJhc2VFYWNoID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R8c3RyaW5nfSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqL1xudmFyIGJhc2VFYWNoID0gY3JlYXRlQmFzZUVhY2goYmFzZUZvck93bik7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhY2g7XG4iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuL2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kYCwgYF8uZmluZExhc3RgLCBgXy5maW5kS2V5YCwgYW5kIGBfLmZpbmRMYXN0S2V5YCxcbiAqIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcsIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBjb2xsZWN0aW9uYCB1c2luZyB0aGUgcHJvdmlkZWQgYGVhY2hGdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBgY29sbGVjdGlvbmAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXRLZXldIFNwZWNpZnkgcmV0dXJuaW5nIHRoZSBrZXkgb2YgdGhlIGZvdW5kIGVsZW1lbnRcbiAqICBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmb3VuZCBlbGVtZW50IG9yIGl0cyBrZXksIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZWFjaEZ1bmMsIHJldEtleSkge1xuICB2YXIgcmVzdWx0O1xuICBlYWNoRnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSkge1xuICAgICAgcmVzdWx0ID0gcmV0S2V5ID8ga2V5IDogdmFsdWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBzdHJpbmcgcGF0aHNcbiAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoS2V5XSBUaGUga2V5IHJlcHJlc2VudGF0aW9uIG9mIHBhdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuICAgIHBhdGggPSBbcGF0aEtleV07XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFtwYXRoW2luZGV4KytdXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2l0aG91dCBzdXBwb3J0IGZvciBgdGhpc2AgYmluZGluZ1xuICogYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9lcXVhbE9iamVjdHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBPVtdXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBhcnJheVRhZyxcbiAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuXG4gIGlmICghb2JqSXNBcnIpIHtcbiAgICBvYmpUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgaWYgKG9ialRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvYmpUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvYmpUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvYmpJc0FyciA9IGlzVHlwZWRBcnJheShvYmplY3QpO1xuICAgIH1cbiAgfVxuICBpZiAoIW90aElzQXJyKSB7XG4gICAgb3RoVGFnID0gb2JqVG9TdHJpbmcuY2FsbChvdGhlcik7XG4gICAgaWYgKG90aFRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvdGhUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvdGhUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvdGhJc0FyciA9IGlzVHlwZWRBcnJheShvdGhlcik7XG4gICAgfVxuICB9XG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIShvYmpJc0FyciB8fCBvYmpJc09iaikpIHtcbiAgICByZXR1cm4gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcpO1xuICB9XG4gIGlmICghaXNMb29zZSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsIG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlciwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGRldGVjdGluZyBjaXJjdWxhciByZWZlcmVuY2VzIHNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI0pPLlxuICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBvYmplY3QpIHtcbiAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBvdGhlcjtcbiAgICB9XG4gIH1cbiAgLy8gQWRkIGBvYmplY3RgIGFuZCBgb3RoZXJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgc3RhY2tBLnB1c2gob2JqZWN0KTtcbiAgc3RhY2tCLnB1c2gob3RoZXIpO1xuXG4gIHZhciByZXN1bHQgPSAob2JqSXNBcnIgPyBlcXVhbEFycmF5cyA6IGVxdWFsT2JqZWN0cykob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cbiAgc3RhY2tBLnBvcCgpO1xuICBzdGFja0IucG9wKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCB0cnVlKSA6IHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vZ2V0TWF0Y2hEYXRhJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICB2YXIga2V5ID0gbWF0Y2hEYXRhWzBdWzBdLFxuICAgICAgICB2YWx1ZSA9IG1hdGNoRGF0YVswXVsxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHZhbHVlICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vYmFzZVNsaWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4uL2FycmF5L2xhc3QnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuL3RvUGF0aCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHBhdGgpLFxuICAgICAgaXNDb21tb24gPSBpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpLFxuICAgICAgcGF0aEtleSA9IChwYXRoICsgJycpO1xuXG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHBhdGhLZXk7XG4gICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICBpZiAoKGlzQXJyIHx8ICFpc0NvbW1vbikgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgb2JqZWN0ID0gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBrZXkgPSBsYXN0KHBhdGgpO1xuICAgICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZVxuICAgICAgPyAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIG9iamVjdCkpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmplY3Rba2V5XSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmBcbiAqIHVzaW5nIHRoZSBwcm92aWRlZCBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRGcm9tQ29sbGVjdGlvbiBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnRcbiAqICBvZiBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQ29sbGVjdGlvbiwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0RnJvbUNvbGxlY3Rpb25cbiAgICAgID8gKGluaXRGcm9tQ29sbGVjdGlvbiA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zb21lYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrIHNob3J0aGFuZHNcbiAqIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0ID0gcHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgcmV0dXJuICFyZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gISFyZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNvbWU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltTGVmdGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gKiBvZiBgc3RyaW5nYCB0aGF0IGlzIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFycyBUaGUgY2hhcmFjdGVycyB0byBmaW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBub3QgZm91bmQgaW4gYGNoYXJzYC5cbiAqL1xuZnVuY3Rpb24gY2hhcnNMZWZ0SW5kZXgoc3RyaW5nLCBjaGFycykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgY2hhcnMuaW5kZXhPZihzdHJpbmcuY2hhckF0KGluZGV4KSkgPiAtMSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJzTGVmdEluZGV4O1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltUmlnaHRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3QgY2hhcmFjdGVyXG4gKiBvZiBgc3RyaW5nYCB0aGF0IGlzIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFycyBUaGUgY2hhcmFjdGVycyB0byBmaW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICovXG5mdW5jdGlvbiBjaGFyc1JpZ2h0SW5kZXgoc3RyaW5nLCBjaGFycykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIGNoYXJzLmluZGV4T2Yoc3RyaW5nLmNoYXJBdChpbmRleCkpID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyc1JpZ2h0SW5kZXg7XG4iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uID8gZ2V0TGVuZ3RoKGNvbGxlY3Rpb24pIDogMDtcbiAgICBpZiAoIWlzTGVuZ3RoKGxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xLFxuICAgICAgICBpdGVyYWJsZSA9IHRvT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgYF8uZm9ySW5gIG9yIGBfLmZvckluUmlnaHRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpdGVyYWJsZSA9IHRvT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRmluZCA9IHJlcXVpcmUoJy4vYmFzZUZpbmQnKSxcbiAgICBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9iYXNlRmluZEluZGV4JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5maW5kYCBvciBgXy5maW5kTGFzdGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmaW5kIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGaW5kKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHByZWRpY2F0ZSA9IGJhc2VDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICAgIGlmIChpc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICB2YXIgaW5kZXggPSBiYXNlRmluZEluZGV4KGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZnJvbVJpZ2h0KTtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gY29sbGVjdGlvbltpbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBiYXNlRmluZChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGVhY2hGdW5jKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGaW5kO1xuIiwidmFyIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4vYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vYmFzZUZpbmRJbmRleCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5maW5kSW5kZXhgIG9yIGBfLmZpbmRMYXN0SW5kZXhgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZpbmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbmRJbmRleChmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFycmF5LCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICBpZiAoIShhcnJheSAmJiBhcnJheS5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByZWRpY2F0ZSA9IGJhc2VDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICAgIHJldHVybiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21SaWdodCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRmluZEluZGV4O1xuIiwidmFyIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4vYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZVJlZHVjZSA9IHJlcXVpcmUoJy4vYmFzZVJlZHVjZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gZm9yIGBfLnJlZHVjZWAgb3IgYF8ucmVkdWNlUmlnaHRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhcnJheUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhbiBhcnJheS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZWFjaCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVkdWNlKGFycmF5RnVuYywgZWFjaEZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgdGhpc0FyZykge1xuICAgIHZhciBpbml0RnJvbUFycmF5ID0gYXJndW1lbnRzLmxlbmd0aCA8IDM7XG4gICAgcmV0dXJuICh0eXBlb2YgaXRlcmF0ZWUgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzQXJnID09PSB1bmRlZmluZWQgJiYgaXNBcnJheShjb2xsZWN0aW9uKSlcbiAgICAgID8gYXJyYXlGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEZyb21BcnJheSlcbiAgICAgIDogYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDQpLCBhY2N1bXVsYXRvciwgaW5pdEZyb21BcnJheSwgZWFjaEZ1bmMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJlZHVjZTtcbiIsInZhciBhcnJheVNvbWUgPSByZXF1aXJlKCcuL2FycmF5U29tZScpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBhcnJheXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc0xvb3NlICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IGFyclZhbHVlLCBpc0xvb3NlID8gYXJyVmFsdWUgOiBvdGhWYWx1ZSwgaW5kZXgpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChpc0xvb3NlKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCIvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcpIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1iZXJzLCBkYXRlcyB0byBtaWxsaXNlY29uZHMgYW5kIGJvb2xlYW5zXG4gICAgICAvLyB0byBgMWAgb3IgYDBgIHRyZWF0aW5nIGludmFsaWQgZGF0ZXMgY29lcmNlZCB0byBgTmFOYCBhcyBub3QgZXF1YWwuXG4gICAgICByZXR1cm4gK29iamVjdCA9PSArb3RoZXI7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gVHJlYXQgYE5hTmAgdnMuIGBOYU5gIGFzIGVxdWFsLlxuICAgICAgcmV0dXJuIChvYmplY3QgIT0gK29iamVjdClcbiAgICAgICAgPyBvdGhlciAhPSArb3RoZXJcbiAgICAgICAgOiBvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzIHByaW1pdGl2ZXMgYW5kIHN0cmluZ1xuICAgICAgLy8gb2JqZWN0cyBhcyBlcXVhbC4gU2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjEwLjYuNCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9ialByb3BzID0ga2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBrZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNMb29zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc0xvb3NlID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFyIHNraXBDdG9yID0gaXNMb29zZTtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIoaXNMb29zZSA/IG90aFZhbHVlIDogb2JqVmFsdWUsIGlzTG9vc2U/IG9ialZhbHVlIDogb3RoVmFsdWUsIGtleSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZCA/IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSA6IHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmICghc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgcGFpcnMgPSByZXF1aXJlKCcuLi9vYmplY3QvcGFpcnMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IHBhaXJzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtsZW5ndGhdWzJdID0gaXNTdHJpY3RDb21wYXJhYmxlKHJlc3VsdFtsZW5ndGhdWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCIvKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBwcm92aWRlZCBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgaW5kZXg7XG4gIGlmICh0eXBlID09ICdudW1iZXInXG4gICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpKSB7XG4gICAgdmFyIG90aGVyID0gb2JqZWN0W2luZGV4XTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHZhbHVlID09PSBvdGhlcikgOiAob3RoZXIgIT09IG90aGVyKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxuXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKCh0eXBlID09ICdzdHJpbmcnICYmIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkpIHx8IHR5cGUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSk7XG4gIHJldHVybiByZXN1bHQgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIHRvT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwiLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCIvKipcbiAqIFVzZWQgYnkgYHRyaW1tZWRMZWZ0SW5kZXhgIGFuZCBgdHJpbW1lZFJpZ2h0SW5kZXhgIHRvIGRldGVybWluZSBpZiBhXG4gKiBjaGFyYWN0ZXIgY29kZSBpcyB3aGl0ZXNwYWNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckNvZGUgVGhlIGNoYXJhY3RlciBjb2RlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGNoYXJDb2RlYCBpcyB3aGl0ZXNwYWNlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3BhY2UoY2hhckNvZGUpIHtcbiAgcmV0dXJuICgoY2hhckNvZGUgPD0gMTYwICYmIChjaGFyQ29kZSA+PSA5ICYmIGNoYXJDb2RlIDw9IDEzKSB8fCBjaGFyQ29kZSA9PSAzMiB8fCBjaGFyQ29kZSA9PSAxNjApIHx8IGNoYXJDb2RlID09IDU3NjAgfHwgY2hhckNvZGUgPT0gNjE1OCB8fFxuICAgIChjaGFyQ29kZSA+PSA4MTkyICYmIChjaGFyQ29kZSA8PSA4MjAyIHx8IGNoYXJDb2RlID09IDgyMzIgfHwgY2hhckNvZGUgPT0gODIzMyB8fCBjaGFyQ29kZSA9PSA4MjM5IHx8IGNoYXJDb2RlID09IDgyODcgfHwgY2hhckNvZGUgPT0gMTIyODggfHwgY2hhckNvZGUgPT0gNjUyNzkpKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTcGFjZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemUuQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCBzdWNjZXNzZnVsbHksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcERlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgY2FjaGVkIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplLkNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjYWNoZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcEdldChrZXkpIHtcbiAgcmV0dXJuIGtleSA9PSAnX19wcm90b19fJyA/IHVuZGVmaW5lZCA6IHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBHZXQ7XG4iLCIvKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBjYWNoZWQgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplLkNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwSGFzKGtleSkge1xuICByZXR1cm4ga2V5ICE9ICdfX3Byb3RvX18nICYmIGhhc093blByb3BlcnR5LmNhbGwodGhpcy5fX2RhdGFfXywga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBIYXM7XG4iLCIvKipcbiAqIFNldHMgYHZhbHVlYCB0byBga2V5YCBvZiB0aGUgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBtYXBTZXQoa2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ICE9ICdfX3Byb3RvX18nKSB7XG4gICAgdGhpcy5fX2RhdGFfX1trZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwU2V0O1xuIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcbiAqIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBzaGltS2V5cyhvYmplY3QpIHtcbiAgdmFyIHByb3BzID0ga2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IHByb3BzTGVuZ3RoICYmIG9iamVjdC5sZW5ndGg7XG5cbiAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKChhbGxvd0luZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW1LZXlzO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gb2JqZWN0IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b09iamVjdDtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL2Jhc2VUb1N0cmluZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxuXFxcXF18XFxcXC4pKj8pXFwyKVxcXS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIHByb3BlcnR5IHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZVRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcbiIsInZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi9pc1NwYWNlJyk7XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUxlZnRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZExlZnRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmIGlzU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRMZWZ0SW5kZXg7XG4iLCJ2YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4vaXNTcGFjZScpO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1SaWdodGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZFJpZ2h0SW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgaXNTcGFjZShzdHJpbmcuY2hhckNvZGVBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZFJpZ2h0SW5kZXg7XG4iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgd2hpY2ggcmV0dXJuICdmdW5jdGlvbicgZm9yIHJlZ2V4ZXNcbiAgLy8gYW5kIFNhZmFyaSA4IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9ycy5cbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9XG50eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9IHR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3Nbb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgc2hpbUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zaGltS2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0d28gZGltZW5zaW9uYWwgYXJyYXkgb2YgdGhlIGtleS12YWx1ZSBwYWlycyBmb3IgYG9iamVjdGAsXG4gKiBlLmcuIGBbW2tleTEsIHZhbHVlMV0sIFtrZXkyLCB2YWx1ZTJdXWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGtleS12YWx1ZSBwYWlycy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5wYWlycyh7ICdiYXJuZXknOiAzNiwgJ2ZyZWQnOiA0MCB9KTtcbiAqIC8vID0+IFtbJ2Jhcm5leScsIDM2XSwgWydmcmVkJywgNDBdXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBwYWlycyhvYmplY3QpIHtcbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgcmVzdWx0W2luZGV4XSA9IFtrZXksIG9iamVjdFtrZXldXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhaXJzO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBzdGFydHMgd2l0aCB0aGUgZ2l2ZW4gdGFyZ2V0IHN0cmluZy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb249MF0gVGhlIHBvc2l0aW9uIHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBzdHJpbmdgIHN0YXJ0cyB3aXRoIGB0YXJnZXRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLnN0YXJ0c1dpdGgoJ2FiYycsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2InLCAxKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHJpbmcsIHRhcmdldCwgcG9zaXRpb24pIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHBvc2l0aW9uID0gcG9zaXRpb24gPT0gbnVsbFxuICAgID8gMFxuICAgIDogbmF0aXZlTWluKHBvc2l0aW9uIDwgMCA/IDAgOiAoK3Bvc2l0aW9uIHx8IDApLCBzdHJpbmcubGVuZ3RoKTtcblxuICByZXR1cm4gc3RyaW5nLmxhc3RJbmRleE9mKHRhcmdldCwgcG9zaXRpb24pID09IHBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0c1dpdGg7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyksXG4gICAgY2hhcnNMZWZ0SW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGFyc0xlZnRJbmRleCcpLFxuICAgIGNoYXJzUmlnaHRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoYXJzUmlnaHRJbmRleCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKSxcbiAgICB0cmltbWVkTGVmdEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdHJpbW1lZExlZnRJbmRleCcpLFxuICAgIHRyaW1tZWRSaWdodEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdHJpbW1lZFJpZ2h0SW5kZXgnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2Ugb3Igc3BlY2lmaWVkIGNoYXJhY3RlcnMgZnJvbSBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2hhcnM9d2hpdGVzcGFjZV0gVGhlIGNoYXJhY3RlcnMgdG8gdHJpbS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhIGNhbGxiYWNrIGZvciBmdW5jdGlvbnMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJpbSgnICBhYmMgICcpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLnRyaW0oJy1fLWFiYy1fLScsICdfLScpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLm1hcChbJyAgZm9vICAnLCAnICBiYXIgICddLCBfLnRyaW0pO1xuICogLy8gPT4gWydmb28nLCAnYmFyJ11cbiAqL1xuZnVuY3Rpb24gdHJpbShzdHJpbmcsIGNoYXJzLCBndWFyZCkge1xuICB2YXIgdmFsdWUgPSBzdHJpbmc7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICBpZiAoIXN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgaWYgKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGNoYXJzLCBndWFyZCkgOiBjaGFycyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSh0cmltbWVkTGVmdEluZGV4KHN0cmluZyksIHRyaW1tZWRSaWdodEluZGV4KHN0cmluZykgKyAxKTtcbiAgfVxuICBjaGFycyA9IChjaGFycyArICcnKTtcbiAgcmV0dXJuIHN0cmluZy5zbGljZShjaGFyc0xlZnRJbmRleChzdHJpbmcsIGNoYXJzKSwgY2hhcnNSaWdodEluZGV4KHN0cmluZywgY2hhcnMpICsgMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNLZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBhdCBgcGF0aGAgb24gYVxuICogZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMiB9IH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMSB9IH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmIuYycpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ucGx1Y2soXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYicsICdjJ10pKSwgJ2EuYi5jJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkocGF0aCkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTbyBlYWNoIGNvdW50cnkgYXJyYXkgaGFzIHRoZSBmb2xsb3dpbmcgaW5mb3JtYXRpb246XG4vLyBbXG4vLyAgICBDb3VudHJ5IG5hbWUsXG4vLyAgICBpc28yIGNvZGUsXG4vLyAgICBJbnRlcm5hdGlvbmFsIGRpYWwgY29kZSxcbi8vICAgIEZvcm1hdCAoaWYgYXZhaWxhYmxlKSxcbi8vICAgIE9yZGVyIChpZiA+MSBjb3VudHJ5IHdpdGggc2FtZSBkaWFsIGNvZGUpLFxuLy8gICAgQXJlYSBjb2RlcyAoaWYgPjEgY291bnRyeSB3aXRoIHNhbWUgZGlhbCBjb2RlKVxuLy8gXVxudmFyIGFsbENvdW50cmllcyA9IFtcbiAgICBbXG4gICAgICAnQWZnaGFuaXN0YW4gKOKAq9in2YHYutin2YbYs9iq2KfZhuKArOKAjiknLFxuICAgICAgJ2FmJyxcbiAgICAgICc5MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdBbGJhbmlhIChTaHFpcMOrcmkpJyxcbiAgICAgICdhbCcsXG4gICAgICAnMzU1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FsZ2VyaWEgKOKAq9in2YTYrNiy2KfYptix4oCs4oCOKScsXG4gICAgICAnZHonLFxuICAgICAgJzIxMydcbiAgICBdLFxuICAgIFtcbiAgICAgICdBbWVyaWNhbiBTYW1vYScsXG4gICAgICAnYXMnLFxuICAgICAgJzE2ODQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQW5kb3JyYScsXG4gICAgICAnYWQnLFxuICAgICAgJzM3NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdBbmdvbGEnLFxuICAgICAgJ2FvJyxcbiAgICAgICcyNDQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQW5ndWlsbGEnLFxuICAgICAgJ2FpJyxcbiAgICAgICcxMjY0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICAgICAgJ2FnJyxcbiAgICAgICcxMjY4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FyZ2VudGluYScsXG4gICAgICAnYXInLFxuICAgICAgJzU0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FybWVuaWEgKNWA1aHVtdWh1b3Vv9Wh1bYpJyxcbiAgICAgICdhbScsXG4gICAgICAnMzc0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FydWJhJyxcbiAgICAgICdhdycsXG4gICAgICAnMjk3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0F1c3RyYWxpYScsXG4gICAgICAnYXUnLFxuICAgICAgJzYxJyxcbiAgICAgICcrLi4gLi4uIC4uLiAuLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnQXVzdHJpYSAow5ZzdGVycmVpY2gpJyxcbiAgICAgICdhdCcsXG4gICAgICAnNDMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQXplcmJhaWphbiAoQXrJmXJiYXljYW4pJyxcbiAgICAgICdheicsXG4gICAgICAnOTk0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JhaGFtYXMnLFxuICAgICAgJ2JzJyxcbiAgICAgICcxMjQyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JhaHJhaW4gKOKAq9in2YTYqNit2LHZitmG4oCs4oCOKScsXG4gICAgICAnYmgnLFxuICAgICAgJzk3MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdCYW5nbGFkZXNoICjgpqzgpr7gpoLgprLgpr7gpqbgp4fgprYpJyxcbiAgICAgICdiZCcsXG4gICAgICAnODgwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JhcmJhZG9zJyxcbiAgICAgICdiYicsXG4gICAgICAnMTI0NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdCZWxhcnVzICjQkdC10LvQsNGA0YPRgdGMKScsXG4gICAgICAnYnknLFxuICAgICAgJzM3NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCZWxnaXVtIChCZWxnacOrKScsXG4gICAgICAnYmUnLFxuICAgICAgJzMyJyxcbiAgICAgICcrLi4gLi4uIC4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JlbGl6ZScsXG4gICAgICAnYnonLFxuICAgICAgJzUwMSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCZW5pbiAoQsOpbmluKScsXG4gICAgICAnYmonLFxuICAgICAgJzIyOSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCZXJtdWRhJyxcbiAgICAgICdibScsXG4gICAgICAnMTQ0MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCaHV0YW4gKOC9oOC9luC+suC9tOC9giknLFxuICAgICAgJ2J0JyxcbiAgICAgICc5NzUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQm9saXZpYScsXG4gICAgICAnYm8nLFxuICAgICAgJzU5MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCb3NuaWEgYW5kIEhlcnplZ292aW5hICjQkdC+0YHQvdCwINC4INCl0LXRgNGG0LXQs9C+0LLQuNC90LApJyxcbiAgICAgICdiYScsXG4gICAgICAnMzg3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JvdHN3YW5hJyxcbiAgICAgICdidycsXG4gICAgICAnMjY3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JyYXppbCAoQnJhc2lsKScsXG4gICAgICAnYnInLFxuICAgICAgJzU1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gICAgICAnaW8nLFxuICAgICAgJzI0NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdCcml0aXNoIFZpcmdpbiBJc2xhbmRzJyxcbiAgICAgICd2ZycsXG4gICAgICAnMTI4NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCcnVuZWknLFxuICAgICAgJ2JuJyxcbiAgICAgICc2NzMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQnVsZ2FyaWEgKNCR0YrQu9Cz0LDRgNC40Y8pJyxcbiAgICAgICdiZycsXG4gICAgICAnMzU5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0J1cmtpbmEgRmFzbycsXG4gICAgICAnYmYnLFxuICAgICAgJzIyNidcbiAgICBdLFxuICAgIFtcbiAgICAgICdCdXJ1bmRpIChVYnVydW5kaSknLFxuICAgICAgJ2JpJyxcbiAgICAgICcyNTcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2FtYm9kaWEgKOGegOGemOGfkuGeluGeu+Geh+GetiknLFxuICAgICAgJ2toJyxcbiAgICAgICc4NTUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2FtZXJvb24gKENhbWVyb3VuKScsXG4gICAgICAnY20nLFxuICAgICAgJzIzNydcbiAgICBdLFxuICAgIFtcbiAgICAgICdDYW5hZGEnLFxuICAgICAgJ2NhJyxcbiAgICAgICcxJyxcbiAgICAgICcrLiAoLi4uKSAuLi4tLi4uLicsXG4gICAgICAxLFxuICAgICAgWycyMDQnLCAnMjM2JywgJzI0OScsICcyNTAnLCAnMjg5JywgJzMwNicsICczNDMnLCAnMzY1JywgJzM4NycsICc0MDMnLCAnNDE2JywgJzQxOCcsICc0MzEnLCAnNDM3JywgJzQzOCcsICc0NTAnLCAnNTA2JywgJzUxNCcsICc1MTknLCAnNTQ4JywgJzU3OScsICc1ODEnLCAnNTg3JywgJzYwNCcsICc2MTMnLCAnNjM5JywgJzY0NycsICc2NzInLCAnNzA1JywgJzcwOScsICc3NDInLCAnNzc4JywgJzc4MCcsICc3ODInLCAnODA3JywgJzgxOScsICc4MjUnLCAnODY3JywgJzg3MycsICc5MDInLCAnOTA1J11cbiAgICBdLFxuICAgIFtcbiAgICAgICdDYXBlIFZlcmRlIChLYWJ1IFZlcmRpKScsXG4gICAgICAnY3YnLFxuICAgICAgJzIzOCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdDYXJpYmJlYW4gTmV0aGVybGFuZHMnLFxuICAgICAgJ2JxJyxcbiAgICAgICc1OTknLFxuICAgICAgJycsXG4gICAgICAxXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2F5bWFuIElzbGFuZHMnLFxuICAgICAgJ2t5JyxcbiAgICAgICcxMzQ1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYyAoUsOpcHVibGlxdWUgY2VudHJhZnJpY2FpbmUpJyxcbiAgICAgICdjZicsXG4gICAgICAnMjM2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NoYWQgKFRjaGFkKScsXG4gICAgICAndGQnLFxuICAgICAgJzIzNSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdDaGlsZScsXG4gICAgICAnY2wnLFxuICAgICAgJzU2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NoaW5hICjkuK3lm70pJyxcbiAgICAgICdjbicsXG4gICAgICAnODYnLFxuICAgICAgJysuLiAuLi0uLi4uLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdDb2xvbWJpYScsXG4gICAgICAnY28nLFxuICAgICAgJzU3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NvbW9yb3MgKOKAq9is2LLYsSDYp9mE2YLZhdix4oCs4oCOKScsXG4gICAgICAna20nLFxuICAgICAgJzI2OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdDb25nbyAoRFJDKSAoSmFtaHVyaSB5YSBLaWRlbW9rcmFzaWEgeWEgS29uZ28pJyxcbiAgICAgICdjZCcsXG4gICAgICAnMjQzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NvbmdvIChSZXB1YmxpYykgKENvbmdvLUJyYXp6YXZpbGxlKScsXG4gICAgICAnY2cnLFxuICAgICAgJzI0MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdDb29rIElzbGFuZHMnLFxuICAgICAgJ2NrJyxcbiAgICAgICc2ODInXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ29zdGEgUmljYScsXG4gICAgICAnY3InLFxuICAgICAgJzUwNicsXG4gICAgICAnKy4uLiAuLi4uLS4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ8O0dGUgZOKAmUl2b2lyZScsXG4gICAgICAnY2knLFxuICAgICAgJzIyNSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdDcm9hdGlhIChIcnZhdHNrYSknLFxuICAgICAgJ2hyJyxcbiAgICAgICczODUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ3ViYScsXG4gICAgICAnY3UnLFxuICAgICAgJzUzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0N1cmHDp2FvJyxcbiAgICAgICdjdycsXG4gICAgICAnNTk5JyxcbiAgICAgICcnLFxuICAgICAgMFxuICAgIF0sXG4gICAgW1xuICAgICAgJ0N5cHJ1cyAozprPjc+Az4HOv8+CKScsXG4gICAgICAnY3knLFxuICAgICAgJzM1NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdDemVjaCBSZXB1YmxpYyAoxIxlc2vDoSByZXB1Ymxpa2EpJyxcbiAgICAgICdjeicsXG4gICAgICAnNDIwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0Rlbm1hcmsgKERhbm1hcmspJyxcbiAgICAgICdkaycsXG4gICAgICAnNDUnLFxuICAgICAgJysuLiAuLiAuLiAuLiAuLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdEamlib3V0aScsXG4gICAgICAnZGonLFxuICAgICAgJzI1MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdEb21pbmljYScsXG4gICAgICAnZG0nLFxuICAgICAgJzE3NjcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRG9taW5pY2FuIFJlcHVibGljIChSZXDDumJsaWNhIERvbWluaWNhbmEpJyxcbiAgICAgICdkbycsXG4gICAgICAnMScsXG4gICAgICAnJyxcbiAgICAgIDIsXG4gICAgICBbJzgwOScsICc4MjknLCAnODQ5J11cbiAgICBdLFxuICAgIFtcbiAgICAgICdFY3VhZG9yJyxcbiAgICAgICdlYycsXG4gICAgICAnNTkzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0VneXB0ICjigKvZhdi12LHigKzigI4pJyxcbiAgICAgICdlZycsXG4gICAgICAnMjAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRWwgU2FsdmFkb3InLFxuICAgICAgJ3N2JyxcbiAgICAgICc1MDMnLFxuICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0VxdWF0b3JpYWwgR3VpbmVhIChHdWluZWEgRWN1YXRvcmlhbCknLFxuICAgICAgJ2dxJyxcbiAgICAgICcyNDAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRXJpdHJlYScsXG4gICAgICAnZXInLFxuICAgICAgJzI5MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdFc3RvbmlhIChFZXN0aSknLFxuICAgICAgJ2VlJyxcbiAgICAgICczNzInXG4gICAgXSxcbiAgICBbXG4gICAgICAnRXRoaW9waWEnLFxuICAgICAgJ2V0JyxcbiAgICAgICcyNTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpJyxcbiAgICAgICdmaycsXG4gICAgICAnNTAwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0Zhcm9lIElzbGFuZHMgKEbDuHJveWFyKScsXG4gICAgICAnZm8nLFxuICAgICAgJzI5OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdGaWppJyxcbiAgICAgICdmaicsXG4gICAgICAnNjc5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ZpbmxhbmQgKFN1b21pKScsXG4gICAgICAnZmknLFxuICAgICAgJzM1OCcsXG4gICAgICAnKy4uLiAuLiAuLi4gLi4gLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnRnJhbmNlJyxcbiAgICAgICdmcicsXG4gICAgICAnMzMnLFxuICAgICAgJysuLiAuIC4uIC4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ZyZW5jaCBHdWlhbmEgKEd1eWFuZSBmcmFuw6dhaXNlKScsXG4gICAgICAnZ2YnLFxuICAgICAgJzU5NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdGcmVuY2ggUG9seW5lc2lhIChQb2x5bsOpc2llIGZyYW7Dp2Fpc2UpJyxcbiAgICAgICdwZicsXG4gICAgICAnNjg5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0dhYm9uJyxcbiAgICAgICdnYScsXG4gICAgICAnMjQxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0dhbWJpYScsXG4gICAgICAnZ20nLFxuICAgICAgJzIyMCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHZW9yZ2lhICjhg6Hhg5Dhg6Xhg5Dhg6Dhg5fhg5Xhg5Thg5rhg50pJyxcbiAgICAgICdnZScsXG4gICAgICAnOTk1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0dlcm1hbnkgKERldXRzY2hsYW5kKScsXG4gICAgICAnZGUnLFxuICAgICAgJzQ5JyxcbiAgICAgICcrLi4gLi4uIC4uLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnR2hhbmEgKEdhYW5hKScsXG4gICAgICAnZ2gnLFxuICAgICAgJzIzMydcbiAgICBdLFxuICAgIFtcbiAgICAgICdHaWJyYWx0YXInLFxuICAgICAgJ2dpJyxcbiAgICAgICczNTAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3JlZWNlICjOlc67zrvOrM60zrEpJyxcbiAgICAgICdncicsXG4gICAgICAnMzAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3JlZW5sYW5kIChLYWxhYWxsaXQgTnVuYWF0KScsXG4gICAgICAnZ2wnLFxuICAgICAgJzI5OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHcmVuYWRhJyxcbiAgICAgICdnZCcsXG4gICAgICAnMTQ3MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdHdWFkZWxvdXBlJyxcbiAgICAgICdncCcsXG4gICAgICAnNTkwJyxcbiAgICAgICcnLFxuICAgICAgMFxuICAgIF0sXG4gICAgW1xuICAgICAgJ0d1YW0nLFxuICAgICAgJ2d1JyxcbiAgICAgICcxNjcxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0d1YXRlbWFsYScsXG4gICAgICAnZ3QnLFxuICAgICAgJzUwMicsXG4gICAgICAnKy4uLiAuLi4uLS4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3VpbmVhIChHdWluw6llKScsXG4gICAgICAnZ24nLFxuICAgICAgJzIyNCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHdWluZWEtQmlzc2F1IChHdWluw6kgQmlzc2F1KScsXG4gICAgICAnZ3cnLFxuICAgICAgJzI0NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHdXlhbmEnLFxuICAgICAgJ2d5JyxcbiAgICAgICc1OTInXG4gICAgXSxcbiAgICBbXG4gICAgICAnSGFpdGknLFxuICAgICAgJ2h0JyxcbiAgICAgICc1MDknLFxuICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0hvbmR1cmFzJyxcbiAgICAgICdobicsXG4gICAgICAnNTA0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0hvbmcgS29uZyAo6aaZ5rivKScsXG4gICAgICAnaGsnLFxuICAgICAgJzg1MicsXG4gICAgICAnKy4uLiAuLi4uIC4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSHVuZ2FyeSAoTWFneWFyb3JzesOhZyknLFxuICAgICAgJ2h1JyxcbiAgICAgICczNidcbiAgICBdLFxuICAgIFtcbiAgICAgICdJY2VsYW5kICjDjXNsYW5kKScsXG4gICAgICAnaXMnLFxuICAgICAgJzM1NCcsXG4gICAgICAnKy4uLiAuLi4gLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdJbmRpYSAo4KSt4KS+4KSw4KSkKScsXG4gICAgICAnaW4nLFxuICAgICAgJzkxJyxcbiAgICAgICcrLi4gLi4uLi4tLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSW5kb25lc2lhJyxcbiAgICAgICdpZCcsXG4gICAgICAnNjInXG4gICAgXSxcbiAgICBbXG4gICAgICAnSXJhbiAo4oCr2KfbjNix2KfZhuKArOKAjiknLFxuICAgICAgJ2lyJyxcbiAgICAgICc5OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdJcmFxICjigKvYp9mE2LnYsdin2YLigKzigI4pJyxcbiAgICAgICdpcScsXG4gICAgICAnOTY0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0lyZWxhbmQnLFxuICAgICAgJ2llJyxcbiAgICAgICczNTMnLFxuICAgICAgJysuLi4gLi4gLi4uLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdJc3JhZWwgKOKAq9eZ16nXqNeQ15zigKzigI4pJyxcbiAgICAgICdpbCcsXG4gICAgICAnOTcyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0l0YWx5IChJdGFsaWEpJyxcbiAgICAgICdpdCcsXG4gICAgICAnMzknLFxuICAgICAgJysuLiAuLi4gLi4uLi4uJyxcbiAgICAgIDBcbiAgICBdLFxuICAgIFtcbiAgICAgICdKYW1haWNhJyxcbiAgICAgICdqbScsXG4gICAgICAnMTg3NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdKYXBhbiAo5pel5pysKScsXG4gICAgICAnanAnLFxuICAgICAgJzgxJyxcbiAgICAgICcrLi4gLi4uIC4uIC4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSm9yZGFuICjigKvYp9mE2KPYsdiv2YbigKzigI4pJyxcbiAgICAgICdqbycsXG4gICAgICAnOTYyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0themFraHN0YW4gKNCa0LDQt9Cw0YXRgdGC0LDQvSknLFxuICAgICAgJ2t6JyxcbiAgICAgICc3JyxcbiAgICAgICcrLiAuLi4gLi4uLS4uLS4uJyxcbiAgICAgIDFcbiAgICBdLFxuICAgIFtcbiAgICAgICdLZW55YScsXG4gICAgICAna2UnLFxuICAgICAgJzI1NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdLaXJpYmF0aScsXG4gICAgICAna2knLFxuICAgICAgJzY4NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdLdXdhaXQgKOKAq9in2YTZg9mI2YrYquKArOKAjiknLFxuICAgICAgJ2t3JyxcbiAgICAgICc5NjUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnS3lyZ3l6c3RhbiAo0JrRi9GA0LPRi9C30YHRgtCw0L0pJyxcbiAgICAgICdrZycsXG4gICAgICAnOTk2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xhb3MgKOC6peC6suC6pyknLFxuICAgICAgJ2xhJyxcbiAgICAgICc4NTYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTGF0dmlhIChMYXR2aWphKScsXG4gICAgICAnbHYnLFxuICAgICAgJzM3MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdMZWJhbm9uICjigKvZhNio2YbYp9mG4oCs4oCOKScsXG4gICAgICAnbGInLFxuICAgICAgJzk2MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdMZXNvdGhvJyxcbiAgICAgICdscycsXG4gICAgICAnMjY2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xpYmVyaWEnLFxuICAgICAgJ2xyJyxcbiAgICAgICcyMzEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTGlieWEgKOKAq9mE2YrYqNmK2KfigKzigI4pJyxcbiAgICAgICdseScsXG4gICAgICAnMjE4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xpZWNodGVuc3RlaW4nLFxuICAgICAgJ2xpJyxcbiAgICAgICc0MjMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTGl0aHVhbmlhIChMaWV0dXZhKScsXG4gICAgICAnbHQnLFxuICAgICAgJzM3MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdMdXhlbWJvdXJnJyxcbiAgICAgICdsdScsXG4gICAgICAnMzUyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hY2F1ICjmvrPploApJyxcbiAgICAgICdtbycsXG4gICAgICAnODUzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hY2Vkb25pYSAoRllST00pICjQnNCw0LrQtdC00L7QvdC40ZjQsCknLFxuICAgICAgJ21rJyxcbiAgICAgICczODknXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFkYWdhc2NhciAoTWFkYWdhc2lrYXJhKScsXG4gICAgICAnbWcnLFxuICAgICAgJzI2MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWxhd2knLFxuICAgICAgJ213JyxcbiAgICAgICcyNjUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFsYXlzaWEnLFxuICAgICAgJ215JyxcbiAgICAgICc2MCcsXG4gICAgICAnKy4uIC4uLS4uLi4tLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWxkaXZlcycsXG4gICAgICAnbXYnLFxuICAgICAgJzk2MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWxpJyxcbiAgICAgICdtbCcsXG4gICAgICAnMjIzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hbHRhJyxcbiAgICAgICdtdCcsXG4gICAgICAnMzU2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hcnNoYWxsIElzbGFuZHMnLFxuICAgICAgJ21oJyxcbiAgICAgICc2OTInXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFydGluaXF1ZScsXG4gICAgICAnbXEnLFxuICAgICAgJzU5NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYXVyaXRhbmlhICjigKvZhdmI2LHZitiq2KfZhtmK2KfigKzigI4pJyxcbiAgICAgICdtcicsXG4gICAgICAnMjIyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hdXJpdGl1cyAoTW9yaXMpJyxcbiAgICAgICdtdScsXG4gICAgICAnMjMwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01leGljbyAoTcOpeGljbyknLFxuICAgICAgJ214JyxcbiAgICAgICc1MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNaWNyb25lc2lhJyxcbiAgICAgICdmbScsXG4gICAgICAnNjkxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01vbGRvdmEgKFJlcHVibGljYSBNb2xkb3ZhKScsXG4gICAgICAnbWQnLFxuICAgICAgJzM3MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdNb25hY28nLFxuICAgICAgJ21jJyxcbiAgICAgICczNzcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTW9uZ29saWEgKNCc0L7QvdCz0L7QuyknLFxuICAgICAgJ21uJyxcbiAgICAgICc5NzYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTW9udGVuZWdybyAoQ3JuYSBHb3JhKScsXG4gICAgICAnbWUnLFxuICAgICAgJzM4MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNb250c2VycmF0JyxcbiAgICAgICdtcycsXG4gICAgICAnMTY2NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNb3JvY2NvICjigKvYp9mE2YXYutix2KjigKzigI4pJyxcbiAgICAgICdtYScsXG4gICAgICAnMjEyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01vemFtYmlxdWUgKE1vw6dhbWJpcXVlKScsXG4gICAgICAnbXonLFxuICAgICAgJzI1OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNeWFubWFyIChCdXJtYSkgKOGAmeGAvOGAlOGAuuGAmeGArCknLFxuICAgICAgJ21tJyxcbiAgICAgICc5NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdOYW1pYmlhIChOYW1pYmnDqyknLFxuICAgICAgJ25hJyxcbiAgICAgICcyNjQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmF1cnUnLFxuICAgICAgJ25yJyxcbiAgICAgICc2NzQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmVwYWwgKOCkqOClh+CkquCkvuCksiknLFxuICAgICAgJ25wJyxcbiAgICAgICc5NzcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmV0aGVybGFuZHMgKE5lZGVybGFuZCknLFxuICAgICAgJ25sJyxcbiAgICAgICczMScsXG4gICAgICAnKy4uIC4uIC4uLi4uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05ldyBDYWxlZG9uaWEgKE5vdXZlbGxlLUNhbMOpZG9uaWUpJyxcbiAgICAgICduYycsXG4gICAgICAnNjg3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05ldyBaZWFsYW5kJyxcbiAgICAgICdueicsXG4gICAgICAnNjQnLFxuICAgICAgJysuLiAuLi4tLi4uLS4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmljYXJhZ3VhJyxcbiAgICAgICduaScsXG4gICAgICAnNTA1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05pZ2VyIChOaWphciknLFxuICAgICAgJ25lJyxcbiAgICAgICcyMjcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmlnZXJpYScsXG4gICAgICAnbmcnLFxuICAgICAgJzIzNCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdOaXVlJyxcbiAgICAgICdudScsXG4gICAgICAnNjgzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05vcmZvbGsgSXNsYW5kJyxcbiAgICAgICduZicsXG4gICAgICAnNjcyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05vcnRoIEtvcmVhICjsobDshKAg66+87KO87KO87J2YIOyduOuvvCDqs7XtmZTqta0pJyxcbiAgICAgICdrcCcsXG4gICAgICAnODUwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gICAgICAnbXAnLFxuICAgICAgJzE2NzAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTm9yd2F5IChOb3JnZSknLFxuICAgICAgJ25vJyxcbiAgICAgICc0NycsXG4gICAgICAnKy4uIC4uLiAuLiAuLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnT21hbiAo4oCr2LnZj9mF2KfZhuKArOKAjiknLFxuICAgICAgJ29tJyxcbiAgICAgICc5NjgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGFraXN0YW4gKOKAq9m+2Kfaqdiz2KrYp9mG4oCs4oCOKScsXG4gICAgICAncGsnLFxuICAgICAgJzkyJyxcbiAgICAgICcrLi4gLi4uLS4uLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGFsYXUnLFxuICAgICAgJ3B3JyxcbiAgICAgICc2ODAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGFsZXN0aW5lICjigKvZgdmE2LPYt9mK2YbigKzigI4pJyxcbiAgICAgICdwcycsXG4gICAgICAnOTcwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1BhbmFtYSAoUGFuYW3DoSknLFxuICAgICAgJ3BhJyxcbiAgICAgICc1MDcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgICAncGcnLFxuICAgICAgJzY3NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdQYXJhZ3VheScsXG4gICAgICAncHknLFxuICAgICAgJzU5NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdQZXJ1IChQZXLDuiknLFxuICAgICAgJ3BlJyxcbiAgICAgICc1MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdQaGlsaXBwaW5lcycsXG4gICAgICAncGgnLFxuICAgICAgJzYzJyxcbiAgICAgICcrLi4gLi4uIC4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnUG9sYW5kIChQb2xza2EpJyxcbiAgICAgICdwbCcsXG4gICAgICAnNDgnLFxuICAgICAgJysuLiAuLi4tLi4uLS4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdQb3J0dWdhbCcsXG4gICAgICAncHQnLFxuICAgICAgJzM1MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdQdWVydG8gUmljbycsXG4gICAgICAncHInLFxuICAgICAgJzEnLFxuICAgICAgJycsXG4gICAgICAzLFxuICAgICAgWyc3ODcnLCAnOTM5J11cbiAgICBdLFxuICAgIFtcbiAgICAgICdRYXRhciAo4oCr2YLYt9ix4oCs4oCOKScsXG4gICAgICAncWEnLFxuICAgICAgJzk3NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdSw6l1bmlvbiAoTGEgUsOpdW5pb24pJyxcbiAgICAgICdyZScsXG4gICAgICAnMjYyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1JvbWFuaWEgKFJvbcOibmlhKScsXG4gICAgICAncm8nLFxuICAgICAgJzQwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1J1c3NpYSAo0KDQvtGB0YHQuNGPKScsXG4gICAgICAncnUnLFxuICAgICAgJzcnLFxuICAgICAgJysuIC4uLiAuLi4tLi4tLi4nLFxuICAgICAgMFxuICAgIF0sXG4gICAgW1xuICAgICAgJ1J3YW5kYScsXG4gICAgICAncncnLFxuICAgICAgJzI1MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBCYXJ0aMOpbGVteSAoU2FpbnQtQmFydGjDqWxlbXkpJyxcbiAgICAgICdibCcsXG4gICAgICAnNTkwJyxcbiAgICAgICcnLFxuICAgICAgMVxuICAgIF0sXG4gICAgW1xuICAgICAgJ1NhaW50IEhlbGVuYScsXG4gICAgICAnc2gnLFxuICAgICAgJzI5MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBLaXR0cyBhbmQgTmV2aXMnLFxuICAgICAgJ2tuJyxcbiAgICAgICcxODY5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NhaW50IEx1Y2lhJyxcbiAgICAgICdsYycsXG4gICAgICAnMTc1OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBNYXJ0aW4gKFNhaW50LU1hcnRpbiAocGFydGllIGZyYW7Dp2Fpc2UpKScsXG4gICAgICAnbWYnLFxuICAgICAgJzU5MCcsXG4gICAgICAnJyxcbiAgICAgIDJcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uIChTYWludC1QaWVycmUtZXQtTWlxdWVsb24pJyxcbiAgICAgICdwbScsXG4gICAgICAnNTA4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgICAgICd2YycsXG4gICAgICAnMTc4NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYW1vYScsXG4gICAgICAnd3MnLFxuICAgICAgJzY4NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYW4gTWFyaW5vJyxcbiAgICAgICdzbScsXG4gICAgICAnMzc4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1PDo28gVG9tw6kgYW5kIFByw61uY2lwZSAoU8OjbyBUb23DqSBlIFByw61uY2lwZSknLFxuICAgICAgJ3N0JyxcbiAgICAgICcyMzknXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2F1ZGkgQXJhYmlhICjigKvYp9mE2YXZhdmE2YPYqSDYp9mE2LnYsdio2YrYqSDYp9mE2LPYudmI2K/Zitip4oCs4oCOKScsXG4gICAgICAnc2EnLFxuICAgICAgJzk2NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTZW5lZ2FsIChTw6luw6lnYWwpJyxcbiAgICAgICdzbicsXG4gICAgICAnMjIxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NlcmJpYSAo0KHRgNCx0LjRmNCwKScsXG4gICAgICAncnMnLFxuICAgICAgJzM4MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTZXljaGVsbGVzJyxcbiAgICAgICdzYycsXG4gICAgICAnMjQ4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NpZXJyYSBMZW9uZScsXG4gICAgICAnc2wnLFxuICAgICAgJzIzMidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTaW5nYXBvcmUnLFxuICAgICAgJ3NnJyxcbiAgICAgICc2NScsXG4gICAgICAnKy4uIC4uLi4tLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTaW50IE1hYXJ0ZW4nLFxuICAgICAgJ3N4JyxcbiAgICAgICcxNzIxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1Nsb3Zha2lhIChTbG92ZW5za28pJyxcbiAgICAgICdzaycsXG4gICAgICAnNDIxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1Nsb3ZlbmlhIChTbG92ZW5pamEpJyxcbiAgICAgICdzaScsXG4gICAgICAnMzg2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NvbG9tb24gSXNsYW5kcycsXG4gICAgICAnc2InLFxuICAgICAgJzY3NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdTb21hbGlhIChTb29tYWFsaXlhKScsXG4gICAgICAnc28nLFxuICAgICAgJzI1MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTb3V0aCBBZnJpY2EnLFxuICAgICAgJ3phJyxcbiAgICAgICcyNydcbiAgICBdLFxuICAgIFtcbiAgICAgICdTb3V0aCBLb3JlYSAo64yA7ZWc66+86rWtKScsXG4gICAgICAna3InLFxuICAgICAgJzgyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NvdXRoIFN1ZGFuICjigKvYrNmG2YjYqCDYp9mE2LPZiNiv2KfZhuKArOKAjiknLFxuICAgICAgJ3NzJyxcbiAgICAgICcyMTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3BhaW4gKEVzcGHDsWEpJyxcbiAgICAgICdlcycsXG4gICAgICAnMzQnLFxuICAgICAgJysuLiAuLi4gLi4uIC4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTcmkgTGFua2EgKOC3geC3iuKAjeC2u+C3kyDgtr3gtoLgtprgt4/gt4ApJyxcbiAgICAgICdsaycsXG4gICAgICAnOTQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3VkYW4gKOKAq9in2YTYs9mI2K/Yp9mG4oCs4oCOKScsXG4gICAgICAnc2QnLFxuICAgICAgJzI0OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTdXJpbmFtZScsXG4gICAgICAnc3InLFxuICAgICAgJzU5NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdTd2F6aWxhbmQnLFxuICAgICAgJ3N6JyxcbiAgICAgICcyNjgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3dlZGVuIChTdmVyaWdlKScsXG4gICAgICAnc2UnLFxuICAgICAgJzQ2JyxcbiAgICAgICcrLi4gLi4gLi4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1N3aXR6ZXJsYW5kIChTY2h3ZWl6KScsXG4gICAgICAnY2gnLFxuICAgICAgJzQxJyxcbiAgICAgICcrLi4gLi4gLi4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1N5cmlhICjigKvYs9mI2LHZitin4oCs4oCOKScsXG4gICAgICAnc3knLFxuICAgICAgJzk2MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdUYWl3YW4gKOWPsOeBoyknLFxuICAgICAgJ3R3JyxcbiAgICAgICc4ODYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVGFqaWtpc3RhbicsXG4gICAgICAndGonLFxuICAgICAgJzk5MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdUYW56YW5pYScsXG4gICAgICAndHonLFxuICAgICAgJzI1NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdUaGFpbGFuZCAo4LmE4LiX4LiiKScsXG4gICAgICAndGgnLFxuICAgICAgJzY2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1RpbW9yLUxlc3RlJyxcbiAgICAgICd0bCcsXG4gICAgICAnNjcwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1RvZ28nLFxuICAgICAgJ3RnJyxcbiAgICAgICcyMjgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVG9rZWxhdScsXG4gICAgICAndGsnLFxuICAgICAgJzY5MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdUb25nYScsXG4gICAgICAndG8nLFxuICAgICAgJzY3NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgICAgICd0dCcsXG4gICAgICAnMTg2OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdUdW5pc2lhICjigKvYqtmI2YbYs+KArOKAjiknLFxuICAgICAgJ3RuJyxcbiAgICAgICcyMTYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVHVya2V5IChUw7xya2l5ZSknLFxuICAgICAgJ3RyJyxcbiAgICAgICc5MCcsXG4gICAgICAnKy4uIC4uLiAuLi4gLi4gLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnVHVya21lbmlzdGFuJyxcbiAgICAgICd0bScsXG4gICAgICAnOTkzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXG4gICAgICAndGMnLFxuICAgICAgJzE2NDknXG4gICAgXSxcbiAgICBbXG4gICAgICAnVHV2YWx1JyxcbiAgICAgICd0dicsXG4gICAgICAnNjg4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1UuUy4gVmlyZ2luIElzbGFuZHMnLFxuICAgICAgJ3ZpJyxcbiAgICAgICcxMzQwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1VnYW5kYScsXG4gICAgICAndWcnLFxuICAgICAgJzI1NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdVa3JhaW5lICjQo9C60YDQsNGX0L3QsCknLFxuICAgICAgJ3VhJyxcbiAgICAgICczODAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKOKAq9in2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2KnigKzigI4pJyxcbiAgICAgICdhZScsXG4gICAgICAnOTcxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICAgICdnYicsXG4gICAgICAnNDQnLFxuICAgICAgJysuLiAuLi4uIC4uLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgICd1cycsXG4gICAgICAnMScsXG4gICAgICAnKy4gKC4uLikgLi4uLS4uLi4nLFxuICAgICAgMFxuICAgIF0sXG4gICAgW1xuICAgICAgJ1VydWd1YXknLFxuICAgICAgJ3V5JyxcbiAgICAgICc1OTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVXpiZWtpc3RhbiAoT8q7emJla2lzdG9uKScsXG4gICAgICAndXonLFxuICAgICAgJzk5OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdWYW51YXR1JyxcbiAgICAgICd2dScsXG4gICAgICAnNjc4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1ZhdGljYW4gQ2l0eSAoQ2l0dMOgIGRlbCBWYXRpY2FubyknLFxuICAgICAgJ3ZhJyxcbiAgICAgICczOScsXG4gICAgICAnKy4uIC4uIC4uLi4gLi4uLicsXG4gICAgICAxXG4gICAgXSxcbiAgICBbXG4gICAgICAnVmVuZXp1ZWxhJyxcbiAgICAgICd2ZScsXG4gICAgICAnNTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVmlldG5hbSAoVmnhu4d0IE5hbSknLFxuICAgICAgJ3ZuJyxcbiAgICAgICc4NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gICAgICAnd2YnLFxuICAgICAgJzY4MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdZZW1lbiAo4oCr2KfZhNmK2YXZhuKArOKAjiknLFxuICAgICAgJ3llJyxcbiAgICAgICc5NjcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnWmFtYmlhJyxcbiAgICAgICd6bScsXG4gICAgICAnMjYwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1ppbWJhYndlJyxcbiAgICAgICd6dycsXG4gICAgICAnMjYzJ1xuICAgIF1cbiAgXTtcblxuLy8gd2Ugd2lsbCBidWlsZCB0aGlzIGluIHRoZSBsb29wIGJlbG93XG52YXIgYWxsQ291bnRyeUNvZGVzID0ge307XG52YXIgYWxsQ291bnRyaWVzSXNvMkxvb2t1cCA9IHt9O1xudmFyIGFkZENvdW50cnlDb2RlID0gZnVuY3Rpb24oaXNvMiwgZGlhbENvZGUsIHByaW9yaXR5KSB7XG4gIGlmICghKGRpYWxDb2RlIGluIGFsbENvdW50cnlDb2RlcykpIHtcbiAgICBhbGxDb3VudHJ5Q29kZXNbZGlhbENvZGVdID0gW107XG4gIH1cbiAgdmFyIGluZGV4ID0gcHJpb3JpdHkgfHwgMDtcbiAgYWxsQ291bnRyeUNvZGVzW2RpYWxDb2RlXVtpbmRleF0gPSBpc28yO1xufTtcblxuLy8gbG9vcCBvdmVyIGFsbCBvZiB0aGUgY291bnRyaWVzIGFib3ZlXG4vLyBhbGxDb3VudHJpZXMyID0gXy5tYXAoYWxsQ291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmFtZTogY291bnRyeVswXSxcbi8vICAgICBpc28yOiBjb3VudHJ5WzFdLFxuLy8gICAgIGRpYWxDb2RlOiBjb3VudHJ5WzJdLFxuLy8gICAgIGZvcm1hdDogY291bnRyeVszXSxcbi8vICAgICBoYXNBcmVhQ29kZXM6IGNvdW50cnkubGVuZ3RoID4gNFxuLy8gICB9XG4vLyB9KTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjb3VudHJpZXNcbiAgICB2YXIgYyA9IGFsbENvdW50cmllc1tpXTtcbiAgICBhbGxDb3VudHJpZXNbaV0gPSB7XG4gICAgICBuYW1lOiBjWzBdLFxuICAgICAgaXNvMjogY1sxXSxcbiAgICAgIGRpYWxDb2RlOiBjWzJdLFxuICAgICAgcHJpb3JpdHk6IGNbNF0gfHwgMFxuICAgIH07XG4gICAgLy8gZm9ybWF0XG4gICAgaWYgKGNbM10pIHtcbiAgICAgIGFsbENvdW50cmllc1tpXS5mb3JtYXQgPSBjWzNdO1xuICAgIH1cblxuICAgIC8vIGFyZWEgY29kZXNcbiAgICBpZiAoY1s1XSkge1xuICAgICAgICBhbGxDb3VudHJpZXNbaV0uaGFzQXJlYUNvZGVzID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjWzVdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAvLyBmdWxsIGRpYWwgY29kZSBpcyBjb3VudHJ5IGNvZGUgKyBkaWFsIGNvZGVcbiAgICAgICAgICAgIHZhciBkaWFsQ29kZSA9IGNbMl0gKyBjWzVdW2pdO1xuICAgICAgICAgICAgYWRkQ291bnRyeUNvZGUoY1sxXSwgZGlhbENvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlhbCBjb2Rlc1xuICAgIGFkZENvdW50cnlDb2RlKGNbMV0sIGNbMl0sIGNbNF0pO1xuXG4gICAgYWxsQ291bnRyaWVzSXNvMkxvb2t1cFthbGxDb3VudHJpZXNbaV0uaXNvMl0gPSBpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgICAgIGFsbENvdW50cmllczogYWxsQ291bnRyaWVzLFxuICAgICAgICAgICAgYWxsQ291bnRyaWVzSXNvMkxvb2t1cDogYWxsQ291bnRyaWVzSXNvMkxvb2t1cCxcbiAgICAgICAgICAgIGFsbENvdW50cnlDb2RlczogYWxsQ291bnRyeUNvZGVzXG4gICAgICAgIH07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFRPRE8gLSBmaXggdGhlIG9ubHlDb250cmllcyBwcm9wcy4gQ3VycmVudGx5IGV4cGVjdHMgdGhhdCBhcyBhbiBhcnJheSBvZiBjb3VudHJ5IG9iamVjdCwgYnV0IHVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIHNlbmQgaW4gYXJyYXkgb2YgY291bnRyeSBpc29zXG5cbnZhciBzb21lID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vc29tZScpO1xudmFyIGZpbmRXaGVyZSA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL2ZpbmRXaGVyZScpO1xudmFyIHJlZHVjZSA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL3JlZHVjZScpO1xudmFyIG1hcCA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL21hcCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL2ZpbHRlcicpO1xudmFyIGFueSA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL2FueScpO1xudmFyIGZpbmRJbmRleCA9IHJlcXVpcmUoJ2xvZGFzaC9hcnJheS9maW5kSW5kZXgnKTtcbnZhciBmaXJzdCA9IHJlcXVpcmUoJ2xvZGFzaC9hcnJheS9maXJzdCcpO1xudmFyIHJlc3QgPSByZXF1aXJlKCdsb2Rhc2gvYXJyYXkvcmVzdCcpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlJyk7XG52YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJ2xvZGFzaC9mdW5jdGlvbi9tZW1vaXplJyk7XG4vLyBpbXBvcnQgbG9kYXNoIHN0cmluZyBtZXRob2RzXG52YXIgdHJpbSA9IHJlcXVpcmUoJ2xvZGFzaC9zdHJpbmcvdHJpbScpO1xudmFyIHN0YXJ0c1dpdGggPSByZXF1aXJlKCdsb2Rhc2gvc3RyaW5nL3N0YXJ0c1dpdGgnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIG9uQ2xpY2tPdXRzaWRlID0gcmVxdWlyZSgncmVhY3Qtb25jbGlja291dHNpZGUnKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIGNvdW50cnlEYXRhID0gcmVxdWlyZSgnLi9jb3VudHJ5X2RhdGEnKTtcbnZhciBhbGxDb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG52YXIgYWxsQ291bnRyaWVzSXNvMkxvb2t1cCA9IGNvdW50cnlEYXRhLmFsbENvdW50cmllc0lzbzJMb29rdXA7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBpc01vZGVybkJyb3dzZXIgPSBCb29sZWFuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jykuc2V0U2VsZWN0aW9uUmFuZ2UpO1xufSBlbHNlIHtcbiAgdmFyIGlzTW9kZXJuQnJvd3NlciA9IHRydWU7XG59XG5cbnZhciBrZXlzID0ge1xuICAgICAgICBVUDogMzgsXG4gICAgICAgIERPV046IDQwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIExFRlQ6IDM3LFxuICAgICAgICBFTlRFUjogMTMsXG4gICAgICAgIEVTQzogMjcsXG4gICAgICAgIFBMVVM6IDQzLFxuICAgICAgICBBOiA2NSxcbiAgICAgICAgWjogOTAsXG4gICAgICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gaXNOdW1iZXJWYWxpZChpbnB1dE51bWJlcikge1xuICAgIHZhciBjb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG4gICAgcmV0dXJuIHNvbWUoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoKGlucHV0TnVtYmVyLCBjb3VudHJ5LmRpYWxDb2RlKSB8fCBzdGFydHNXaXRoKGNvdW50cnkuZGlhbENvZGUsIGlucHV0TnVtYmVyKTtcbiAgICB9KTtcbn1cblxudmFyIFJlYWN0VGVsZXBob25lSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgbWl4aW5zOiBbb25DbGlja091dHNpZGVdLFxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgdmFyIGlucHV0TnVtYmVyID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJztcbiAgICAgICAgdmFyIHNlbGVjdGVkQ291bnRyeUd1ZXNzID0gdGhpcy5ndWVzc1NlbGVjdGVkQ291bnRyeShpbnB1dE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgICAgICAgdmFyIHNlbGVjdGVkQ291bnRyeUd1ZXNzSW5kZXggPSBmaW5kSW5kZXgoYWxsQ291bnRyaWVzLCBzZWxlY3RlZENvdW50cnlHdWVzcyk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB0aGlzLmZvcm1hdE51bWJlcihpbnB1dE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpLCBzZWxlY3RlZENvdW50cnlHdWVzcyA/IHNlbGVjdGVkQ291bnRyeUd1ZXNzLmZvcm1hdCA6IG51bGwpO1xuICAgICAgICB2YXIgcHJlZmVycmVkQ291bnRyaWVzID0gW107XG5cblxuICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXMgPSB0aGlzLnByb3BzLnByZWZlcnJlZENvdW50cmllcy5tYXAoaXNvMiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWxsQ291bnRyaWVzSXNvMkxvb2t1cC5oYXNPd25Qcm9wZXJ0eShpc28yKSA/IGFsbENvdW50cmllc1thbGxDb3VudHJpZXNJc28yTG9va3VwW2lzbzJdXSA6IG51bGw7XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsICE9PSBudWxsO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUT0RPOiBmaWx0ZXIgb3V0IG51bGxzXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZlcnJlZENvdW50cmllczogcHJlZmVycmVkQ291bnRyaWVzLFxuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5OiBzZWxlY3RlZENvdW50cnlHdWVzcyxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogc2VsZWN0ZWRDb3VudHJ5R3Vlc3NJbmRleCxcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlcjogZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgICAgIGZyZWV6ZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkZWJvdW5jZWRRdWVyeVN0aW5nU2VhcmNoZXI6IGRlYm91bmNlKHRoaXMuc2VhcmNoQ291bnRyeSwgMTAwKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhdXRvRm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGVmYXVsdENvdW50cnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9ubHlDb3VudHJpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uRW50ZXJLZXlQcmVzczogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGF1dG9Gb3JtYXQ6IHRydWUsXG4gICAgICAgICAgICBvbmx5Q291bnRyaWVzOiBhbGxDb3VudHJpZXMsXG4gICAgICAgICAgICBkZWZhdWx0Q291bnRyeTogYWxsQ291bnRyaWVzWzFdLmlzbzIsXG4gICAgICAgICAgICBpc1ZhbGlkOiBpc051bWJlclZhbGlkLFxuICAgICAgICAgICAgZmxhZ3NJbWFnZVBhdGg6ICdmbGFncy5wbmcnLFxuICAgICAgICAgICAgb25FbnRlcktleVByZXNzOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIgIT09ICcrJyA/IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyIDogJyc7XG4gICAgfSxcbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCk7XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG5cbiAgICAgICAgdGhpcy5fY3Vyc29yVG9FbmQodHJ1ZSk7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICB9LFxuICAgIHNjcm9sbFRvKGNvdW50cnksIG1pZGRsZSkge1xuICAgICAgICBpZighY291bnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5mbGFnRHJvcGRvd25MaXN0KTtcblxuICAgICAgICBpZighY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBjb250YWluZXJPZmZzZXQgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjb250YWluZXJUb3AgPSBjb250YWluZXJPZmZzZXQudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBjb250YWluZXJCb3R0b20gPSBjb250YWluZXJUb3AgKyBjb250YWluZXJIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjb3VudHJ5O1xuICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtZW50T2Zmc2V0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB2YXIgbmV3U2Nyb2xsVG9wID0gZWxlbWVudFRvcCAtIGNvbnRhaW5lclRvcCArIGNvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSAoY29udGFpbmVySGVpZ2h0IC8gMikgLSAoZWxlbWVudEhlaWdodCAvIDIpO1xuXG4gICAgICAgIGlmIChlbGVtZW50VG9wIDwgY29udGFpbmVyVG9wKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdXBcbiAgICAgICAgICAgIGlmIChtaWRkbGUpIHtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgLT0gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Qm90dG9tID4gY29udGFpbmVyQm90dG9tKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgZG93blxuICAgICAgICAgICAgaWYobWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsVG9wICs9IG1pZGRsZU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWlnaHREaWZmZXJlbmNlID0gY29udGFpbmVySGVpZ2h0IC0gZWxlbWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3AgLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmb3JtYXROdW1iZXIodGV4dCwgcGF0dGVybikge1xuICAgICAgICBpZighdGV4dCB8fCB0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBhbGwgc3RyaW5ncyB3aXRoIGxlbmd0aCBsZXNzIHRoYW4gMywganVzdCByZXR1cm4gaXQgKDEsIDIgZXRjLilcbiAgICAgICAgLy8gYWxzbyByZXR1cm4gdGhlIHNhbWUgdGV4dCBpZiB0aGUgc2VsZWN0ZWQgY291bnRyeSBoYXMgbm8gZml4ZWQgZm9ybWF0XG4gICAgICAgIGlmKCh0ZXh0ICYmIHRleHQubGVuZ3RoIDwgMikgfHwgIXBhdHRlcm4gfHwgIXRoaXMucHJvcHMuYXV0b0Zvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIGArJHt0ZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0dGVkT2JqZWN0ID0gcmVkdWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGFjYywgY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBpZihhY2MucmVtYWluaW5nVGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFyYWN0ZXIgIT09ICcuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRleHQ6IGFjYy5mb3JtYXR0ZWRUZXh0ICsgY2hhcmFjdGVyLFxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0OiBhY2MucmVtYWluaW5nVGV4dFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGV4dDogYWNjLmZvcm1hdHRlZFRleHQgKyBmaXJzdChhY2MucmVtYWluaW5nVGV4dCksXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dDogcmVzdChhY2MucmVtYWluaW5nVGV4dClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHtmb3JtYXR0ZWRUZXh0OiAnJywgcmVtYWluaW5nVGV4dDogdGV4dC5zcGxpdCgnJyl9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZE9iamVjdC5mb3JtYXR0ZWRUZXh0ICsgZm9ybWF0dGVkT2JqZWN0LnJlbWFpbmluZ1RleHQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIHB1dCB0aGUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0ICh1c3VhbGx5IGFmdGVyIGEgZm9jdXMgZXZlbnQpXG4gICAgX2N1cnNvclRvRW5kKHNraXBGb2N1cykge1xuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMubnVtYmVySW5wdXQ7XG4gICAgICAgIGlmIChza2lwRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAgICAgaWYgKGlzTW9kZXJuQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSBpbnB1dC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuLCBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBtZW1vaXplIHJlc3VsdHMgYmFzZWQgb24gdGhlIGZpcnN0IDUvNiBjaGFyYWN0ZXJzLiBUaGF0IGlzIGFsbCB0aGF0IG1hdHRlcnNcbiAgICBndWVzc1NlbGVjdGVkQ291bnRyeTogbWVtb2l6ZShmdW5jdGlvbihpbnB1dE51bWJlcikge1xuICAgICAgICB2YXIgc2Vjb25kQmVzdEd1ZXNzID0gZmluZFdoZXJlKGFsbENvdW50cmllcywge2lzbzI6IHRoaXMucHJvcHMuZGVmYXVsdENvdW50cnl9KSB8fCB0aGlzLnByb3BzLm9ubHlDb3VudHJpZXNbMF07XG4gICAgICAgIGlmKHRyaW0oaW5wdXROdW1iZXIpICE9PSAnJykge1xuICAgICAgICAgICAgdmFyIGJlc3RHdWVzcyA9IHJlZHVjZSh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIGZ1bmN0aW9uKHNlbGVjdGVkQ291bnRyeSwgY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0YXJ0c1dpdGgoaW5wdXROdW1iZXIsIGNvdW50cnkuZGlhbENvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvdW50cnkuZGlhbENvZGUubGVuZ3RoID4gc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnRyeS5kaWFsQ29kZS5sZW5ndGggPT09IHNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZS5sZW5ndGggJiYgY291bnRyeS5wcmlvcml0eSA8IHNlbGVjdGVkQ291bnRyeS5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge2RpYWxDb2RlOiAnJywgcHJpb3JpdHk6IDEwMDAxfSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kQmVzdEd1ZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJlc3RHdWVzcy5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kQmVzdEd1ZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RHdWVzcztcbiAgICB9KSxcbiAgICBnZXRFbGVtZW50KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnNbYGZsYWdfbm9fJHtpbmRleH1gXSk7XG4gICAgfSxcbiAgICBoYW5kbGVGbGFnRHJvcGRvd25DbGljaygpIHtcbiAgICAgICAgLy8gbmVlZCB0byBwdXQgdGhlIGhpZ2hsaWdodCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBjb3VudHJ5IGlmIHRoZSBkcm9wZG93biBpcyBnb2luZyB0byBvcGVuIHVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiAhdGhpcy5zdGF0ZS5zaG93RHJvcERvd24sXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5OiBmaW5kV2hlcmUodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSksXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IGZpbmRJbmRleCh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IG5lZWQgdG8gc2Nyb29sIGlmIHRoZSBkcm9wZG93biBsaXN0IGlzIGFsaXZlXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dEcm9wRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRFbGVtZW50KHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ICsgdGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9ICcrJywgbmV3U2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnksIGZyZWV6ZVNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uO1xuXG4gICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpcyB0aGUgc2FtZSBhcyBiZWZvcmUsIG11c3QgYmUgc29tZSBzcGVjaWFsIGtleSBsaWtlIGVudGVyIGV0Yy5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSB0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWUgaGFja1xuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gYmVmb3JlIGVudGVyaW5nIHRoZSBudW1iZXIgaW4gbmV3IGZvcm1hdCwgbGV0cyBjaGVjayBpZiB0aGUgZGlhbCBjb2RlIG5vdyBtYXRjaGVzIHNvbWUgb3RoZXIgY291bnRyeVxuICAgICAgICAgICAgdmFyIGlucHV0TnVtYmVyID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gc2VuZCB0aGUgd2hvbGUgbnVtYmVyIHRvIGd1ZXNzIHRoZSBjb3VudHJ5Li4uIG9ubHkgdGhlIGZpcnN0IDYgY2hhcmFjdGVycyBhcmUgZW5vdWdoXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgY291bnRyeSBmdW5jdGlvbiBjYW4gdGhlbiB1c2UgbWVtb2l6YXRpb24gbXVjaCBtb3JlIGVmZmVjdGl2ZWx5IHNpbmNlIHRoZSBzZXQgb2YgaW5wdXQgaXQgZ2V0cyBoYXMgZHJhc3RpY2FsbHkgcmVkdWNlZFxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IGlucHV0TnVtYmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkQ291bnRyeSA9IHRoaXMuZ3Vlc3NTZWxlY3RlZENvdW50cnkoaW5wdXROdW1iZXIuc3Vic3RyaW5nKDAsIDYpKTtcbiAgICAgICAgICAgICAgICBmcmVlemVTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCB1cyByZW1vdmUgYWxsIG5vbiBudW1lcmFscyBmcm9tIHRoZSBpbnB1dFxuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIoaW5wdXROdW1iZXIsIG5ld1NlbGVjdGVkQ291bnRyeS5mb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBvbGRGb3JtYXR0ZWRUZXh0ID0gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXI7XG4gICAgICAgIHZhciBkaWZmID0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCAtIG9sZEZvcm1hdHRlZFRleHQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiBmb3JtYXR0ZWROdW1iZXIsXG4gICAgICAgICAgICBmcmVlemVTZWxlY3Rpb246IGZyZWV6ZVNlbGVjdGlvbixcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogbmV3U2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IDAgPyBuZXdTZWxlY3RlZENvdW50cnkgOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGlzTW9kZXJuQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIGlmKGNhcmV0UG9zaXRpb24gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJldFBvc2l0aW9uKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IGNhcmV0UG9zaXRpb24gLSBkaWZmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGNhcmV0UG9zaXRpb24gPiAwICYmIG9sZEZvcm1hdHRlZFRleHQubGVuZ3RoID49IGZvcm1hdHRlZE51bWJlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZzLm51bWJlcklucHV0LnNldFNlbGVjdGlvblJhbmdlKGNhcmV0UG9zaXRpb24sIGNhcmV0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9LFxuICAgIGhhbmRsZUlucHV0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wRG93bjogZmFsc2V9KTtcbiAgICB9LFxuICAgIGhhbmRsZUZsYWdJdGVtQ2xpY2soY291bnRyeSkge1xuICAgICAgICB2YXIgY3VycmVudFNlbGVjdGVkQ291bnRyeSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5O1xuICAgICAgICB2YXIgbmV4dFNlbGVjdGVkQ291bnRyeSA9IGZpbmRXaGVyZSh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIGNvdW50cnkpO1xuXG4gICAgICAgIC8vIHRpbnkgb3B0aW1pemF0aW9uXG4gICAgICAgIGlmKGN1cnJlbnRTZWxlY3RlZENvdW50cnkuaXNvMiAhPT0gbmV4dFNlbGVjdGVkQ291bnRyeS5pc28yKSB7XG4gICAgICAgICAgICAvLyBUT0RPIC0gdGhlIGJlbG93IHJlcGxhY2VtZW50IGlzIGEgYnVnLiBJdCB3aWxsIHJlcGxhY2Ugc3R1ZmYgZnJvbSBtaWRkbGUgdG9vXG4gICAgICAgICAgICB2YXIgbmV3TnVtYmVyID0gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIucmVwbGFjZShjdXJyZW50U2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLCBuZXh0U2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlKTtcbiAgICAgICAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB0aGlzLmZvcm1hdE51bWJlcihuZXdOdW1iZXIucmVwbGFjZSgvXFxEL2csICcnKSwgbmV4dFNlbGVjdGVkQ291bnRyeS5mb3JtYXQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93RHJvcERvd246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogbmV4dFNlbGVjdGVkQ291bnRyeSxcbiAgICAgICAgICAgICAgICBmcmVlemVTZWxlY3Rpb246IHRydWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiBmb3JtYXR0ZWROdW1iZXJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvclRvRW5kKCk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGZvcm1hdHRlZE51bWJlciwgbmV4dFNlbGVjdGVkQ291bnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Ryb3BEb3duOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dEZvY3VzKCkge1xuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXMgYmxhbmssIGluc2VydCBkaWFsIGNvZGUgb2YgdGhlIHNlbGVjdGVkIGNvdW50cnlcbiAgICAgICAgaWYodGhpcy5yZWZzLm51bWJlcklucHV0LnZhbHVlID09PSAnKycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1hdHRlZE51bWJlcjogJysnICsgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkuZGlhbENvZGV9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX2dldEhpZ2hsaWdodENvdW50cnlJbmRleChkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gaGFkIHRvIHdyaXRlIG93biBmdW5jdGlvbiBiZWNhdXNlIHVuZGVyc2NvcmUgZG9lcyBub3QgaGF2ZSBmaW5kSW5kZXguIGxvZGFzaCBoYXMgaXRcbiAgICAgICAgdmFyIGhpZ2hsaWdodENvdW50cnlJbmRleCA9IHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ICsgZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmKGhpZ2hsaWdodENvdW50cnlJbmRleCA8IDBcbiAgICAgICAgICAgIHx8IGhpZ2hsaWdodENvdW50cnlJbmRleCA+PSAodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLmxlbmd0aCArIHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBoaWdobGlnaHRDb3VudHJ5SW5kZXggLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0Q291bnRyeUluZGV4O1xuICAgIH0sXG4gICAgLy8gbWVtb2l6ZSBzZWFyY2ggcmVzdWx0cy4uLiBjYWNoaW5nIGFsbCB0aGUgd2F5XG4gICAgX3NlYXJjaENvdW50cnk6IG1lbW9pemUoZnVuY3Rpb24ocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgaWYoIXF1ZXJ5U3RyaW5nIHx8IHF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgaW5jbHVkZSB0aGUgcHJlZmVycmVkIGNvdW50cmllcyBpbiBzZWFyY2hcbiAgICAgICAgdmFyIHByb2JhYmxlQ291bnRyaWVzID0gZmlsdGVyKHRoaXMucHJvcHMub25seUNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgoY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCksIHF1ZXJ5U3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHByb2JhYmxlQ291bnRyaWVzWzBdO1xuICAgIH0pLFxuICAgIHNlYXJjaENvdW50cnkoKSB7XG4gICAgICAgIGNvbnN0IHByb2JhYmxlQ2FuZGlkYXRlID0gdGhpcy5fc2VhcmNoQ291bnRyeSh0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nKSB8fCB0aGlzLnByb3BzLm9ubHlDb3VudHJpZXNbMF07XG4gICAgICAgIGNvbnN0IHByb2JhYmxlQ2FuZGlkYXRlSW5kZXggPSBmaW5kSW5kZXgodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCBwcm9iYWJsZUNhbmRpZGF0ZSkgKyB0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLmdldEVsZW1lbnQocHJvYmFibGVDYW5kaWRhdGVJbmRleCksIHRydWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcXVlcnlTdHJpbmc6ICcnLFxuICAgICAgICAgICAgaGlnaGxpZ2h0Q291bnRyeUluZGV4OiBwcm9iYWJsZUNhbmRpZGF0ZUluZGV4XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgICAgICBpZighdGhpcy5zdGF0ZS5zaG93RHJvcERvd24pIHtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWUgaGFja1xuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIF9tb3ZlSGlnaGxpZ2h0KGRpcmVjdGlvbikge1xuICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0Q291bnRyeUluZGV4OiBzZWxmLl9nZXRIaWdobGlnaHRDb3VudHJ5SW5kZXgoZGlyZWN0aW9uKVxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsVG8oc2VsZi5nZXRFbGVtZW50KHNlbGYuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4KSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgY2FzZSBrZXlzLkRPV046XG4gICAgICAgICAgICAgICAgICAgIF9tb3ZlSGlnaGxpZ2h0KDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgX21vdmVIaWdobGlnaHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5cy5FTlRFUjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVGbGFnSXRlbUNsaWNrKHRoaXMucHJvcHMub25seUNvdW50cmllc1t0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleF0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGtleXMuRVNDOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wRG93bjogZmFsc2V9LCB0aGlzLl9jdXJzb3JUb0VuZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmKChldmVudC53aGljaCA+PSBrZXlzLkEgJiYgZXZlbnQud2hpY2ggPD0ga2V5cy5aKSB8fCBldmVudC53aGljaCA9PT0ga2V5cy5TUEFDRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWVyeVN0cmluZzogdGhpcy5zdGF0ZS5xdWVyeVN0cmluZyArIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVib3VuY2VkUXVlcnlTdGluZ1NlYXJjaGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUlucHV0S2V5RG93bihldmVudCkge1xuICAgICAgICBpZihldmVudC53aGljaCA9PT0ga2V5cy5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkVudGVyS2V5UHJlc3MoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVDbGlja091dHNpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93RHJvcERvd246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q291bnRyeURyb3BEb3duTGlzdCgpIHtcblxuICAgICAgICB2YXIgY291bnRyeURyb3BEb3duTGlzdCA9IG1hcCh0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5jb25jYXQodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzKSwgZnVuY3Rpb24oY291bnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIGNvdW50cnk6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkOiBjb3VudHJ5LmlzbzIgPT09ICd1cycgfHwgY291bnRyeS5pc28yID09PSAnZ2InLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogY291bnRyeS5pc28yID09PSAndXMnLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGlucHV0RmxhZ0NsYXNzZXMgPSBgZmxhZyAke2NvdW50cnkuaXNvMn1gO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICByZWY9e2BmbGFnX25vXyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtgZmxhZ19ub18ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZmxhZy1rZXk9e2BmbGFnX25vXyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kaWFsLWNvZGU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jb3VudHJ5LWNvZGU9e2NvdW50cnkuaXNvMn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGbGFnSXRlbUNsaWNrLmJpbmQodGhpcywgY291bnRyeSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5wdXRGbGFnQ2xhc3Nlc30gc3R5bGU9e3RoaXMuZ2V0RmxhZ1N0eWxlKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY291bnRyeS1uYW1lJz57Y291bnRyeS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkaWFsLWNvZGUnPnsnKycgKyBjb3VudHJ5LmRpYWxDb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgY29uc3QgZGFzaGVkTGkgPSAoPGxpIGtleT17XCJkYXNoZXNcIn0gY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+KTtcbiAgICAgICAgLy8gbGV0J3MgaW5zZXJ0IGEgZGFzaGVkIGxpbmUgaW4gYmV0d2VlbiBwcmVmZmVyZWQgY291bnRyaWVzIGFuZCB0aGUgcmVzdFxuICAgICAgICBjb3VudHJ5RHJvcERvd25MaXN0LnNwbGljZSh0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgsIDAsIGRhc2hlZExpKTtcblxuICAgICAgICBjb25zdCBkcm9wRG93bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdjb3VudHJ5LWxpc3QnOiB0cnVlLFxuICAgICAgICAgICAgJ2hpZGUnOiAhdGhpcy5zdGF0ZS5zaG93RHJvcERvd25cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgcmVmPVwiZmxhZ0Ryb3Bkb3duTGlzdFwiIGNsYXNzTmFtZT17ZHJvcERvd25DbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7Y291bnRyeURyb3BEb3duTGlzdH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICBnZXRGbGFnU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogMTYsXG4gICAgICAgICAgICBoZWlnaHQ6IDExLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dGhpcy5wcm9wcy5mbGFnc0ltYWdlUGF0aH0pYFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgaGFuZGxlSW5wdXRCbHVyKCkge1xuICAgICAgaWYodHlwZW9mIHRoaXMucHJvcHMub25CbHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25CbHVyKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBhcnJvd0NsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdhcnJvdyc6IHRydWUsXG4gICAgICAgICAgICAndXAnOiB0aGlzLnN0YXRlLnNob3dEcm9wRG93blxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2Zvcm0tY29udHJvbCc6IHRydWUsXG4gICAgICAgICAgICAnaW52YWxpZC1udW1iZXInOiAhdGhpcy5wcm9wcy5pc1ZhbGlkKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJykpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbGFnVmlld0NsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdmbGFnLWRyb3Bkb3duJzogdHJ1ZSxcbiAgICAgICAgICAgICdvcGVuLWRyb3Bkb3duJzogdGhpcy5zdGF0ZS5zaG93RHJvcERvd25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGlucHV0RmxhZ0NsYXNzZXMgPSBgZmxhZyAke3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmlzbzJ9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LXRlbC1pbnB1dCc+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUlucHV0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJudW1iZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSd0ZWwnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScrMSAoNzAyKSAxMjMtNDU2NycvPlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPSdmbGFnRHJvcERvd25CdXR0b24nIGNsYXNzTmFtZT17ZmxhZ1ZpZXdDbGFzc2VzfSBvbktleURvd249e3RoaXMuaGFuZGxlS2V5ZG93bn0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj0nc2VsZWN0ZWRGbGFnJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUZsYWdEcm9wZG93bkNsaWNrfSBjbGFzc05hbWU9J3NlbGVjdGVkLWZsYWcnIHRpdGxlPXtgJHt0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeS5uYW1lfTogKyAke3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lucHV0RmxhZ0NsYXNzZXN9IHN0eWxlPXt0aGlzLmdldEZsYWdTdHlsZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXJyb3dDbGFzc2VzfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Ryb3BEb3duID8gdGhpcy5nZXRDb3VudHJ5RHJvcERvd25MaXN0KCkgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VGVsZXBob25lSW5wdXQ7XG4iXX0=
