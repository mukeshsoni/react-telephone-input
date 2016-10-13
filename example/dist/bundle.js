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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2Ryb3AuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2ZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvYXJyYXkvZmlyc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2xhc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L3Jlc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vZmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2ZpbmQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vZmluZFdoZXJlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9yZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vc29tZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZGF0ZS9ub3cuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9mdW5jdGlvbi9tZW1vaXplLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL01hcENhY2hlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheUZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5UmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheVNvbWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Fzc2lnbldpdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VDYWxsYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNvcHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRmluZC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvck93bi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUdldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWwuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsRGVlcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzTWF0Y2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VNYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VSZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VTbGljZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVNvbWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jaGFyc0xlZnRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY2hhcnNSaWdodEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVBc3NpZ25lci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUVhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZpbmQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlUmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9lcXVhbEFycmF5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxCeVRhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxPYmplY3RzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9nZXRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2dldE1hdGNoRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNPYmplY3RMaWtlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc1NwYWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc1N0cmljdENvbXBhcmFibGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcERlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvbWFwR2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcFNldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvc2hpbUtleXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RyaW1tZWRMZWZ0SW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RyaW1tZWRSaWdodEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNFcXVhbC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzVHlwZWRBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL29iamVjdC9rZXlzSW4uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL29iamVjdC9wYWlycy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvc3RyaW5nL3N0YXJ0c1dpdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3N0cmluZy90cmltLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC91dGlsaXR5L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC91dGlsaXR5L3Byb3BlcnR5LmpzIiwiL1VzZXJzL211a2VzaHNvbmkvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LXRlbGVwaG9uZS1pbnB1dC9zcmMvY291bnRyeV9kYXRhLmpzIiwiL1VzZXJzL211a2VzaHNvbmkvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LXRlbGVwaG9uZS1pbnB1dC9zcmMvUmVhY3RUZWxlcGhvbmVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VTbGljZScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpY2Ugb2YgYGFycmF5YCB3aXRoIGBuYCBlbGVtZW50cyBkcm9wcGVkIGZyb20gdGhlIGJlZ2lubmluZy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW249MV0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBkcm9wLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGEgY2FsbGJhY2sgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZHJvcChbMSwgMiwgM10pO1xuICogLy8gPT4gWzIsIDNdXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbM11cbiAqXG4gKiBfLmRyb3AoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSwgMCk7XG4gKiAvLyA9PiBbMSwgMiwgM11cbiAqL1xuZnVuY3Rpb24gZHJvcChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwoYXJyYXksIG4sIGd1YXJkKSA6IG4gPT0gbnVsbCkge1xuICAgIG4gPSAxO1xuICB9XG4gIHJldHVybiBiYXNlU2xpY2UoYXJyYXksIG4gPCAwID8gMCA6IG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3A7XG4iLCJ2YXIgY3JlYXRlRmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlRmluZEluZGV4Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5maW5kYCBleGNlcHQgdGhhdCBpdCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3RcbiAqIGVsZW1lbnQgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKGNocikge1xuICogICByZXR1cm4gY2hyLnVzZXIgPT0gJ2Jhcm5leSc7XG4gKiB9KTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5maW5kSW5kZXgodXNlcnMsICdhY3RpdmUnLCBmYWxzZSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbnZhciBmaW5kSW5kZXggPSBjcmVhdGVGaW5kSW5kZXgoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kSW5kZXg7XG4iLCIvKipcbiAqIEdldHMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGhlYWRcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5maXJzdChbMSwgMiwgM10pO1xuICogLy8gPT4gMVxuICpcbiAqIF8uZmlyc3QoW10pO1xuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7XG4gIHJldHVybiBhcnJheSA/IGFycmF5WzBdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcnN0O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuIiwidmFyIGRyb3AgPSByZXF1aXJlKCcuL2Ryb3AnKTtcblxuLyoqXG4gKiBHZXRzIGFsbCBidXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIHRhaWxcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnJlc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IFsyLCAzXVxuICovXG5mdW5jdGlvbiByZXN0KGFycmF5KSB7XG4gIHJldHVybiBkcm9wKGFycmF5LCAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0O1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUZpbHRlcicpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmRcbiAqIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIHNlbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZmlsdGVyKFs0LCA1LCA2XSwgZnVuY3Rpb24obikge1xuICogICByZXR1cm4gbiAlIDIgPT0gMDtcbiAqIH0pO1xuICogLy8gPT4gWzQsIDZdXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5maWx0ZXIodXNlcnMsIHsgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9KSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5J11cbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5maWx0ZXIodXNlcnMsICdhY3RpdmUnLCBmYWxzZSksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnXVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCAnYWN0aXZlJyksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leSddXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlGaWx0ZXIgOiBiYXNlRmlsdGVyO1xuICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXI7XG4iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRWFjaCcpLFxuICAgIGNyZWF0ZUZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVGaW5kJyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmRcbiAqIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGRldGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxLCAgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsIGZ1bmN0aW9uKGNocikge1xuICogICByZXR1cm4gY2hyLmFnZSA8IDQwO1xuICogfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucmVzdWx0KF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAncGViYmxlcydcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucmVzdWx0KF8uZmluZCh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKSwgJ3VzZXInKTtcbiAqIC8vID0+ICdmcmVkJ1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsICdhY3RpdmUnKSwgJ3VzZXInKTtcbiAqIC8vID0+ICdiYXJuZXknXG4gKi9cbnZhciBmaW5kID0gY3JlYXRlRmluZChiYXNlRWFjaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZDtcbiIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VNYXRjaGVzJyksXG4gICAgZmluZCA9IHJlcXVpcmUoJy4vZmluZCcpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCBhbmQgdGhlXG4gKiBzb3VyY2Ugb2JqZWN0LCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBoYXMgZXF1aXZhbGVudCBwcm9wZXJ0eVxuICogdmFsdWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBib29sZWFucywgYERhdGVgIG9iamVjdHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBhbmQgc3RyaW5ncy4gT2JqZWN0cyBhcmUgY29tcGFyZWQgYnlcbiAqIHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGb3IgY29tcGFyaW5nIGEgc2luZ2xlXG4gKiBvd24gb3IgaW5oZXJpdGVkIHByb3BlcnR5IHZhbHVlIHNlZSBgXy5tYXRjaGVzUHJvcGVydHlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH1cbiAqIF07XG4gKlxuICogXy5yZXN1bHQoXy5maW5kV2hlcmUodXNlcnMsIHsgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9KSwgJ3VzZXInKTtcbiAqIC8vID0+ICdiYXJuZXknXG4gKlxuICogXy5yZXN1bHQoXy5maW5kV2hlcmUodXNlcnMsIHsgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnZnJlZCdcbiAqL1xuZnVuY3Rpb24gZmluZFdoZXJlKGNvbGxlY3Rpb24sIHNvdXJjZSkge1xuICByZXR1cm4gZmluZChjb2xsZWN0aW9uLCBiYXNlTWF0Y2hlcyhzb3VyY2UpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kV2hlcmU7XG4iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheU1hcCcpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlTWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIGJ5IHJ1bm5pbmcgZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJvdWdoXG4gKiBgaXRlcmF0ZWVgLiBUaGUgYGl0ZXJhdGVlYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNhbGxiYWNrYCwgYGNodW5rYCwgYGNsb25lYCwgYGNyZWF0ZWAsIGBjdXJyeWAsIGBjdXJyeVJpZ2h0YCxcbiAqIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsIGBmaWxsYCwgYGZsYXR0ZW5gLCBgaW52ZXJ0YCwgYG1heGAsIGBtaW5gLFxuICogYHBhcnNlSW50YCwgYHNsaWNlYCwgYHNvcnRCeWAsIGB0YWtlYCwgYHRha2VSaWdodGAsIGB0ZW1wbGF0ZWAsIGB0cmltYCxcbiAqIGB0cmltTGVmdGAsIGB0cmltUmlnaHRgLCBgdHJ1bmNgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHNhbXBsZWAsIGBzb21lYCxcbiAqIGBzdW1gLCBgdW5pcWAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBjb2xsZWN0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiB0aW1lc1RocmVlKG4pIHtcbiAqICAgcmV0dXJuIG4gKiAzO1xuICogfVxuICpcbiAqIF8ubWFwKFsxLCAyXSwgdGltZXNUaHJlZSk7XG4gKiAvLyA9PiBbMywgNl1cbiAqXG4gKiBfLm1hcCh7ICdhJzogMSwgJ2InOiAyIH0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLm1hcCh1c2VycywgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5JywgJ2ZyZWQnXVxuICovXG5mdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlNYXAgOiBiYXNlTWFwO1xuICBpdGVyYXRlZSA9IGJhc2VDYWxsYmFjayhpdGVyYXRlZSwgdGhpc0FyZywgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheVJlZHVjZScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUVhY2gnKSxcbiAgICBjcmVhdGVSZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVSZWR1Y2UnKTtcblxuLyoqXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJvdWdoIGBpdGVyYXRlZWAsIHdoZXJlIGVhY2ggc3VjY2Vzc2l2ZVxuICogaW52b2NhdGlvbiBpcyBzdXBwbGllZCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cy4gSWYgYGFjY3VtdWxhdG9yYFxuICogaXMgbm90IHByb3ZpZGVkIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYCBpcyB1c2VkIGFzIHRoZSBpbml0aWFsXG4gKiB2YWx1ZS4gVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6XG4gKiAoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8ucmVkdWNlYCwgYF8ucmVkdWNlUmlnaHRgLCBhbmQgYF8udHJhbnNmb3JtYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhc3NpZ25gLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYHNvcnRCeUFsbGAsXG4gKiBhbmQgYHNvcnRCeU9yZGVyYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgZm9sZGwsIGluamVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnJlZHVjZShbMSwgMl0sIGZ1bmN0aW9uKHRvdGFsLCBuKSB7XG4gKiAgIHJldHVybiB0b3RhbCArIG47XG4gKiB9KTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnJlZHVjZSh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKHJlc3VsdCwgbiwga2V5KSB7XG4gKiAgIHJlc3VsdFtrZXldID0gbiAqIDM7XG4gKiAgIHJldHVybiByZXN1bHQ7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICdhJzogMywgJ2InOiA2IH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xudmFyIHJlZHVjZSA9IGNyZWF0ZVJlZHVjZShhcnJheVJlZHVjZSwgYmFzZUVhY2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZTtcbiIsInZhciBhcnJheVNvbWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheVNvbWUnKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlU29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VTb21lJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yICoqYW55KiogZWxlbWVudCBvZiBgY29sbGVjdGlvbmAuXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhcyBzb29uIGFzIGl0IGZpbmRzIGEgcGFzc2luZyB2YWx1ZSBhbmQgZG9lcyBub3QgaXRlcmF0ZVxuICogb3ZlciB0aGUgZW50aXJlIGNvbGxlY3Rpb24uIFRoZSBwcmVkaWNhdGUgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkXG4gKiB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgYW55XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYHByZWRpY2F0ZWAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNvbWUoW251bGwsIDAsICd5ZXMnLCBmYWxzZV0sIEJvb2xlYW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzYCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uc29tZSh1c2VycywgeyAndXNlcic6ICdiYXJuZXknLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5zb21lKHVzZXJzLCAnYWN0aXZlJywgZmFsc2UpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnNvbWUodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gc29tZShjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlTb21lIDogYmFzZVNvbWU7XG4gIGlmICh0aGlzQXJnICYmIGlzSXRlcmF0ZWVDYWxsKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykpIHtcbiAgICBwcmVkaWNhdGUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT0gJ2Z1bmN0aW9uJyB8fCB0aGlzQXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgfVxuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvbWU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gZ2V0TmF0aXZlKERhdGUsICdub3cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBVbml4IGVwb2NoXG4gKiAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IERhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBsb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBmdW5jdGlvbiB0byBiZSBpbnZva2VkXG4gKi9cbnZhciBub3cgPSBuYXRpdmVOb3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4uL2RhdGUvbm93Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGludm9jYXRpb25zLiBQcm92aWRlIGFuIG9wdGlvbnMgb2JqZWN0IHRvIGluZGljYXRlIHRoYXQgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3RcbiAqIGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXMgaW52b2tlZFxuICogb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBpc1xuICogaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwOi8vZHJ1cGFsbW90aW9uLmNvbS9hcnRpY2xlL2RlYm91bmNlLWFuZC10aHJvdHRsZS12aXN1YWwtZXhwbGFuYXRpb24pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmVcbiAqICBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nXG4gKiAgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eFxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBpbnZva2UgYHNlbmRNYWlsYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzXG4gKiBqUXVlcnkoJyNwb3N0Ym94Jykub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBlbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzXG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwge1xuICogICAnbWF4V2FpdCc6IDEwMDBcbiAqIH0pKTtcbiAqXG4gKiAvLyBjYW5jZWwgYSBkZWJvdW5jZWQgY2FsbFxuICogdmFyIHRvZG9DaGFuZ2VzID0gXy5kZWJvdW5jZShiYXRjaExvZywgMTAwMCk7XG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMudG9kbywgdG9kb0NoYW5nZXMpO1xuICpcbiAqIE9iamVjdC5vYnNlcnZlKG1vZGVscywgZnVuY3Rpb24oY2hhbmdlcykge1xuICogICBpZiAoXy5maW5kKGNoYW5nZXMsIHsgJ3VzZXInOiAndG9kbycsICd0eXBlJzogJ2RlbGV0ZSd9KSkge1xuICogICAgIHRvZG9DaGFuZ2VzLmNhbmNlbCgpO1xuICogICB9XG4gKiB9LCBbJ2RlbGV0ZSddKTtcbiAqXG4gKiAvLyAuLi5hdCBzb21lIHBvaW50IGBtb2RlbHMudG9kb2AgaXMgY2hhbmdlZFxuICogbW9kZWxzLnRvZG8uY29tcGxldGVkID0gdHJ1ZTtcbiAqXG4gKiAvLyAuLi5iZWZvcmUgMSBzZWNvbmQgaGFzIHBhc3NlZCBgbW9kZWxzLnRvZG9gIGlzIGRlbGV0ZWRcbiAqIC8vIHdoaWNoIGNhbmNlbHMgdGhlIGRlYm91bmNlZCBgdG9kb0NoYW5nZXNgIGNhbGxcbiAqIGRlbGV0ZSBtb2RlbHMudG9kbztcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgYXJncyxcbiAgICAgIG1heFRpbWVvdXRJZCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YW1wLFxuICAgICAgdGhpc0FyZyxcbiAgICAgIHRpbWVvdXRJZCxcbiAgICAgIHRyYWlsaW5nQ2FsbCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwLFxuICAgICAgbWF4V2FpdCA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB3YWl0IDwgMCA/IDAgOiAoK3dhaXQgfHwgMCk7XG4gIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgdmFyIGxlYWRpbmcgPSB0cnVlO1xuICAgIHRyYWlsaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4V2FpdCA9ICdtYXhXYWl0JyBpbiBvcHRpb25zICYmIG5hdGl2ZU1heCgrb3B0aW9ucy5tYXhXYWl0IHx8IDAsIHdhaXQpO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgIH1cbiAgICBsYXN0Q2FsbGVkID0gMDtcbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZShpc0NhbGxlZCwgaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfVxuICAgIG1heFRpbWVvdXRJZCA9IHRpbWVvdXRJZCA9IHRyYWlsaW5nQ2FsbCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93KCkgLSBzdGFtcCk7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGNvbXBsZXRlKHRyYWlsaW5nQ2FsbCwgbWF4VGltZW91dElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChkZWxheWVkLCByZW1haW5pbmcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heERlbGF5ZWQoKSB7XG4gICAgY29tcGxldGUodHJhaWxpbmcsIHRpbWVvdXRJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzdGFtcCA9IG5vdygpO1xuICAgIHRoaXNBcmcgPSB0aGlzO1xuICAgIHRyYWlsaW5nQ2FsbCA9IHRyYWlsaW5nICYmICh0aW1lb3V0SWQgfHwgIWxlYWRpbmcpO1xuXG4gICAgaWYgKG1heFdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgbGVhZGluZ0NhbGwgPSBsZWFkaW5nICYmICF0aW1lb3V0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWF4VGltZW91dElkICYmICFsZWFkaW5nKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSBtYXhXYWl0IC0gKHN0YW1wIC0gbGFzdENhbGxlZCksXG4gICAgICAgICAgaXNDYWxsZWQgPSByZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiBtYXhXYWl0O1xuXG4gICAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIG1heFRpbWVvdXRJZCA9IGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgbWF4VGltZW91dElkID0gc2V0VGltZW91dChtYXhEZWxheWVkLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgdGltZW91dElkKSB7XG4gICAgICB0aW1lb3V0SWQgPSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpbWVvdXRJZCAmJiB3YWl0ICE9PSBtYXhXYWl0KSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHdhaXQpO1xuICAgIH1cbiAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiAhdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyBjb2VyY2VkIHRvIGEgc3RyaW5nIGFuZCB1c2VkIGFzIHRoZVxuICogY2FjaGUga2V5LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemluZyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVwcGVyQ2FzZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcpIHtcbiAqICAgcmV0dXJuIHN0cmluZy50b1VwcGVyQ2FzZSgpO1xuICogfSk7XG4gKlxuICogdXBwZXJDYXNlKCdmcmVkJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqXG4gKiAvLyBtb2RpZnlpbmcgdGhlIHJlc3VsdCBjYWNoZVxuICogdXBwZXJDYXNlLmNhY2hlLnNldCgnZnJlZCcsICdCQVJORVknKTtcbiAqIHVwcGVyQ2FzZSgnZnJlZCcpO1xuICogLy8gPT4gJ0JBUk5FWSdcbiAqXG4gKiAvLyByZXBsYWNpbmcgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKiB2YXIgb3RoZXIgPSB7ICd1c2VyJzogJ2Jhcm5leScgfTtcbiAqIHZhciBpZGVudGl0eSA9IF8ubWVtb2l6ZShfLmlkZW50aXR5KTtcbiAqXG4gKiBpZGVudGl0eShvYmplY3QpO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJyB9XG4gKiBpZGVudGl0eShvdGhlcik7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICogdmFyIGlkZW50aXR5ID0gXy5tZW1vaXplKF8uaWRlbnRpdHkpO1xuICpcbiAqIGlkZW50aXR5KG9iamVjdCk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIGlkZW50aXR5KG90aGVyKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnYmFybmV5JyB9XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IG1lbW9pemUuQ2FjaGU7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCIvKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGVcbiAqIGNyZWF0ZWQgZnVuY3Rpb24gYW5kIGFyZ3VtZW50cyBmcm9tIGBzdGFydGAgYW5kIGJleW9uZCBwcm92aWRlZCBhcyBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0Z1bmN0aW9ucy9yZXN0X3BhcmFtZXRlcnMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNheSA9IF8ucmVzdFBhcmFtKGZ1bmN0aW9uKHdoYXQsIG5hbWVzKSB7XG4gKiAgIHJldHVybiB3aGF0ICsgJyAnICsgXy5pbml0aWFsKG5hbWVzKS5qb2luKCcsICcpICtcbiAqICAgICAoXy5zaXplKG5hbWVzKSA+IDEgPyAnLCAmICcgOiAnJykgKyBfLmxhc3QobmFtZXMpO1xuICogfSk7XG4gKlxuICogc2F5KCdoZWxsbycsICdmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJyk7XG4gKiAvLyA9PiAnaGVsbG8gZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnXG4gKi9cbmZ1bmN0aW9uIHJlc3RQYXJhbShmdW5jLCBzdGFydCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiAoK3N0YXJ0IHx8IDApLCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIHJlc3QgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3RbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgc3dpdGNoIChzdGFydCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIHJlc3QpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIHJlc3QpO1xuICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIHJlc3QpO1xuICAgIH1cbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHJlc3Q7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0UGFyYW07XG4iLCJ2YXIgbWFwRGVsZXRlID0gcmVxdWlyZSgnLi9tYXBEZWxldGUnKSxcbiAgICBtYXBHZXQgPSByZXF1aXJlKCcuL21hcEdldCcpLFxuICAgIG1hcEhhcyA9IHJlcXVpcmUoJy4vbWFwSGFzJyksXG4gICAgbWFwU2V0ID0gcmVxdWlyZSgnLi9tYXBTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS92YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG5hbWUgQ2FjaGVcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemVcbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoKSB7XG4gIHRoaXMuX19kYXRhX18gPSB7fTtcbn1cblxuLy8gQWRkIGZ1bmN0aW9ucyB0byB0aGUgYE1hcGAgY2FjaGUuXG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcEdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbKytyZXNJbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEZyb21BcnJheV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgXG4gKiAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRGcm9tQXJyYXkgJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsInZhciBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uYXNzaWduYCBmb3IgY3VzdG9taXppbmcgYXNzaWduZWQgdmFsdWVzIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLCBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYHRoaXNgIGJpbmRpbmcgYGN1c3RvbWl6ZXJgXG4gKiBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYXNzaWduV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5cyhzb3VyY2UpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplcih2YWx1ZSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuXG4gICAgaWYgKChyZXN1bHQgPT09IHJlc3VsdCA/IChyZXN1bHQgIT09IHZhbHVlKSA6ICh2YWx1ZSA9PT0gdmFsdWUpKSB8fFxuICAgICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgb2JqZWN0W2tleV0gPSByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduV2l0aDtcbiIsInZhciBiYXNlQ29weSA9IHJlcXVpcmUoJy4vYmFzZUNvcHknKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXJndW1lbnQganVnZ2xpbmcsXG4gKiBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSA9PSBudWxsXG4gICAgPyBvYmplY3RcbiAgICA6IGJhc2VDb3B5KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4vYmluZENhbGxiYWNrJyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2FsbGJhY2tgIHdoaWNoIHN1cHBvcnRzIHNwZWNpZnlpbmcgdGhlXG4gKiBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFtmdW5jPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgY2FsbGJhY2suXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBiYXNlQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgZnVuYztcbiAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICAgID8gZnVuY1xuICAgICAgOiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpO1xuICB9XG4gIGlmIChmdW5jID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYmFzZU1hdGNoZXMoZnVuYyk7XG4gIH1cbiAgcmV0dXJuIHRoaXNBcmcgPT09IHVuZGVmaW5lZFxuICAgID8gcHJvcGVydHkoZnVuYylcbiAgICA6IGJhc2VNYXRjaGVzUHJvcGVydHkoZnVuYywgdGhpc0FyZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNhbGxiYWNrO1xuIiwiLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcbiIsInZhciBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdHxzdHJpbmd9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maWx0ZXJgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaWx0ZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRgLCBgXy5maW5kTGFzdGAsIGBfLmZpbmRLZXlgLCBhbmQgYF8uZmluZExhc3RLZXlgLFxuICogd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZywgd2hpY2ggaXRlcmF0ZXNcbiAqIG92ZXIgYGNvbGxlY3Rpb25gIHVzaW5nIHRoZSBwcm92aWRlZCBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2VhcmNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldEtleV0gU3BlY2lmeSByZXR1cm5pbmcgdGhlIGtleSBvZiB0aGUgZm91bmQgZWxlbWVudFxuICogIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZvdW5kIGVsZW1lbnQgb3IgaXRzIGtleSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmQoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBlYWNoRnVuYywgcmV0S2V5KSB7XG4gIHZhciByZXN1bHQ7XG4gIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQgPSByZXRLZXkgPyBrZXkgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvckluYCBhbmQgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBvYmplY3RgIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBpbnZva2luZyBgaXRlcmF0ZWVgIGZvclxuICogZWFjaCBwcm9wZXJ0eS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5XG4gKiByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0cmluZyBwYXRoc1xuICogYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhLZXldIFRoZSBrZXkgcmVwcmVzZW50YXRpb24gb2YgcGF0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXRoS2V5ICE9PSB1bmRlZmluZWQgJiYgcGF0aEtleSBpbiB0b09iamVjdChvYmplY3QpKSB7XG4gICAgcGF0aCA9IFtwYXRoS2V5XTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aXRob3V0IHN1cHBvcnQgZm9yIGB0aGlzYCBiaW5kaW5nXG4gKiBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3QodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiYXNlSXNFcXVhbCwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL2VxdWFsT2JqZWN0cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQj1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IGFycmF5VGFnLFxuICAgICAgb3RoVGFnID0gYXJyYXlUYWc7XG5cbiAgaWYgKCFvYmpJc0Fycikge1xuICAgIG9ialRhZyA9IG9ialRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbiAgICBpZiAob2JqVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG9ialRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG9ialRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG9iaklzQXJyID0gaXNUeXBlZEFycmF5KG9iamVjdCk7XG4gICAgfVxuICB9XG4gIGlmICghb3RoSXNBcnIpIHtcbiAgICBvdGhUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG90aGVyKTtcbiAgICBpZiAob3RoVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG90aFRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG90aFRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG90aElzQXJyID0gaXNUeXBlZEFycmF5KG90aGVyKTtcbiAgICB9XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiAhKG9iaklzQXJyIHx8IG9iaklzT2JqKSkge1xuICAgIHJldHVybiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZyk7XG4gIH1cbiAgaWYgKCFpc0xvb3NlKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCwgb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZGV0ZWN0aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMgc2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jSk8uXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdID09IG90aGVyO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgYG9iamVjdGAgYW5kIGBvdGhlcmAgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBzdGFja0EucHVzaChvYmplY3QpO1xuICBzdGFja0IucHVzaChvdGhlcik7XG5cbiAgdmFyIHJlc3VsdCA9IChvYmpJc0FyciA/IGVxdWFsQXJyYXlzIDogZXF1YWxPYmplY3RzKShvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcblxuICBzdGFja0EucG9wKCk7XG4gIHN0YWNrQi5wb3AoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWwnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXkpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIGN1c3RvbWl6ZXIsIHRydWUpIDogcmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9iYXNlRWFjaCcpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hcGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzXG4gKiBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gaXRlcmF0ZWUodmFsdWUsIGtleSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXA7XG4iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9nZXRNYXRjaERhdGEnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHZhciBrZXkgPSBtYXRjaERhdGFbMF1bMF0sXG4gICAgICAgIHZhbHVlID0gbWF0Y2hEYXRhWzBdWzFdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiB0b09iamVjdChvYmplY3QpKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9iYXNlR2V0JyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9iYXNlU2xpY2UnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi4vYXJyYXkvbGFzdCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkocGF0aCksXG4gICAgICBpc0NvbW1vbiA9IGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSksXG4gICAgICBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG5cbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIga2V5ID0gcGF0aEtleTtcbiAgICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICAgIGlmICgoaXNBcnIgfHwgIWlzQ29tbW9uKSAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICBvYmplY3QgPSBwYXRoLmxlbmd0aCA9PSAxID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIGJhc2VTbGljZShwYXRoLCAwLCAtMSkpO1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGtleSA9IGxhc3QocGF0aCk7XG4gICAgICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlXG4gICAgICA/IChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gb2JqZWN0KSlcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9iamVjdFtrZXldLCB1bmRlZmluZWQsIHRydWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9iYXNlR2V0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi90b1BhdGgnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgdmFyIHBhdGhLZXkgPSAocGF0aCArICcnKTtcbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVkdWNlYCBhbmQgYF8ucmVkdWNlUmlnaHRgIHdpdGhvdXQgc3VwcG9ydFxuICogZm9yIGNhbGxiYWNrIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLCB3aGljaCBpdGVyYXRlcyBvdmVyIGBjb2xsZWN0aW9uYFxuICogdXNpbmcgdGhlIHByb3ZpZGVkIGBlYWNoRnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBhY2N1bXVsYXRvciBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5pdEZyb21Db2xsZWN0aW9uIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IG9yIGxhc3QgZWxlbWVudFxuICogIG9mIGBjb2xsZWN0aW9uYCBhcyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYGNvbGxlY3Rpb25gLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlUmVkdWNlKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEZyb21Db2xsZWN0aW9uLCBlYWNoRnVuYykge1xuICBlYWNoRnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICBhY2N1bXVsYXRvciA9IGluaXRGcm9tQ29sbGVjdGlvblxuICAgICAgPyAoaW5pdEZyb21Db2xsZWN0aW9uID0gZmFsc2UsIHZhbHVlKVxuICAgICAgOiBpdGVyYXRlZShhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgfSk7XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVkdWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiAoK3N0YXJ0IHx8IDApO1xuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gbGVuZ3RoKSA/IGxlbmd0aCA6ICgrZW5kIHx8IDApO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9iYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNvbWVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlU29tZShjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICByZXN1bHQgPSBwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICByZXR1cm4gIXJlc3VsdDtcbiAgfSk7XG4gIHJldHVybiAhIXJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU29tZTtcbiIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG4iLCIvKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1MZWZ0YCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAqIG9mIGBzdHJpbmdgIHRoYXQgaXMgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICovXG5mdW5jdGlvbiBjaGFyc0xlZnRJbmRleChzdHJpbmcsIGNoYXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCAmJiBjaGFycy5pbmRleE9mKHN0cmluZy5jaGFyQXQoaW5kZXgpKSA+IC0xKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcnNMZWZ0SW5kZXg7XG4iLCIvKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1SaWdodGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBjaGFyYWN0ZXJcbiAqIG9mIGBzdHJpbmdgIHRoYXQgaXMgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKi9cbmZ1bmN0aW9uIGNoYXJzUmlnaHRJbmRleChzdHJpbmcsIGNoYXJzKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgY2hhcnMuaW5kZXhPZihzdHJpbmcuY2hhckF0KGluZGV4KSkgPiAtMSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJzUmlnaHRJbmRleDtcbiIsInZhciBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHJlc3RQYXJhbSA9IHJlcXVpcmUoJy4uL2Z1bmN0aW9uL3Jlc3RQYXJhbScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgXy5hc3NpZ25gLCBgXy5kZWZhdWx0c2AsIG9yIGBfLm1lcmdlYCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIHJlc3RQYXJhbShmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAyID8gc291cmNlc1tsZW5ndGggLSAyXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdGhpc0FyZyA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgNSk7XG4gICAgICBsZW5ndGggLT0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9taXplciA9IHR5cGVvZiB0aGlzQXJnID09ICdmdW5jdGlvbicgPyB0aGlzQXJnIDogdW5kZWZpbmVkO1xuICAgICAgbGVuZ3RoIC09IChjdXN0b21pemVyID8gMSA6IDApO1xuICAgIH1cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBiYXNlRWFjaGAgb3IgYGJhc2VFYWNoUmlnaHRgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUVhY2goZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbiA/IGdldExlbmd0aChjb2xsZWN0aW9uKSA6IDA7XG4gICAgaWYgKCFpc0xlbmd0aChsZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgaXRlcmFibGUgPSB0b09iamVjdChjb2xsZWN0aW9uKTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVbaW5kZXhdLCBpbmRleCwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUVhY2g7XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuIiwidmFyIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4vYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZUZpbmQgPSByZXF1aXJlKCcuL2Jhc2VGaW5kJyksXG4gICAgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vYmFzZUZpbmRJbmRleCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uZmluZGAgb3IgYF8uZmluZExhc3RgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgICBpZiAoaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgdmFyIGluZGV4ID0gYmFzZUZpbmRJbmRleChjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21SaWdodCk7XG4gICAgICByZXR1cm4gaW5kZXggPiAtMSA/IGNvbGxlY3Rpb25baW5kZXhdIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZUZpbmQoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBlYWNoRnVuYyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRmluZDtcbiIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL2Jhc2VGaW5kSW5kZXgnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uZmluZEluZGV4YCBvciBgXy5maW5kTGFzdEluZGV4YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmaW5kIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGaW5kSW5kZXgoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihhcnJheSwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgaWYgKCEoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgICByZXR1cm4gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tUmlnaHQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmRJbmRleDtcbiIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VSZWR1Y2UgPSByZXF1aXJlKCcuL2Jhc2VSZWR1Y2UnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGZvciBgXy5yZWR1Y2VgIG9yIGBfLnJlZHVjZVJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXJyYXlGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGVhY2ggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZShhcnJheUZ1bmMsIGVhY2hGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIHRoaXNBcmcpIHtcbiAgICB2YXIgaW5pdEZyb21BcnJheSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzO1xuICAgIHJldHVybiAodHlwZW9mIGl0ZXJhdGVlID09ICdmdW5jdGlvbicgJiYgdGhpc0FyZyA9PT0gdW5kZWZpbmVkICYmIGlzQXJyYXkoY29sbGVjdGlvbikpXG4gICAgICA/IGFycmF5RnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQXJyYXkpXG4gICAgICA6IGJhc2VSZWR1Y2UoY29sbGVjdGlvbiwgYmFzZUNhbGxiYWNrKGl0ZXJhdGVlLCB0aGlzQXJnLCA0KSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQXJyYXksIGVhY2hGdW5jKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVSZWR1Y2U7XG4iLCJ2YXIgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9hcnJheVNvbWUnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgYXJyYXlzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNMb29zZSAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBhcnJWYWx1ZSwgaXNMb29zZSA/IGFyclZhbHVlIDogb3RoVmFsdWUsIGluZGV4KSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoaXNMb29zZSkge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwiLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsLlxuICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cbiAgICAgIHJldHVybiAob2JqZWN0ICE9ICtvYmplY3QpXG4gICAgICAgID8gb3RoZXIgIT0gK290aGVyXG4gICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncyBwcmltaXRpdmVzIGFuZCBzdHJpbmdcbiAgICAgIC8vIG9iamVjdHMgYXMgZXF1YWwuIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpQcm9wcyA9IGtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0ga2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzTG9vc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNMb29zZSA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBza2lwQ3RvciA9IGlzTG9vc2U7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IG9ialZhbHVlLCBpc0xvb3NlPyBvYmpWYWx1ZSA6IG90aFZhbHVlLCBrZXkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikgOiByZXN1bHQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAoIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHBhaXJzID0gcmVxdWlyZSgnLi4vb2JqZWN0L3BhaXJzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBwYWlycyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICByZXN1bHRbbGVuZ3RoXVsyXSA9IGlzU3RyaWN0Q29tcGFyYWJsZShyZXN1bHRbbGVuZ3RoXVsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgaXNOYXRpdmUgPSByZXF1aXJlKCcuLi9sYW5nL2lzTmF0aXZlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KSkge1xuICAgIHZhciBvdGhlciA9IG9iamVjdFtpbmRleF07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICh2YWx1ZSA9PT0gb3RoZXIpIDogKG90aGVyICE9PSBvdGhlcik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcblxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICgodHlwZSA9PSAnc3RyaW5nJyAmJiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpKSB8fCB0eXBlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXN1bHQgPSAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpO1xuICByZXR1cm4gcmVzdWx0IHx8IChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiB0b09iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsIi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGB0cmltbWVkTGVmdEluZGV4YCBhbmQgYHRyaW1tZWRSaWdodEluZGV4YCB0byBkZXRlcm1pbmUgaWYgYVxuICogY2hhcmFjdGVyIGNvZGUgaXMgd2hpdGVzcGFjZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJDb2RlIFRoZSBjaGFyYWN0ZXIgY29kZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBjaGFyQ29kZWAgaXMgd2hpdGVzcGFjZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1NwYWNlKGNoYXJDb2RlKSB7XG4gIHJldHVybiAoKGNoYXJDb2RlIDw9IDE2MCAmJiAoY2hhckNvZGUgPj0gOSAmJiBjaGFyQ29kZSA8PSAxMykgfHwgY2hhckNvZGUgPT0gMzIgfHwgY2hhckNvZGUgPT0gMTYwKSB8fCBjaGFyQ29kZSA9PSA1NzYwIHx8IGNoYXJDb2RlID09IDYxNTggfHxcbiAgICAoY2hhckNvZGUgPj0gODE5MiAmJiAoY2hhckNvZGUgPD0gODIwMiB8fCBjaGFyQ29kZSA9PSA4MjMyIHx8IGNoYXJDb2RlID09IDgyMzMgfHwgY2hhckNvZGUgPT0gODIzOSB8fCBjaGFyQ29kZSA9PSA4Mjg3IHx8IGNoYXJDb2RlID09IDEyMjg4IHx8IGNoYXJDb2RlID09IDY1Mjc5KSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3BhY2U7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplLkNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIGNhY2hlZCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2FjaGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBHZXQoa2V5KSB7XG4gIHJldHVybiBrZXkgPT0gJ19fcHJvdG9fXycgPyB1bmRlZmluZWQgOiB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwR2V0O1xuIiwiLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgY2FjaGVkIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcEhhcyhrZXkpIHtcbiAgcmV0dXJuIGtleSAhPSAnX19wcm90b19fJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX19kYXRhX18sIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwSGFzO1xuIiwiLyoqXG4gKiBTZXRzIGB2YWx1ZWAgdG8gYGtleWAgb2YgdGhlIGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemUuQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gbWFwU2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSAhPSAnX19wcm90b19fJykge1xuICAgIHRoaXMuX19kYXRhX19ba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFNldDtcbiIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIG9iamVjdCBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IE9iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PYmplY3Q7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG4iLCJ2YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4vaXNTcGFjZScpO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1MZWZ0YCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRMZWZ0SW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCAmJiBpc1NwYWNlKHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkTGVmdEluZGV4O1xuIiwidmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuL2lzU3BhY2UnKTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltUmlnaHRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRSaWdodEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIGlzU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRSaWdodEluZGV4O1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlSXNFcXVhbCcpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2JpbmRDYWxsYmFjaycpO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuIElmIGBjdXN0b21pemVyYCBpcyBwcm92aWRlZCBpdCdzIGludm9rZWQgdG8gY29tcGFyZSB2YWx1ZXMuXG4gKiBJZiBgY3VzdG9taXplcmAgcmV0dXJucyBgdW5kZWZpbmVkYCBjb21wYXJpc29ucyBhcmUgaGFuZGxlZCBieSB0aGUgbWV0aG9kXG4gKiBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHVwIHRvXG4gKiB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgb3RoZXIgWywgaW5kZXh8a2V5XSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGJvb2xlYW5zLCBgRGF0ZWAgb2JqZWN0cyxcbiAqIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsIGFuZCBzdHJpbmdzLiBPYmplY3RzIGFyZSBjb21wYXJlZCBieVxuICogdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NIG5vZGVzXG4gKiBhcmUgKipub3QqKiBzdXBwb3J0ZWQuIFByb3ZpZGUgYSBjdXN0b21pemVyIGZ1bmN0aW9uIHRvIGV4dGVuZCBzdXBwb3J0XG4gKiBmb3IgY29tcGFyaW5nIG90aGVyIHZhbHVlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGVxXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSB2YWx1ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY3VzdG9taXplcmAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICogdmFyIG90aGVyID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIG9iamVjdCA9PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIC8vIHVzaW5nIGEgY3VzdG9taXplciBjYWxsYmFja1xuICogdmFyIGFycmF5ID0gWydoZWxsbycsICdnb29kYnllJ107XG4gKiB2YXIgb3RoZXIgPSBbJ2hpJywgJ2dvb2RieWUnXTtcbiAqXG4gKiBfLmlzRXF1YWwoYXJyYXksIG90aGVyLCBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAqICAgaWYgKF8uZXZlcnkoW3ZhbHVlLCBvdGhlcl0sIFJlZ0V4cC5wcm90b3R5cGUudGVzdCwgL15oKD86aXxlbGxvKSQvKSkge1xuICogICAgIHJldHVybiB0cnVlO1xuICogICB9XG4gKiB9KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIHRoaXNBcmcpIHtcbiAgY3VzdG9taXplciA9IHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicgPyBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgMykgOiB1bmRlZmluZWQ7XG4gIHZhciByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcih2YWx1ZSwgb3RoZXIpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBjdXN0b21pemVyKSA6ICEhcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwidmFyIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPSB0eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPSB0eXBlZEFycmF5VGFnc1ttYXBUYWddID1cbnR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID1cbnR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzZXRUYWddID1cbnR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPSB0eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29ialRvU3RyaW5nLmNhbGwodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXNzaWduV2l0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Fzc2lnbldpdGgnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUFzc2lnbicpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlQXNzaWduZXInKTtcblxuLyoqXG4gKiBBc3NpZ25zIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdChzKSB0byB0aGUgZGVzdGluYXRpb25cbiAqIG9iamVjdC4gU3Vic2VxdWVudCBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICogSWYgYGN1c3RvbWl6ZXJgIGlzIHByb3ZpZGVkIGl0J3MgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIGZpdmUgYXJndW1lbnRzOlxuICogKG9iamVjdFZhbHVlLCBzb3VyY2VWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAgYW5kIGlzIGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QuYXNzaWduKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGV4dGVuZFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGN1c3RvbWl6ZXJgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5hc3NpZ24oeyAndXNlcic6ICdiYXJuZXknIH0sIHsgJ2FnZSc6IDQwIH0sIHsgJ3VzZXInOiAnZnJlZCcgfSk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnLCAnYWdlJzogNDAgfVxuICpcbiAqIC8vIHVzaW5nIGEgY3VzdG9taXplciBjYWxsYmFja1xuICogdmFyIGRlZmF1bHRzID0gXy5wYXJ0aWFsUmlnaHQoXy5hc3NpZ24sIGZ1bmN0aW9uKHZhbHVlLCBvdGhlcikge1xuICogICByZXR1cm4gXy5pc1VuZGVmaW5lZCh2YWx1ZSkgPyBvdGhlciA6IHZhbHVlO1xuICogfSk7XG4gKlxuICogZGVmYXVsdHMoeyAndXNlcic6ICdiYXJuZXknIH0sIHsgJ2FnZSc6IDM2IH0sIHsgJ3VzZXInOiAnZnJlZCcgfSk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiB9XG4gKi9cbnZhciBhc3NpZ24gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcikge1xuICByZXR1cm4gY3VzdG9taXplclxuICAgID8gYXNzaWduV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcilcbiAgICA6IGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBzaGltS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NoaW1LZXlzJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciBgb2JqZWN0YCxcbiAqIGUuZy4gYFtba2V5MSwgdmFsdWUxXSwgW2tleTIsIHZhbHVlMl1dYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhaXJzKHsgJ2Jhcm5leSc6IDM2LCAnZnJlZCc6IDQwIH0pO1xuICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHBhaXJzKG9iamVjdCkge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpcnM7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIHN0YXJ0cyB3aXRoIHRoZSBnaXZlbiB0YXJnZXQgc3RyaW5nLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldF0gVGhlIHN0cmluZyB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IFtwb3NpdGlvbj0wXSBUaGUgcG9zaXRpb24gdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHN0cmluZ2Agc3RhcnRzIHdpdGggYHRhcmdldGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydHNXaXRoKCdhYmMnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uc3RhcnRzV2l0aCgnYWJjJywgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5zdGFydHNXaXRoKCdhYmMnLCAnYicsIDEpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0cmluZywgdGFyZ2V0LCBwb3NpdGlvbikge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcG9zaXRpb24gPSBwb3NpdGlvbiA9PSBudWxsXG4gICAgPyAwXG4gICAgOiBuYXRpdmVNaW4ocG9zaXRpb24gPCAwID8gMCA6ICgrcG9zaXRpb24gfHwgMCksIHN0cmluZy5sZW5ndGgpO1xuXG4gIHJldHVybiBzdHJpbmcubGFzdEluZGV4T2YodGFyZ2V0LCBwb3NpdGlvbikgPT0gcG9zaXRpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRzV2l0aDtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKSxcbiAgICBjaGFyc0xlZnRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoYXJzTGVmdEluZGV4JyksXG4gICAgY2hhcnNSaWdodEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hhcnNSaWdodEluZGV4JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHRyaW1tZWRMZWZ0SW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90cmltbWVkTGVmdEluZGV4JyksXG4gICAgdHJpbW1lZFJpZ2h0SW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90cmltbWVkUmlnaHRJbmRleCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSBvciBzcGVjaWZpZWQgY2hhcmFjdGVycyBmcm9tIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byB0cmltLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjaGFycz13aGl0ZXNwYWNlXSBUaGUgY2hhcmFjdGVycyB0byB0cmltLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGEgY2FsbGJhY2sgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50cmltKCcgIGFiYyAgJyk7XG4gKiAvLyA9PiAnYWJjJ1xuICpcbiAqIF8udHJpbSgnLV8tYWJjLV8tJywgJ18tJyk7XG4gKiAvLyA9PiAnYWJjJ1xuICpcbiAqIF8ubWFwKFsnICBmb28gICcsICcgIGJhciAgJ10sIF8udHJpbSk7XG4gKiAvLyA9PiBbJ2ZvbycsICdiYXInXVxuICovXG5mdW5jdGlvbiB0cmltKHN0cmluZywgY2hhcnMsIGd1YXJkKSB7XG4gIHZhciB2YWx1ZSA9IHN0cmluZztcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIGlmICghc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuICBpZiAoZ3VhcmQgPyBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgY2hhcnMsIGd1YXJkKSA6IGNoYXJzID09IG51bGwpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNsaWNlKHRyaW1tZWRMZWZ0SW5kZXgoc3RyaW5nKSwgdHJpbW1lZFJpZ2h0SW5kZXgoc3RyaW5nKSArIDEpO1xuICB9XG4gIGNoYXJzID0gKGNoYXJzICsgJycpO1xuICByZXR1cm4gc3RyaW5nLnNsaWNlKGNoYXJzTGVmdEluZGV4KHN0cmluZywgY2hhcnMpLCBjaGFyc1JpZ2h0SW5kZXgoc3RyaW5nLCBjaGFycykgKyAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIGF0IGBwYXRoYCBvbiBhXG4gKiBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IHsgJ2MnOiAyIH0gfSB9LFxuICogICB7ICdhJzogeyAnYic6IHsgJ2MnOiAxIH0gfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYi5jJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5wbHVjayhfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJywgJ2MnXSkpLCAnYS5iLmMnKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eShwYXRoKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFsbENvdW50cmllcyA9IFtcbiAgICAgICBbXG4gICAgICAgICAgJ0FmZ2hhbmlzdGFuICjigKvYp9mB2LrYp9mG2LPYqtin2YbigKzigI4pJyxcbiAgICAgICAgICAnYWYnLFxuICAgICAgICAgICc5MycsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQWxiYW5pYSAoU2hxaXDDq3JpKScsXG4gICAgICAgICAgJ2FsJyxcbiAgICAgICAgICAnMzU1JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQWxnZXJpYSAo4oCr2KfZhNis2LLYp9im2LHigKzigI4pJyxcbiAgICAgICAgICAnZHonLFxuICAgICAgICAgICcyMTMnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBbWVyaWNhbiBTYW1vYScsXG4gICAgICAgICAgJ2FzJyxcbiAgICAgICAgICAnMTY4NCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQW5kb3JyYScsXG4gICAgICAgICAgJ2FkJyxcbiAgICAgICAgICAnMzc2JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBbmdvbGEnLFxuICAgICAgICAgICdhbycsXG4gICAgICAgICAgJzI0NCcsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0FuZ3VpbGxhJyxcbiAgICAgICAgICAnYWknLFxuICAgICAgICAgICcxMjY0JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgICAgICAgICAnYWcnLFxuICAgICAgICAgICcxMjY4JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBcmdlbnRpbmEnLFxuICAgICAgICAgICdhcicsXG4gICAgICAgICAgJzU0JyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQXJtZW5pYSAo1YDVodW11aHVvdW/1aHVtiknLFxuICAgICAgICAgICdhbScsXG4gICAgICAgICAgJzM3NCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQXJ1YmEnLFxuICAgICAgICAgICdhdycsXG4gICAgICAgICAgJzI5NycsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0F1c3RyYWxpYScsXG4gICAgICAgICAgJ2F1JyxcbiAgICAgICAgICAnNjEnLFxuICAgICAgICAgICcrLi4gLi4uIC4uLiAuLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0F1c3RyaWEgKMOWc3RlcnJlaWNoKScsXG4gICAgICAgICAgJ2F0JyxcbiAgICAgICAgICAnNDMnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdBemVyYmFpamFuIChBesmZcmJheWNhbiknLFxuICAgICAgICAgICdheicsXG4gICAgICAgICAgJzk5NCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCYWhhbWFzJyxcbiAgICAgICAgICAnYnMnLFxuICAgICAgICAgICcxMjQyJyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCYWhyYWluICjigKvYp9mE2KjYrdix2YrZhuKArOKAjiknLFxuICAgICAgICAgICdiaCcsXG4gICAgICAgICAgJzk3MycsXG4gICAgICAgICAgJysuLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCYW5nbGFkZXNoICjgpqzgpr7gpoLgprLgpr7gpqbgp4fgprYpJyxcbiAgICAgICAgICAnYmQnLFxuICAgICAgICAgICc4ODAnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JhcmJhZG9zJyxcbiAgICAgICAgICAnYmInLFxuICAgICAgICAgICcxMjQ2JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCZWxhcnVzICjQkdC10LvQsNGA0YPRgdGMKScsXG4gICAgICAgICAgJ2J5JyxcbiAgICAgICAgICAnMzc1JyxcbiAgICAgICAgICAnKy4uLiguLikuLi4tLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JlbGdpdW0gKEJlbGdpw6spJyxcbiAgICAgICAgICAnYmUnLFxuICAgICAgICAgICczMicsXG4gICAgICAgICAgJysuLiAuLi4gLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JlbGl6ZScsXG4gICAgICAgICAgJ2J6JyxcbiAgICAgICAgICAnNTAxJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmVuaW4gKELDqW5pbiknLFxuICAgICAgICAgICdiaicsXG4gICAgICAgICAgJzIyOScsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmVybXVkYScsXG4gICAgICAgICAgJ2JtJyxcbiAgICAgICAgICAnMTQ0MScsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQmh1dGFuICjgvaDgvZbgvrLgvbTgvYIpJyxcbiAgICAgICAgICAnYnQnLFxuICAgICAgICAgICc5NzUnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQm9saXZpYScsXG4gICAgICAgICAgJ2JvJyxcbiAgICAgICAgICAnNTkxJyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCb3NuaWEgYW5kIEhlcnplZ292aW5hICjQkdC+0YHQvdCwINC4INCl0LXRgNGG0LXQs9C+0LLQuNC90LApJyxcbiAgICAgICAgICAnYmEnLFxuICAgICAgICAgICczODcnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JvdHN3YW5hJyxcbiAgICAgICAgICAnYncnLFxuICAgICAgICAgICcyNjcnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JyYXppbCAoQnJhc2lsKScsXG4gICAgICAgICAgJ2JyJyxcbiAgICAgICAgICAnNTUnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgICAgICAgICdpbycsXG4gICAgICAgICAgJzI0NicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JyaXRpc2ggVmlyZ2luIElzbGFuZHMnLFxuICAgICAgICAgICd2ZycsXG4gICAgICAgICAgJzEyODQnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0JydW5laScsXG4gICAgICAgICAgJ2JuJyxcbiAgICAgICAgICAnNjczJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQnVsZ2FyaWEgKNCR0YrQu9Cz0LDRgNC40Y8pJyxcbiAgICAgICAgICAnYmcnLFxuICAgICAgICAgICczNTknLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdCdXJraW5hIEZhc28nLFxuICAgICAgICAgICdiZicsXG4gICAgICAgICAgJzIyNicsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQnVydW5kaSAoVWJ1cnVuZGkpJyxcbiAgICAgICAgICAnYmknLFxuICAgICAgICAgICcyNTcnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NhbWJvZGlhICjhnoDhnpjhn5LhnpbhnrvhnofhnrYpJyxcbiAgICAgICAgICAna2gnLFxuICAgICAgICAgICc4NTUnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NhbWVyb29uIChDYW1lcm91biknLFxuICAgICAgICAgICdjbScsXG4gICAgICAgICAgJzIzNycsXG4gICAgICAgICAgJysuLi4tLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDYW5hZGEnLFxuICAgICAgICAgICdjYScsXG4gICAgICAgICAgJzEnLFxuICAgICAgICAgICcrLiAoLi4uKSAuLi4tLi4uLicsXG4gICAgICAgICAgMSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAgJzIwNCcsXG4gICAgICAgICAgICAgJzIzNicsXG4gICAgICAgICAgICAgJzI0OScsXG4gICAgICAgICAgICAgJzI1MCcsXG4gICAgICAgICAgICAgJzI4OScsXG4gICAgICAgICAgICAgJzMwNicsXG4gICAgICAgICAgICAgJzM0MycsXG4gICAgICAgICAgICAgJzM2NScsXG4gICAgICAgICAgICAgJzM4NycsXG4gICAgICAgICAgICAgJzQwMycsXG4gICAgICAgICAgICAgJzQxNicsXG4gICAgICAgICAgICAgJzQxOCcsXG4gICAgICAgICAgICAgJzQzMScsXG4gICAgICAgICAgICAgJzQzNycsXG4gICAgICAgICAgICAgJzQzOCcsXG4gICAgICAgICAgICAgJzQ1MCcsXG4gICAgICAgICAgICAgJzUwNicsXG4gICAgICAgICAgICAgJzUxNCcsXG4gICAgICAgICAgICAgJzUxOScsXG4gICAgICAgICAgICAgJzU0OCcsXG4gICAgICAgICAgICAgJzU3OScsXG4gICAgICAgICAgICAgJzU4MScsXG4gICAgICAgICAgICAgJzU4NycsXG4gICAgICAgICAgICAgJzYwNCcsXG4gICAgICAgICAgICAgJzYxMycsXG4gICAgICAgICAgICAgJzYzOScsXG4gICAgICAgICAgICAgJzY0NycsXG4gICAgICAgICAgICAgJzY3MicsXG4gICAgICAgICAgICAgJzcwNScsXG4gICAgICAgICAgICAgJzcwOScsXG4gICAgICAgICAgICAgJzc0MicsXG4gICAgICAgICAgICAgJzc3OCcsXG4gICAgICAgICAgICAgJzc4MCcsXG4gICAgICAgICAgICAgJzc4MicsXG4gICAgICAgICAgICAgJzgwNycsXG4gICAgICAgICAgICAgJzgxOScsXG4gICAgICAgICAgICAgJzgyNScsXG4gICAgICAgICAgICAgJzg2NycsXG4gICAgICAgICAgICAgJzg3MycsXG4gICAgICAgICAgICAgJzkwMicsXG4gICAgICAgICAgICAgJzkwNSdcbiAgICAgICAgICBdXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NhcGUgVmVyZGUgKEthYnUgVmVyZGkpJyxcbiAgICAgICAgICAnY3YnLFxuICAgICAgICAgICcyMzgnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ2FyaWJiZWFuIE5ldGhlcmxhbmRzJyxcbiAgICAgICAgICAnYnEnLFxuICAgICAgICAgICc1OTknLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJyxcbiAgICAgICAgICAxXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NheW1hbiBJc2xhbmRzJyxcbiAgICAgICAgICAna3knLFxuICAgICAgICAgICcxMzQ1JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKFLDqXB1YmxpcXVlIGNlbnRyYWZyaWNhaW5lKScsXG4gICAgICAgICAgJ2NmJyxcbiAgICAgICAgICAnMjM2JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDaGFkIChUY2hhZCknLFxuICAgICAgICAgICd0ZCcsXG4gICAgICAgICAgJzIzNScsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NoaWxlJyxcbiAgICAgICAgICAnY2wnLFxuICAgICAgICAgICc1NicsXG4gICAgICAgICAgJysuLi0uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ2hpbmEgKOS4reWbvSknLFxuICAgICAgICAgICdjbicsXG4gICAgICAgICAgJzg2JyxcbiAgICAgICAgICAnKy4uIC4uLS4uLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDb2xvbWJpYScsXG4gICAgICAgICAgJ2NvJyxcbiAgICAgICAgICAnNTcnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDb21vcm9zICjigKvYrNiy2LEg2KfZhNmC2YXYseKArOKAjiknLFxuICAgICAgICAgICdrbScsXG4gICAgICAgICAgJzI2OScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NvbmdvIChEUkMpIChKYW1odXJpIHlhIEtpZGVtb2tyYXNpYSB5YSBLb25nbyknLFxuICAgICAgICAgICdjZCcsXG4gICAgICAgICAgJzI0MycsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0NvbmdvIChSZXB1YmxpYykgKENvbmdvLUJyYXp6YXZpbGxlKScsXG4gICAgICAgICAgJ2NnJyxcbiAgICAgICAgICAnMjQyJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ29vayBJc2xhbmRzJyxcbiAgICAgICAgICAnY2snLFxuICAgICAgICAgICc2ODInLFxuICAgICAgICAgICcrLi4uLS4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ29zdGEgUmljYScsXG4gICAgICAgICAgJ2NyJyxcbiAgICAgICAgICAnNTA2JyxcbiAgICAgICAgICAnKy4uLiAuLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0PDtHRlIGTigJlJdm9pcmUnLFxuICAgICAgICAgICdjaScsXG4gICAgICAgICAgJzIyNScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnQ3JvYXRpYSAoSHJ2YXRza2EpJyxcbiAgICAgICAgICAnaHInLFxuICAgICAgICAgICczODUnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0N1YmEnLFxuICAgICAgICAgICdjdScsXG4gICAgICAgICAgJzUzJyxcbiAgICAgICAgICAnKy4uLS4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0N1cmHDp2FvJyxcbiAgICAgICAgICAnY3cnLFxuICAgICAgICAgICc1OTknLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJyxcbiAgICAgICAgICAwXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0N5cHJ1cyAozprPjc+Az4HOv8+CKScsXG4gICAgICAgICAgJ2N5JyxcbiAgICAgICAgICAnMzU3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdDemVjaCBSZXB1YmxpYyAoxIxlc2vDoSByZXB1Ymxpa2EpJyxcbiAgICAgICAgICAnY3onLFxuICAgICAgICAgICc0MjAnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdEZW5tYXJrIChEYW5tYXJrKScsXG4gICAgICAgICAgJ2RrJyxcbiAgICAgICAgICAnNDUnLFxuICAgICAgICAgICcrLi4gLi4gLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0RqaWJvdXRpJyxcbiAgICAgICAgICAnZGonLFxuICAgICAgICAgICcyNTMnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdEb21pbmljYScsXG4gICAgICAgICAgJ2RtJyxcbiAgICAgICAgICAnMTc2NycsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRG9taW5pY2FuIFJlcHVibGljIChSZXDDumJsaWNhIERvbWluaWNhbmEpJyxcbiAgICAgICAgICAnZG8nLFxuICAgICAgICAgICcxJyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICAnODA5JyxcbiAgICAgICAgICAgICAnODI5JyxcbiAgICAgICAgICAgICAnODQ5J1xuICAgICAgICAgIF1cbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnRWN1YWRvcicsXG4gICAgICAgICAgJ2VjJyxcbiAgICAgICAgICAnNTkzJyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFZ3lwdCAo4oCr2YXYtdix4oCs4oCOKScsXG4gICAgICAgICAgJ2VnJyxcbiAgICAgICAgICAnMjAnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFbCBTYWx2YWRvcicsXG4gICAgICAgICAgJ3N2JyxcbiAgICAgICAgICAnNTAzJyxcbiAgICAgICAgICAnKy4uLiAuLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0VxdWF0b3JpYWwgR3VpbmVhIChHdWluZWEgRWN1YXRvcmlhbCknLFxuICAgICAgICAgICdncScsXG4gICAgICAgICAgJzI0MCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0VyaXRyZWEnLFxuICAgICAgICAgICdlcicsXG4gICAgICAgICAgJzI5MScsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdFc3RvbmlhIChFZXN0aSknLFxuICAgICAgICAgICdlZScsXG4gICAgICAgICAgJzM3MicsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0V0aGlvcGlhJyxcbiAgICAgICAgICAnZXQnLFxuICAgICAgICAgICcyNTEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcyknLFxuICAgICAgICAgICdmaycsXG4gICAgICAgICAgJzUwMCcsXG4gICAgICAgICAgJysuLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0Zhcm9lIElzbGFuZHMgKEbDuHJveWFyKScsXG4gICAgICAgICAgJ2ZvJyxcbiAgICAgICAgICAnMjk4JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGaWppJyxcbiAgICAgICAgICAnZmonLFxuICAgICAgICAgICc2NzknLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGaW5sYW5kIChTdW9taSknLFxuICAgICAgICAgICdmaScsXG4gICAgICAgICAgJzM1OCcsXG4gICAgICAgICAgJysuLi4gLi4gLi4uIC4uIC4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGcmFuY2UnLFxuICAgICAgICAgICdmcicsXG4gICAgICAgICAgJzMzJyxcbiAgICAgICAgICAnKy4uIC4gLi4gLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0ZyZW5jaCBHdWlhbmEgKEd1eWFuZSBmcmFuw6dhaXNlKScsXG4gICAgICAgICAgJ2dmJyxcbiAgICAgICAgICAnNTk0JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdGcmVuY2ggUG9seW5lc2lhIChQb2x5bsOpc2llIGZyYW7Dp2Fpc2UpJyxcbiAgICAgICAgICAncGYnLFxuICAgICAgICAgICc2ODknLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHYWJvbicsXG4gICAgICAgICAgJ2dhJyxcbiAgICAgICAgICAnMjQxJyxcbiAgICAgICAgICAnKy4uLi0uLS4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHYW1iaWEnLFxuICAgICAgICAgICdnbScsXG4gICAgICAgICAgJzIyMCcsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHZW9yZ2lhICjhg6Hhg5Dhg6Xhg5Dhg6Dhg5fhg5Xhg5Thg5rhg50pJyxcbiAgICAgICAgICAnZ2UnLFxuICAgICAgICAgICc5OTUnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHZXJtYW55IChEZXV0c2NobGFuZCknLFxuICAgICAgICAgICdkZScsXG4gICAgICAgICAgJzQ5JyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHaGFuYSAoR2FhbmEpJyxcbiAgICAgICAgICAnZ2gnLFxuICAgICAgICAgICcyMzMnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHaWJyYWx0YXInLFxuICAgICAgICAgICdnaScsXG4gICAgICAgICAgJzM1MCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdHcmVlY2UgKM6VzrvOu86szrTOsSknLFxuICAgICAgICAgICdncicsXG4gICAgICAgICAgJzMwJyxcbiAgICAgICAgICAnKy4uKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR3JlZW5sYW5kIChLYWxhYWxsaXQgTnVuYWF0KScsXG4gICAgICAgICAgJ2dsJyxcbiAgICAgICAgICAnMjk5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR3JlbmFkYScsXG4gICAgICAgICAgJ2dkJyxcbiAgICAgICAgICAnMTQ3MycsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR3VhZGVsb3VwZScsXG4gICAgICAgICAgJ2dwJyxcbiAgICAgICAgICAnNTkwJyxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAwXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1YW0nLFxuICAgICAgICAgICdndScsXG4gICAgICAgICAgJzE2NzEnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1YXRlbWFsYScsXG4gICAgICAgICAgJ2d0JyxcbiAgICAgICAgICAnNTAyJyxcbiAgICAgICAgICAnKy4uLiAuLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1aW5lYSAoR3VpbsOpZSknLFxuICAgICAgICAgICdnbicsXG4gICAgICAgICAgJzIyNCcsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnR3VpbmVhLUJpc3NhdSAoR3VpbsOpIEJpc3NhdSknLFxuICAgICAgICAgICdndycsXG4gICAgICAgICAgJzI0NScsXG4gICAgICAgICAgJysuLi4tLi0uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0d1eWFuYScsXG4gICAgICAgICAgJ2d5JyxcbiAgICAgICAgICAnNTkyJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSGFpdGknLFxuICAgICAgICAgICdodCcsXG4gICAgICAgICAgJzUwOScsXG4gICAgICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdIb25kdXJhcycsXG4gICAgICAgICAgJ2huJyxcbiAgICAgICAgICAnNTA0JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0hvbmcgS29uZyAo6aaZ5rivKScsXG4gICAgICAgICAgJ2hrJyxcbiAgICAgICAgICAnODUyJyxcbiAgICAgICAgICAnKy4uLiAuLi4uIC4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0h1bmdhcnkgKE1hZ3lhcm9yc3rDoWcpJyxcbiAgICAgICAgICAnaHUnLFxuICAgICAgICAgICczNicsXG4gICAgICAgICAgJysuLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSWNlbGFuZCAow41zbGFuZCknLFxuICAgICAgICAgICdpcycsXG4gICAgICAgICAgJzM1NCcsXG4gICAgICAgICAgJysuLi4gLi4uIC4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0luZGlhICjgpK3gpL7gpLDgpKQpJyxcbiAgICAgICAgICAnaW4nLFxuICAgICAgICAgICc5MScsXG4gICAgICAgICAgJysuLiAuLi4uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSW5kb25lc2lhJyxcbiAgICAgICAgICAnaWQnLFxuICAgICAgICAgICc2MicsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0lyYW4gKOKAq9in24zYsdin2YbigKzigI4pJyxcbiAgICAgICAgICAnaXInLFxuICAgICAgICAgICc5OCcsXG4gICAgICAgICAgJysuLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0lyYXEgKOKAq9in2YTYudix2KfZguKArOKAjiknLFxuICAgICAgICAgICdpcScsXG4gICAgICAgICAgJzk2NCcsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdJcmVsYW5kJyxcbiAgICAgICAgICAnaWUnLFxuICAgICAgICAgICczNTMnLFxuICAgICAgICAgICcrLi4uIC4uIC4uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0lzcmFlbCAo4oCr15nXqdeo15DXnOKArOKAjiknLFxuICAgICAgICAgICdpbCcsXG4gICAgICAgICAgJzk3MicsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSXRhbHkgKEl0YWxpYSknLFxuICAgICAgICAgICdpdCcsXG4gICAgICAgICAgJzM5JyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4uLi4nLFxuICAgICAgICAgIDBcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSmFtYWljYScsXG4gICAgICAgICAgJ2ptJyxcbiAgICAgICAgICAnMTg3NicsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnSmFwYW4gKOaXpeacrCknLFxuICAgICAgICAgICdqcCcsXG4gICAgICAgICAgJzgxJyxcbiAgICAgICAgICAnKy4uIC4uLiAuLiAuLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdKb3JkYW4gKOKAq9in2YTYo9ix2K/ZhuKArOKAjiknLFxuICAgICAgICAgICdqbycsXG4gICAgICAgICAgJzk2MicsXG4gICAgICAgICAgJysuLi4tLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0themFraHN0YW4gKNCa0LDQt9Cw0YXRgdGC0LDQvSknLFxuICAgICAgICAgICdreicsXG4gICAgICAgICAgJzcnLFxuICAgICAgICAgICcrLiAuLi4gLi4uLS4uLS4uJyxcbiAgICAgICAgICAxXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0tlbnlhJyxcbiAgICAgICAgICAna2UnLFxuICAgICAgICAgICcyNTQnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0tpcmliYXRpJyxcbiAgICAgICAgICAna2knLFxuICAgICAgICAgICc2ODYnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnS3V3YWl0ICjigKvYp9mE2YPZiNmK2KrigKzigI4pJyxcbiAgICAgICAgICAna3cnLFxuICAgICAgICAgICc5NjUnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnS3lyZ3l6c3RhbiAo0JrRi9GA0LPRi9C30YHRgtCw0L0pJyxcbiAgICAgICAgICAna2cnLFxuICAgICAgICAgICc5OTYnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMYW9zICjguqXgurLguqcpJyxcbiAgICAgICAgICAnbGEnLFxuICAgICAgICAgICc4NTYnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0xhdHZpYSAoTGF0dmlqYSknLFxuICAgICAgICAgICdsdicsXG4gICAgICAgICAgJzM3MScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTGViYW5vbiAo4oCr2YTYqNmG2KfZhuKArOKAjiknLFxuICAgICAgICAgICdsYicsXG4gICAgICAgICAgJzk2MScsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMZXNvdGhvJyxcbiAgICAgICAgICAnbHMnLFxuICAgICAgICAgICcyNjYnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0xpYmVyaWEnLFxuICAgICAgICAgICdscicsXG4gICAgICAgICAgJzIzMScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTGlieWEgKOKAq9mE2YrYqNmK2KfigKzigI4pJyxcbiAgICAgICAgICAnbHknLFxuICAgICAgICAgICcyMTgnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0xpZWNodGVuc3RlaW4nLFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgJzQyMycsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdMaXRodWFuaWEgKExpZXR1dmEpJyxcbiAgICAgICAgICAnbHQnLFxuICAgICAgICAgICczNzAnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ0x1eGVtYm91cmcnLFxuICAgICAgICAgICdsdScsXG4gICAgICAgICAgJzM1MicsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hY2F1ICjmvrPploApJyxcbiAgICAgICAgICAnbW8nLFxuICAgICAgICAgICc4NTMnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFjZWRvbmlhIChGWVJPTSkgKNCc0LDQutC10LTQvtC90LjRmNCwKScsXG4gICAgICAgICAgJ21rJyxcbiAgICAgICAgICAnMzg5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWRhZ2FzY2FyIChNYWRhZ2FzaWthcmEpJyxcbiAgICAgICAgICAnbWcnLFxuICAgICAgICAgICcyNjEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWxhd2knLFxuICAgICAgICAgICdtdycsXG4gICAgICAgICAgJzI2NScsXG4gICAgICAgICAgJysuLi4tLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hbGF5c2lhJyxcbiAgICAgICAgICAnbXknLFxuICAgICAgICAgICc2MCcsXG4gICAgICAgICAgJysuLiAuLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hbGRpdmVzJyxcbiAgICAgICAgICAnbXYnLFxuICAgICAgICAgICc5NjAnLFxuICAgICAgICAgICcrLi4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNYWxpJyxcbiAgICAgICAgICAnbWwnLFxuICAgICAgICAgICcyMjMnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hbHRhJyxcbiAgICAgICAgICAnbXQnLFxuICAgICAgICAgICczNTYnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFyc2hhbGwgSXNsYW5kcycsXG4gICAgICAgICAgJ21oJyxcbiAgICAgICAgICAnNjkyJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWFydGluaXF1ZScsXG4gICAgICAgICAgJ21xJyxcbiAgICAgICAgICAnNTk2JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4tLi4tLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01hdXJpdGFuaWEgKOKAq9mF2YjYsdmK2KrYp9mG2YrYp+KArOKAjiknLFxuICAgICAgICAgICdtcicsXG4gICAgICAgICAgJzIyMicsXG4gICAgICAgICAgJysuLi4tLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTWF1cml0aXVzIChNb3JpcyknLFxuICAgICAgICAgICdtdScsXG4gICAgICAgICAgJzIzMCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01leGljbyAoTcOpeGljbyknLFxuICAgICAgICAgICdteCcsXG4gICAgICAgICAgJzUyJyxcbiAgICAgICAgICAnKy4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01pY3JvbmVzaWEnLFxuICAgICAgICAgICdmbScsXG4gICAgICAgICAgJzY5MScsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01vbGRvdmEgKFJlcHVibGljYSBNb2xkb3ZhKScsXG4gICAgICAgICAgJ21kJyxcbiAgICAgICAgICAnMzczJyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01vbmFjbycsXG4gICAgICAgICAgJ21jJyxcbiAgICAgICAgICAnMzc3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb25nb2xpYSAo0JzQvtC90LPQvtC7KScsXG4gICAgICAgICAgJ21uJyxcbiAgICAgICAgICAnOTc2JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNb250ZW5lZ3JvIChDcm5hIEdvcmEpJyxcbiAgICAgICAgICAnbWUnLFxuICAgICAgICAgICczODInLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01vbnRzZXJyYXQnLFxuICAgICAgICAgICdtcycsXG4gICAgICAgICAgJzE2NjQnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01vcm9jY28gKOKAq9in2YTZhdi62LHYqOKArOKAjiknLFxuICAgICAgICAgICdtYScsXG4gICAgICAgICAgJzIxMicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ01vemFtYmlxdWUgKE1vw6dhbWJpcXVlKScsXG4gICAgICAgICAgJ216JyxcbiAgICAgICAgICAnMjU4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdNeWFubWFyIChCdXJtYSkgKOGAmeGAvOGAlOGAuuGAmeGArCknLFxuICAgICAgICAgICdtbScsXG4gICAgICAgICAgJzk1JyxcbiAgICAgICAgICAnKy4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05hbWliaWEgKE5hbWliacOrKScsXG4gICAgICAgICAgJ25hJyxcbiAgICAgICAgICAnMjY0JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmF1cnUnLFxuICAgICAgICAgICducicsXG4gICAgICAgICAgJzY3NCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05lcGFsICjgpKjgpYfgpKrgpL7gpLIpJyxcbiAgICAgICAgICAnbnAnLFxuICAgICAgICAgICc5NzcnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05ldGhlcmxhbmRzIChOZWRlcmxhbmQpJyxcbiAgICAgICAgICAnbmwnLFxuICAgICAgICAgICczMScsXG4gICAgICAgICAgJysuLiAuLiAuLi4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmV3IENhbGVkb25pYSAoTm91dmVsbGUtQ2Fsw6lkb25pZSknLFxuICAgICAgICAgICduYycsXG4gICAgICAgICAgJzY4NycsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmV3IFplYWxhbmQnLFxuICAgICAgICAgICdueicsXG4gICAgICAgICAgJzY0JyxcbiAgICAgICAgICAnKy4uIC4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmljYXJhZ3VhJyxcbiAgICAgICAgICAnbmknLFxuICAgICAgICAgICc1MDUnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTmlnZXIgKE5pamFyKScsXG4gICAgICAgICAgJ25lJyxcbiAgICAgICAgICAnMjI3JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOaWdlcmlhJyxcbiAgICAgICAgICAnbmcnLFxuICAgICAgICAgICcyMzQnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnTml1ZScsXG4gICAgICAgICAgJ251JyxcbiAgICAgICAgICAnNjgzJyxcbiAgICAgICAgICAnKy4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOb3Jmb2xrIElzbGFuZCcsXG4gICAgICAgICAgJ25mJyxcbiAgICAgICAgICAnNjcyJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOb3J0aCBLb3JlYSAo7KGw7ISgIOuvvOyjvOyjvOydmCDsnbjrr7wg6rO17ZmU6rWtKScsXG4gICAgICAgICAgJ2twJyxcbiAgICAgICAgICAnODUwJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxuICAgICAgICAgICdtcCcsXG4gICAgICAgICAgJzE2NzAnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ05vcndheSAoTm9yZ2UpJyxcbiAgICAgICAgICAnbm8nLFxuICAgICAgICAgICc0NycsXG4gICAgICAgICAgJysuLiAuLi4gLi4gLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdPbWFuICjigKvYudmP2YXYp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ29tJyxcbiAgICAgICAgICAnOTY4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdQYWtpc3RhbiAo4oCr2b7Yp9qp2LPYqtin2YbigKzigI4pJyxcbiAgICAgICAgICAncGsnLFxuICAgICAgICAgICc5MicsXG4gICAgICAgICAgJysuLiAuLi4tLi4uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGFsYXUnLFxuICAgICAgICAgICdwdycsXG4gICAgICAgICAgJzY4MCcsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1BhbGVzdGluZSAo4oCr2YHZhNiz2LfZitmG4oCs4oCOKScsXG4gICAgICAgICAgJ3BzJyxcbiAgICAgICAgICAnOTcwJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGFuYW1hIChQYW5hbcOhKScsXG4gICAgICAgICAgJ3BhJyxcbiAgICAgICAgICAnNTA3JyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGFwdWEgTmV3IEd1aW5lYScsXG4gICAgICAgICAgJ3BnJyxcbiAgICAgICAgICAnNjc1JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdQYXJhZ3VheScsXG4gICAgICAgICAgJ3B5JyxcbiAgICAgICAgICAnNTk1JyxcbiAgICAgICAgICAnKy4uLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGVydSAoUGVyw7opJyxcbiAgICAgICAgICAncGUnLFxuICAgICAgICAgICc1MScsXG4gICAgICAgICAgJysuLiguLi4pLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUGhpbGlwcGluZXMnLFxuICAgICAgICAgICdwaCcsXG4gICAgICAgICAgJzYzJyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdQb2xhbmQgKFBvbHNrYSknLFxuICAgICAgICAgICdwbCcsXG4gICAgICAgICAgJzQ4JyxcbiAgICAgICAgICAnKy4uIC4uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdQb3J0dWdhbCcsXG4gICAgICAgICAgJ3B0JyxcbiAgICAgICAgICAnMzUxJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUHVlcnRvIFJpY28nLFxuICAgICAgICAgICdwcicsXG4gICAgICAgICAgJzEnLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgICc3ODcnLFxuICAgICAgICAgICAgICc5MzknXG4gICAgICAgICAgXVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdRYXRhciAo4oCr2YLYt9ix4oCs4oCOKScsXG4gICAgICAgICAgJ3FhJyxcbiAgICAgICAgICAnOTc0JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1LDqXVuaW9uIChMYSBSw6l1bmlvbiknLFxuICAgICAgICAgICdyZScsXG4gICAgICAgICAgJzI2MicsXG4gICAgICAgICAgJysuLi4tLi4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUm9tYW5pYSAoUm9tw6JuaWEpJyxcbiAgICAgICAgICAncm8nLFxuICAgICAgICAgICc0MCcsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnUnVzc2lhICjQoNC+0YHRgdC40Y8pJyxcbiAgICAgICAgICAncnUnLFxuICAgICAgICAgICc3JyxcbiAgICAgICAgICAnKy4gLi4uIC4uLi0uLi0uLicsXG4gICAgICAgICAgMFxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdSd2FuZGEnLFxuICAgICAgICAgICdydycsXG4gICAgICAgICAgJzI1MCcsXG4gICAgICAgICAgJysuLi4oLi4uKS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NhaW50IEJhcnRow6lsZW15IChTYWludC1CYXJ0aMOpbGVteSknLFxuICAgICAgICAgICdibCcsXG4gICAgICAgICAgJzU5MCcsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgMVxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYWludCBIZWxlbmEnLFxuICAgICAgICAgICdzaCcsXG4gICAgICAgICAgJzI5MCdcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgICAgICAgICAna24nLFxuICAgICAgICAgICcxODY5JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYWludCBMdWNpYScsXG4gICAgICAgICAgJ2xjJyxcbiAgICAgICAgICAnMTc1OCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2FpbnQgTWFydGluIChTYWludC1NYXJ0aW4gKHBhcnRpZSBmcmFuw6dhaXNlKSknLFxuICAgICAgICAgICdtZicsXG4gICAgICAgICAgJzU5MCcsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgMlxuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uIChTYWludC1QaWVycmUtZXQtTWlxdWVsb24pJyxcbiAgICAgICAgICAncG0nLFxuICAgICAgICAgICc1MDgnXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJyxcbiAgICAgICAgICAndmMnLFxuICAgICAgICAgICcxNzg0JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYW1vYScsXG4gICAgICAgICAgJ3dzJyxcbiAgICAgICAgICAnNjg1JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYW4gTWFyaW5vJyxcbiAgICAgICAgICAnc20nLFxuICAgICAgICAgICczNzgnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGUgKFPDo28gVG9tw6kgZSBQcsOtbmNpcGUpJyxcbiAgICAgICAgICAnc3QnLFxuICAgICAgICAgICcyMzknLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTYXVkaSBBcmFiaWEgKOKAq9in2YTZhdmF2YTZg9ipINin2YTYudix2KjZitipINin2YTYs9i52YjYr9mK2KnigKzigI4pJyxcbiAgICAgICAgICAnc2EnLFxuICAgICAgICAgICc5NjYnLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NlbmVnYWwgKFPDqW7DqWdhbCknLFxuICAgICAgICAgICdzbicsXG4gICAgICAgICAgJzIyMScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NlcmJpYSAo0KHRgNCx0LjRmNCwKScsXG4gICAgICAgICAgJ3JzJyxcbiAgICAgICAgICAnMzgxJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU2V5Y2hlbGxlcycsXG4gICAgICAgICAgJ3NjJyxcbiAgICAgICAgICAnMjQ4JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NpZXJyYSBMZW9uZScsXG4gICAgICAgICAgJ3NsJyxcbiAgICAgICAgICAnMjMyJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NpbmdhcG9yZScsXG4gICAgICAgICAgJ3NnJyxcbiAgICAgICAgICAnNjUnLFxuICAgICAgICAgICcrLi4gLi4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTaW50IE1hYXJ0ZW4nLFxuICAgICAgICAgICdzeCcsXG4gICAgICAgICAgJzE3MjEnLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1Nsb3Zha2lhIChTbG92ZW5za28pJyxcbiAgICAgICAgICAnc2snLFxuICAgICAgICAgICc0MjEnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTbG92ZW5pYSAoU2xvdmVuaWphKScsXG4gICAgICAgICAgJ3NpJyxcbiAgICAgICAgICAnMzg2JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTb2xvbW9uIElzbGFuZHMnLFxuICAgICAgICAgICdzYicsXG4gICAgICAgICAgJzY3NycsXG4gICAgICAgICAgJysuLi4tLi4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1NvbWFsaWEgKFNvb21hYWxpeWEpJyxcbiAgICAgICAgICAnc28nLFxuICAgICAgICAgICcyNTInLFxuICAgICAgICAgICcrLi4uLS4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU291dGggQWZyaWNhJyxcbiAgICAgICAgICAnemEnLFxuICAgICAgICAgICcyNycsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU291dGggS29yZWEgKOuMgO2VnOuvvOq1rSknLFxuICAgICAgICAgICdrcicsXG4gICAgICAgICAgJzgyJyxcbiAgICAgICAgICAnKy4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTb3V0aCBTdWRhbiAo4oCr2KzZhtmI2Kgg2KfZhNiz2YjYr9in2YbigKzigI4pJyxcbiAgICAgICAgICAnc3MnLFxuICAgICAgICAgICcyMTEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTcGFpbiAoRXNwYcOxYSknLFxuICAgICAgICAgICdlcycsXG4gICAgICAgICAgJzM0JyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4gLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdTcmkgTGFua2EgKOC3geC3iuKAjeC2u+C3kyDgtr3gtoLgtprgt4/gt4ApJyxcbiAgICAgICAgICAnbGsnLFxuICAgICAgICAgICc5NCcsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3VkYW4gKOKAq9in2YTYs9mI2K/Yp9mG4oCs4oCOKScsXG4gICAgICAgICAgJ3NkJyxcbiAgICAgICAgICAnMjQ5JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3VyaW5hbWUnLFxuICAgICAgICAgICdzcicsXG4gICAgICAgICAgJzU5NycsXG4gICAgICAgICAgJysuLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3dhemlsYW5kJyxcbiAgICAgICAgICAnc3onLFxuICAgICAgICAgICcyNjgnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N3ZWRlbiAoU3ZlcmlnZSknLFxuICAgICAgICAgICdzZScsXG4gICAgICAgICAgJzQ2JyxcbiAgICAgICAgICAnKy4uIC4uIC4uLiAuLiAuLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnU3dpdHplcmxhbmQgKFNjaHdlaXopJyxcbiAgICAgICAgICAnY2gnLFxuICAgICAgICAgICc0MScsXG4gICAgICAgICAgJysuLiAuLiAuLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1N5cmlhICjigKvYs9mI2LHZitin4oCs4oCOKScsXG4gICAgICAgICAgJ3N5JyxcbiAgICAgICAgICAnOTYzJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVGFpd2FuICjlj7DngaMpJyxcbiAgICAgICAgICAndHcnLFxuICAgICAgICAgICc4ODYnLFxuICAgICAgICAgICcrLi4uLS4uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVGFqaWtpc3RhbicsXG4gICAgICAgICAgJ3RqJyxcbiAgICAgICAgICAnOTkyJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVGFuemFuaWEnLFxuICAgICAgICAgICd0eicsXG4gICAgICAgICAgJzI1NScsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RoYWlsYW5kICjguYTguJfguKIpJyxcbiAgICAgICAgICAndGgnLFxuICAgICAgICAgICc2NicsXG4gICAgICAgICAgJysuLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUaW1vci1MZXN0ZScsXG4gICAgICAgICAgJ3RsJyxcbiAgICAgICAgICAnNjcwJyxcbiAgICAgICAgICAnKy4uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVG9nbycsXG4gICAgICAgICAgJ3RnJyxcbiAgICAgICAgICAnMjI4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUb2tlbGF1JyxcbiAgICAgICAgICAndGsnLFxuICAgICAgICAgICc2OTAnLFxuICAgICAgICAgICcrLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1RvbmdhJyxcbiAgICAgICAgICAndG8nLFxuICAgICAgICAgICc2NzYnLFxuICAgICAgICAgICcrLi4uLS4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUcmluaWRhZCBhbmQgVG9iYWdvJyxcbiAgICAgICAgICAndHQnLFxuICAgICAgICAgICcxODY4JyxcbiAgICAgICAgICAnKy4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUdW5pc2lhICjigKvYqtmI2YbYs+KArOKAjiknLFxuICAgICAgICAgICd0bicsXG4gICAgICAgICAgJzIxNicsXG4gICAgICAgICAgJysuLi4tLi4tLi4uLS4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVHVya2V5IChUw7xya2l5ZSknLFxuICAgICAgICAgICd0cicsXG4gICAgICAgICAgJzkwJyxcbiAgICAgICAgICAnKy4uIC4uLiAuLi4gLi4gLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1R1cmttZW5pc3RhbicsXG4gICAgICAgICAgJ3RtJyxcbiAgICAgICAgICAnOTkzJyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxuICAgICAgICAgICd0YycsXG4gICAgICAgICAgJzE2NDknLFxuICAgICAgICAgICcrLiguLi4pLi4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1R1dmFsdScsXG4gICAgICAgICAgJ3R2JyxcbiAgICAgICAgICAnNjg4JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVS5TLiBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAgICAgJ3ZpJyxcbiAgICAgICAgICAnMTM0MCcsXG4gICAgICAgICAgJysuKC4uLikuLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVWdhbmRhJyxcbiAgICAgICAgICAndWcnLFxuICAgICAgICAgICcyNTYnLFxuICAgICAgICAgICcrLi4uKC4uLikuLi4tLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdVa3JhaW5lICjQo9C60YDQsNGX0L3QsCknLFxuICAgICAgICAgICd1YScsXG4gICAgICAgICAgJzM4MCcsXG4gICAgICAgICAgJysuLi4oLi4pLi4uLS4uLS4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdVbml0ZWQgQXJhYiBFbWlyYXRlcyAo4oCr2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K/YqeKArOKAjiknLFxuICAgICAgICAgICdhZScsXG4gICAgICAgICAgJzk3MScsXG4gICAgICAgICAgJysuLi4tLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVW5pdGVkIEtpbmdkb20nLFxuICAgICAgICAgICdnYicsXG4gICAgICAgICAgJzQ0JyxcbiAgICAgICAgICAnKy4uIC4uLi4gLi4uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdVbml0ZWQgU3RhdGVzJyxcbiAgICAgICAgICAndXMnLFxuICAgICAgICAgICcxJyxcbiAgICAgICAgICAnKy4gKC4uLikgLi4uLS4uLi4nLFxuICAgICAgICAgIDBcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVXJ1Z3VheScsXG4gICAgICAgICAgJ3V5JyxcbiAgICAgICAgICAnNTk4JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi0uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVXpiZWtpc3RhbiAoT8q7emJla2lzdG9uKScsXG4gICAgICAgICAgJ3V6JyxcbiAgICAgICAgICAnOTk4JyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVmFudWF0dScsXG4gICAgICAgICAgJ3Z1JyxcbiAgICAgICAgICAnNjc4JyxcbiAgICAgICAgICAnKy4uLi0uLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnVmF0aWNhbiBDaXR5IChDaXR0w6AgZGVsIFZhdGljYW5vKScsXG4gICAgICAgICAgJ3ZhJyxcbiAgICAgICAgICAnMzknLFxuICAgICAgICAgICcrLi4gLi4gLi4uLiAuLi4uJyxcbiAgICAgICAgICAxXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1ZlbmV6dWVsYScsXG4gICAgICAgICAgJ3ZlJyxcbiAgICAgICAgICAnNTgnLFxuICAgICAgICAgICcrLi4oLi4uKS4uLi0uLi4uJ1xuICAgICAgIF0sXG4gICAgICAgW1xuICAgICAgICAgICdWaWV0bmFtIChWaeG7h3QgTmFtKScsXG4gICAgICAgICAgJ3ZuJyxcbiAgICAgICAgICAnODQnLFxuICAgICAgICAgICcrLi4tLi4tLi4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1dhbGxpcyBhbmQgRnV0dW5hJyxcbiAgICAgICAgICAnd2YnLFxuICAgICAgICAgICc2ODEnLFxuICAgICAgICAgICcrLi4uLS4uLS4uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1llbWVuICjigKvYp9mE2YrZhdmG4oCs4oCOKScsXG4gICAgICAgICAgJ3llJyxcbiAgICAgICAgICAnOTY3JyxcbiAgICAgICAgICAnKy4uLi0uLS4uLi0uLi4nXG4gICAgICAgXSxcbiAgICAgICBbXG4gICAgICAgICAgJ1phbWJpYScsXG4gICAgICAgICAgJ3ptJyxcbiAgICAgICAgICAnMjYwJyxcbiAgICAgICAgICAnKy4uLi0uLi0uLi4tLi4uLidcbiAgICAgICBdLFxuICAgICAgIFtcbiAgICAgICAgICAnWmltYmFid2UnLFxuICAgICAgICAgICd6dycsXG4gICAgICAgICAgJzI2MycsXG4gICAgICAgICAgJysuLi4tLi0uLi4uLi4nXG4gICAgICAgXVxuICAgXTtcblxuLy8gd2Ugd2lsbCBidWlsZCB0aGlzIGluIHRoZSBsb29wIGJlbG93XG52YXIgYWxsQ291bnRyeUNvZGVzID0ge307XG52YXIgaXNvMkxvb2t1cCA9IHt9O1xudmFyIGFkZENvdW50cnlDb2RlID0gZnVuY3Rpb24gKGlzbzIsIGRpYWxDb2RlLCBwcmlvcml0eSkge1xuICAgIGlmICghKGRpYWxDb2RlIGluIGFsbENvdW50cnlDb2RlcykpIHtcbiAgICAgICAgYWxsQ291bnRyeUNvZGVzW2RpYWxDb2RlXSA9IFtdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBwcmlvcml0eSB8fCAwO1xuICAgIGFsbENvdW50cnlDb2Rlc1tkaWFsQ29kZV1baW5kZXhdID0gaXNvMjtcbn07XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAvLyBjb3VudHJpZXNcbiAgIHZhciBjID0gYWxsQ291bnRyaWVzW2ldO1xuICAgYWxsQ291bnRyaWVzW2ldID0ge1xuICAgICAgIG5hbWU6IGNbMF0sXG4gICAgICAgaXNvMjogY1sxXSxcbiAgICAgICBkaWFsQ29kZTogY1syXSxcbiAgICAgICBwcmlvcml0eTogY1s0XSB8fCAwXG4gICB9O1xuXG4gICAvLyBmb3JtYXRcbiAgIGlmIChjWzNdKSB7XG4gICAgICAgYWxsQ291bnRyaWVzW2ldLmZvcm1hdCA9IGNbM107XG4gICB9XG5cbiAgIC8vIGFyZWEgY29kZXNcbiAgIGlmIChjWzVdKSB7XG4gICAgICAgYWxsQ291bnRyaWVzW2ldLmhhc0FyZWFDb2RlcyA9IHRydWU7XG4gICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjWzVdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgIC8vIGZ1bGwgZGlhbCBjb2RlIGlzIGNvdW50cnkgY29kZSArIGRpYWwgY29kZVxuICAgICAgICAgICB2YXIgZGlhbENvZGUgPSBjWzJdICsgY1s1XVtqXTtcbiAgICAgICAgICAgYWRkQ291bnRyeUNvZGUoY1sxXSwgZGlhbENvZGUpO1xuICAgICAgIH1cbiAgIH1cbiAgIGlzbzJMb29rdXBbYWxsQ291bnRyaWVzW2ldLmlzbzJdID0gaTtcblxuICAgLy8gZGlhbCBjb2Rlc1xuICAgYWRkQ291bnRyeUNvZGUoY1sxXSwgY1syXSwgY1s0XSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICBhbGxDb3VudHJpZXM6IGFsbENvdW50cmllcyxcbiAgICAgICAgICAgaXNvMkxvb2t1cDogaXNvMkxvb2t1cCxcbiAgICAgICAgICAgYWxsQ291bnRyeUNvZGVzOiBhbGxDb3VudHJ5Q29kZXNcbiAgICAgICB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBUT0RPIC0gZml4IHRoZSBvbmx5Q29udHJpZXMgcHJvcHMuIEN1cnJlbnRseSBleHBlY3RzIHRoYXQgYXMgYW4gYXJyYXkgb2YgY291bnRyeSBvYmplY3QsIGJ1dCB1c2VycyBzaG91bGQgYmUgYWJsZSB0byBzZW5kIGluIGFycmF5IG9mIGNvdW50cnkgaXNvc1xuXG52YXIgc29tZSA9IHJlcXVpcmUoJ2xvZGFzaC9jb2xsZWN0aW9uL3NvbWUnKTtcbnZhciBmaW5kV2hlcmUgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9maW5kV2hlcmUnKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9yZWR1Y2UnKTtcbnZhciBtYXAgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9tYXAnKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9maWx0ZXInKTtcbnZhciBmaW5kSW5kZXggPSByZXF1aXJlKCdsb2Rhc2gvYXJyYXkvZmluZEluZGV4Jyk7XG52YXIgZmlyc3QgPSByZXF1aXJlKCdsb2Rhc2gvYXJyYXkvZmlyc3QnKTtcbnZhciByZXN0ID0gcmVxdWlyZSgnbG9kYXNoL2FycmF5L3Jlc3QnKTtcbnZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJ2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZScpO1xudmFyIG1lbW9pemUgPSByZXF1aXJlKCdsb2Rhc2gvZnVuY3Rpb24vbWVtb2l6ZScpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC9vYmplY3QvYXNzaWduJyk7XG52YXIgaXNFcXVhbCA9IHJlcXVpcmUoJ2xvZGFzaC9sYW5nL2lzRXF1YWwnKTtcbi8vIGltcG9ydCBsb2Rhc2ggc3RyaW5nIG1ldGhvZHNcbnZhciB0cmltID0gcmVxdWlyZSgnbG9kYXNoL3N0cmluZy90cmltJyk7XG52YXIgc3RhcnRzV2l0aCA9IHJlcXVpcmUoJ2xvZGFzaC9zdHJpbmcvc3RhcnRzV2l0aCcpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgb25DbGlja091dHNpZGUgPSByZXF1aXJlKCdyZWFjdC1vbmNsaWNrb3V0c2lkZScpO1xudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG52YXIgY291bnRyeURhdGEgPSByZXF1aXJlKCcuL2NvdW50cnlfZGF0YS5qcycpXG4vLyB2YXIgY291bnRyeURhdGEgPSByZXF1aXJlKCdjb3VudHJ5LXRlbGVwaG9uZS1kYXRhJylcbnZhciBhbGxDb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG52YXIgaXNvMkxvb2t1cCA9IGNvdW50cnlEYXRhLmlzbzJMb29rdXA7XG5cblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGlzTW9kZXJuQnJvd3NlciA9IEJvb2xlYW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKS5zZXRTZWxlY3Rpb25SYW5nZSk7XG59IGVsc2Uge1xuICB2YXIgaXNNb2Rlcm5Ccm93c2VyID0gdHJ1ZTtcbn1cblxudmFyIGtleXMgPSB7XG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgRE9XTjogNDAsXG4gICAgICAgIFJJR0hUOiAzOSxcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIEVOVEVSOiAxMyxcbiAgICAgICAgRVNDOiAyNyxcbiAgICAgICAgUExVUzogNDMsXG4gICAgICAgIEE6IDY1LFxuICAgICAgICBaOiA5MCxcbiAgICAgICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBpc051bWJlclZhbGlkKGlucHV0TnVtYmVyKSB7XG4gICAgdmFyIGNvdW50cmllcyA9IGNvdW50cnlEYXRhLmFsbENvdW50cmllcztcbiAgICByZXR1cm4gc29tZShjb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgoaW5wdXROdW1iZXIsIGNvdW50cnkuZGlhbENvZGUpIHx8IHN0YXJ0c1dpdGgoY291bnRyeS5kaWFsQ29kZSwgaW5wdXROdW1iZXIpO1xuICAgIH0pO1xufVxuXG4gIGV4cG9ydCB2YXIgUmVhY3RUZWxlcGhvbmVJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHZhciBwcmVmZXJyZWRDb3VudHJpZXMgPSB0aGlzLnByb3BzLnByZWZlcnJlZENvdW50cmllcy5tYXAoXG4gICAgICAgICAgICBpc28yID0+IGlzbzJMb29rdXAuaGFzT3duUHJvcGVydHkoaXNvMikgPyBhbGxDb3VudHJpZXNbaXNvMkxvb2t1cFtpc28yXV0gOiBudWxsXG4gICAgICAgICkuZmlsdGVyKHZhbCA9PiB2YWwgIT09IG51bGwpO1xuXG4gICAgICAgIHJldHVybiBhc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXM6IHByZWZlcnJlZENvdW50cmllcyxcbiAgICAgICAgICAgICAgICBzaG93RHJvcERvd246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgICAgICAgICBmcmVlemVTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlYm91bmNlZFF1ZXJ5U3RpbmdTZWFyY2hlcjogZGVib3VuY2UodGhpcy5zZWFyY2hDb3VudHJ5LCAzMDApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5fbWFwUHJvcHNUb1N0YXRlKHRoaXMucHJvcHMpXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgYXV0b0Zvcm1hdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIGRlZmF1bHRDb3VudHJ5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvbmx5Q291bnRyaWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMub2JqZWN0KSxcbiAgICAgICAgcHJlZmVycmVkQ291bnRyaWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nKSxcbiAgICAgICAgY2xhc3NOYW1lczogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkVudGVyS2V5UHJlc3M6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgICBwYXR0ZXJuOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0sXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGF1dG9Gb3JtYXQ6IHRydWUsXG4gICAgICAgICAgICBvbmx5Q291bnRyaWVzOiBhbGxDb3VudHJpZXMsXG4gICAgICAgICAgICBkZWZhdWx0Q291bnRyeTogYWxsQ291bnRyaWVzWzBdLmlzbzIsXG4gICAgICAgICAgICBpc1ZhbGlkOiBpc051bWJlclZhbGlkLFxuICAgICAgICAgICAgZmxhZ3NJbWFnZVBhdGg6ICdmbGFncy5wbmcnLFxuICAgICAgICAgICAgb25FbnRlcktleVByZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgICAgIHByZWZlcnJlZENvdW50cmllczogW10sXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJysxICg3MDIpIDEyMy00NTY3J1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIgIT09ICcrJyA/IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyIDogJyc7XG4gICAgfSxcbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCk7XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG5cbiAgICAgICAgdGhpcy5fY3Vyc29yVG9FbmQodHJ1ZSk7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gIWlzRXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhaXNFcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpO1xuICAgIH0sXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9tYXBQcm9wc1RvU3RhdGUobmV4dFByb3BzKSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG4gICAgfSxcbiAgICBzY3JvbGxUbyhjb3VudHJ5LCBtaWRkbGUpIHtcbiAgICAgICAgaWYoIWNvdW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250YWluZXIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZmxhZ0Ryb3Bkb3duTGlzdCk7XG5cbiAgICAgICAgaWYoIWNvbnRhaW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgY29udGFpbmVyT2Zmc2V0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY29udGFpbmVyVG9wID0gY29udGFpbmVyT2Zmc2V0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgY29udGFpbmVyQm90dG9tID0gY29udGFpbmVyVG9wICsgY29udGFpbmVySGVpZ2h0O1xuXG4gICAgICAgIHZhciBlbGVtZW50ID0gY291bnRyeTtcbiAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHZhciBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBlbGVtZW50VG9wID0gZWxlbWVudE9mZnNldC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgZWxlbWVudEhlaWdodDtcbiAgICAgICAgdmFyIG5ld1Njcm9sbFRvcCA9IGVsZW1lbnRUb3AgLSBjb250YWluZXJUb3AgKyBjb250YWluZXIuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gKGNvbnRhaW5lckhlaWdodCAvIDIpIC0gKGVsZW1lbnRIZWlnaHQgLyAyKTtcblxuICAgICAgICBpZiAoZWxlbWVudFRvcCA8IGNvbnRhaW5lclRvcCkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIHVwXG4gICAgICAgICAgICBpZiAobWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsVG9wIC09IG1pZGRsZU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3A7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudEJvdHRvbSA+IGNvbnRhaW5lckJvdHRvbSkge1xuICAgICAgICAgICAgLy8gc2Nyb2xsIGRvd25cbiAgICAgICAgICAgIGlmKG1pZGRsZSkge1xuICAgICAgICAgICAgICAgIG5ld1Njcm9sbFRvcCArPSBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVpZ2h0RGlmZmVyZW5jZSA9IGNvbnRhaW5lckhlaWdodCAtIGVsZW1lbnRIZWlnaHQ7XG4gICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZm9ybWF0TnVtYmVyKHRleHQsIHBhdHRlcm4pIHtcbiAgICAgICAgaWYoIXRleHQgfHwgdGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnKyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3IgYWxsIHN0cmluZ3Mgd2l0aCBsZW5ndGggbGVzcyB0aGFuIDMsIGp1c3QgcmV0dXJuIGl0ICgxLCAyIGV0Yy4pXG4gICAgICAgIC8vIGFsc28gcmV0dXJuIHRoZSBzYW1lIHRleHQgaWYgdGhlIHNlbGVjdGVkIGNvdW50cnkgaGFzIG5vIGZpeGVkIGZvcm1hdFxuICAgICAgICBpZigodGV4dCAmJiB0ZXh0Lmxlbmd0aCA8IDIpIHx8ICFwYXR0ZXJuIHx8ICF0aGlzLnByb3BzLmF1dG9Gb3JtYXQpIHtcbiAgICAgICAgICAgIHJldHVybiBgKyR7dGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlZE9iamVjdCA9IHJlZHVjZShwYXR0ZXJuLCBmdW5jdGlvbihhY2MsIGNoYXJhY3Rlcikge1xuICAgICAgICAgICAgaWYoYWNjLnJlbWFpbmluZ1RleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoY2hhcmFjdGVyICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRUZXh0OiBhY2MuZm9ybWF0dGVkVGV4dCArIGNoYXJhY3RlcixcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dDogYWNjLnJlbWFpbmluZ1RleHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRleHQ6IGFjYy5mb3JtYXR0ZWRUZXh0ICsgZmlyc3QoYWNjLnJlbWFpbmluZ1RleHQpLFxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RleHQ6IHJlc3QoYWNjLnJlbWFpbmluZ1RleHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCB7Zm9ybWF0dGVkVGV4dDogJycsIHJlbWFpbmluZ1RleHQ6IHRleHQuc3BsaXQoJycpfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRPYmplY3QuZm9ybWF0dGVkVGV4dCArIGZvcm1hdHRlZE9iamVjdC5yZW1haW5pbmdUZXh0LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBwdXQgdGhlIGN1cnNvciB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCAodXN1YWxseSBhZnRlciBhIGZvY3VzIGV2ZW50KVxuICAgIF9jdXJzb3JUb0VuZChza2lwRm9jdXMpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcy5yZWZzLm51bWJlcklucHV0O1xuICAgICAgICBpZiAoc2tpcEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLl9maWxsRGlhbENvZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIGlmIChpc01vZGVybkJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gaW5wdXQudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gbWVtb2l6ZSByZXN1bHRzIGJhc2VkIG9uIHRoZSBmaXJzdCA1LzYgY2hhcmFjdGVycy4gVGhhdCBpcyBhbGwgdGhhdCBtYXR0ZXJzXG4gICAgZ3Vlc3NTZWxlY3RlZENvdW50cnk6IG1lbW9pemUoZnVuY3Rpb24oaW5wdXROdW1iZXIpIHtcbiAgICAgICAgdmFyIHNlY29uZEJlc3RHdWVzcyA9IGZpbmRXaGVyZShhbGxDb3VudHJpZXMsIHtpc28yOiB0aGlzLnByb3BzLmRlZmF1bHRDb3VudHJ5fSkgfHwgdGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzWzBdO1xuICAgICAgICBpZih0cmltKGlucHV0TnVtYmVyKSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhciBiZXN0R3Vlc3MgPSByZWR1Y2UodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCBmdW5jdGlvbihzZWxlY3RlZENvdW50cnksIGNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdGFydHNXaXRoKGlucHV0TnVtYmVyLCBjb3VudHJ5LmRpYWxDb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IHNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvdW50cnkuZGlhbENvZGUubGVuZ3RoID09PSBzZWxlY3RlZENvdW50cnkuZGlhbENvZGUubGVuZ3RoICYmIGNvdW50cnkucHJpb3JpdHkgPCBzZWxlY3RlZENvdW50cnkucHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkQ291bnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtkaWFsQ29kZTogJycsIHByaW9yaXR5OiAxMDAwMX0sIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlY29uZEJlc3RHdWVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFiZXN0R3Vlc3MubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlY29uZEJlc3RHdWVzcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBiZXN0R3Vlc3M7XG4gICAgfSksXG4gICAgZ2V0RWxlbWVudChpbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzW2BmbGFnX25vXyR7aW5kZXh9YF0pO1xuICAgIH0sXG4gICAgaGFuZGxlRmxhZ0Ryb3Bkb3duQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5lZWQgdG8gcHV0IHRoZSBoaWdobGlnaHQgb24gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgY291bnRyeSBpZiB0aGUgZHJvcGRvd24gaXMgZ29pbmcgdG8gb3BlbiB1cFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dEcm9wRG93bjogIXRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duLFxuICAgICAgICAgICAgaGlnaGxpZ2h0Q291bnRyeTogZmluZFdoZXJlKHRoaXMucHJvcHMub25seUNvdW50cmllcywgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkpLFxuICAgICAgICAgICAgaGlnaGxpZ2h0Q291bnRyeUluZGV4OiBmaW5kSW5kZXgodGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMuY29uY2F0KHRoaXMucHJvcHMub25seUNvdW50cmllcyksIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IG5lZWQgdG8gc2Nyb29sIGlmIHRoZSBkcm9wZG93biBsaXN0IGlzIGFsaXZlXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dEcm9wRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRFbGVtZW50KHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ICsgdGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9ICcrJywgbmV3U2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnksIGZyZWV6ZVNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uO1xuXG4gICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpcyB0aGUgc2FtZSBhcyBiZWZvcmUsIG11c3QgYmUgc29tZSBzcGVjaWFsIGtleSBsaWtlIGVudGVyIGV0Yy5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSB0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWUgaGFja1xuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gYmVmb3JlIGVudGVyaW5nIHRoZSBudW1iZXIgaW4gbmV3IGZvcm1hdCwgbGV0cyBjaGVjayBpZiB0aGUgZGlhbCBjb2RlIG5vdyBtYXRjaGVzIHNvbWUgb3RoZXIgY291bnRyeVxuICAgICAgICAgICAgdmFyIGlucHV0TnVtYmVyID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gc2VuZCB0aGUgd2hvbGUgbnVtYmVyIHRvIGd1ZXNzIHRoZSBjb3VudHJ5Li4uIG9ubHkgdGhlIGZpcnN0IDYgY2hhcmFjdGVycyBhcmUgZW5vdWdoXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgY291bnRyeSBmdW5jdGlvbiBjYW4gdGhlbiB1c2UgbWVtb2l6YXRpb24gbXVjaCBtb3JlIGVmZmVjdGl2ZWx5IHNpbmNlIHRoZSBzZXQgb2YgaW5wdXQgaXQgZ2V0cyBoYXMgZHJhc3RpY2FsbHkgcmVkdWNlZFxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IGlucHV0TnVtYmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkQ291bnRyeSA9IHRoaXMuZ3Vlc3NTZWxlY3RlZENvdW50cnkoaW5wdXROdW1iZXIuc3Vic3RyaW5nKDAsIDYpKTtcbiAgICAgICAgICAgICAgICBmcmVlemVTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCB1cyByZW1vdmUgYWxsIG5vbiBudW1lcmFscyBmcm9tIHRoZSBpbnB1dFxuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIoaW5wdXROdW1iZXIsIG5ld1NlbGVjdGVkQ291bnRyeS5mb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBvbGRGb3JtYXR0ZWRUZXh0ID0gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXI7XG4gICAgICAgIHZhciBkaWZmID0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCAtIG9sZEZvcm1hdHRlZFRleHQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiBmb3JtYXR0ZWROdW1iZXIsXG4gICAgICAgICAgICBmcmVlemVTZWxlY3Rpb246IGZyZWV6ZVNlbGVjdGlvbixcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogbmV3U2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IDAgPyBuZXdTZWxlY3RlZENvdW50cnkgOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGlzTW9kZXJuQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIGlmKChjYXJldFBvc2l0aW9uID09PSAxKSAmJiAoZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCA9PT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zaXRpb24gPSBjYXJldFBvc2l0aW9uIC0gZGlmZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjYXJldFBvc2l0aW9uID4gMCAmJiBvbGRGb3JtYXR0ZWRUZXh0Lmxlbmd0aCA+PSBmb3JtYXR0ZWROdW1iZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5udW1iZXJJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShjYXJldFBvc2l0aW9uLCBjYXJldFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RHJvcERvd246IGZhbHNlfSk7XG4gICAgfSxcbiAgICBoYW5kbGVGbGFnSXRlbUNsaWNrKGNvdW50cnkpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3RlZENvdW50cnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeTtcbiAgICAgICAgdmFyIG5leHRTZWxlY3RlZENvdW50cnkgPSBmaW5kV2hlcmUodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCBjb3VudHJ5KTtcblxuICAgICAgICAvLyB0aW55IG9wdGltaXphdGlvblxuICAgICAgICBpZihjdXJyZW50U2VsZWN0ZWRDb3VudHJ5LmlzbzIgIT09IG5leHRTZWxlY3RlZENvdW50cnkuaXNvMikge1xuICAgICAgICAgICAgLy8gVE9ETyAtIHRoZSBiZWxvdyByZXBsYWNlbWVudCBpcyBhIGJ1Zy4gSXQgd2lsbCByZXBsYWNlIHN0dWZmIGZyb20gbWlkZGxlIHRvb1xuICAgICAgICAgICAgdmFyIG5ld051bWJlciA9IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLnJlcGxhY2UoY3VycmVudFNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSwgbmV4dFNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSk7XG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIobmV3TnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJyksIG5leHRTZWxlY3RlZENvdW50cnkuZm9ybWF0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvdW50cnk6IG5leHRTZWxlY3RlZENvdW50cnksXG4gICAgICAgICAgICAgICAgZnJlZXplU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlcjogZm9ybWF0dGVkTnVtYmVyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JUb0VuZCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShmb3JtYXR0ZWROdW1iZXIsIG5leHRTZWxlY3RlZENvdW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wRG93bjogZmFsc2V9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlSW5wdXRGb2N1cygpIHtcbiAgICAgICAgLy8gdHJpZ2dlciBwYXJlbnQgY29tcG9uZW50J3Mgb25Gb2N1cyBoYW5kbGVyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uRm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWVyLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9maWxsRGlhbENvZGUoKTtcbiAgICB9LFxuICAgIF9tYXBQcm9wc1RvU3RhdGUocHJvcHMpIHtcbiAgICAgICAgbGV0IGlucHV0TnVtYmVyO1xuXG4gICAgICAgIGlmKHByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgaW5wdXROdW1iZXIgPSBwcm9wcy5pbml0aWFsVmFsdWVcbiAgICAgICAgfSBlbHNlIGlmKHByb3BzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgICAgICBpbnB1dE51bWJlciA9IHByb3BzLmluaXRpYWxWYWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0TnVtYmVyID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZENvdW50cnlHdWVzcyA9IHRoaXMuZ3Vlc3NTZWxlY3RlZENvdW50cnkoaW5wdXROdW1iZXIucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gICAgICAgIGxldCBzZWxlY3RlZENvdW50cnlHdWVzc0luZGV4ID0gZmluZEluZGV4KGFsbENvdW50cmllcywgc2VsZWN0ZWRDb3VudHJ5R3Vlc3MpO1xuICAgICAgICBsZXQgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIoXG4gICAgICAgICAgICBpbnB1dE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpLCBzZWxlY3RlZENvdW50cnlHdWVzcyA/IHNlbGVjdGVkQ291bnRyeUd1ZXNzLmZvcm1hdCA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogc2VsZWN0ZWRDb3VudHJ5R3Vlc3MsXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IHNlbGVjdGVkQ291bnRyeUd1ZXNzSW5kZXgsXG4gICAgICAgICAgICBmb3JtYXR0ZWROdW1iZXI6IGZvcm1hdHRlZE51bWJlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBfZmlsbERpYWxDb2RlKCkge1xuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXMgYmxhbmssIGluc2VydCBkaWFsIGNvZGUgb2YgdGhlIHNlbGVjdGVkIGNvdW50cnlcbiAgICAgICAgaWYodGhpcy5yZWZzLm51bWJlcklucHV0LnZhbHVlID09PSAnKycpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1hdHRlZE51bWJlcjogJysnICsgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkuZGlhbENvZGV9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgX2dldEhpZ2hsaWdodENvdW50cnlJbmRleChkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gaGFkIHRvIHdyaXRlIG93biBmdW5jdGlvbiBiZWNhdXNlIHVuZGVyc2NvcmUgZG9lcyBub3QgaGF2ZSBmaW5kSW5kZXguIGxvZGFzaCBoYXMgaXRcbiAgICAgICAgdmFyIGhpZ2hsaWdodENvdW50cnlJbmRleCA9IHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ICsgZGlyZWN0aW9uO1xuXG4gICAgICAgIGlmKGhpZ2hsaWdodENvdW50cnlJbmRleCA8IDBcbiAgICAgICAgICAgIHx8IGhpZ2hsaWdodENvdW50cnlJbmRleCA+PSAodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLmxlbmd0aCArIHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBoaWdobGlnaHRDb3VudHJ5SW5kZXggLSBkaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0Q291bnRyeUluZGV4O1xuICAgIH0sXG4gICAgLy8gbWVtb2l6ZSBzZWFyY2ggcmVzdWx0cy4uLiBjYWNoaW5nIGFsbCB0aGUgd2F5XG4gICAgX3NlYXJjaENvdW50cnk6IG1lbW9pemUoZnVuY3Rpb24ocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgaWYoIXF1ZXJ5U3RyaW5nIHx8IHF1ZXJ5U3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgaW5jbHVkZSB0aGUgcHJlZmVycmVkIGNvdW50cmllcyBpbiBzZWFyY2hcbiAgICAgICAgdmFyIHByb2JhYmxlQ291bnRyaWVzID0gZmlsdGVyKHRoaXMucHJvcHMub25seUNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0c1dpdGgoY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCksIHF1ZXJ5U3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHByb2JhYmxlQ291bnRyaWVzWzBdO1xuICAgIH0pLFxuICAgIHNlYXJjaENvdW50cnkoKSB7XG4gICAgICAgIGNvbnN0IHByb2JhYmxlQ2FuZGlkYXRlID0gdGhpcy5fc2VhcmNoQ291bnRyeSh0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nKSB8fCB0aGlzLnByb3BzLm9ubHlDb3VudHJpZXNbMF07XG4gICAgICAgIGNvbnN0IHByb2JhYmxlQ2FuZGlkYXRlSW5kZXggPSBmaW5kSW5kZXgodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCBwcm9iYWJsZUNhbmRpZGF0ZSkgKyB0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGg7XG5jb25zb2xlLmxvZygncHJvYmFibGVDYW5kaWRhdGVJbmRleCcsIHByb2JhYmxlQ2FuZGlkYXRlSW5kZXgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRFbGVtZW50KHByb2JhYmxlQ2FuZGlkYXRlSW5kZXgpLCB0cnVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogcHJvYmFibGVDYW5kaWRhdGVJbmRleFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duKSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGllIGhhY2tcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBfbW92ZUhpZ2hsaWdodChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogc2VsZi5fZ2V0SGlnaGxpZ2h0Q291bnRyeUluZGV4KGRpcmVjdGlvbilcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnNjcm9sbFRvKHNlbGYuZ2V0RWxlbWVudChzZWxmLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleCksIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2Uga2V5cy5ET1dOOlxuICAgICAgICAgICAgICAgICAgICBfbW92ZUhpZ2hsaWdodCgxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGtleXMuVVA6XG4gICAgICAgICAgICAgICAgICAgIF9tb3ZlSGlnaGxpZ2h0KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGtleXMuRU5URVI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXIga2V5JywgdGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXgsIHRoaXMucHJvcHMub25seUNvdW50cmllc1t0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleF0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmxhZ0l0ZW1DbGljayh0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5jb25jYXQodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzKVt0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleF0sIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGtleXMuRVNDOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEcm9wRG93bjogZmFsc2V9LCB0aGlzLl9jdXJzb3JUb0VuZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmKChldmVudC53aGljaCA+PSBrZXlzLkEgJiYgZXZlbnQud2hpY2ggPD0ga2V5cy5aKSB8fCBldmVudC53aGljaCA9PT0ga2V5cy5TUEFDRSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWVyeVN0cmluZzogdGhpcy5zdGF0ZS5xdWVyeVN0cmluZyArIFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQud2hpY2gpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGVib3VuY2VkUXVlcnlTdGluZ1NlYXJjaGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUlucHV0S2V5RG93bihldmVudCkge1xuICAgICAgICBpZihldmVudC53aGljaCA9PT0ga2V5cy5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkVudGVyS2V5UHJlc3MoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVDbGlja091dHNpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93RHJvcERvd246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q291bnRyeURyb3BEb3duTGlzdCgpIHtcbiAgICAgICAgdmFyIGNvdW50cnlEcm9wRG93bkxpc3QgPSBtYXAodGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMuY29uY2F0KHRoaXMucHJvcHMub25seUNvdW50cmllcyksIGZ1bmN0aW9uKGNvdW50cnksIGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWZlcnJlZDogZmluZEluZGV4KHRoaXMuc3RhdGUucHJlZmVycmVkQ291bnRyaWVzLCB7aXNvMjogY291bnRyeS5pc28yfSkgPj0gMCxcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBpbnB1dEZsYWdDbGFzc2VzID0gYGZsYWcgJHtjb3VudHJ5LmlzbzJ9YDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtgZmxhZ19ub18ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfbm9fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWZsYWcta2V5PXtgZmxhZ19ub18ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGlhbC1jb2RlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtY291bnRyeS1jb2RlPXtjb3VudHJ5LmlzbzJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmxhZ0l0ZW1DbGljay5iaW5kKHRoaXMsIGNvdW50cnkpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lucHV0RmxhZ0NsYXNzZXN9IHN0eWxlPXt0aGlzLmdldEZsYWdTdHlsZSgpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NvdW50cnktbmFtZSc+e2NvdW50cnkubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGlhbC1jb2RlJz57JysnICsgY291bnRyeS5kaWFsQ29kZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGRhc2hlZExpID0gKDxsaSBrZXk9e1wiZGFzaGVzXCJ9IGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPik7XG4gICAgICAgIC8vIGxldCdzIGluc2VydCBhIGRhc2hlZCBsaW5lIGluIGJldHdlZW4gcHJlZmZlcmVkIGNvdW50cmllcyBhbmQgdGhlIHJlc3RcbiAgICAgICAgY291bnRyeURyb3BEb3duTGlzdC5zcGxpY2UodGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoLCAwLCBkYXNoZWRMaSk7XG5cbiAgICAgICAgY29uc3QgZHJvcERvd25DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnY291bnRyeS1saXN0JzogdHJ1ZSxcbiAgICAgICAgICAgICdoaWRlJzogIXRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsIHJlZj1cImZsYWdEcm9wZG93bkxpc3RcIiBjbGFzc05hbWU9e2Ryb3BEb3duQ2xhc3Nlc30+XG4gICAgICAgICAgICAgICAge2NvdW50cnlEcm9wRG93bkxpc3R9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH0sXG4gICAgZ2V0RmxhZ1N0eWxlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IDE2LFxuICAgICAgICAgICAgaGVpZ2h0OiAxMSxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoaXMucHJvcHMuZmxhZ3NJbWFnZVBhdGh9KWBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGhhbmRsZUlucHV0Qmx1cigpIHtcbiAgICAgIGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uQmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cih0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlciwgdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgYXJyb3dDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnYXJyb3cnOiB0cnVlLFxuICAgICAgICAgICAgJ3VwJzogdGhpcy5zdGF0ZS5zaG93RHJvcERvd25cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpbnB1dENsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdmb3JtLWNvbnRyb2wnOiB0cnVlLFxuICAgICAgICAgICAgJ2ludmFsaWQtbnVtYmVyJzogIXRoaXMucHJvcHMuaXNWYWxpZCh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpKVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmxhZ1ZpZXdDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAnZmxhZy1kcm9wZG93bic6IHRydWUsXG4gICAgICAgICAgICAnb3Blbi1kcm9wZG93bic6IHRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbnB1dEZsYWdDbGFzc2VzID0gYGZsYWcgJHt0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeS5pc28yfWA7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyZWFjdC10ZWwtaW5wdXQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZXMpfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5wdXRDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVJbnB1dEZvY3VzfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlSW5wdXRCbHVyfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlSW5wdXRLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgIHJlZj1cIm51bWJlcklucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J3RlbCdcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybj17dGhpcy5wcm9wcy5wYXR0ZXJufVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5zdGF0ZS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj0nZmxhZ0Ryb3BEb3duQnV0dG9uJyBjbGFzc05hbWU9e2ZsYWdWaWV3Q2xhc3Nlc30gb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleWRvd259ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9J3NlbGVjdGVkRmxhZycgb25DbGljaz17dGhpcy5oYW5kbGVGbGFnRHJvcGRvd25DbGlja30gY2xhc3NOYW1lPSdzZWxlY3RlZC1mbGFnJyB0aXRsZT17YCR7dGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkubmFtZX06ICsgJHt0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbnB1dEZsYWdDbGFzc2VzfSBzdHlsZT17dGhpcy5nZXRGbGFnU3R5bGUoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fycm93Q2xhc3Nlc30+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dEcm9wRG93biA/IHRoaXMuZ2V0Q291bnRyeURyb3BEb3duTGlzdCgpIDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGUoUmVhY3RUZWxlcGhvbmVJbnB1dCk7XG4iXX0=
