export const curry = fn => (...args) =>
  fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args)

export const any = curry((pred, list) => {
  if (list && list.some && typeof list.some === "function") {
    return list.some(pred)
  } else {
    return list.reduce((acc, item) => {
      return acc || pred(item)
    }, false)
  }
})

export const prop = curry((propName, obj) => {
  return obj[propName]
})

export const propEq = curry((propName, val, obj) => {
  if (!obj) {
    return false
  } else {
    return val === obj[propName]
  }
})

export const find = curry((pred, list) => {
  return list.reduce((acc, item) => {
    if (pred(item)) {
      return item
    } else {
      return acc
    }
  }, undefined)
})

export const equals = curry((a, b) => {
  return a === b
})

export const findIndex = curry((finder, list) => {
  return list.reduce((acc, item, index) => {
    if (finder(item)) {
      return index
    } else {
      return acc
    }
  }, -1)
})

export function first(list) {
  return list[0]
}

export const head = first

export function tail(list) {
  return list.slice(1)
}

export const startsWith = curry((prefix, str) => {
  if (!str) {
    return false
  } else {
    return str.indexOf(prefix) === 0
  }
})
