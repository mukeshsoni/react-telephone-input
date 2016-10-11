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

},{"../internal/baseSlice":41,"../internal/isIterateeCall":61}],2:[function(require,module,exports){
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

},{"../internal/createFindIndex":51}],3:[function(require,module,exports){
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

},{"../internal/arrayFilter":17,"../internal/baseCallback":23,"../internal/baseFilter":26,"../lang/isArray":77}],7:[function(require,module,exports){
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

},{"../internal/baseEach":25,"../internal/createFind":50}],8:[function(require,module,exports){
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

},{"../internal/baseMatches":36,"./find":7}],9:[function(require,module,exports){
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

},{"../internal/arrayMap":18,"../internal/baseCallback":23,"../internal/baseMap":35,"../lang/isArray":77}],10:[function(require,module,exports){
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

},{"../internal/arrayReduce":19,"../internal/baseEach":25,"../internal/createReduce":52}],11:[function(require,module,exports){
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

},{"../internal/arraySome":20,"../internal/baseCallback":23,"../internal/baseSome":42,"../internal/isIterateeCall":61,"../lang/isArray":77}],12:[function(require,module,exports){
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

},{"../internal/getNative":58}],13:[function(require,module,exports){
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

},{"../date/now":12,"../lang/isObject":81}],14:[function(require,module,exports){
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

},{"../internal/MapCache":16}],15:[function(require,module,exports){
/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],16:[function(require,module,exports){
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

},{"./mapDelete":67,"./mapGet":68,"./mapHas":69,"./mapSet":70}],17:[function(require,module,exports){
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
var keys = require('../object/keys');

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

module.exports = assignWith;

},{"../object/keys":84}],22:[function(require,module,exports){
var baseCopy = require('./baseCopy'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

module.exports = baseAssign;

},{"../object/keys":84,"./baseCopy":24}],23:[function(require,module,exports){
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

},{"../utility/identity":89,"../utility/property":90,"./baseMatches":36,"./baseMatchesProperty":37,"./bindCallback":44}],24:[function(require,module,exports){
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],25:[function(require,module,exports){
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

},{"./baseForOwn":30,"./createBaseEach":48}],26:[function(require,module,exports){
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

},{"./baseEach":25}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"./createBaseFor":49}],30:[function(require,module,exports){
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

},{"../object/keys":84,"./baseFor":29}],31:[function(require,module,exports){
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

},{"./toObject":72}],32:[function(require,module,exports){
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

},{"../lang/isObject":81,"./baseIsEqualDeep":33,"./isObjectLike":64}],33:[function(require,module,exports){
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

},{"../lang/isArray":77,"../lang/isTypedArray":82,"./equalArrays":53,"./equalByTag":54,"./equalObjects":55}],34:[function(require,module,exports){
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

},{"./baseIsEqual":32,"./toObject":72}],35:[function(require,module,exports){
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

},{"./baseEach":25,"./isArrayLike":59}],36:[function(require,module,exports){
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

},{"./baseIsMatch":34,"./getMatchData":57,"./toObject":72}],37:[function(require,module,exports){
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

},{"../array/last":4,"../lang/isArray":77,"./baseGet":31,"./baseIsEqual":32,"./baseSlice":41,"./isKey":62,"./isStrictComparable":66,"./toObject":72,"./toPath":73}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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

},{"./baseGet":31,"./toPath":73}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{"./baseEach":25}],43:[function(require,module,exports){
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

},{}],44:[function(require,module,exports){
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

},{"../utility/identity":89}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
var bindCallback = require('./bindCallback'),
    isIterateeCall = require('./isIterateeCall'),
    restParam = require('../function/restParam');

/**
 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"../function/restParam":15,"./bindCallback":44,"./isIterateeCall":61}],48:[function(require,module,exports){
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

},{"./getLength":56,"./isLength":63,"./toObject":72}],49:[function(require,module,exports){
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

},{"./toObject":72}],50:[function(require,module,exports){
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

},{"../lang/isArray":77,"./baseCallback":23,"./baseFind":27,"./baseFindIndex":28}],51:[function(require,module,exports){
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

},{"./baseCallback":23,"./baseFindIndex":28}],52:[function(require,module,exports){
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

},{"../lang/isArray":77,"./baseCallback":23,"./baseReduce":40}],53:[function(require,module,exports){
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

},{"./arraySome":20}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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

},{"../object/keys":84}],56:[function(require,module,exports){
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

},{"./baseProperty":38}],57:[function(require,module,exports){
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

},{"../object/pairs":86,"./isStrictComparable":66}],58:[function(require,module,exports){
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

},{"../lang/isNative":80}],59:[function(require,module,exports){
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

},{"./getLength":56,"./isLength":63}],60:[function(require,module,exports){
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

},{}],61:[function(require,module,exports){
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

},{"../lang/isObject":81,"./isArrayLike":59,"./isIndex":60}],62:[function(require,module,exports){
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

},{"../lang/isArray":77,"./toObject":72}],63:[function(require,module,exports){
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

},{}],64:[function(require,module,exports){
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

},{}],65:[function(require,module,exports){
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

},{}],66:[function(require,module,exports){
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

},{"../lang/isObject":81}],67:[function(require,module,exports){
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

},{}],68:[function(require,module,exports){
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

},{}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
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

},{}],71:[function(require,module,exports){
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

},{"../lang/isArguments":76,"../lang/isArray":77,"../object/keysIn":85,"./isIndex":60,"./isLength":63}],72:[function(require,module,exports){
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

},{"../lang/isObject":81}],73:[function(require,module,exports){
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

},{"../lang/isArray":77,"./baseToString":43}],74:[function(require,module,exports){
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

},{"./isSpace":65}],75:[function(require,module,exports){
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

},{"./isSpace":65}],76:[function(require,module,exports){
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

},{"../internal/isArrayLike":59,"../internal/isObjectLike":64}],77:[function(require,module,exports){
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

},{"../internal/getNative":58,"../internal/isLength":63,"../internal/isObjectLike":64}],78:[function(require,module,exports){
var baseIsEqual = require('../internal/baseIsEqual'),
    bindCallback = require('../internal/bindCallback');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent. If `customizer` is provided it's invoked to compare values.
 * If `customizer` returns `undefined` comparisons are handled by the method
 * instead. The `customizer` is bound to `thisArg` and invoked with up to
 * three arguments: (value, other [, index|key]).
 *
 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Objects are compared by
 * their own, not inherited, enumerable properties. Functions and DOM nodes
 * are **not** supported. Provide a customizer function to extend support
 * for comparing other values.
 *
 * @static
 * @memberOf _
 * @alias eq
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize value comparisons.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * object == other;
 * // => false
 *
 * _.isEqual(object, other);
 * // => true
 *
 * // using a customizer callback
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqual(array, other, function(value, other) {
 *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
 *     return true;
 *   }
 * });
 * // => true
 */
function isEqual(value, other, customizer, thisArg) {
  customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
}

module.exports = isEqual;

},{"../internal/baseIsEqual":32,"../internal/bindCallback":44}],79:[function(require,module,exports){
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

},{"./isObject":81}],80:[function(require,module,exports){
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

},{"../internal/isObjectLike":64,"./isFunction":79}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
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

},{"../internal/isLength":63,"../internal/isObjectLike":64}],83:[function(require,module,exports){
var assignWith = require('../internal/assignWith'),
    baseAssign = require('../internal/baseAssign'),
    createAssigner = require('../internal/createAssigner');

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 * If `customizer` is provided it's invoked to produce the assigned values.
 * The `customizer` is bound to `thisArg` and invoked with five arguments:
 * (objectValue, sourceValue, key, object, source).
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using a customizer callback
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var assign = createAssigner(function(object, source, customizer) {
  return customizer
    ? assignWith(object, source, customizer)
    : baseAssign(object, source);
});

module.exports = assign;

},{"../internal/assignWith":21,"../internal/baseAssign":22,"../internal/createAssigner":47}],84:[function(require,module,exports){
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

},{"../internal/getNative":58,"../internal/isArrayLike":59,"../internal/shimKeys":71,"../lang/isObject":81}],85:[function(require,module,exports){
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

},{"../internal/isIndex":60,"../internal/isLength":63,"../lang/isArguments":76,"../lang/isArray":77,"../lang/isObject":81}],86:[function(require,module,exports){
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

},{"../internal/toObject":72,"./keys":84}],87:[function(require,module,exports){
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

},{"../internal/baseToString":43}],88:[function(require,module,exports){
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

},{"../internal/baseToString":43,"../internal/charsLeftIndex":45,"../internal/charsRightIndex":46,"../internal/isIterateeCall":61,"../internal/trimmedLeftIndex":74,"../internal/trimmedRightIndex":75}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){
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

},{"../internal/baseProperty":38,"../internal/basePropertyDeep":39,"../internal/isKey":62}],91:[function(require,module,exports){
'use strict';

var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93', '+..-..-...-....'], ['Albania (Shqipëri)', 'al', '355', '+...(...)...-...'], ['Algeria (‫الجزائر‬‎)', 'dz', '213', '+...-..-...-....'], ['American Samoa', 'as', '1684', '+.(...)...-....'], ['Andorra', 'ad', '376', '+...-...-...'], ['Angola', 'ao', '244', '+...(...)...-...'], ['Anguilla', 'ai', '1264', '+.(...)...-....'], ['Antigua and Barbuda', 'ag', '1268', '+.(...)...-....'], ['Argentina', 'ar', '54', '+..(...)...-....'], ['Armenia (Հայաստան)', 'am', '374', '+...-..-...-...'], ['Aruba', 'aw', '297', '+...-...-....'], ['Australia', 'au', '61', '+.. ... ... ...'], ['Austria (Österreich)', 'at', '43', '+..(...)...-....'], ['Azerbaijan (Azərbaycan)', 'az', '994', '+...-..-...-..-..'], ['Bahamas', 'bs', '1242', '+.(...)...-....'], ['Bahrain (‫البحرين‬‎)', 'bh', '973', '+...-....-....'], ['Bangladesh (বাংলাদেশ)', 'bd', '880', '+...-..-...-...'], ['Barbados', 'bb', '1246', '+.(...)...-....'], ['Belarus (Беларусь)', 'by', '375', '+...(..)...-..-..'], ['Belgium (België)', 'be', '32', '+.. ... .. .. ..'], ['Belize', 'bz', '501', '+...-...-....'], ['Benin (Bénin)', 'bj', '229', '+...-..-..-....'], ['Bermuda', 'bm', '1441', '+.(...)...-....'], ['Bhutan (འབྲུག)', 'bt', '975', '+...-.-...-...'], ['Bolivia', 'bo', '591', '+...-.-...-....'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387', '+...-..-....'], ['Botswana', 'bw', '267', '+...-..-...-...'], ['Brazil (Brasil)', 'br', '55', '+..-..-....-....'], ['British Indian Ocean Territory', 'io', '246', '+...-...-....'], ['British Virgin Islands', 'vg', '1284', '+.(...)...-....'], ['Brunei', 'bn', '673', '+...-...-....'], ['Bulgaria (България)', 'bg', '359', '+...(...)...-...'], ['Burkina Faso', 'bf', '226', '+...-..-..-....'], ['Burundi (Uburundi)', 'bi', '257', '+...-..-..-....'], ['Cambodia (កម្ពុជា)', 'kh', '855', '+...-..-...-...'], ['Cameroon (Cameroun)', 'cm', '237', '+...-....-....'], ['Canada', 'ca', '1', '+. (...) ...-....', 1, ['204', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238', '+...(...)..-..'], ['Caribbean Netherlands', 'bq', '599', '+...-...-....', 1], ['Cayman Islands', 'ky', '1345', '+.(...)...-....'], ['Central African Republic (République centrafricaine)', 'cf', '236', '+...-..-..-....'], ['Chad (Tchad)', 'td', '235', '+...-..-..-..-..'], ['Chile', 'cl', '56', '+..-.-....-....'], ['China (中国)', 'cn', '86', '+.. ..-........'], ['Colombia', 'co', '57', '+..(...)...-....'], ['Comoros (‫جزر القمر‬‎)', 'km', '269', '+...-..-.....'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243', '+...(...)...-...'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242', '+...-..-...-....'], ['Cook Islands', 'ck', '682', '+...-..-...'], ['Costa Rica', 'cr', '506', '+... ....-....'], ['Côte d’Ivoire', 'ci', '225', '+...-..-...-...'], ['Croatia (Hrvatska)', 'hr', '385', '+...-..-...-...'], ['Cuba', 'cu', '53', '+..-.-...-....'], ['Curaçao', 'cw', '599', '+...-...-....', 0], ['Cyprus (Κύπρος)', 'cy', '357', '+...-..-...-...'], ['Czech Republic (Česká republika)', 'cz', '420', '+...(...)...-...'], ['Denmark (Danmark)', 'dk', '45', '+.. .. .. .. ..'], ['Djibouti', 'dj', '253', '+...-..-..-..-..'], ['Dominica', 'dm', '1767', '+.(...)...-....'], ['Dominican Republic (República Dominicana)', 'do', '1', '+.(...)...-....', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593', '+...-.-...-....'], ['Egypt (‫مصر‬‎)', 'eg', '20', '+..(...)...-....'], ['El Salvador', 'sv', '503', '+... ....-....'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240', '+...-..-...-....'], ['Eritrea', 'er', '291', '+...-.-...-...'], ['Estonia (Eesti)', 'ee', '372', '+...-...-....'], ['Ethiopia', 'et', '251', '+...-..-...-....'], ['Falkland Islands (Islas Malvinas)', 'fk', '500', '+...-.....'], ['Faroe Islands (Føroyar)', 'fo', '298', '+...-...-...'], ['Fiji', 'fj', '679', '+...-..-.....'], ['Finland (Suomi)', 'fi', '358', '+... .. ... .. ..'], ['France', 'fr', '33', '+.. . .. .. .. ..'], ['French Guiana (Guyane française)', 'gf', '594', '+...-.....-....'], ['French Polynesia (Polynésie française)', 'pf', '689', '+...-..-..-..'], ['Gabon', 'ga', '241', '+...-.-..-..-..'], ['Gambia', 'gm', '220', '+...(...)..-..'], ['Georgia (საქართველო)', 'ge', '995', '+...(...)...-...'], ['Germany (Deutschland)', 'de', '49', '+.. ... .......'], ['Ghana (Gaana)', 'gh', '233', '+...(...)...-...'], ['Gibraltar', 'gi', '350', '+...-...-.....'], ['Greece (Ελλάδα)', 'gr', '30', '+..(...)...-....'], ['Greenland (Kalaallit Nunaat)', 'gl', '299', '+...-..-..-..'], ['Grenada', 'gd', '1473', '+.(...)...-....'], ['Guadeloupe', 'gp', '590', '', 0], ['Guam', 'gu', '1671', '+.(...)...-....'], ['Guatemala', 'gt', '502', '+... ....-....'], ['Guinea (Guinée)', 'gn', '224', '+...-..-...-...'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245', '+...-.-......'], ['Guyana', 'gy', '592', '+...-...-....'], ['Haiti', 'ht', '509', '+... ....-....'], ['Honduras', 'hn', '504', '+...-....-....'], ['Hong Kong (香港)', 'hk', '852', '+... .... ....'], ['Hungary (Magyarország)', 'hu', '36', '+..(...)...-...'], ['Iceland (Ísland)', 'is', '354', '+... ... ....'], ['India (भारत)', 'in', '91', '+.. .....-.....'], ['Indonesia', 'id', '62', '+..-..-...-..'], ['Iran (‫ایران‬‎)', 'ir', '98', '+..(...)...-....'], ['Iraq (‫العراق‬‎)', 'iq', '964', '+...(...)...-....'], ['Ireland', 'ie', '353', '+... .. .......'], ['Israel (‫ישראל‬‎)', 'il', '972', '+...-.-...-....'], ['Italy (Italia)', 'it', '39', '+.. ... ......', 0], ['Jamaica', 'jm', '1876', '+.(...)...-....'], ['Japan (日本)', 'jp', '81', '+.. ... .. ....'], ['Jordan (‫الأردن‬‎)', 'jo', '962', '+...-.-....-....'], ['Kazakhstan (Казахстан)', 'kz', '7', '+. ... ...-..-..', 1], ['Kenya', 'ke', '254', '+...-...-......'], ['Kiribati', 'ki', '686', '+...-..-...'], ['Kuwait (‫الكويت‬‎)', 'kw', '965', '+...-....-....'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996', '+...(...)...-...'], ['Laos (ລາວ)', 'la', '856', '+...-..-...-...'], ['Latvia (Latvija)', 'lv', '371', '+...-..-...-...'], ['Lebanon (‫لبنان‬‎)', 'lb', '961', '+...-.-...-...'], ['Lesotho', 'ls', '266', '+...-.-...-....'], ['Liberia', 'lr', '231', '+...-..-...-...'], ['Libya (‫ليبيا‬‎)', 'ly', '218', '+...-..-...-...'], ['Liechtenstein', 'li', '423', '+...(...)...-....'], ['Lithuania (Lietuva)', 'lt', '370', '+...(...)..-...'], ['Luxembourg', 'lu', '352', '+...(...)...-...'], ['Macau (澳門)', 'mo', '853', '+...-....-....'], ['Macedonia (FYROM) (Македонија)', 'mk', '389', '+...-..-...-...'], ['Madagascar (Madagasikara)', 'mg', '261', '+...-..-..-.....'], ['Malawi', 'mw', '265', '+...-.-....-....'], ['Malaysia', 'my', '60', '+.. ..-....-....'], ['Maldives', 'mv', '960', '+...-...-....'], ['Mali', 'ml', '223', '+...-..-..-....'], ['Malta', 'mt', '356', '+...-....-....'], ['Marshall Islands', 'mh', '692', '+...-...-....'], ['Martinique', 'mq', '596', '+...(...)..-..-..'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222', '+...-..-..-....'], ['Mauritius (Moris)', 'mu', '230', '+...-...-....'], ['Mexico (México)', 'mx', '52', '+..-..-..-....'], ['Micronesia', 'fm', '691', '+...-...-....'], ['Moldova (Republica Moldova)', 'md', '373', '+...-....-....'], ['Monaco', 'mc', '377', '+...-..-...-...'], ['Mongolia (Монгол)', 'mn', '976', '+...-..-..-....'], ['Montenegro (Crna Gora)', 'me', '382', '+...-..-...-...'], ['Montserrat', 'ms', '1664', '+.(...)...-....'], ['Morocco (‫المغرب‬‎)', 'ma', '212', '+...-..-....-...'], ['Mozambique (Moçambique)', 'mz', '258', '+...-..-...-...'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95', '+..-...-...'], ['Namibia (Namibië)', 'na', '264', '+...-..-...-....'], ['Nauru', 'nr', '674', '+...-...-....'], ['Nepal (नेपाल)', 'np', '977', '+...-..-...-...'], ['Netherlands (Nederland)', 'nl', '31', '+.. .. ........'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687', '+...-..-....'], ['New Zealand', 'nz', '64', '+.. ...-...-....'], ['Nicaragua', 'ni', '505', '+...-....-....'], ['Niger (Nijar)', 'ne', '227', '+...-..-..-....'], ['Nigeria', 'ng', '234', '+...-..-...-..'], ['Niue', 'nu', '683', '+...-....'], ['Norfolk Island', 'nf', '672', '+...-...-...'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850', '+...-...-...'], ['Northern Mariana Islands', 'mp', '1670', '+.(...)...-....'], ['Norway (Norge)', 'no', '47', '+.. ... .. ...'], ['Oman (‫عُمان‬‎)', 'om', '968', '+...-..-...-...'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92', '+.. ...-.......'], ['Palau', 'pw', '680', '+...-...-....'], ['Palestine (‫فلسطين‬‎)', 'ps', '970', '+...-..-...-....'], ['Panama (Panamá)', 'pa', '507', '+...-...-....'], ['Papua New Guinea', 'pg', '675', '+...(...)..-...'], ['Paraguay', 'py', '595', '+...(...)...-...'], ['Peru (Perú)', 'pe', '51', '+..(...)...-...'], ['Philippines', 'ph', '63', '+.. ... ....'], ['Poland (Polska)', 'pl', '48', '+.. ...-...-...'], ['Portugal', 'pt', '351', '+...-..-...-....'], ['Puerto Rico', 'pr', '1', '', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974', '+...-....-....'], ['Réunion (La Réunion)', 're', '262', '+...-.....-....'], ['Romania (România)', 'ro', '40', '+..-..-...-....'], ['Russia (Россия)', 'ru', '7', '+. ... ...-..-..', 0], ['Rwanda', 'rw', '250', '+...(...)...-...'], ['Saint Barthélemy (Saint-Barthélemy)', 'bl', '590', '', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869', '+.(...)...-....'], ['Saint Lucia', 'lc', '1758', '+.(...)...-....'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', '', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784', '+.(...)...-....'], ['Samoa', 'ws', '685', '+...-..-....'], ['San Marino', 'sm', '378', '+...-....-......'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239', '+...-..-.....'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966', '+...-.-...-....'], ['Senegal (Sénégal)', 'sn', '221', '+...-..-...-....'], ['Serbia (Србија)', 'rs', '381', '+...-..-...-....'], ['Seychelles', 'sc', '248', '+...-.-...-...'], ['Sierra Leone', 'sl', '232', '+...-..-......'], ['Singapore', 'sg', '65', '+.. ....-....'], ['Sint Maarten', 'sx', '1721', '+.(...)...-....'], ['Slovakia (Slovensko)', 'sk', '421', '+...(...)...-...'], ['Slovenia (Slovenija)', 'si', '386', '+...-..-...-...'], ['Solomon Islands', 'sb', '677', '+...-.....'], ['Somalia (Soomaaliya)', 'so', '252', '+...-.-...-...'], ['South Africa', 'za', '27', '+..-..-...-....'], ['South Korea (대한민국)', 'kr', '82', '+..-..-...-....'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211', '+...-..-...-....'], ['Spain (España)', 'es', '34', '+.. ... ... ...'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94', '+..-..-...-....'], ['Sudan (‫السودان‬‎)', 'sd', '249', '+...-..-...-....'], ['Suriname', 'sr', '597', '+...-...-...'], ['Swaziland', 'sz', '268', '+...-..-..-....'], ['Sweden (Sverige)', 'se', '46', '+.. .. ... .. ..'], ['Switzerland (Schweiz)', 'ch', '41', '+.. .. ... .. ..'], ['Syria (‫سوريا‬‎)', 'sy', '963', '+...-..-....-...'], ['Taiwan (台灣)', 'tw', '886', '+...-....-....'], ['Tajikistan', 'tj', '992', '+...-..-...-....'], ['Tanzania', 'tz', '255', '+...-..-...-....'], ['Thailand (ไทย)', 'th', '66', '+..-..-...-...'], ['Timor-Leste', 'tl', '670', '+...-...-....'], ['Togo', 'tg', '228', '+...-..-...-...'], ['Tokelau', 'tk', '690', '+...-....'], ['Tonga', 'to', '676', '+...-.....'], ['Trinidad and Tobago', 'tt', '1868', '+.(...)...-....'], ['Tunisia (‫تونس‬‎)', 'tn', '216', '+...-..-...-...'], ['Turkey (Türkiye)', 'tr', '90', '+.. ... ... .. ..'], ['Turkmenistan', 'tm', '993', '+...-.-...-....'], ['Turks and Caicos Islands', 'tc', '1649', '+.(...)...-....'], ['Tuvalu', 'tv', '688', '+...-.....'], ['U.S. Virgin Islands', 'vi', '1340', '+.(...)...-....'], ['Uganda', 'ug', '256', '+...(...)...-...'], ['Ukraine (Україна)', 'ua', '380', '+...(..)...-..-..'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971', '+...-.-...-....'], ['United Kingdom', 'gb', '44', '+.. .... ......'], ['United States', 'us', '1', '+. (...) ...-....', 0], ['Uruguay', 'uy', '598', '+...-.-...-..-..'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998', '+...-..-...-....'], ['Vanuatu', 'vu', '678', '+...-.....'], ['Vatican City (Città del Vaticano)', 'va', '39', '+.. .. .... ....', 1], ['Venezuela', 've', '58', '+..(...)...-....'], ['Vietnam (Việt Nam)', 'vn', '84', '+..-..-....-...'], ['Wallis and Futuna', 'wf', '681', '+...-..-....'], ['Yemen (‫اليمن‬‎)', 'ye', '967', '+...-.-...-...'], ['Zambia', 'zm', '260', '+...-..-...-....'], ['Zimbabwe', 'zw', '263', '+...-.-......']];

// we will build this in the loop below
var allCountryCodes = {};
var iso2Lookup = {};
var addCountryCode = function addCountryCode(iso2, dialCode, priority) {
   if (!(dialCode in allCountryCodes)) {
      allCountryCodes[dialCode] = [];
   }
   var index = priority || 0;
   allCountryCodes[dialCode][index] = iso2;
};

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
   iso2Lookup[allCountries[i].iso2] = i;

   // dial codes
   addCountryCode(c[1], c[2], c[4]);
}

module.exports = {
   allCountries: allCountries,
   iso2Lookup: iso2Lookup,
   allCountryCodes: allCountryCodes
};

},{}],"react-telephone-input":[function(require,module,exports){
'use strict';

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

Object.defineProperty(exports, '__esModule', {
    value: true
});
var some = require('lodash/collection/some');
var findWhere = require('lodash/collection/findWhere');
var reduce = require('lodash/collection/reduce');
var map = require('lodash/collection/map');
var filter = require('lodash/collection/filter');
var findIndex = require('lodash/array/findIndex');
var first = require('lodash/array/first');
var rest = require('lodash/array/rest');
var debounce = require('lodash/function/debounce');
var memoize = require('lodash/function/memoize');
var assign = require('lodash/object/assign');
var isEqual = require('lodash/lang/isEqual');
// import lodash string methods
var trim = require('lodash/string/trim');
var startsWith = require('lodash/string/startsWith');

var React = require('react');
var ReactDOM = require('react-dom');
var onClickOutside = require('react-onclickoutside');
var classNames = require('classnames');
var countryData = require('./country_data.js');
// var countryData = require('country-telephone-data')
var allCountries = countryData.allCountries;
var iso2Lookup = countryData.iso2Lookup;

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

    getInitialState: function getInitialState() {
        var preferredCountries = this.props.preferredCountries.map(function (iso2) {
            return iso2Lookup.hasOwnProperty(iso2) ? allCountries[iso2Lookup[iso2]] : null;
        }).filter(function (val) {
            return val !== null;
        });

        return assign({}, {
            preferredCountries: preferredCountries,
            showDropDown: false,
            queryString: '',
            freezeSelection: false,
            debouncedQueryStingSearcher: debounce(this.searchCountry, 300)
        }, this._mapPropsToState(this.props));
    },
    propTypes: {
        value: React.PropTypes.string,
        initialValue: React.PropTypes.string,
        autoFormat: React.PropTypes.bool,
        defaultCountry: React.PropTypes.string,
        onlyCountries: React.PropTypes.arrayOf(React.PropTypes.object),
        preferredCountries: React.PropTypes.arrayOf(React.PropTypes.string),
        classNames: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onEnterKeyPress: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        pattern: React.PropTypes.string
    },
    getDefaultProps: function getDefaultProps() {
        return {
            value: '',
            initialValue: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function onEnterKeyPress() {},
            preferredCountries: [],
            disabled: false,
            placeholder: '+1 (702) 123-4567'
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
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState(this._mapPropsToState(nextProps));
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
            this._fillDialCode();
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

        if (this.props.disabled) {
            return;
        }
        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: findWhere(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.state.preferredCountries.concat(this.props.onlyCountries), this.state.selectedCountry)
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
                if (caretPosition === 1 && formattedNumber.length === 2) {
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
        // trigger parent component's onFocus handler
        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus(this.state.formattedNumer, this.state.selectedCountry);
        }

        this._fillDialCode();
    },
    _mapPropsToState: function _mapPropsToState(props) {
        var inputNumber = undefined;

        if (props.value !== this.props.value) {
            inputNumber = props.initialValue;
        } else if (props.initialValue !== this.props.initialValue) {
            inputNumber = props.initialValue;
        } else {
            inputNumber = '';
        }

        var selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        var selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);
        return {
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber
        };
    },
    _fillDialCode: function _fillDialCode() {
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
        console.log('probableCandidateIndex', probableCandidateIndex);
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
                console.log('enter key', this.state.highlightCountryIndex, this.props.onlyCountries[this.state.highlightCountryIndex]);
                this.handleFlagItemClick(this.state.preferredCountries.concat(this.props.onlyCountries)[this.state.highlightCountryIndex], event);
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
                preferred: findIndex(this.state.preferredCountries, { iso2: country.iso2 }) >= 0,
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

        return React.createElement('div', { className: classNames('react-tel-input', this.props.classNames) }, React.createElement('input', {
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
            pattern: this.props.pattern,
            placeholder: this.state.placeholder,
            disabled: this.props.disabled }), React.createElement('div', { ref: 'flagDropDownButton', className: flagViewClasses, onKeyDown: this.handleKeydown }, React.createElement('div', { ref: 'selectedFlag', onClick: this.handleFlagDropdownClick, className: 'selected-flag', title: this.state.selectedCountry.name + ': + ' + this.state.selectedCountry.dialCode }, React.createElement('div', { className: inputFlagClasses, style: this.getFlagStyle() }, React.createElement('div', { className: arrowClasses }))), this.state.showDropDown ? this.getCountryDropDownList() : ''));
    }
});

exports.ReactTelephoneInput = ReactTelephoneInput;
exports['default'] = onClickOutside(ReactTelephoneInput);

},{"./country_data.js":91,"classnames":undefined,"lodash/array/findIndex":2,"lodash/array/first":3,"lodash/array/rest":5,"lodash/collection/filter":6,"lodash/collection/findWhere":8,"lodash/collection/map":9,"lodash/collection/reduce":10,"lodash/collection/some":11,"lodash/function/debounce":13,"lodash/function/memoize":14,"lodash/lang/isEqual":78,"lodash/object/assign":83,"lodash/string/startsWith":87,"lodash/string/trim":88,"react":undefined,"react-dom":undefined,"react-onclickoutside":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9kcm9wLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9maW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2ZpcnN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9sYXN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9hcnJheS9yZXN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9maW5kLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2ZpbmRXaGVyZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9tYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL3NvbWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2RhdGUvbm93LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZnVuY3Rpb24vbWVtb2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZnVuY3Rpb24vcmVzdFBhcmFtLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9NYXBDYWNoZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlGaWx0ZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5TWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheVJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlTb21lLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hc3NpZ25XaXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlQXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VDb3B5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbmQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGaW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JPd24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VJc01hdGNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlTWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlUmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VTb21lLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY2hhcnNMZWZ0SW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NoYXJzUmlnaHRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQXNzaWduZXIuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVGaW5kLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVGaW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZVJlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxBcnJheXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2VxdWFsT2JqZWN0cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNTcGFjZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNTdHJpY3RDb21wYXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBEZWxldGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcEdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvbWFwSGFzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBTZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3NoaW1LZXlzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90cmltbWVkTGVmdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90cmltbWVkUmlnaHRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzRXF1YWwuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc1R5cGVkQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9vYmplY3Qva2V5c0luLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9vYmplY3QvcGFpcnMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3N0cmluZy9zdGFydHNXaXRoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9zdHJpbmcvdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdXRpbGl0eS9wcm9wZXJ0eS5qcyIsIi9Vc2Vycy9tdWtlc2hzb25pL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC10ZWxlcGhvbmUtaW5wdXQvc3JjL2NvdW50cnlfZGF0YS5qcyIsIi9Vc2Vycy9tdWtlc2hzb25pL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC10ZWxlcGhvbmUtaW5wdXQvc3JjL1JlYWN0VGVsZXBob25lSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FD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LGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlU2xpY2UnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNsaWNlIG9mIGBhcnJheWAgd2l0aCBgbmAgZWxlbWVudHMgZHJvcHBlZCBmcm9tIHRoZSBiZWdpbm5pbmcuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTFdIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gZHJvcC5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhIGNhbGxiYWNrIGZvciBmdW5jdGlvbnMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRyb3AoWzEsIDIsIDNdKTtcbiAqIC8vID0+IFsyLCAzXVxuICpcbiAqIF8uZHJvcChbMSwgMiwgM10sIDIpO1xuICogLy8gPT4gWzNdXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSwgNSk7XG4gKiAvLyA9PiBbXVxuICpcbiAqIF8uZHJvcChbMSwgMiwgM10sIDApO1xuICogLy8gPT4gWzEsIDIsIDNdXG4gKi9cbmZ1bmN0aW9uIGRyb3AoYXJyYXksIG4sIGd1YXJkKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChndWFyZCA/IGlzSXRlcmF0ZWVDYWxsKGFycmF5LCBuLCBndWFyZCkgOiBuID09IG51bGwpIHtcbiAgICBuID0gMTtcbiAgfVxuICByZXR1cm4gYmFzZVNsaWNlKGFycmF5LCBuIDwgMCA/IDAgOiBuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkcm9wO1xuIiwidmFyIGNyZWF0ZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NyZWF0ZUZpbmRJbmRleCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZmluZGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0XG4gKiBlbGVtZW50IGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZCBlbGVtZW50LCBlbHNlIGAtMWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZEluZGV4KHVzZXJzLCBmdW5jdGlvbihjaHIpIHtcbiAqICAgcmV0dXJuIGNoci51c2VyID09ICdiYXJuZXknO1xuICogfSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5maW5kSW5kZXgodXNlcnMsIHsgJ3VzZXInOiAnZnJlZCcsICdhY3RpdmUnOiBmYWxzZSB9KTtcbiAqIC8vID0+IDFcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJywgZmFsc2UpO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gMlxuICovXG52YXIgZmluZEluZGV4ID0gY3JlYXRlRmluZEluZGV4KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEluZGV4O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBoZWFkXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZmlyc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDFcbiAqXG4gKiBfLmZpcnN0KFtdKTtcbiAqIC8vID0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBmaXJzdChhcnJheSkge1xuICByZXR1cm4gYXJyYXkgPyBhcnJheVswXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaXJzdDtcbiIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcbiIsInZhciBkcm9wID0gcmVxdWlyZSgnLi9kcm9wJyk7XG5cbi8qKlxuICogR2V0cyBhbGwgYnV0IHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyB0YWlsXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBbMiwgM11cbiAqL1xuZnVuY3Rpb24gcmVzdChhcnJheSkge1xuICByZXR1cm4gZHJvcChhcnJheSwgMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdDtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5RmlsdGVyJyksXG4gICAgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZUZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VGaWx0ZXInKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyBhbiBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kXG4gKiBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBzZWxlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZpbHRlcihbNCwgNSwgNl0sIGZ1bmN0aW9uKG4pIHtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9KTtcbiAqIC8vID0+IFs0LCA2XVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCB7ICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leSddXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCAnYWN0aXZlJywgZmFsc2UpLCAndXNlcicpO1xuICogLy8gPT4gWydmcmVkJ11cbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLmZpbHRlcih1c2VycywgJ2FjdGl2ZScpLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknXVxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RmlsdGVyIDogYmFzZUZpbHRlcjtcbiAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUVhY2gnKSxcbiAgICBjcmVhdGVGaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlRmluZCcpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnRcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kXG4gKiBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBkZXRlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2VhcmNoLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXRjaGVkIGVsZW1lbnQsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWdlJzogMSwgICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5yZXN1bHQoXy5maW5kKHVzZXJzLCBmdW5jdGlvbihjaHIpIHtcbiAqICAgcmV0dXJuIGNoci5hZ2UgPCA0MDtcbiAqIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ2Jhcm5leSdcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsIHsgJ2FnZSc6IDEsICdhY3RpdmUnOiB0cnVlIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ3BlYmJsZXMnXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsICdhY3RpdmUnLCBmYWxzZSksICd1c2VyJyk7XG4gKiAvLyA9PiAnZnJlZCdcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5yZXN1bHQoXy5maW5kKHVzZXJzLCAnYWN0aXZlJyksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoYmFzZUVhY2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmQ7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlTWF0Y2hlcycpLFxuICAgIGZpbmQgPSByZXF1aXJlKCcuL2ZpbmQnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgYW5kIHRoZVxuICogc291cmNlIG9iamVjdCwgcmV0dXJuaW5nIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaGFzIGVxdWl2YWxlbnQgcHJvcGVydHlcbiAqIHZhbHVlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYm9vbGVhbnMsIGBEYXRlYCBvYmplY3RzLFxuICogbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcywgYW5kIHN0cmluZ3MuIE9iamVjdHMgYXJlIGNvbXBhcmVkIGJ5XG4gKiB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRm9yIGNvbXBhcmluZyBhIHNpbmdsZVxuICogb3duIG9yIGluaGVyaXRlZCBwcm9wZXJ0eSB2YWx1ZSBzZWUgYF8ubWF0Y2hlc1Byb3BlcnR5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzZWFyY2guXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIF8ucmVzdWx0KF8uZmluZFdoZXJlKHVzZXJzLCB7ICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICpcbiAqIF8ucmVzdWx0KF8uZmluZFdoZXJlKHVzZXJzLCB7ICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ2ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGZpbmRXaGVyZShjb2xsZWN0aW9uLCBzb3VyY2UpIHtcbiAgcmV0dXJuIGZpbmQoY29sbGVjdGlvbiwgYmFzZU1hdGNoZXMoc291cmNlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFdoZXJlO1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlNYXAnKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhyb3VnaFxuICogYGl0ZXJhdGVlYC4gVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLmV2ZXJ5YCwgYF8uZmlsdGVyYCwgYF8ubWFwYCwgYF8ubWFwVmFsdWVzYCwgYF8ucmVqZWN0YCwgYW5kIGBfLnNvbWVgLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFyeWAsIGBjYWxsYmFja2AsIGBjaHVua2AsIGBjbG9uZWAsIGBjcmVhdGVgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsXG4gKiBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLCBgZmlsbGAsIGBmbGF0dGVuYCwgYGludmVydGAsIGBtYXhgLCBgbWluYCxcbiAqIGBwYXJzZUludGAsIGBzbGljZWAsIGBzb3J0QnlgLCBgdGFrZWAsIGB0YWtlUmlnaHRgLCBgdGVtcGxhdGVgLCBgdHJpbWAsXG4gKiBgdHJpbUxlZnRgLCBgdHJpbVJpZ2h0YCwgYHRydW5jYCwgYHJhbmRvbWAsIGByYW5nZWAsIGBzYW1wbGVgLCBgc29tZWAsXG4gKiBgc3VtYCwgYHVuaXFgLCBhbmQgYHdvcmRzYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgY29sbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gdGltZXNUaHJlZShuKSB7XG4gKiAgIHJldHVybiBuICogMztcbiAqIH1cbiAqXG4gKiBfLm1hcChbMSwgMl0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdXG4gKlxuICogXy5tYXAoeyAnYSc6IDEsICdiJzogMiB9LCB0aW1lc1RocmVlKTtcbiAqIC8vID0+IFszLCA2XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgaXRlcmF0ZWUgPSBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlSZWR1Y2UnKSxcbiAgICBiYXNlRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VFYWNoJyksXG4gICAgY3JlYXRlUmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlUmVkdWNlJyk7XG5cbi8qKlxuICogUmVkdWNlcyBgY29sbGVjdGlvbmAgdG8gYSB2YWx1ZSB3aGljaCBpcyB0aGUgYWNjdW11bGF0ZWQgcmVzdWx0IG9mIHJ1bm5pbmdcbiAqIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhyb3VnaCBgaXRlcmF0ZWVgLCB3aGVyZSBlYWNoIHN1Y2Nlc3NpdmVcbiAqIGludm9jYXRpb24gaXMgc3VwcGxpZWQgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMuIElmIGBhY2N1bXVsYXRvcmBcbiAqIGlzIG5vdCBwcm92aWRlZCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxuICogdmFsdWUuIFRoZSBgaXRlcmF0ZWVgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIGZvdXIgYXJndW1lbnRzOlxuICogKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLnJlZHVjZWAsIGBfLnJlZHVjZVJpZ2h0YCwgYW5kIGBfLnRyYW5zZm9ybWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXNzaWduYCwgYGRlZmF1bHRzYCwgYGRlZmF1bHRzRGVlcGAsIGBpbmNsdWRlc2AsIGBtZXJnZWAsIGBzb3J0QnlBbGxgLFxuICogYW5kIGBzb3J0QnlPcmRlcmBcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGZvbGRsLCBpbmplY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZWR1Y2UoWzEsIDJdLCBmdW5jdGlvbih0b3RhbCwgbikge1xuICogICByZXR1cm4gdG90YWwgKyBuO1xuICogfSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5yZWR1Y2UoeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbihyZXN1bHQsIG4sIGtleSkge1xuICogICByZXN1bHRba2V5XSA9IG4gKiAzO1xuICogICByZXR1cm4gcmVzdWx0O1xuICogfSwge30pO1xuICogLy8gPT4geyAnYSc6IDMsICdiJzogNiB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbnZhciByZWR1Y2UgPSBjcmVhdGVSZWR1Y2UoYXJyYXlSZWR1Y2UsIGJhc2VFYWNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2U7XG4iLCJ2YXIgYXJyYXlTb21lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlTb21lJyksXG4gICAgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZVNvbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlU29tZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciAqKmFueSoqIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gLlxuICogVGhlIGZ1bmN0aW9uIHJldHVybnMgYXMgc29vbiBhcyBpdCBmaW5kcyBhIHBhc3NpbmcgdmFsdWUgYW5kIGRvZXMgbm90IGl0ZXJhdGVcbiAqIG92ZXIgdGhlIGVudGlyZSBjb2xsZWN0aW9uLiBUaGUgcHJlZGljYXRlIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZFxuICogd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGFueVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zb21lKFtudWxsLCAwLCAneWVzJywgZmFsc2VdLCBCb29sZWFuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWN0aXZlJzogZmFsc2UgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnNvbWUodXNlcnMsIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uc29tZSh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5zb21lKHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIHNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5U29tZSA6IGJhc2VTb21lO1xuICBpZiAodGhpc0FyZyAmJiBpc0l0ZXJhdGVlQ2FsbChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpKSB7XG4gICAgcHJlZGljYXRlID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9ICdmdW5jdGlvbicgfHwgdGhpc0FyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzb21lO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IGdldE5hdGl2ZShEYXRlLCAnbm93Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgVW5peCBlcG9jaFxuICogKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gbG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxuICovXG52YXIgbm93ID0gbmF0aXZlTm93IHx8IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuLi9kYXRlL25vdycpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBpbnZvY2F0aW9ucy4gUHJvdmlkZSBhbiBvcHRpb25zIG9iamVjdCB0byBpbmRpY2F0ZSB0aGF0IGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICogU3Vic2VxdWVudCBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0XG4gKiBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzIGludm9rZWRcbiAqIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gaXNcbiAqIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cDovL2RydXBhbG1vdGlvbi5jb20vYXJ0aWNsZS9kZWJvdW5jZS1hbmQtdGhyb3R0bGUtdmlzdWFsLWV4cGxhbmF0aW9uKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nXG4gKiAgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XSBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlXG4gKiAgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZ1xuICogIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXhcbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gaW52b2tlIGBzZW5kTWFpbGAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxsc1xuICogalF1ZXJ5KCcjcG9zdGJveCcpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gZW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxsc1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHtcbiAqICAgJ21heFdhaXQnOiAxMDAwXG4gKiB9KSk7XG4gKlxuICogLy8gY2FuY2VsIGEgZGVib3VuY2VkIGNhbGxcbiAqIHZhciB0b2RvQ2hhbmdlcyA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDEwMDApO1xuICogT2JqZWN0Lm9ic2VydmUobW9kZWxzLnRvZG8sIHRvZG9DaGFuZ2VzKTtcbiAqXG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMsIGZ1bmN0aW9uKGNoYW5nZXMpIHtcbiAqICAgaWYgKF8uZmluZChjaGFuZ2VzLCB7ICd1c2VyJzogJ3RvZG8nLCAndHlwZSc6ICdkZWxldGUnfSkpIHtcbiAqICAgICB0b2RvQ2hhbmdlcy5jYW5jZWwoKTtcbiAqICAgfVxuICogfSwgWydkZWxldGUnXSk7XG4gKlxuICogLy8gLi4uYXQgc29tZSBwb2ludCBgbW9kZWxzLnRvZG9gIGlzIGNoYW5nZWRcbiAqIG1vZGVscy50b2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gKlxuICogLy8gLi4uYmVmb3JlIDEgc2Vjb25kIGhhcyBwYXNzZWQgYG1vZGVscy50b2RvYCBpcyBkZWxldGVkXG4gKiAvLyB3aGljaCBjYW5jZWxzIHRoZSBkZWJvdW5jZWQgYHRvZG9DaGFuZ2VzYCBjYWxsXG4gKiBkZWxldGUgbW9kZWxzLnRvZG87XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGFyZ3MsXG4gICAgICBtYXhUaW1lb3V0SWQsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFtcCxcbiAgICAgIHRoaXNBcmcsXG4gICAgICB0aW1lb3V0SWQsXG4gICAgICB0cmFpbGluZ0NhbGwsXG4gICAgICBsYXN0Q2FsbGVkID0gMCxcbiAgICAgIG1heFdhaXQgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gd2FpdCA8IDAgPyAwIDogKCt3YWl0IHx8IDApO1xuICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgIHZhciBsZWFkaW5nID0gdHJ1ZTtcbiAgICB0cmFpbGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heFdhaXQgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucyAmJiBuYXRpdmVNYXgoK29wdGlvbnMubWF4V2FpdCB8fCAwLCB3YWl0KTtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICBpZiAobWF4VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQobWF4VGltZW91dElkKTtcbiAgICB9XG4gICAgbGFzdENhbGxlZCA9IDA7XG4gICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGUoaXNDYWxsZWQsIGlkKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH1cbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICBsYXN0Q2FsbGVkID0gbm93KCk7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0SWQgJiYgIW1heFRpbWVvdXRJZCkge1xuICAgICAgICBhcmdzID0gdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdygpIC0gc3RhbXApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBjb21wbGV0ZSh0cmFpbGluZ0NhbGwsIG1heFRpbWVvdXRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZGVsYXllZCwgcmVtYWluaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXhEZWxheWVkKCkge1xuICAgIGNvbXBsZXRlKHRyYWlsaW5nLCB0aW1lb3V0SWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgc3RhbXAgPSBub3coKTtcbiAgICB0aGlzQXJnID0gdGhpcztcbiAgICB0cmFpbGluZ0NhbGwgPSB0cmFpbGluZyAmJiAodGltZW91dElkIHx8ICFsZWFkaW5nKTtcblxuICAgIGlmIChtYXhXYWl0ID09PSBmYWxzZSkge1xuICAgICAgdmFyIGxlYWRpbmdDYWxsID0gbGVhZGluZyAmJiAhdGltZW91dElkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW1heFRpbWVvdXRJZCAmJiAhbGVhZGluZykge1xuICAgICAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gbWF4V2FpdCAtIChzdGFtcCAtIGxhc3RDYWxsZWQpLFxuICAgICAgICAgIGlzQ2FsbGVkID0gcmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gbWF4V2FpdDtcblxuICAgICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgICBtYXhUaW1lb3V0SWQgPSBjbGVhclRpbWVvdXQobWF4VGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbWF4VGltZW91dElkKSB7XG4gICAgICAgIG1heFRpbWVvdXRJZCA9IHNldFRpbWVvdXQobWF4RGVsYXllZCwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQ2FsbGVkICYmIHRpbWVvdXRJZCkge1xuICAgICAgdGltZW91dElkID0gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aW1lb3V0SWQgJiYgd2FpdCAhPT0gbWF4V2FpdCkge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChkZWxheWVkLCB3YWl0KTtcbiAgICB9XG4gICAgaWYgKGxlYWRpbmdDYWxsKSB7XG4gICAgICBpc0NhbGxlZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICBhcmdzID0gdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgY29lcmNlZCB0byBhIHN0cmluZyBhbmQgdXNlZCBhcyB0aGVcbiAqIGNhY2hlIGtleS4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZSBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXppbmcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1cHBlckNhc2UgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nKSB7XG4gKiAgIHJldHVybiBzdHJpbmcudG9VcHBlckNhc2UoKTtcbiAqIH0pO1xuICpcbiAqIHVwcGVyQ2FzZSgnZnJlZCcpO1xuICogLy8gPT4gJ0ZSRUQnXG4gKlxuICogLy8gbW9kaWZ5aW5nIHRoZSByZXN1bHQgY2FjaGVcbiAqIHVwcGVyQ2FzZS5jYWNoZS5zZXQoJ2ZyZWQnLCAnQkFSTkVZJyk7XG4gKiB1cHBlckNhc2UoJ2ZyZWQnKTtcbiAqIC8vID0+ICdCQVJORVknXG4gKlxuICogLy8gcmVwbGFjaW5nIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdiYXJuZXknIH07XG4gKiB2YXIgaWRlbnRpdHkgPSBfLm1lbW9pemUoXy5pZGVudGl0eSk7XG4gKlxuICogaWRlbnRpdHkob2JqZWN0KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICogaWRlbnRpdHkob3RoZXIpO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJyB9XG4gKlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqIHZhciBpZGVudGl0eSA9IF8ubWVtb2l6ZShfLmlkZW50aXR5KTtcbiAqXG4gKiBpZGVudGl0eShvYmplY3QpO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJyB9XG4gKiBpZGVudGl0eShvdGhlcik7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2Jhcm5leScgfVxuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyBtZW1vaXplLkNhY2hlO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwiLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXMgYW4gYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uIHRoZSBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9GdW5jdGlvbnMvcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3RQYXJhbShmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0UGFyYW0oZnVuYywgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogKCtzdGFydCB8fCAwKSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICByZXN0W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCByZXN0KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCByZXN0KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdFBhcmFtO1xuIiwidmFyIG1hcERlbGV0ZSA9IHJlcXVpcmUoJy4vbWFwRGVsZXRlJyksXG4gICAgbWFwR2V0ID0gcmVxdWlyZSgnLi9tYXBHZXQnKSxcbiAgICBtYXBIYXMgPSByZXF1aXJlKCcuL21hcEhhcycpLFxuICAgIG1hcFNldCA9IHJlcXVpcmUoJy4vbWFwU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXkvdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBzdGF0aWNcbiAqIEBuYW1lIENhY2hlXG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge307XG59XG5cbi8vIEFkZCBmdW5jdGlvbnMgdG8gdGhlIGBNYXBgIGNhY2hlLlxuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcERlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0WysrcmVzSW5kZXhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRGcm9tQXJyYXldIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YFxuICogIGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0RnJvbUFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0RnJvbUFycmF5ICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmFzc2lnbmAgZm9yIGN1c3RvbWl6aW5nIGFzc2lnbmVkIHZhbHVlcyB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZywgbXVsdGlwbGUgc291cmNlcywgYW5kIGB0aGlzYCBiaW5kaW5nIGBjdXN0b21pemVyYFxuICogZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBwcm9wcyA9IGtleXMoc291cmNlKSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIodmFsdWUsIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKTtcblxuICAgIGlmICgocmVzdWx0ID09PSByZXN1bHQgPyAocmVzdWx0ICE9PSB2YWx1ZSkgOiAodmFsdWUgPT09IHZhbHVlKSkgfHxcbiAgICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbldpdGg7XG4iLCJ2YXIgYmFzZUNvcHkgPSByZXF1aXJlKCcuL2Jhc2VDb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNhbGxiYWNrYCB3aGljaCBzdXBwb3J0cyBzcGVjaWZ5aW5nIHRoZVxuICogbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbZnVuYz1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIGNhbGxiYWNrLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmFzZUNhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGZ1bmM7XG4gIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGZ1bmNcbiAgICAgIDogYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcbiAgfVxuICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGJhc2VNYXRjaGVzKGZ1bmMpO1xuICB9XG4gIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICA/IHByb3BlcnR5KGZ1bmMpXG4gICAgOiBiYXNlTWF0Y2hlc1Byb3BlcnR5KGZ1bmMsIHRoaXNBcmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDYWxsYmFjaztcbiIsIi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNvcHkoc291cmNlLCBwcm9wcywgb2JqZWN0KSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNvcHk7XG4iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vYmFzZUZvck93bicpLFxuICAgIGNyZWF0ZUJhc2VFYWNoID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R8c3RyaW5nfSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqL1xudmFyIGJhc2VFYWNoID0gY3JlYXRlQmFzZUVhY2goYmFzZUZvck93bik7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhY2g7XG4iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuL2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kYCwgYF8uZmluZExhc3RgLCBgXy5maW5kS2V5YCwgYW5kIGBfLmZpbmRMYXN0S2V5YCxcbiAqIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcsIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBjb2xsZWN0aW9uYCB1c2luZyB0aGUgcHJvdmlkZWQgYGVhY2hGdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBgY29sbGVjdGlvbmAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXRLZXldIFNwZWNpZnkgcmV0dXJuaW5nIHRoZSBrZXkgb2YgdGhlIGZvdW5kIGVsZW1lbnRcbiAqICBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmb3VuZCBlbGVtZW50IG9yIGl0cyBrZXksIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZWFjaEZ1bmMsIHJldEtleSkge1xuICB2YXIgcmVzdWx0O1xuICBlYWNoRnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSkge1xuICAgICAgcmVzdWx0ID0gcmV0S2V5ID8ga2V5IDogdmFsdWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBzdHJpbmcgcGF0aHNcbiAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoS2V5XSBUaGUga2V5IHJlcHJlc2VudGF0aW9uIG9mIHBhdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuICAgIHBhdGggPSBbcGF0aEtleV07XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFtwYXRoW2luZGV4KytdXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2l0aG91dCBzdXBwb3J0IGZvciBgdGhpc2AgYmluZGluZ1xuICogYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9lcXVhbE9iamVjdHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBPVtdXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBhcnJheVRhZyxcbiAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuXG4gIGlmICghb2JqSXNBcnIpIHtcbiAgICBvYmpUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgaWYgKG9ialRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvYmpUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvYmpUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvYmpJc0FyciA9IGlzVHlwZWRBcnJheShvYmplY3QpO1xuICAgIH1cbiAgfVxuICBpZiAoIW90aElzQXJyKSB7XG4gICAgb3RoVGFnID0gb2JqVG9TdHJpbmcuY2FsbChvdGhlcik7XG4gICAgaWYgKG90aFRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvdGhUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvdGhUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvdGhJc0FyciA9IGlzVHlwZWRBcnJheShvdGhlcik7XG4gICAgfVxuICB9XG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIShvYmpJc0FyciB8fCBvYmpJc09iaikpIHtcbiAgICByZXR1cm4gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcpO1xuICB9XG4gIGlmICghaXNMb29zZSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsIG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlciwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGRldGVjdGluZyBjaXJjdWxhciByZWZlcmVuY2VzIHNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI0pPLlxuICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBvYmplY3QpIHtcbiAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBvdGhlcjtcbiAgICB9XG4gIH1cbiAgLy8gQWRkIGBvYmplY3RgIGFuZCBgb3RoZXJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgc3RhY2tBLnB1c2gob2JqZWN0KTtcbiAgc3RhY2tCLnB1c2gob3RoZXIpO1xuXG4gIHZhciByZXN1bHQgPSAob2JqSXNBcnIgPyBlcXVhbEFycmF5cyA6IGVxdWFsT2JqZWN0cykob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cbiAgc3RhY2tBLnBvcCgpO1xuICBzdGFja0IucG9wKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCB0cnVlKSA6IHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vZ2V0TWF0Y2hEYXRhJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICB2YXIga2V5ID0gbWF0Y2hEYXRhWzBdWzBdLFxuICAgICAgICB2YWx1ZSA9IG1hdGNoRGF0YVswXVsxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHZhbHVlICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vYmFzZVNsaWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4uL2FycmF5L2xhc3QnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuL3RvUGF0aCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHBhdGgpLFxuICAgICAgaXNDb21tb24gPSBpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpLFxuICAgICAgcGF0aEtleSA9IChwYXRoICsgJycpO1xuXG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHBhdGhLZXk7XG4gICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICBpZiAoKGlzQXJyIHx8ICFpc0NvbW1vbikgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgb2JqZWN0ID0gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBrZXkgPSBsYXN0KHBhdGgpO1xuICAgICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZVxuICAgICAgPyAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIG9iamVjdCkpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmplY3Rba2V5XSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmBcbiAqIHVzaW5nIHRoZSBwcm92aWRlZCBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRGcm9tQ29sbGVjdGlvbiBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnRcbiAqICBvZiBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQ29sbGVjdGlvbiwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0RnJvbUNvbGxlY3Rpb25cbiAgICAgID8gKGluaXRGcm9tQ29sbGVjdGlvbiA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zb21lYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrIHNob3J0aGFuZHNcbiAqIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0ID0gcHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgcmV0dXJuICFyZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gISFyZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNvbWU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltTGVmdGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gKiBvZiBgc3RyaW5nYCB0aGF0IGlzIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFycyBUaGUgY2hhcmFjdGVycyB0byBmaW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBub3QgZm91bmQgaW4gYGNoYXJzYC5cbiAqL1xuZnVuY3Rpb24gY2hhcnNMZWZ0SW5kZXgoc3RyaW5nLCBjaGFycykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgY2hhcnMuaW5kZXhPZihzdHJpbmcuY2hhckF0KGluZGV4KSkgPiAtMSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJzTGVmdEluZGV4O1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltUmlnaHRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3QgY2hhcmFjdGVyXG4gKiBvZiBgc3RyaW5nYCB0aGF0IGlzIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFycyBUaGUgY2hhcmFjdGVycyB0byBmaW5kLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICovXG5mdW5jdGlvbiBjaGFyc1JpZ2h0SW5kZXgoc3RyaW5nLCBjaGFycykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIGNoYXJzLmluZGV4T2Yoc3RyaW5nLmNoYXJBdChpbmRleCkpID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyc1JpZ2h0SW5kZXg7XG4iLCJ2YXIgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnLi9iaW5kQ2FsbGJhY2snKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vaXNJdGVyYXRlZUNhbGwnKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9yZXN0UGFyYW0nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uYXNzaWduYCwgYF8uZGVmYXVsdHNgLCBvciBgXy5tZXJnZWAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiByZXN0UGFyYW0oZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbbGVuZ3RoIC0gMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIHRoaXNBcmcgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjdXN0b21pemVyID0gYmluZENhbGxiYWNrKGN1c3RvbWl6ZXIsIHRoaXNBcmcsIDUpO1xuICAgICAgbGVuZ3RoIC09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSB0eXBlb2YgdGhpc0FyZyA9PSAnZnVuY3Rpb24nID8gdGhpc0FyZyA6IHVuZGVmaW5lZDtcbiAgICAgIGxlbmd0aCAtPSAoY3VzdG9taXplciA/IDEgOiAwKTtcbiAgICB9XG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcbiIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24gPyBnZXRMZW5ndGgoY29sbGVjdGlvbikgOiAwO1xuICAgIGlmICghaXNMZW5ndGgobGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gdG9PYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBgXy5mb3JJbmAgb3IgYF8uZm9ySW5SaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gdG9PYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGaW5kID0gcmVxdWlyZSgnLi9iYXNlRmluZCcpLFxuICAgIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRgIG9yIGBfLmZpbmRMYXN0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZpbmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbmQoZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgaWYgKGlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgIHZhciBpbmRleCA9IGJhc2VGaW5kSW5kZXgoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tUmlnaHQpO1xuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyBjb2xsZWN0aW9uW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZWFjaEZ1bmMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmQ7XG4iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9iYXNlRmluZEluZGV4Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRJbmRleGAgb3IgYF8uZmluZExhc3RJbmRleGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZEluZGV4KGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIGlmICghKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbVJpZ2h0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGaW5kSW5kZXg7XG4iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9iYXNlUmVkdWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBmb3IgYF8ucmVkdWNlYCBvciBgXy5yZWR1Y2VSaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFycmF5RnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGFuIGFycmF5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBlYWNoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2UoYXJyYXlGdW5jLCBlYWNoRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCB0aGlzQXJnKSB7XG4gICAgdmFyIGluaXRGcm9tQXJyYXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMztcbiAgICByZXR1cm4gKHR5cGVvZiBpdGVyYXRlZSA9PSAnZnVuY3Rpb24nICYmIHRoaXNBcmcgPT09IHVuZGVmaW5lZCAmJiBpc0FycmF5KGNvbGxlY3Rpb24pKVxuICAgICAgPyBhcnJheUZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0RnJvbUFycmF5KVxuICAgICAgOiBiYXNlUmVkdWNlKGNvbGxlY3Rpb24sIGJhc2VDYWxsYmFjayhpdGVyYXRlZSwgdGhpc0FyZywgNCksIGFjY3VtdWxhdG9yLCBpbml0RnJvbUFycmF5LCBlYWNoRnVuYyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUmVkdWNlO1xuIiwidmFyIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vYXJyYXlTb21lJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIGFycmF5cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzTG9vc2UgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIoaXNMb29zZSA/IG90aFZhbHVlIDogYXJyVmFsdWUsIGlzTG9vc2UgPyBhcnJWYWx1ZSA6IG90aFZhbHVlLCBpbmRleCkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKGlzTG9vc2UpIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsIi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWJlcnMsIGRhdGVzIHRvIG1pbGxpc2Vjb25kcyBhbmQgYm9vbGVhbnNcbiAgICAgIC8vIHRvIGAxYCBvciBgMGAgdHJlYXRpbmcgaW52YWxpZCBkYXRlcyBjb2VyY2VkIHRvIGBOYU5gIGFzIG5vdCBlcXVhbC5cbiAgICAgIHJldHVybiArb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBUcmVhdCBgTmFOYCB2cy4gYE5hTmAgYXMgZXF1YWwuXG4gICAgICByZXR1cm4gKG9iamVjdCAhPSArb2JqZWN0KVxuICAgICAgICA/IG90aGVyICE9ICtvdGhlclxuICAgICAgICA6IG9iamVjdCA9PSArb3RoZXI7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MgcHJpbWl0aXZlcyBhbmQgc3RyaW5nXG4gICAgICAvLyBvYmplY3RzIGFzIGVxdWFsLiBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTAuNi40IGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc0xvb3NlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzTG9vc2UgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgc2tpcEN0b3IgPSBpc0xvb3NlO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBvYmpWYWx1ZSwgaXNMb29zZT8gb2JqVmFsdWUgOiBvdGhWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIDogcmVzdWx0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKCFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG4iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBwYWlycyA9IHJlcXVpcmUoJy4uL29iamVjdC9wYWlycycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gcGFpcnMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgcmVzdWx0W2xlbmd0aF1bMl0gPSBpc1N0cmljdENvbXBhcmFibGUocmVzdWx0W2xlbmd0aF1bMV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi4vbGFuZy9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsIi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdCkpIHtcbiAgICB2YXIgb3RoZXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAodmFsdWUgPT09IG90aGVyKSA6IChvdGhlciAhPT0gb3RoZXIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAoKHR5cGUgPT0gJ3N0cmluZycgJiYgcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSkgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIHJlc3VsdCB8fCAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gdG9PYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsIi8qKlxuICogVXNlZCBieSBgdHJpbW1lZExlZnRJbmRleGAgYW5kIGB0cmltbWVkUmlnaHRJbmRleGAgdG8gZGV0ZXJtaW5lIGlmIGFcbiAqIGNoYXJhY3RlciBjb2RlIGlzIHdoaXRlc3BhY2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFyQ29kZSBUaGUgY2hhcmFjdGVyIGNvZGUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgY2hhckNvZGVgIGlzIHdoaXRlc3BhY2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTcGFjZShjaGFyQ29kZSkge1xuICByZXR1cm4gKChjaGFyQ29kZSA8PSAxNjAgJiYgKGNoYXJDb2RlID49IDkgJiYgY2hhckNvZGUgPD0gMTMpIHx8IGNoYXJDb2RlID09IDMyIHx8IGNoYXJDb2RlID09IDE2MCkgfHwgY2hhckNvZGUgPT0gNTc2MCB8fCBjaGFyQ29kZSA9PSA2MTU4IHx8XG4gICAgKGNoYXJDb2RlID49IDgxOTIgJiYgKGNoYXJDb2RlIDw9IDgyMDIgfHwgY2hhckNvZGUgPT0gODIzMiB8fCBjaGFyQ29kZSA9PSA4MjMzIHx8IGNoYXJDb2RlID09IDgyMzkgfHwgY2hhckNvZGUgPT0gODI4NyB8fCBjaGFyQ29kZSA9PSAxMjI4OCB8fCBjaGFyQ29kZSA9PSA2NTI3OSkpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NwYWNlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkIHN1Y2Nlc3NmdWxseSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBjYWNoZWQgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemUuQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNhY2hlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwR2V0KGtleSkge1xuICByZXR1cm4ga2V5ID09ICdfX3Byb3RvX18nID8gdW5kZWZpbmVkIDogdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcEdldDtcbiIsIi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGNhY2hlZCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemUuQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBIYXMoa2V5KSB7XG4gIHJldHVybiBrZXkgIT0gJ19fcHJvdG9fXycgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9fZGF0YV9fLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcEhhcztcbiIsIi8qKlxuICogU2V0cyBgdmFsdWVgIHRvIGBrZXlgIG9mIHRoZSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplLkNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIG1hcFNldChrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgIT0gJ19fcHJvdG9fXycpIHtcbiAgICB0aGlzLl9fZGF0YV9fW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBTZXQ7XG4iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24gb2YgYE9iamVjdC5rZXlzYCB3aGljaCBjcmVhdGVzIGFuIGFycmF5IG9mIHRoZVxuICogb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHNoaW1LZXlzKG9iamVjdCkge1xuICB2YXIgcHJvcHMgPSBrZXlzSW4ob2JqZWN0KSxcbiAgICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gcHJvcHNMZW5ndGggJiYgb2JqZWN0Lmxlbmd0aDtcblxuICB2YXIgYWxsb3dJbmRleGVzID0gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoKGFsbG93SW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgfHwgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbUtleXM7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vYmFzZVRvU3RyaW5nJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXG5cXFxcXXxcXFxcLikqPylcXDIpXFxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gcHJvcGVydHkgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBiYXNlVG9TdHJpbmcodmFsdWUpLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QYXRoO1xuIiwidmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuL2lzU3BhY2UnKTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltTGVmdGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkTGVmdEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgaXNTcGFjZShzdHJpbmcuY2hhckNvZGVBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZExlZnRJbmRleDtcbiIsInZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi9pc1NwYWNlJyk7XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbVJpZ2h0YCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkUmlnaHRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiBpc1NwYWNlKHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkUmlnaHRJbmRleDtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFycmF5VGFnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUlzRXF1YWwnKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iaW5kQ2FsbGJhY2snKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQncyBpbnZva2VkIHRvIGNvbXBhcmUgdmFsdWVzLlxuICogSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAgY29tcGFyaXNvbnMgYXJlIGhhbmRsZWQgYnkgdGhlIG1ldGhvZFxuICogaW5zdGVhZC4gVGhlIGBjdXN0b21pemVyYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB1cCB0b1xuICogdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIG90aGVyIFssIGluZGV4fGtleV0pLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBib29sZWFucywgYERhdGVgIG9iamVjdHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBhbmQgc3RyaW5ncy4gT2JqZWN0cyBhcmUgY29tcGFyZWQgYnlcbiAqIHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTSBub2Rlc1xuICogYXJlICoqbm90Kiogc3VwcG9ydGVkLiBQcm92aWRlIGEgY3VzdG9taXplciBmdW5jdGlvbiB0byBleHRlbmQgc3VwcG9ydFxuICogZm9yIGNvbXBhcmluZyBvdGhlciB2YWx1ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBlcVxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgdmFsdWUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGN1c3RvbWl6ZXJgLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqIHZhciBvdGhlciA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBvYmplY3QgPT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBhcnJheSA9IFsnaGVsbG8nLCAnZ29vZGJ5ZSddO1xuICogdmFyIG90aGVyID0gWydoaScsICdnb29kYnllJ107XG4gKlxuICogXy5pc0VxdWFsKGFycmF5LCBvdGhlciwgZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gKiAgIGlmIChfLmV2ZXJ5KFt2YWx1ZSwgb3RoZXJdLCBSZWdFeHAucHJvdG90eXBlLnRlc3QsIC9eaCg/Oml8ZWxsbykkLykpIHtcbiAqICAgICByZXR1cm4gdHJ1ZTtcbiAqICAgfVxuICogfSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyLCB0aGlzQXJnKSB7XG4gIGN1c3RvbWl6ZXIgPSB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nID8gYmluZENhbGxiYWNrKGN1c3RvbWl6ZXIsIHRoaXNBcmcsIDMpIDogdW5kZWZpbmVkO1xuICB2YXIgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIodmFsdWUsIG90aGVyKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuICByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgY3VzdG9taXplcikgOiAhIXJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID0gdHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tvYmpUb1N0cmluZy5jYWxsKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwidmFyIGFzc2lnbldpdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hc3NpZ25XaXRoJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VBc3NpZ24nKSxcbiAgICBjcmVhdGVBc3NpZ25lciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NyZWF0ZUFzc2lnbmVyJyk7XG5cbi8qKlxuICogQXNzaWducyBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3QocykgdG8gdGhlIGRlc3RpbmF0aW9uXG4gKiBvYmplY3QuIFN1YnNlcXVlbnQgc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqIElmIGBjdXN0b21pemVyYCBpcyBwcm92aWRlZCBpdCdzIGludm9rZWQgdG8gcHJvZHVjZSB0aGUgYXNzaWduZWQgdmFsdWVzLlxuICogVGhlIGBjdXN0b21pemVyYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCBmaXZlIGFyZ3VtZW50czpcbiAqIChvYmplY3RWYWx1ZSwgc291cmNlVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UpLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgIGFuZCBpcyBiYXNlZCBvblxuICogW2BPYmplY3QuYXNzaWduYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmFzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBleHRlbmRcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBjdXN0b21pemVyYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uYXNzaWduKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiA0MCB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJywgJ2FnZSc6IDQwIH1cbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBkZWZhdWx0cyA9IF8ucGFydGlhbFJpZ2h0KF8uYXNzaWduLCBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAqICAgcmV0dXJuIF8uaXNVbmRlZmluZWQodmFsdWUpID8gb3RoZXIgOiB2YWx1ZTtcbiAqIH0pO1xuICpcbiAqIGRlZmF1bHRzKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiAzNiB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYgfVxuICovXG52YXIgYXNzaWduID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgcmV0dXJuIGN1c3RvbWl6ZXJcbiAgICA/IGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpXG4gICAgOiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgc2hpbUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zaGltS2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0d28gZGltZW5zaW9uYWwgYXJyYXkgb2YgdGhlIGtleS12YWx1ZSBwYWlycyBmb3IgYG9iamVjdGAsXG4gKiBlLmcuIGBbW2tleTEsIHZhbHVlMV0sIFtrZXkyLCB2YWx1ZTJdXWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGtleS12YWx1ZSBwYWlycy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5wYWlycyh7ICdiYXJuZXknOiAzNiwgJ2ZyZWQnOiA0MCB9KTtcbiAqIC8vID0+IFtbJ2Jhcm5leScsIDM2XSwgWydmcmVkJywgNDBdXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBwYWlycyhvYmplY3QpIHtcbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgcmVzdWx0W2luZGV4XSA9IFtrZXksIG9iamVjdFtrZXldXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhaXJzO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBzdGFydHMgd2l0aCB0aGUgZ2l2ZW4gdGFyZ2V0IHN0cmluZy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdIFRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcG9zaXRpb249MF0gVGhlIHBvc2l0aW9uIHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBzdHJpbmdgIHN0YXJ0cyB3aXRoIGB0YXJnZXRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLnN0YXJ0c1dpdGgoJ2FiYycsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2InLCAxKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHJpbmcsIHRhcmdldCwgcG9zaXRpb24pIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHBvc2l0aW9uID0gcG9zaXRpb24gPT0gbnVsbFxuICAgID8gMFxuICAgIDogbmF0aXZlTWluKHBvc2l0aW9uIDwgMCA/IDAgOiAoK3Bvc2l0aW9uIHx8IDApLCBzdHJpbmcubGVuZ3RoKTtcblxuICByZXR1cm4gc3RyaW5nLmxhc3RJbmRleE9mKHRhcmdldCwgcG9zaXRpb24pID09IHBvc2l0aW9uO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0c1dpdGg7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyksXG4gICAgY2hhcnNMZWZ0SW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGFyc0xlZnRJbmRleCcpLFxuICAgIGNoYXJzUmlnaHRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoYXJzUmlnaHRJbmRleCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKSxcbiAgICB0cmltbWVkTGVmdEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdHJpbW1lZExlZnRJbmRleCcpLFxuICAgIHRyaW1tZWRSaWdodEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdHJpbW1lZFJpZ2h0SW5kZXgnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2Ugb3Igc3BlY2lmaWVkIGNoYXJhY3RlcnMgZnJvbSBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY2hhcnM9d2hpdGVzcGFjZV0gVGhlIGNoYXJhY3RlcnMgdG8gdHJpbS5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhIGNhbGxiYWNrIGZvciBmdW5jdGlvbnMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJpbSgnICBhYmMgICcpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLnRyaW0oJy1fLWFiYy1fLScsICdfLScpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLm1hcChbJyAgZm9vICAnLCAnICBiYXIgICddLCBfLnRyaW0pO1xuICogLy8gPT4gWydmb28nLCAnYmFyJ11cbiAqL1xuZnVuY3Rpb24gdHJpbShzdHJpbmcsIGNoYXJzLCBndWFyZCkge1xuICB2YXIgdmFsdWUgPSBzdHJpbmc7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICBpZiAoIXN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgaWYgKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGNoYXJzLCBndWFyZCkgOiBjaGFycyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHN0cmluZy5zbGljZSh0cmltbWVkTGVmdEluZGV4KHN0cmluZyksIHRyaW1tZWRSaWdodEluZGV4KHN0cmluZykgKyAxKTtcbiAgfVxuICBjaGFycyA9IChjaGFycyArICcnKTtcbiAgcmV0dXJuIHN0cmluZy5zbGljZShjaGFyc0xlZnRJbmRleChzdHJpbmcsIGNoYXJzKSwgY2hhcnNSaWdodEluZGV4KHN0cmluZywgY2hhcnMpICsgMSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNLZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBhdCBgcGF0aGAgb24gYVxuICogZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMiB9IH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiB7ICdjJzogMSB9IH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmIuYycpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ucGx1Y2soXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYicsICdjJ10pKSwgJ2EuYi5jJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkocGF0aCkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbGxDb3VudHJpZXMgPSBbXG4gICAgICAgW1xuICAgICAgICAgICdBZmdoYW5pc3RhbiAo4oCr2KfZgdi62KfZhtiz2KrYp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ2FmJyxcbiAgICAgICAgICAnOTMnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FsYmFuaWEgKFNocWlww6tyaSknLFxuICAgICAgICAgICdhbCcsXG4gICAgICAgICAgJzM1NScsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FsZ2VyaWEgKOKAq9in2YTYrNiy2KfYptix4oCs4oCOKScsXG4gICAgICAgICAgJ2R6JyxcbiAgICAgICAgICAnMjEzJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQW1lcmljYW4gU2Ftb2EnLFxuICAgICAgICAgICdhcycsXG4gICAgICAgICAgJzE2ODQnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FuZG9ycmEnLFxuICAgICAgICAgICdhZCcsXG4gICAgICAgICAgJzM3NicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQW5nb2xhJyxcbiAgICAgICAgICAnYW8nLFxuICAgICAgICAgICcyNDQnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBbmd1aWxsYScsXG4gICAgICAgICAgJ2FpJyxcbiAgICAgICAgICAnMTI2NCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQW50aWd1YSBhbmQgQmFyYnVkYScsXG4gICAgICAgICAgJ2FnJyxcbiAgICAgICAgICAnMTI2OCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQXJnZW50aW5hJyxcbiAgICAgICAgICAnYXInLFxuICAgICAgICAgICc1NCcsXG4gICAgICAgICAgJysuLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FybWVuaWEgKNWA1aHVtdWh1b3Vv9Wh1bYpJyxcbiAgICAgICAgICAnYW0nLFxuICAgICAgICAgICczNzQnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FydWJhJyxcbiAgICAgICAgICAnYXcnLFxuICAgICAgICAgICcyOTcnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBdXN0cmFsaWEnLFxuICAgICAgICAgICdhdScsXG4gICAgICAgICAgJzYxJyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4gLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBdXN0cmlhICjDlnN0ZXJyZWljaCknLFxuICAgICAgICAgICdhdCcsXG4gICAgICAgICAgJzQzJyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQXplcmJhaWphbiAoQXrJmXJiYXljYW4pJyxcbiAgICAgICAgICAnYXonLFxuICAgICAgICAgICc5OTQnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmFoYW1hcycsXG4gICAgICAgICAgJ2JzJyxcbiAgICAgICAgICAnMTI0MicsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmFocmFpbiAo4oCr2KfZhNio2K3YsdmK2YbigKzigI4pJyxcbiAgICAgICAgICAnYmgnLFxuICAgICAgICAgICc5NzMnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmFuZ2xhZGVzaCAo4Kas4Ka+4KaC4Kay4Ka+4Kam4KeH4Ka2KScsXG4gICAgICAgICAgJ2JkJyxcbiAgICAgICAgICAnODgwJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCYXJiYWRvcycsXG4gICAgICAgICAgJ2JiJyxcbiAgICAgICAgICAnMTI0NicsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmVsYXJ1cyAo0JHQtdC70LDRgNGD0YHRjCknLFxuICAgICAgICAgICdieScsXG4gICAgICAgICAgJzM3NScsXG4gICAgICAgICAgJysuLi4oLi4pLi4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCZWxnaXVtIChCZWxnacOrKScsXG4gICAgICAgICAgJ2JlJyxcbiAgICAgICAgICAnMzInLFxuICAgICAgICAgICcrLi4gLi4uIC4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCZWxpemUnLFxuICAgICAgICAgICdieicsXG4gICAgICAgICAgJzUwMScsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JlbmluIChCw6luaW4pJyxcbiAgICAgICAgICAnYmonLFxuICAgICAgICAgICcyMjknLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0Jlcm11ZGEnLFxuICAgICAgICAgICdibScsXG4gICAgICAgICAgJzE0NDEnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JodXRhbiAo4L2g4L2W4L6y4L204L2CKScsXG4gICAgICAgICAgJ2J0JyxcbiAgICAgICAgICAnOTc1JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JvbGl2aWEnLFxuICAgICAgICAgICdibycsXG4gICAgICAgICAgJzU5MScsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYSAo0JHQvtGB0L3QsCDQuCDQpdC10YDRhtC10LPQvtCy0LjQvdCwKScsXG4gICAgICAgICAgJ2JhJyxcbiAgICAgICAgICAnMzg3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCb3Rzd2FuYScsXG4gICAgICAgICAgJ2J3JyxcbiAgICAgICAgICAnMjY3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCcmF6aWwgKEJyYXNpbCknLFxuICAgICAgICAgICdicicsXG4gICAgICAgICAgJzU1JyxcbiAgICAgICAgICAnKy4uLS4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5JyxcbiAgICAgICAgICAnaW8nLFxuICAgICAgICAgICcyNDYnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCcml0aXNoIFZpcmdpbiBJc2xhbmRzJyxcbiAgICAgICAgICAndmcnLFxuICAgICAgICAgICcxMjg0JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCcnVuZWknLFxuICAgICAgICAgICdibicsXG4gICAgICAgICAgJzY3MycsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0J1bGdhcmlhICjQkdGK0LvQs9Cw0YDQuNGPKScsXG4gICAgICAgICAgJ2JnJyxcbiAgICAgICAgICAnMzU5JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQnVya2luYSBGYXNvJyxcbiAgICAgICAgICAnYmYnLFxuICAgICAgICAgICcyMjYnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0J1cnVuZGkgKFVidXJ1bmRpKScsXG4gICAgICAgICAgJ2JpJyxcbiAgICAgICAgICAnMjU3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDYW1ib2RpYSAo4Z6A4Z6Y4Z+S4Z6W4Z674Z6H4Z62KScsXG4gICAgICAgICAgJ2toJyxcbiAgICAgICAgICAnODU1JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDYW1lcm9vbiAoQ2FtZXJvdW4pJyxcbiAgICAgICAgICAnY20nLFxuICAgICAgICAgICcyMzcnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ2FuYWRhJyxcbiAgICAgICAgICAnY2EnLFxuICAgICAgICAgICcxJyxcbiAgICAgICAgICAnKy4gKC4uLikgLi4uLS4uLi4nLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgICcyMDQnLFxuICAgICAgICAgICAgICcyMzYnLFxuICAgICAgICAgICAgICcyNDknLFxuICAgICAgICAgICAgICcyNTAnLFxuICAgICAgICAgICAgICcyODknLFxuICAgICAgICAgICAgICczMDYnLFxuICAgICAgICAgICAgICczNDMnLFxuICAgICAgICAgICAgICczNjUnLFxuICAgICAgICAgICAgICczODcnLFxuICAgICAgICAgICAgICc0MDMnLFxuICAgICAgICAgICAgICc0MTYnLFxuICAgICAgICAgICAgICc0MTgnLFxuICAgICAgICAgICAgICc0MzEnLFxuICAgICAgICAgICAgICc0MzcnLFxuICAgICAgICAgICAgICc0MzgnLFxuICAgICAgICAgICAgICc0NTAnLFxuICAgICAgICAgICAgICc1MDYnLFxuICAgICAgICAgICAgICc1MTQnLFxuICAgICAgICAgICAgICc1MTknLFxuICAgICAgICAgICAgICc1NDgnLFxuICAgICAgICAgICAgICc1NzknLFxuICAgICAgICAgICAgICc1ODEnLFxuICAgICAgICAgICAgICc1ODcnLFxuICAgICAgICAgICAgICc2MDQnLFxuICAgICAgICAgICAgICc2MTMnLFxuICAgICAgICAgICAgICc2MzknLFxuICAgICAgICAgICAgICc2NDcnLFxuICAgICAgICAgICAgICc2NzInLFxuICAgICAgICAgICAgICc3MDUnLFxuICAgICAgICAgICAgICc3MDknLFxuICAgICAgICAgICAgICc3NDInLFxuICAgICAgICAgICAgICc3NzgnLFxuICAgICAgICAgICAgICc3ODAnLFxuICAgICAgICAgICAgICc3ODInLFxuICAgICAgICAgICAgICc4MDcnLFxuICAgICAgICAgICAgICc4MTknLFxuICAgICAgICAgICAgICc4MjUnLFxuICAgICAgICAgICAgICc4NjcnLFxuICAgICAgICAgICAgICc4NzMnLFxuICAgICAgICAgICAgICc5MDInLFxuICAgICAgICAgICAgICc5MDUnXG4gICAgICAgICAgXVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDYXBlIFZlcmRlIChLYWJ1IFZlcmRpKScsXG4gICAgICAgICAgJ2N2JyxcbiAgICAgICAgICAnMjM4JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NhcmliYmVhbiBOZXRoZXJsYW5kcycsXG4gICAgICAgICAgJ2JxJyxcbiAgICAgICAgICAnNTk5JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLicsXG4gICAgICAgICAgMVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDYXltYW4gSXNsYW5kcycsXG4gICAgICAgICAgJ2t5JyxcbiAgICAgICAgICAnMTM0NScsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljIChSw6lwdWJsaXF1ZSBjZW50cmFmcmljYWluZSknLFxuICAgICAgICAgICdjZicsXG4gICAgICAgICAgJzIzNicsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ2hhZCAoVGNoYWQpJyxcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgICcyMzUnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDaGlsZScsXG4gICAgICAgICAgJ2NsJyxcbiAgICAgICAgICAnNTYnLFxuICAgICAgICAgICcrLi4tLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NoaW5hICjkuK3lm70pJyxcbiAgICAgICAgICAnY24nLFxuICAgICAgICAgICc4NicsXG4gICAgICAgICAgJysuLiAuLi0uLi4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ29sb21iaWEnLFxuICAgICAgICAgICdjbycsXG4gICAgICAgICAgJzU3JyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ29tb3JvcyAo4oCr2KzYstixINin2YTZgtmF2LHigKzigI4pJyxcbiAgICAgICAgICAna20nLFxuICAgICAgICAgICcyNjknLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDb25nbyAoRFJDKSAoSmFtaHVyaSB5YSBLaWRlbW9rcmFzaWEgeWEgS29uZ28pJyxcbiAgICAgICAgICAnY2QnLFxuICAgICAgICAgICcyNDMnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDb25nbyAoUmVwdWJsaWMpIChDb25nby1CcmF6emF2aWxsZSknLFxuICAgICAgICAgICdjZycsXG4gICAgICAgICAgJzI0MicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0Nvb2sgSXNsYW5kcycsXG4gICAgICAgICAgJ2NrJyxcbiAgICAgICAgICAnNjgyJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0Nvc3RhIFJpY2EnLFxuICAgICAgICAgICdjcicsXG4gICAgICAgICAgJzUwNicsXG4gICAgICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDw7R0ZSBk4oCZSXZvaXJlJyxcbiAgICAgICAgICAnY2knLFxuICAgICAgICAgICcyMjUnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0Nyb2F0aWEgKEhydmF0c2thKScsXG4gICAgICAgICAgJ2hyJyxcbiAgICAgICAgICAnMzg1JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDdWJhJyxcbiAgICAgICAgICAnY3UnLFxuICAgICAgICAgICc1MycsXG4gICAgICAgICAgJysuLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDdXJhw6dhbycsXG4gICAgICAgICAgJ2N3JyxcbiAgICAgICAgICAnNTk5JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLicsXG4gICAgICAgICAgMFxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDeXBydXMgKM6az43PgM+Bzr/PgiknLFxuICAgICAgICAgICdjeScsXG4gICAgICAgICAgJzM1NycsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ3plY2ggUmVwdWJsaWMgKMSMZXNrw6EgcmVwdWJsaWthKScsXG4gICAgICAgICAgJ2N6JyxcbiAgICAgICAgICAnNDIwJyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRGVubWFyayAoRGFubWFyayknLFxuICAgICAgICAgICdkaycsXG4gICAgICAgICAgJzQ1JyxcbiAgICAgICAgICAnKy4uIC4uIC4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdEamlib3V0aScsXG4gICAgICAgICAgJ2RqJyxcbiAgICAgICAgICAnMjUzJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRG9taW5pY2EnLFxuICAgICAgICAgICdkbScsXG4gICAgICAgICAgJzE3NjcnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0RvbWluaWNhbiBSZXB1YmxpYyAoUmVww7pibGljYSBEb21pbmljYW5hKScsXG4gICAgICAgICAgJ2RvJyxcbiAgICAgICAgICAnMScsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLicsXG4gICAgICAgICAgMixcbiAgICAgICAgICBbXG4gICAgICAgICAgICAgJzgwOScsXG4gICAgICAgICAgICAgJzgyOScsXG4gICAgICAgICAgICAgJzg0OSdcbiAgICAgICAgICBdXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0VjdWFkb3InLFxuICAgICAgICAgICdlYycsXG4gICAgICAgICAgJzU5MycsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRWd5cHQgKOKAq9mF2LXYseKArOKAjiknLFxuICAgICAgICAgICdlZycsXG4gICAgICAgICAgJzIwJyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRWwgU2FsdmFkb3InLFxuICAgICAgICAgICdzdicsXG4gICAgICAgICAgJzUwMycsXG4gICAgICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFcXVhdG9yaWFsIEd1aW5lYSAoR3VpbmVhIEVjdWF0b3JpYWwpJyxcbiAgICAgICAgICAnZ3EnLFxuICAgICAgICAgICcyNDAnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFcml0cmVhJyxcbiAgICAgICAgICAnZXInLFxuICAgICAgICAgICcyOTEnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRXN0b25pYSAoRWVzdGkpJyxcbiAgICAgICAgICAnZWUnLFxuICAgICAgICAgICczNzInLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFdGhpb3BpYScsXG4gICAgICAgICAgJ2V0JyxcbiAgICAgICAgICAnMjUxJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpJyxcbiAgICAgICAgICAnZmsnLFxuICAgICAgICAgICc1MDAnLFxuICAgICAgICAgICcrLi4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGYXJvZSBJc2xhbmRzIChGw7hyb3lhciknLFxuICAgICAgICAgICdmbycsXG4gICAgICAgICAgJzI5OCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRmlqaScsXG4gICAgICAgICAgJ2ZqJyxcbiAgICAgICAgICAnNjc5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRmlubGFuZCAoU3VvbWkpJyxcbiAgICAgICAgICAnZmknLFxuICAgICAgICAgICczNTgnLFxuICAgICAgICAgICcrLi4uIC4uIC4uLiAuLiAuLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRnJhbmNlJyxcbiAgICAgICAgICAnZnInLFxuICAgICAgICAgICczMycsXG4gICAgICAgICAgJysuLiAuIC4uIC4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGcmVuY2ggR3VpYW5hIChHdXlhbmUgZnJhbsOnYWlzZSknLFxuICAgICAgICAgICdnZicsXG4gICAgICAgICAgJzU5NCcsXG4gICAgICAgICAgJysuLi4tLi4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRnJlbmNoIFBvbHluZXNpYSAoUG9seW7DqXNpZSBmcmFuw6dhaXNlKScsXG4gICAgICAgICAgJ3BmJyxcbiAgICAgICAgICAnNjg5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2Fib24nLFxuICAgICAgICAgICdnYScsXG4gICAgICAgICAgJzI0MScsXG4gICAgICAgICAgJysuLi4tLi0uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2FtYmlhJyxcbiAgICAgICAgICAnZ20nLFxuICAgICAgICAgICcyMjAnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2VvcmdpYSAo4YOh4YOQ4YOl4YOQ4YOg4YOX4YOV4YOU4YOa4YOdKScsXG4gICAgICAgICAgJ2dlJyxcbiAgICAgICAgICAnOTk1JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2VybWFueSAoRGV1dHNjaGxhbmQpJyxcbiAgICAgICAgICAnZGUnLFxuICAgICAgICAgICc0OScsXG4gICAgICAgICAgJysuLiAuLi4gLi4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2hhbmEgKEdhYW5hKScsXG4gICAgICAgICAgJ2doJyxcbiAgICAgICAgICAnMjMzJyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR2licmFsdGFyJyxcbiAgICAgICAgICAnZ2knLFxuICAgICAgICAgICczNTAnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR3JlZWNlICjOlc67zrvOrM60zrEpJyxcbiAgICAgICAgICAnZ3InLFxuICAgICAgICAgICczMCcsXG4gICAgICAgICAgJysuLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0dyZWVubGFuZCAoS2FsYWFsbGl0IE51bmFhdCknLFxuICAgICAgICAgICdnbCcsXG4gICAgICAgICAgJzI5OScsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0dyZW5hZGEnLFxuICAgICAgICAgICdnZCcsXG4gICAgICAgICAgJzE0NzMnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1YWRlbG91cGUnLFxuICAgICAgICAgICdncCcsXG4gICAgICAgICAgJzU5MCcsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgMFxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHdWFtJyxcbiAgICAgICAgICAnZ3UnLFxuICAgICAgICAgICcxNjcxJyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHdWF0ZW1hbGEnLFxuICAgICAgICAgICdndCcsXG4gICAgICAgICAgJzUwMicsXG4gICAgICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHdWluZWEgKEd1aW7DqWUpJyxcbiAgICAgICAgICAnZ24nLFxuICAgICAgICAgICcyMjQnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1aW5lYS1CaXNzYXUgKEd1aW7DqSBCaXNzYXUpJyxcbiAgICAgICAgICAnZ3cnLFxuICAgICAgICAgICcyNDUnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHdXlhbmEnLFxuICAgICAgICAgICdneScsXG4gICAgICAgICAgJzU5MicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0hhaXRpJyxcbiAgICAgICAgICAnaHQnLFxuICAgICAgICAgICc1MDknLFxuICAgICAgICAgICcrLi4uIC4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSG9uZHVyYXMnLFxuICAgICAgICAgICdobicsXG4gICAgICAgICAgJzUwNCcsXG4gICAgICAgICAgJysuLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdIb25nIEtvbmcgKOmmmea4ryknLFxuICAgICAgICAgICdoaycsXG4gICAgICAgICAgJzg1MicsXG4gICAgICAgICAgJysuLi4gLi4uLiAuLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdIdW5nYXJ5IChNYWd5YXJvcnN6w6FnKScsXG4gICAgICAgICAgJ2h1JyxcbiAgICAgICAgICAnMzYnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0ljZWxhbmQgKMONc2xhbmQpJyxcbiAgICAgICAgICAnaXMnLFxuICAgICAgICAgICczNTQnLFxuICAgICAgICAgICcrLi4uIC4uLiAuLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdJbmRpYSAo4KSt4KS+4KSw4KSkKScsXG4gICAgICAgICAgJ2luJyxcbiAgICAgICAgICAnOTEnLFxuICAgICAgICAgICcrLi4gLi4uLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0luZG9uZXNpYScsXG4gICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAnNjInLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdJcmFuICjigKvYp9uM2LHYp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ2lyJyxcbiAgICAgICAgICAnOTgnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdJcmFxICjigKvYp9mE2LnYsdin2YLigKzigI4pJyxcbiAgICAgICAgICAnaXEnLFxuICAgICAgICAgICc5NjQnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSXJlbGFuZCcsXG4gICAgICAgICAgJ2llJyxcbiAgICAgICAgICAnMzUzJyxcbiAgICAgICAgICAnKy4uLiAuLiAuLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdJc3JhZWwgKOKAq9eZ16nXqNeQ15zigKzigI4pJyxcbiAgICAgICAgICAnaWwnLFxuICAgICAgICAgICc5NzInLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0l0YWx5IChJdGFsaWEpJyxcbiAgICAgICAgICAnaXQnLFxuICAgICAgICAgICczOScsXG4gICAgICAgICAgJysuLiAuLi4gLi4uLi4uJyxcbiAgICAgICAgICAwXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0phbWFpY2EnLFxuICAgICAgICAgICdqbScsXG4gICAgICAgICAgJzE4NzYnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0phcGFuICjml6XmnKwpJyxcbiAgICAgICAgICAnanAnLFxuICAgICAgICAgICc4MScsXG4gICAgICAgICAgJysuLiAuLi4gLi4gLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSm9yZGFuICjigKvYp9mE2KPYsdiv2YbigKzigI4pJyxcbiAgICAgICAgICAnam8nLFxuICAgICAgICAgICc5NjInLFxuICAgICAgICAgICcrLi4uLS4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdLYXpha2hzdGFuICjQmtCw0LfQsNGF0YHRgtCw0L0pJyxcbiAgICAgICAgICAna3onLFxuICAgICAgICAgICc3JyxcbiAgICAgICAgICAnKy4gLi4uIC4uLi0uLi0uLicsXG4gICAgICAgICAgMVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdLZW55YScsXG4gICAgICAgICAgJ2tlJyxcbiAgICAgICAgICAnMjU0JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdLaXJpYmF0aScsXG4gICAgICAgICAgJ2tpJyxcbiAgICAgICAgICAnNjg2JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0t1d2FpdCAo4oCr2KfZhNmD2YjZitiq4oCs4oCOKScsXG4gICAgICAgICAgJ2t3JyxcbiAgICAgICAgICAnOTY1JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0t5cmd5enN0YW4gKNCa0YvRgNCz0YvQt9GB0YLQsNC9KScsXG4gICAgICAgICAgJ2tnJyxcbiAgICAgICAgICAnOTk2JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTGFvcyAo4Lql4Lqy4LqnKScsXG4gICAgICAgICAgJ2xhJyxcbiAgICAgICAgICAnODU2JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMYXR2aWEgKExhdHZpamEpJyxcbiAgICAgICAgICAnbHYnLFxuICAgICAgICAgICczNzEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0xlYmFub24gKOKAq9mE2KjZhtin2YbigKzigI4pJyxcbiAgICAgICAgICAnbGInLFxuICAgICAgICAgICc5NjEnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTGVzb3RobycsXG4gICAgICAgICAgJ2xzJyxcbiAgICAgICAgICAnMjY2JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMaWJlcmlhJyxcbiAgICAgICAgICAnbHInLFxuICAgICAgICAgICcyMzEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0xpYnlhICjigKvZhNmK2KjZitin4oCs4oCOKScsXG4gICAgICAgICAgJ2x5JyxcbiAgICAgICAgICAnMjE4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMaWVjaHRlbnN0ZWluJyxcbiAgICAgICAgICAnbGknLFxuICAgICAgICAgICc0MjMnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTGl0aHVhbmlhIChMaWV0dXZhKScsXG4gICAgICAgICAgJ2x0JyxcbiAgICAgICAgICAnMzcwJyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMdXhlbWJvdXJnJyxcbiAgICAgICAgICAnbHUnLFxuICAgICAgICAgICczNTInLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWNhdSAo5r6z6ZaAKScsXG4gICAgICAgICAgJ21vJyxcbiAgICAgICAgICAnODUzJyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hY2Vkb25pYSAoRllST00pICjQnNCw0LrQtdC00L7QvdC40ZjQsCknLFxuICAgICAgICAgICdtaycsXG4gICAgICAgICAgJzM4OScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFkYWdhc2NhciAoTWFkYWdhc2lrYXJhKScsXG4gICAgICAgICAgJ21nJyxcbiAgICAgICAgICAnMjYxJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFsYXdpJyxcbiAgICAgICAgICAnbXcnLFxuICAgICAgICAgICcyNjUnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWxheXNpYScsXG4gICAgICAgICAgJ215JyxcbiAgICAgICAgICAnNjAnLFxuICAgICAgICAgICcrLi4gLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWxkaXZlcycsXG4gICAgICAgICAgJ212JyxcbiAgICAgICAgICAnOTYwJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFsaScsXG4gICAgICAgICAgJ21sJyxcbiAgICAgICAgICAnMjIzJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWx0YScsXG4gICAgICAgICAgJ210JyxcbiAgICAgICAgICAnMzU2JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hcnNoYWxsIElzbGFuZHMnLFxuICAgICAgICAgICdtaCcsXG4gICAgICAgICAgJzY5MicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hcnRpbmlxdWUnLFxuICAgICAgICAgICdtcScsXG4gICAgICAgICAgJzU5NicsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYXVyaXRhbmlhICjigKvZhdmI2LHZitiq2KfZhtmK2KfigKzigI4pJyxcbiAgICAgICAgICAnbXInLFxuICAgICAgICAgICcyMjInLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hdXJpdGl1cyAoTW9yaXMpJyxcbiAgICAgICAgICAnbXUnLFxuICAgICAgICAgICcyMzAnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNZXhpY28gKE3DqXhpY28pJyxcbiAgICAgICAgICAnbXgnLFxuICAgICAgICAgICc1MicsXG4gICAgICAgICAgJysuLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNaWNyb25lc2lhJyxcbiAgICAgICAgICAnZm0nLFxuICAgICAgICAgICc2OTEnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb2xkb3ZhIChSZXB1YmxpY2EgTW9sZG92YSknLFxuICAgICAgICAgICdtZCcsXG4gICAgICAgICAgJzM3MycsXG4gICAgICAgICAgJysuLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb25hY28nLFxuICAgICAgICAgICdtYycsXG4gICAgICAgICAgJzM3NycsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTW9uZ29saWEgKNCc0L7QvdCz0L7QuyknLFxuICAgICAgICAgICdtbicsXG4gICAgICAgICAgJzk3NicsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTW9udGVuZWdybyAoQ3JuYSBHb3JhKScsXG4gICAgICAgICAgJ21lJyxcbiAgICAgICAgICAnMzgyJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb250c2VycmF0JyxcbiAgICAgICAgICAnbXMnLFxuICAgICAgICAgICcxNjY0JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb3JvY2NvICjigKvYp9mE2YXYutix2KjigKzigI4pJyxcbiAgICAgICAgICAnbWEnLFxuICAgICAgICAgICcyMTInLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb3phbWJpcXVlIChNb8OnYW1iaXF1ZSknLFxuICAgICAgICAgICdteicsXG4gICAgICAgICAgJzI1OCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTXlhbm1hciAoQnVybWEpICjhgJnhgLzhgJThgLrhgJnhgKwpJyxcbiAgICAgICAgICAnbW0nLFxuICAgICAgICAgICc5NScsXG4gICAgICAgICAgJysuLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOYW1pYmlhIChOYW1pYmnDqyknLFxuICAgICAgICAgICduYScsXG4gICAgICAgICAgJzI2NCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05hdXJ1JyxcbiAgICAgICAgICAnbnInLFxuICAgICAgICAgICc2NzQnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOZXBhbCAo4KSo4KWH4KSq4KS+4KSyKScsXG4gICAgICAgICAgJ25wJyxcbiAgICAgICAgICAnOTc3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOZXRoZXJsYW5kcyAoTmVkZXJsYW5kKScsXG4gICAgICAgICAgJ25sJyxcbiAgICAgICAgICAnMzEnLFxuICAgICAgICAgICcrLi4gLi4gLi4uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05ldyBDYWxlZG9uaWEgKE5vdXZlbGxlLUNhbMOpZG9uaWUpJyxcbiAgICAgICAgICAnbmMnLFxuICAgICAgICAgICc2ODcnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05ldyBaZWFsYW5kJyxcbiAgICAgICAgICAnbnonLFxuICAgICAgICAgICc2NCcsXG4gICAgICAgICAgJysuLiAuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05pY2FyYWd1YScsXG4gICAgICAgICAgJ25pJyxcbiAgICAgICAgICAnNTA1JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05pZ2VyIChOaWphciknLFxuICAgICAgICAgICduZScsXG4gICAgICAgICAgJzIyNycsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmlnZXJpYScsXG4gICAgICAgICAgJ25nJyxcbiAgICAgICAgICAnMjM0JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05pdWUnLFxuICAgICAgICAgICdudScsXG4gICAgICAgICAgJzY4MycsXG4gICAgICAgICAgJysuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTm9yZm9sayBJc2xhbmQnLFxuICAgICAgICAgICduZicsXG4gICAgICAgICAgJzY3MicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTm9ydGggS29yZWEgKOyhsOyEoCDrr7zso7zso7zsnZgg7J2466+8IOqzte2ZlOq1rSknLFxuICAgICAgICAgICdrcCcsXG4gICAgICAgICAgJzg1MCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJyxcbiAgICAgICAgICAnbXAnLFxuICAgICAgICAgICcxNjcwJyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOb3J3YXkgKE5vcmdlKScsXG4gICAgICAgICAgJ25vJyxcbiAgICAgICAgICAnNDcnLFxuICAgICAgICAgICcrLi4gLi4uIC4uIC4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnT21hbiAo4oCr2LnZj9mF2KfZhuKArOKAjiknLFxuICAgICAgICAgICdvbScsXG4gICAgICAgICAgJzk2OCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGFraXN0YW4gKOKAq9m+2Kfaqdiz2KrYp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ3BrJyxcbiAgICAgICAgICAnOTInLFxuICAgICAgICAgICcrLi4gLi4uLS4uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BhbGF1JyxcbiAgICAgICAgICAncHcnLFxuICAgICAgICAgICc2ODAnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdQYWxlc3RpbmUgKOKAq9mB2YTYs9i32YrZhuKArOKAjiknLFxuICAgICAgICAgICdwcycsXG4gICAgICAgICAgJzk3MCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BhbmFtYSAoUGFuYW3DoSknLFxuICAgICAgICAgICdwYScsXG4gICAgICAgICAgJzUwNycsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BhcHVhIE5ldyBHdWluZWEnLFxuICAgICAgICAgICdwZycsXG4gICAgICAgICAgJzY3NScsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGFyYWd1YXknLFxuICAgICAgICAgICdweScsXG4gICAgICAgICAgJzU5NScsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BlcnUgKFBlcsO6KScsXG4gICAgICAgICAgJ3BlJyxcbiAgICAgICAgICAnNTEnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BoaWxpcHBpbmVzJyxcbiAgICAgICAgICAncGgnLFxuICAgICAgICAgICc2MycsXG4gICAgICAgICAgJysuLiAuLi4gLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUG9sYW5kIChQb2xza2EpJyxcbiAgICAgICAgICAncGwnLFxuICAgICAgICAgICc0OCcsXG4gICAgICAgICAgJysuLiAuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUG9ydHVnYWwnLFxuICAgICAgICAgICdwdCcsXG4gICAgICAgICAgJzM1MScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1B1ZXJ0byBSaWNvJyxcbiAgICAgICAgICAncHInLFxuICAgICAgICAgICcxJyxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICAnNzg3JyxcbiAgICAgICAgICAgICAnOTM5J1xuICAgICAgICAgIF1cbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUWF0YXIgKOKAq9mC2LfYseKArOKAjiknLFxuICAgICAgICAgICdxYScsXG4gICAgICAgICAgJzk3NCcsXG4gICAgICAgICAgJysuLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdSw6l1bmlvbiAoTGEgUsOpdW5pb24pJyxcbiAgICAgICAgICAncmUnLFxuICAgICAgICAgICcyNjInLFxuICAgICAgICAgICcrLi4uLS4uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1JvbWFuaWEgKFJvbcOibmlhKScsXG4gICAgICAgICAgJ3JvJyxcbiAgICAgICAgICAnNDAnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1J1c3NpYSAo0KDQvtGB0YHQuNGPKScsXG4gICAgICAgICAgJ3J1JyxcbiAgICAgICAgICAnNycsXG4gICAgICAgICAgJysuIC4uLiAuLi4tLi4tLi4nLFxuICAgICAgICAgIDBcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUndhbmRhJyxcbiAgICAgICAgICAncncnLFxuICAgICAgICAgICcyNTAnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYWludCBCYXJ0aMOpbGVteSAoU2FpbnQtQmFydGjDqWxlbXkpJyxcbiAgICAgICAgICAnYmwnLFxuICAgICAgICAgICc1OTAnLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIDFcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FpbnQgSGVsZW5hJyxcbiAgICAgICAgICAnc2gnLFxuICAgICAgICAgICcyOTAnXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsXG4gICAgICAgICAgJ2tuJyxcbiAgICAgICAgICAnMTg2OScsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FpbnQgTHVjaWEnLFxuICAgICAgICAgICdsYycsXG4gICAgICAgICAgJzE3NTgnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NhaW50IE1hcnRpbiAoU2FpbnQtTWFydGluIChwYXJ0aWUgZnJhbsOnYWlzZSkpJyxcbiAgICAgICAgICAnbWYnLFxuICAgICAgICAgICc1OTAnLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIDJcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbiAoU2FpbnQtUGllcnJlLWV0LU1pcXVlbG9uKScsXG4gICAgICAgICAgJ3BtJyxcbiAgICAgICAgICAnNTA4J1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gICAgICAgICAgJ3ZjJyxcbiAgICAgICAgICAnMTc4NCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2Ftb2EnLFxuICAgICAgICAgICd3cycsXG4gICAgICAgICAgJzY4NScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FuIE1hcmlubycsXG4gICAgICAgICAgJ3NtJyxcbiAgICAgICAgICAnMzc4JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBlIChTw6NvIFRvbcOpIGUgUHLDrW5jaXBlKScsXG4gICAgICAgICAgJ3N0JyxcbiAgICAgICAgICAnMjM5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2F1ZGkgQXJhYmlhICjigKvYp9mE2YXZhdmE2YPYqSDYp9mE2LnYsdio2YrYqSDYp9mE2LPYudmI2K/Zitip4oCs4oCOKScsXG4gICAgICAgICAgJ3NhJyxcbiAgICAgICAgICAnOTY2JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTZW5lZ2FsIChTw6luw6lnYWwpJyxcbiAgICAgICAgICAnc24nLFxuICAgICAgICAgICcyMjEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTZXJiaWEgKNCh0YDQsdC40ZjQsCknLFxuICAgICAgICAgICdycycsXG4gICAgICAgICAgJzM4MScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NleWNoZWxsZXMnLFxuICAgICAgICAgICdzYycsXG4gICAgICAgICAgJzI0OCcsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTaWVycmEgTGVvbmUnLFxuICAgICAgICAgICdzbCcsXG4gICAgICAgICAgJzIzMicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTaW5nYXBvcmUnLFxuICAgICAgICAgICdzZycsXG4gICAgICAgICAgJzY1JyxcbiAgICAgICAgICAnKy4uIC4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2ludCBNYWFydGVuJyxcbiAgICAgICAgICAnc3gnLFxuICAgICAgICAgICcxNzIxJyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTbG92YWtpYSAoU2xvdmVuc2tvKScsXG4gICAgICAgICAgJ3NrJyxcbiAgICAgICAgICAnNDIxJyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2xvdmVuaWEgKFNsb3ZlbmlqYSknLFxuICAgICAgICAgICdzaScsXG4gICAgICAgICAgJzM4NicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU29sb21vbiBJc2xhbmRzJyxcbiAgICAgICAgICAnc2InLFxuICAgICAgICAgICc2NzcnLFxuICAgICAgICAgICcrLi4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTb21hbGlhIChTb29tYWFsaXlhKScsXG4gICAgICAgICAgJ3NvJyxcbiAgICAgICAgICAnMjUyJyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NvdXRoIEFmcmljYScsXG4gICAgICAgICAgJ3phJyxcbiAgICAgICAgICAnMjcnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NvdXRoIEtvcmVhICjrjIDtlZzrr7zqta0pJyxcbiAgICAgICAgICAna3InLFxuICAgICAgICAgICc4MicsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU291dGggU3VkYW4gKOKAq9is2YbZiNioINin2YTYs9mI2K/Yp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ3NzJyxcbiAgICAgICAgICAnMjExJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3BhaW4gKEVzcGHDsWEpJyxcbiAgICAgICAgICAnZXMnLFxuICAgICAgICAgICczNCcsXG4gICAgICAgICAgJysuLiAuLi4gLi4uIC4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3JpIExhbmthICjgt4Hgt4rigI3gtrvgt5Mg4La94LaC4Laa4LeP4LeAKScsXG4gICAgICAgICAgJ2xrJyxcbiAgICAgICAgICAnOTQnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N1ZGFuICjigKvYp9mE2LPZiNiv2KfZhuKArOKAjiknLFxuICAgICAgICAgICdzZCcsXG4gICAgICAgICAgJzI0OScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N1cmluYW1lJyxcbiAgICAgICAgICAnc3InLFxuICAgICAgICAgICc1OTcnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N3YXppbGFuZCcsXG4gICAgICAgICAgJ3N6JyxcbiAgICAgICAgICAnMjY4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTd2VkZW4gKFN2ZXJpZ2UpJyxcbiAgICAgICAgICAnc2UnLFxuICAgICAgICAgICc0NicsXG4gICAgICAgICAgJysuLiAuLiAuLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N3aXR6ZXJsYW5kIChTY2h3ZWl6KScsXG4gICAgICAgICAgJ2NoJyxcbiAgICAgICAgICAnNDEnLFxuICAgICAgICAgICcrLi4gLi4gLi4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTeXJpYSAo4oCr2LPZiNix2YrYp+KArOKAjiknLFxuICAgICAgICAgICdzeScsXG4gICAgICAgICAgJzk2MycsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RhaXdhbiAo5Y+w54GjKScsXG4gICAgICAgICAgJ3R3JyxcbiAgICAgICAgICAnODg2JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RhamlraXN0YW4nLFxuICAgICAgICAgICd0aicsXG4gICAgICAgICAgJzk5MicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RhbnphbmlhJyxcbiAgICAgICAgICAndHonLFxuICAgICAgICAgICcyNTUnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUaGFpbGFuZCAo4LmE4LiX4LiiKScsXG4gICAgICAgICAgJ3RoJyxcbiAgICAgICAgICAnNjYnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVGltb3ItTGVzdGUnLFxuICAgICAgICAgICd0bCcsXG4gICAgICAgICAgJzY3MCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RvZ28nLFxuICAgICAgICAgICd0ZycsXG4gICAgICAgICAgJzIyOCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVG9rZWxhdScsXG4gICAgICAgICAgJ3RrJyxcbiAgICAgICAgICAnNjkwJyxcbiAgICAgICAgICAnKy4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUb25nYScsXG4gICAgICAgICAgJ3RvJyxcbiAgICAgICAgICAnNjc2JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gICAgICAgICAgJ3R0JyxcbiAgICAgICAgICAnMTg2OCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVHVuaXNpYSAo4oCr2KrZiNmG2LPigKzigI4pJyxcbiAgICAgICAgICAndG4nLFxuICAgICAgICAgICcyMTYnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1R1cmtleSAoVMO8cmtpeWUpJyxcbiAgICAgICAgICAndHInLFxuICAgICAgICAgICc5MCcsXG4gICAgICAgICAgJysuLiAuLi4gLi4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUdXJrbWVuaXN0YW4nLFxuICAgICAgICAgICd0bScsXG4gICAgICAgICAgJzk5MycsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzJyxcbiAgICAgICAgICAndGMnLFxuICAgICAgICAgICcxNjQ5JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUdXZhbHUnLFxuICAgICAgICAgICd0dicsXG4gICAgICAgICAgJzY4OCcsXG4gICAgICAgICAgJysuLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1UuUy4gVmlyZ2luIElzbGFuZHMnLFxuICAgICAgICAgICd2aScsXG4gICAgICAgICAgJzEzNDAnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1VnYW5kYScsXG4gICAgICAgICAgJ3VnJyxcbiAgICAgICAgICAnMjU2JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVWtyYWluZSAo0KPQutGA0LDRl9C90LApJyxcbiAgICAgICAgICAndWEnLFxuICAgICAgICAgICczODAnLFxuICAgICAgICAgICcrLi4uKC4uKS4uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMgKOKAq9in2YTYpdmF2KfYsdin2Kog2KfZhNi52LHYqNmK2Kkg2KfZhNmF2KrYrdiv2KnigKzigI4pJyxcbiAgICAgICAgICAnYWUnLFxuICAgICAgICAgICc5NzEnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICAgICAgICAnZ2InLFxuICAgICAgICAgICc0NCcsXG4gICAgICAgICAgJysuLiAuLi4uIC4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAgICAgJ3VzJyxcbiAgICAgICAgICAnMScsXG4gICAgICAgICAgJysuICguLi4pIC4uLi0uLi4uJyxcbiAgICAgICAgICAwXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1VydWd1YXknLFxuICAgICAgICAgICd1eScsXG4gICAgICAgICAgJzU5OCcsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1V6YmVraXN0YW4gKE/Ku3piZWtpc3RvbiknLFxuICAgICAgICAgICd1eicsXG4gICAgICAgICAgJzk5OCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1ZhbnVhdHUnLFxuICAgICAgICAgICd2dScsXG4gICAgICAgICAgJzY3OCcsXG4gICAgICAgICAgJysuLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1ZhdGljYW4gQ2l0eSAoQ2l0dMOgIGRlbCBWYXRpY2FubyknLFxuICAgICAgICAgICd2YScsXG4gICAgICAgICAgJzM5JyxcbiAgICAgICAgICAnKy4uIC4uIC4uLi4gLi4uLicsXG4gICAgICAgICAgMVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdWZW5lenVlbGEnLFxuICAgICAgICAgICd2ZScsXG4gICAgICAgICAgJzU4JyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVmlldG5hbSAoVmnhu4d0IE5hbSknLFxuICAgICAgICAgICd2bicsXG4gICAgICAgICAgJzg0JyxcbiAgICAgICAgICAnKy4uLS4uLS4uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdXYWxsaXMgYW5kIEZ1dHVuYScsXG4gICAgICAgICAgJ3dmJyxcbiAgICAgICAgICAnNjgxJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdZZW1lbiAo4oCr2KfZhNmK2YXZhuKArOKAjiknLFxuICAgICAgICAgICd5ZScsXG4gICAgICAgICAgJzk2NycsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdaYW1iaWEnLFxuICAgICAgICAgICd6bScsXG4gICAgICAgICAgJzI2MCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1ppbWJhYndlJyxcbiAgICAgICAgICAnencnLFxuICAgICAgICAgICcyNjMnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLi4uJ1xuICAgICAgIF1cbiAgIF07XG5cbi8vIHdlIHdpbGwgYnVpbGQgdGhpcyBpbiB0aGUgbG9vcCBiZWxvd1xudmFyIGFsbENvdW50cnlDb2RlcyA9IHt9O1xudmFyIGlzbzJMb29rdXAgPSB7fTtcbnZhciBhZGRDb3VudHJ5Q29kZSA9IGZ1bmN0aW9uIChpc28yLCBkaWFsQ29kZSwgcHJpb3JpdHkpIHtcbiAgICBpZiAoIShkaWFsQ29kZSBpbiBhbGxDb3VudHJ5Q29kZXMpKSB7XG4gICAgICAgIGFsbENvdW50cnlDb2Rlc1tkaWFsQ29kZV0gPSBbXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gcHJpb3JpdHkgfHwgMDtcbiAgICBhbGxDb3VudHJ5Q29kZXNbZGlhbENvZGVdW2luZGV4XSA9IGlzbzI7XG59O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGFsbENvdW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgLy8gY291bnRyaWVzXG4gICB2YXIgYyA9IGFsbENvdW50cmllc1tpXTtcbiAgIGFsbENvdW50cmllc1tpXSA9IHtcbiAgICAgICBuYW1lOiBjWzBdLFxuICAgICAgIGlzbzI6IGNbMV0sXG4gICAgICAgZGlhbENvZGU6IGNbMl0sXG4gICAgICAgcHJpb3JpdHk6IGNbNF0gfHwgMFxuICAgfTtcblxuICAgLy8gZm9ybWF0XG4gICBpZiAoY1szXSkge1xuICAgICAgIGFsbENvdW50cmllc1tpXS5mb3JtYXQgPSBjWzNdO1xuICAgfVxuXG4gICAvLyBhcmVhIGNvZGVzXG4gICBpZiAoY1s1XSkge1xuICAgICAgIGFsbENvdW50cmllc1tpXS5oYXNBcmVhQ29kZXMgPSB0cnVlO1xuICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY1s1XS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAvLyBmdWxsIGRpYWwgY29kZSBpcyBjb3VudHJ5IGNvZGUgKyBkaWFsIGNvZGVcbiAgICAgICAgICAgdmFyIGRpYWxDb2RlID0gY1syXSArIGNbNV1bal07XG4gICAgICAgICAgIGFkZENvdW50cnlDb2RlKGNbMV0sIGRpYWxDb2RlKTtcbiAgICAgICB9XG4gICB9XG4gICBpc28yTG9va3VwW2FsbENvdW50cmllc1tpXS5pc28yXSA9IGk7XG5cbiAgIC8vIGRpYWwgY29kZXNcbiAgIGFkZENvdW50cnlDb2RlKGNbMV0sIGNbMl0sIGNbNF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgICAgYWxsQ291bnRyaWVzOiBhbGxDb3VudHJpZXMsXG4gICAgICAgICAgIGlzbzJMb29rdXA6IGlzbzJMb29rdXAsXG4gICAgICAgICAgIGFsbENvdW50cnlDb2RlczogYWxsQ291bnRyeUNvZGVzXG4gICAgICAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVE9ETyAtIGZpeCB0aGUgb25seUNvbnRyaWVzIHByb3BzLiBDdXJyZW50bHkgZXhwZWN0cyB0aGF0IGFzIGFuIGFycmF5IG9mIGNvdW50cnkgb2JqZWN0LCBidXQgdXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBpbiBhcnJheSBvZiBjb3VudHJ5IGlzb3NcblxudmFyIHNvbWUgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9zb21lJyk7XG52YXIgZmluZFdoZXJlID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZmluZFdoZXJlJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vbWFwJyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZmlsdGVyJyk7XG52YXIgZmluZEluZGV4ID0gcmVxdWlyZSgnbG9kYXNoL2FycmF5L2ZpbmRJbmRleCcpO1xudmFyIGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2FycmF5L2ZpcnN0Jyk7XG52YXIgcmVzdCA9IHJlcXVpcmUoJ2xvZGFzaC9hcnJheS9yZXN0Jyk7XG52YXIgZGVib3VuY2UgPSByZXF1aXJlKCdsb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UnKTtcbnZhciBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoL2Z1bmN0aW9uL21lbW9pemUnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdsb2Rhc2gvb2JqZWN0L2Fzc2lnbicpO1xudmFyIGlzRXF1YWwgPSByZXF1aXJlKCdsb2Rhc2gvbGFuZy9pc0VxdWFsJyk7XG4vLyBpbXBvcnQgbG9kYXNoIHN0cmluZyBtZXRob2RzXG52YXIgdHJpbSA9IHJlcXVpcmUoJ2xvZGFzaC9zdHJpbmcvdHJpbScpO1xudmFyIHN0YXJ0c1dpdGggPSByZXF1aXJlKCdsb2Rhc2gvc3RyaW5nL3N0YXJ0c1dpdGgnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIG9uQ2xpY2tPdXRzaWRlID0gcmVxdWlyZSgncmVhY3Qtb25jbGlja291dHNpZGUnKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIGNvdW50cnlEYXRhID0gcmVxdWlyZSgnLi9jb3VudHJ5X2RhdGEuanMnKVxuLy8gdmFyIGNvdW50cnlEYXRhID0gcmVxdWlyZSgnY291bnRyeS10ZWxlcGhvbmUtZGF0YScpXG52YXIgYWxsQ291bnRyaWVzID0gY291bnRyeURhdGEuYWxsQ291bnRyaWVzO1xudmFyIGlzbzJMb29rdXAgPSBjb3VudHJ5RGF0YS5pc28yTG9va3VwO1xuXG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBpc01vZGVybkJyb3dzZXIgPSBCb29sZWFuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jykuc2V0U2VsZWN0aW9uUmFuZ2UpO1xufSBlbHNlIHtcbiAgdmFyIGlzTW9kZXJuQnJvd3NlciA9IHRydWU7XG59XG5cbnZhciBrZXlzID0ge1xuICAgICAgICBVUDogMzgsXG4gICAgICAgIERPV046IDQwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIExFRlQ6IDM3LFxuICAgICAgICBFTlRFUjogMTMsXG4gICAgICAgIEVTQzogMjcsXG4gICAgICAgIFBMVVM6IDQzLFxuICAgICAgICBBOiA2NSxcbiAgICAgICAgWjogOTAsXG4gICAgICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gaXNOdW1iZXJWYWxpZChpbnB1dE51bWJlcikge1xuICAgIHZhciBjb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG4gICAgcmV0dXJuIHNvbWUoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoKGlucHV0TnVtYmVyLCBjb3VudHJ5LmRpYWxDb2RlKSB8fCBzdGFydHNXaXRoKGNvdW50cnkuZGlhbENvZGUsIGlucHV0TnVtYmVyKTtcbiAgICB9KTtcbn1cblxuICBleHBvcnQgdmFyIFJlYWN0VGVsZXBob25lSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICB2YXIgcHJlZmVycmVkQ291bnRyaWVzID0gdGhpcy5wcm9wcy5wcmVmZXJyZWRDb3VudHJpZXMubWFwKFxuICAgICAgICAgICAgaXNvMiA9PiBpc28yTG9va3VwLmhhc093blByb3BlcnR5KGlzbzIpID8gYWxsQ291bnRyaWVzW2lzbzJMb29rdXBbaXNvMl1dIDogbnVsbFxuICAgICAgICApLmZpbHRlcih2YWwgPT4gdmFsICE9PSBudWxsKTtcblxuICAgICAgICByZXR1cm4gYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJlZmVycmVkQ291bnRyaWVzOiBwcmVmZXJyZWRDb3VudHJpZXMsXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZzogJycsXG4gICAgICAgICAgICAgICAgZnJlZXplU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWJvdW5jZWRRdWVyeVN0aW5nU2VhcmNoZXI6IGRlYm91bmNlKHRoaXMuc2VhcmNoQ291bnRyeSwgMzAwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMuX21hcFByb3BzVG9TdGF0ZSh0aGlzLnByb3BzKVxuICAgICAgICApO1xuICAgIH0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpbml0aWFsVmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGF1dG9Gb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgICBkZWZhdWx0Q291bnRyeTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25seUNvdW50cmllczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLm9iamVjdCksXG4gICAgICAgIHByZWZlcnJlZENvdW50cmllczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnN0cmluZyksXG4gICAgICAgIGNsYXNzTmFtZXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25FbnRlcktleVByZXNzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgcGF0dGVybjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9LFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogJycsXG4gICAgICAgICAgICBhdXRvRm9ybWF0OiB0cnVlLFxuICAgICAgICAgICAgb25seUNvdW50cmllczogYWxsQ291bnRyaWVzLFxuICAgICAgICAgICAgZGVmYXVsdENvdW50cnk6IGFsbENvdW50cmllc1swXS5pc28yLFxuICAgICAgICAgICAgaXNWYWxpZDogaXNOdW1iZXJWYWxpZCxcbiAgICAgICAgICAgIGZsYWdzSW1hZ2VQYXRoOiAnZmxhZ3MucG5nJyxcbiAgICAgICAgICAgIG9uRW50ZXJLZXlQcmVzczogZnVuY3Rpb24gKCkge30sXG4gICAgICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFtdLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcrMSAoNzAyKSAxMjMtNDU2NydcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldE51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyICE9PSAnKycgPyB0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlciA6ICcnO1xuICAgIH0sXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcigpO1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuXG4gICAgICAgIHRoaXMuX2N1cnNvclRvRW5kKHRydWUpO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlciwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFpc0VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHwgIWlzRXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKTtcbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fbWFwUHJvcHNUb1N0YXRlKG5leHRQcm9wcykpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24pO1xuICAgIH0sXG4gICAgc2Nyb2xsVG8oY291bnRyeSwgbWlkZGxlKSB7XG4gICAgICAgIGlmKCFjb3VudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udGFpbmVyID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmZsYWdEcm9wZG93bkxpc3QpO1xuXG4gICAgICAgIGlmKCFjb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIGNvbnRhaW5lck9mZnNldCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGNvbnRhaW5lclRvcCA9IGNvbnRhaW5lck9mZnNldC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckJvdHRvbSA9IGNvbnRhaW5lclRvcCArIGNvbnRhaW5lckhlaWdodDtcblxuICAgICAgICB2YXIgZWxlbWVudCA9IGNvdW50cnk7XG4gICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgZWxlbWVudFRvcCA9IGVsZW1lbnRPZmZzZXQudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgIHZhciBuZXdTY3JvbGxUb3AgPSBlbGVtZW50VG9wIC0gY29udGFpbmVyVG9wICsgY29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IChjb250YWluZXJIZWlnaHQgLyAyKSAtIChlbGVtZW50SGVpZ2h0IC8gMik7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCBjb250YWluZXJUb3ApIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCB1cFxuICAgICAgICAgICAgaWYgKG1pZGRsZSkge1xuICAgICAgICAgICAgICAgIG5ld1Njcm9sbFRvcCAtPSBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnRCb3R0b20gPiBjb250YWluZXJCb3R0b20pIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbCBkb3duXG4gICAgICAgICAgICBpZihtaWRkbGUpIHtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgKz0gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlaWdodERpZmZlcmVuY2UgPSBjb250YWluZXJIZWlnaHQgLSBlbGVtZW50SGVpZ2h0O1xuICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcCAtIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGZvcm1hdE51bWJlcih0ZXh0LCBwYXR0ZXJuKSB7XG4gICAgICAgIGlmKCF0ZXh0IHx8IHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJysnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGFsbCBzdHJpbmdzIHdpdGggbGVuZ3RoIGxlc3MgdGhhbiAzLCBqdXN0IHJldHVybiBpdCAoMSwgMiBldGMuKVxuICAgICAgICAvLyBhbHNvIHJldHVybiB0aGUgc2FtZSB0ZXh0IGlmIHRoZSBzZWxlY3RlZCBjb3VudHJ5IGhhcyBubyBmaXhlZCBmb3JtYXRcbiAgICAgICAgaWYoKHRleHQgJiYgdGV4dC5sZW5ndGggPCAyKSB8fCAhcGF0dGVybiB8fCAhdGhpcy5wcm9wcy5hdXRvRm9ybWF0KSB7XG4gICAgICAgICAgICByZXR1cm4gYCske3RleHR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRPYmplY3QgPSByZWR1Y2UocGF0dGVybiwgZnVuY3Rpb24oYWNjLCBjaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIGlmKGFjYy5yZW1haW5pbmdUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNoYXJhY3RlciAhPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVGV4dDogYWNjLmZvcm1hdHRlZFRleHQgKyBjaGFyYWN0ZXIsXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RleHQ6IGFjYy5yZW1haW5pbmdUZXh0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUZXh0OiBhY2MuZm9ybWF0dGVkVGV4dCArIGZpcnN0KGFjYy5yZW1haW5pbmdUZXh0KSxcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0OiByZXN0KGFjYy5yZW1haW5pbmdUZXh0KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSwge2Zvcm1hdHRlZFRleHQ6ICcnLCByZW1haW5pbmdUZXh0OiB0ZXh0LnNwbGl0KCcnKX0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkT2JqZWN0LmZvcm1hdHRlZFRleHQgKyBmb3JtYXR0ZWRPYmplY3QucmVtYWluaW5nVGV4dC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gcHV0IHRoZSBjdXJzb3IgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgKHVzdWFsbHkgYWZ0ZXIgYSBmb2N1cyBldmVudClcbiAgICBfY3Vyc29yVG9FbmQoc2tpcEZvY3VzKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMucmVmcy5udW1iZXJJbnB1dDtcbiAgICAgICAgaWYgKHNraXBGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5fZmlsbERpYWxDb2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgICAgICAgICBpZiAoaXNNb2Rlcm5Ccm93c2VyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IGlucHV0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShsZW4sIGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIG1lbW9pemUgcmVzdWx0cyBiYXNlZCBvbiB0aGUgZmlyc3QgNS82IGNoYXJhY3RlcnMuIFRoYXQgaXMgYWxsIHRoYXQgbWF0dGVyc1xuICAgIGd1ZXNzU2VsZWN0ZWRDb3VudHJ5OiBtZW1vaXplKGZ1bmN0aW9uKGlucHV0TnVtYmVyKSB7XG4gICAgICAgIHZhciBzZWNvbmRCZXN0R3Vlc3MgPSBmaW5kV2hlcmUoYWxsQ291bnRyaWVzLCB7aXNvMjogdGhpcy5wcm9wcy5kZWZhdWx0Q291bnRyeX0pIHx8IHRoaXMucHJvcHMub25seUNvdW50cmllc1swXTtcbiAgICAgICAgaWYodHJpbShpbnB1dE51bWJlcikgIT09ICcnKSB7XG4gICAgICAgICAgICB2YXIgYmVzdEd1ZXNzID0gcmVkdWNlKHRoaXMucHJvcHMub25seUNvdW50cmllcywgZnVuY3Rpb24oc2VsZWN0ZWRDb3VudHJ5LCBjb3VudHJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3RhcnRzV2l0aChpbnB1dE51bWJlciwgY291bnRyeS5kaWFsQ29kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnRyeS5kaWFsQ29kZS5sZW5ndGggPiBzZWxlY3RlZENvdW50cnkuZGlhbENvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA9PT0gc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCAmJiBjb3VudHJ5LnByaW9yaXR5IDwgc2VsZWN0ZWRDb3VudHJ5LnByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZENvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7ZGlhbENvZGU6ICcnLCBwcmlvcml0eTogMTAwMDF9LCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmRCZXN0R3Vlc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZighYmVzdEd1ZXNzLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmRCZXN0R3Vlc3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmVzdEd1ZXNzO1xuICAgIH0pLFxuICAgIGdldEVsZW1lbnQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1tgZmxhZ19ub18ke2luZGV4fWBdKTtcbiAgICB9LFxuICAgIGhhbmRsZUZsYWdEcm9wZG93bkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZWVkIHRvIHB1dCB0aGUgaGlnaGxpZ2h0IG9uIHRoZSBjdXJyZW50IHNlbGVjdGVkIGNvdW50cnkgaWYgdGhlIGRyb3Bkb3duIGlzIGdvaW5nIHRvIG9wZW4gdXBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93RHJvcERvd246ICF0aGlzLnN0YXRlLnNob3dEcm9wRG93bixcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnk6IGZpbmRXaGVyZSh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KSxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogZmluZEluZGV4KHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmNvbmNhdCh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMpLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSlcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gb25seSBuZWVkIHRvIHNjcm9vbCBpZiB0aGUgZHJvcGRvd24gbGlzdCBpcyBhbGl2ZVxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93RHJvcERvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuZ2V0RWxlbWVudCh0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleCArIHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSAnKycsIG5ld1NlbGVjdGVkQ291bnRyeSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LCBmcmVlemVTZWxlY3Rpb24gPSB0aGlzLnN0YXRlLmZyZWV6ZVNlbGVjdGlvbjtcblxuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXMgdGhlIHNhbWUgYXMgYmVmb3JlLCBtdXN0IGJlIHNvbWUgc3BlY2lhbCBrZXkgbGlrZSBlbnRlciBldGMuXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGllIGhhY2tcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBlbnRlcmluZyB0aGUgbnVtYmVyIGluIG5ldyBmb3JtYXQsIGxldHMgY2hlY2sgaWYgdGhlIGRpYWwgY29kZSBub3cgbWF0Y2hlcyBzb21lIG90aGVyIGNvdW50cnlcbiAgICAgICAgICAgIHZhciBpbnB1dE51bWJlciA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuXG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHNlbmQgdGhlIHdob2xlIG51bWJlciB0byBndWVzcyB0aGUgY291bnRyeS4uLiBvbmx5IHRoZSBmaXJzdCA2IGNoYXJhY3RlcnMgYXJlIGVub3VnaFxuICAgICAgICAgICAgLy8gdGhlIGd1ZXNzIGNvdW50cnkgZnVuY3Rpb24gY2FuIHRoZW4gdXNlIG1lbW9pemF0aW9uIG11Y2ggbW9yZSBlZmZlY3RpdmVseSBzaW5jZSB0aGUgc2V0IG9mIGlucHV0IGl0IGdldHMgaGFzIGRyYXN0aWNhbGx5IHJlZHVjZWRcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLmZyZWV6ZVNlbGVjdGlvbiB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZS5sZW5ndGggPiBpbnB1dE51bWJlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZENvdW50cnkgPSB0aGlzLmd1ZXNzU2VsZWN0ZWRDb3VudHJ5KGlucHV0TnVtYmVyLnN1YnN0cmluZygwLCA2KSk7XG4gICAgICAgICAgICAgICAgZnJlZXplU2VsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsZXQgdXMgcmVtb3ZlIGFsbCBub24gbnVtZXJhbHMgZnJvbSB0aGUgaW5wdXRcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlciA9IHRoaXMuZm9ybWF0TnVtYmVyKGlucHV0TnVtYmVyLCBuZXdTZWxlY3RlZENvdW50cnkuZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYXJldFBvc2l0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB2YXIgb2xkRm9ybWF0dGVkVGV4dCA9IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyO1xuICAgICAgICB2YXIgZGlmZiA9IGZvcm1hdHRlZE51bWJlci5sZW5ndGggLSBvbGRGb3JtYXR0ZWRUZXh0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlcjogZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgICAgICAgZnJlZXplU2VsZWN0aW9uOiBmcmVlemVTZWxlY3Rpb24sXG4gICAgICAgICAgICBzZWxlY3RlZENvdW50cnk6IG5ld1NlbGVjdGVkQ291bnRyeS5kaWFsQ29kZS5sZW5ndGggPiAwID8gbmV3U2VsZWN0ZWRDb3VudHJ5IDogdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnlcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihpc01vZGVybkJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICBpZigoY2FyZXRQb3NpdGlvbiA9PT0gMSkgJiYgKGZvcm1hdHRlZE51bWJlci5sZW5ndGggPT09IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihkaWZmID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJldFBvc2l0aW9uID0gY2FyZXRQb3NpdGlvbiAtIGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY2FyZXRQb3NpdGlvbiA+IDAgJiYgb2xkRm9ybWF0dGVkVGV4dC5sZW5ndGggPj0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMubnVtYmVySW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3NpdGlvbiwgY2FyZXRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlciwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0sXG4gICAgaGFuZGxlSW5wdXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Ryb3BEb3duOiBmYWxzZX0pO1xuICAgIH0sXG4gICAgaGFuZGxlRmxhZ0l0ZW1DbGljayhjb3VudHJ5KSB7XG4gICAgICAgIHZhciBjdXJyZW50U2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnk7XG4gICAgICAgIHZhciBuZXh0U2VsZWN0ZWRDb3VudHJ5ID0gZmluZFdoZXJlKHRoaXMucHJvcHMub25seUNvdW50cmllcywgY291bnRyeSk7XG5cbiAgICAgICAgLy8gdGlueSBvcHRpbWl6YXRpb25cbiAgICAgICAgaWYoY3VycmVudFNlbGVjdGVkQ291bnRyeS5pc28yICE9PSBuZXh0U2VsZWN0ZWRDb3VudHJ5LmlzbzIpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gLSB0aGUgYmVsb3cgcmVwbGFjZW1lbnQgaXMgYSBidWcuIEl0IHdpbGwgcmVwbGFjZSBzdHVmZiBmcm9tIG1pZGRsZSB0b29cbiAgICAgICAgICAgIHZhciBuZXdOdW1iZXIgPSB0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlci5yZXBsYWNlKGN1cnJlbnRTZWxlY3RlZENvdW50cnkuZGlhbENvZGUsIG5leHRTZWxlY3RlZENvdW50cnkuZGlhbENvZGUpO1xuICAgICAgICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IHRoaXMuZm9ybWF0TnVtYmVyKG5ld051bWJlci5yZXBsYWNlKC9cXEQvZywgJycpLCBuZXh0U2VsZWN0ZWRDb3VudHJ5LmZvcm1hdCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dEcm9wRG93bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5OiBuZXh0U2VsZWN0ZWRDb3VudHJ5LFxuICAgICAgICAgICAgICAgIGZyZWV6ZVNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWROdW1iZXI6IGZvcm1hdHRlZE51bWJlclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vyc29yVG9FbmQoKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZm9ybWF0dGVkTnVtYmVyLCBuZXh0U2VsZWN0ZWRDb3VudHJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RHJvcERvd246IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUlucHV0Rm9jdXMoKSB7XG4gICAgICAgIC8vIHRyaWdnZXIgcGFyZW50IGNvbXBvbmVudCdzIG9uRm9jdXMgaGFuZGxlclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5vbkZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXModGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1lciwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsbERpYWxDb2RlKCk7XG4gICAgfSxcbiAgICBfbWFwUHJvcHNUb1N0YXRlKHByb3BzKSB7XG4gICAgICAgIGxldCBpbnB1dE51bWJlcjtcblxuICAgICAgICBpZihwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIGlucHV0TnVtYmVyID0gcHJvcHMuaW5pdGlhbFZhbHVlXG4gICAgICAgIH0gZWxzZSBpZihwcm9wcy5pbml0aWFsVmFsdWUgIT09IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgICAgaW5wdXROdW1iZXIgPSBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dE51bWJlciA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRDb3VudHJ5R3Vlc3MgPSB0aGlzLmd1ZXNzU2VsZWN0ZWRDb3VudHJ5KGlucHV0TnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRDb3VudHJ5R3Vlc3NJbmRleCA9IGZpbmRJbmRleChhbGxDb3VudHJpZXMsIHNlbGVjdGVkQ291bnRyeUd1ZXNzKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZE51bWJlciA9IHRoaXMuZm9ybWF0TnVtYmVyKFxuICAgICAgICAgICAgaW5wdXROdW1iZXIucmVwbGFjZSgvXFxEL2csICcnKSwgc2VsZWN0ZWRDb3VudHJ5R3Vlc3MgPyBzZWxlY3RlZENvdW50cnlHdWVzcy5mb3JtYXQgOiBudWxsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZENvdW50cnk6IHNlbGVjdGVkQ291bnRyeUd1ZXNzLFxuICAgICAgICAgICAgaGlnaGxpZ2h0Q291bnRyeUluZGV4OiBzZWxlY3RlZENvdW50cnlHdWVzc0luZGV4LFxuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiBmb3JtYXR0ZWROdW1iZXJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX2ZpbGxEaWFsQ29kZSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzIGJsYW5rLCBpbnNlcnQgZGlhbCBjb2RlIG9mIHRoZSBzZWxlY3RlZCBjb3VudHJ5XG4gICAgICAgIGlmKHRoaXMucmVmcy5udW1iZXJJbnB1dC52YWx1ZSA9PT0gJysnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtYXR0ZWROdW1iZXI6ICcrJyArIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9nZXRIaWdobGlnaHRDb3VudHJ5SW5kZXgoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGhhZCB0byB3cml0ZSBvd24gZnVuY3Rpb24gYmVjYXVzZSB1bmRlcnNjb3JlIGRvZXMgbm90IGhhdmUgZmluZEluZGV4LiBsb2Rhc2ggaGFzIGl0XG4gICAgICAgIHZhciBoaWdobGlnaHRDb3VudHJ5SW5kZXggPSB0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleCArIGRpcmVjdGlvbjtcblxuICAgICAgICBpZihoaWdobGlnaHRDb3VudHJ5SW5kZXggPCAwXG4gICAgICAgICAgICB8fCBoaWdobGlnaHRDb3VudHJ5SW5kZXggPj0gKHRoaXMucHJvcHMub25seUNvdW50cmllcy5sZW5ndGggKyB0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaGlnaGxpZ2h0Q291bnRyeUluZGV4IC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodENvdW50cnlJbmRleDtcbiAgICB9LFxuICAgIC8vIG1lbW9pemUgc2VhcmNoIHJlc3VsdHMuLi4gY2FjaGluZyBhbGwgdGhlIHdheVxuICAgIF9zZWFyY2hDb3VudHJ5OiBtZW1vaXplKGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIGlmKCFxdWVyeVN0cmluZyB8fCBxdWVyeVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IGluY2x1ZGUgdGhlIHByZWZlcnJlZCBjb3VudHJpZXMgaW4gc2VhcmNoXG4gICAgICAgIHZhciBwcm9iYWJsZUNvdW50cmllcyA9IGZpbHRlcih0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydHNXaXRoKGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLCBxdWVyeVN0cmluZy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9iYWJsZUNvdW50cmllc1swXTtcbiAgICB9KSxcbiAgICBzZWFyY2hDb3VudHJ5KCkge1xuICAgICAgICBjb25zdCBwcm9iYWJsZUNhbmRpZGF0ZSA9IHRoaXMuX3NlYXJjaENvdW50cnkodGhpcy5zdGF0ZS5xdWVyeVN0cmluZykgfHwgdGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzWzBdO1xuICAgICAgICBjb25zdCBwcm9iYWJsZUNhbmRpZGF0ZUluZGV4ID0gZmluZEluZGV4KHRoaXMucHJvcHMub25seUNvdW50cmllcywgcHJvYmFibGVDYW5kaWRhdGUpICsgdGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoO1xuY29uc29sZS5sb2coJ3Byb2JhYmxlQ2FuZGlkYXRlSW5kZXgnLCBwcm9iYWJsZUNhbmRpZGF0ZUluZGV4KVxuICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuZ2V0RWxlbWVudChwcm9iYWJsZUNhbmRpZGF0ZUluZGV4KSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBxdWVyeVN0cmluZzogJycsXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IHByb2JhYmxlQ2FuZGlkYXRlSW5kZXhcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnNob3dEcm9wRG93bikge1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZSBoYWNrXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gX21vdmVIaWdobGlnaHQoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IHNlbGYuX2dldEhpZ2hsaWdodENvdW50cnlJbmRleChkaXJlY3Rpb24pXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxUbyhzZWxmLmdldEVsZW1lbnQoc2VsZi5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXgpLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICBjYXNlIGtleXMuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgX21vdmVIaWdobGlnaHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlzLlVQOlxuICAgICAgICAgICAgICAgICAgICBfbW92ZUhpZ2hsaWdodCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlzLkVOVEVSOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VudGVyIGtleScsIHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4LCB0aGlzLnByb3BzLm9ubHlDb3VudHJpZXNbdGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZsYWdJdGVtQ2xpY2sodGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMuY29uY2F0KHRoaXMucHJvcHMub25seUNvdW50cmllcylbdGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXhdLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlzLkVTQzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RHJvcERvd246IGZhbHNlfSwgdGhpcy5fY3Vyc29yVG9FbmQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZigoZXZlbnQud2hpY2ggPj0ga2V5cy5BICYmIGV2ZW50LndoaWNoIDw9IGtleXMuWikgfHwgZXZlbnQud2hpY2ggPT09IGtleXMuU1BBQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlTdHJpbmc6IHRoaXMuc3RhdGUucXVlcnlTdHJpbmcgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LndoaWNoKX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlYm91bmNlZFF1ZXJ5U3RpbmdTZWFyY2hlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dEtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYoZXZlbnQud2hpY2ggPT09IGtleXMuRU5URVIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25FbnRlcktleVByZXNzKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xuICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dEcm9wRG93bikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldENvdW50cnlEcm9wRG93bkxpc3QoKSB7XG4gICAgICAgIHZhciBjb3VudHJ5RHJvcERvd25MaXN0ID0gbWFwKHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmNvbmNhdCh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMpLCBmdW5jdGlvbihjb3VudHJ5LCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgY291bnRyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWQ6IGZpbmRJbmRleCh0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcywge2lzbzI6IGNvdW50cnkuaXNvMn0pID49IDAsXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleCA9PT0gaW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgaW5wdXRGbGFnQ2xhc3NlcyA9IGBmbGFnICR7Y291bnRyeS5pc28yfWA7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17YGZsYWdfbm9fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BmbGFnX25vXyR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1mbGFnLWtleT17YGZsYWdfbm9fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWRpYWwtY29kZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWNvdW50cnktY29kZT17Y291bnRyeS5pc28yfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZsYWdJdGVtQ2xpY2suYmluZCh0aGlzLCBjb3VudHJ5KX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbnB1dEZsYWdDbGFzc2VzfSBzdHlsZT17dGhpcy5nZXRGbGFnU3R5bGUoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjb3VudHJ5LW5hbWUnPntjb3VudHJ5Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RpYWwtY29kZSc+eycrJyArIGNvdW50cnkuZGlhbENvZGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBjb25zdCBkYXNoZWRMaSA9ICg8bGkga2V5PXtcImRhc2hlc1wifSBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz4pO1xuICAgICAgICAvLyBsZXQncyBpbnNlcnQgYSBkYXNoZWQgbGluZSBpbiBiZXR3ZWVuIHByZWZmZXJlZCBjb3VudHJpZXMgYW5kIHRoZSByZXN0XG4gICAgICAgIGNvdW50cnlEcm9wRG93bkxpc3Quc3BsaWNlKHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCwgMCwgZGFzaGVkTGkpO1xuXG4gICAgICAgIGNvbnN0IGRyb3BEb3duQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2NvdW50cnktbGlzdCc6IHRydWUsXG4gICAgICAgICAgICAnaGlkZSc6ICF0aGlzLnN0YXRlLnNob3dEcm9wRG93blxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bCByZWY9XCJmbGFnRHJvcGRvd25MaXN0XCIgY2xhc3NOYW1lPXtkcm9wRG93bkNsYXNzZXN9PlxuICAgICAgICAgICAgICAgIHtjb3VudHJ5RHJvcERvd25MaXN0fVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9LFxuICAgIGdldEZsYWdTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgICAgIGhlaWdodDogMTEsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnByb3BzLmZsYWdzSW1hZ2VQYXRofSlgXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dEJsdXIoKSB7XG4gICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5vbkJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIodGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGFycm93Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2Fycm93JzogdHJ1ZSxcbiAgICAgICAgICAgICd1cCc6IHRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaW5wdXRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnZm9ybS1jb250cm9sJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbnZhbGlkLW51bWJlcic6ICF0aGlzLnByb3BzLmlzVmFsaWQodGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIucmVwbGFjZSgvXFxEL2csICcnKSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZsYWdWaWV3Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2ZsYWctZHJvcGRvd24nOiB0cnVlLFxuICAgICAgICAgICAgJ29wZW4tZHJvcGRvd24nOiB0aGlzLnN0YXRlLnNob3dEcm9wRG93blxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaW5wdXRGbGFnQ2xhc3NlcyA9IGBmbGFnICR7dGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkuaXNvMn1gO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmVhY3QtdGVsLWlucHV0JywgdGhpcy5wcm9wcy5jbGFzc05hbWVzKX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUlucHV0Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUlucHV0Qmx1cn1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUlucHV0S2V5RG93bn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICByZWY9XCJudW1iZXJJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSd0ZWwnXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm49e3RoaXMucHJvcHMucGF0dGVybn1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuc3RhdGUucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfS8+XG4gICAgICAgICAgICAgICAgPGRpdiByZWY9J2ZsYWdEcm9wRG93bkJ1dHRvbicgY2xhc3NOYW1lPXtmbGFnVmlld0NsYXNzZXN9IG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlkb3dufSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPSdzZWxlY3RlZEZsYWcnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmxhZ0Ryb3Bkb3duQ2xpY2t9IGNsYXNzTmFtZT0nc2VsZWN0ZWQtZmxhZycgdGl0bGU9e2Ake3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5Lm5hbWV9OiArICR7dGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkuZGlhbENvZGV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aW5wdXRGbGFnQ2xhc3Nlc30gc3R5bGU9e3RoaXMuZ2V0RmxhZ1N0eWxlKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthcnJvd0NsYXNzZXN9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RHJvcERvd24gPyB0aGlzLmdldENvdW50cnlEcm9wRG93bkxpc3QoKSA6ICcnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlKFJlYWN0VGVsZXBob25lSW5wdXQpO1xuIl19
