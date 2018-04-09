import { findIndex, propEq, tail, head, startsWith } from "../src/cramda"

describe("findIndex", () => {
  it("should find correct index", () => {
    let people = [
      {
        id: 1,
        name: "mukesh"
      },
      {
        id: 2,
        name: "ritesh"
      },
      {
        id: 3,
        name: "Rakesh"
      }
    ]

    expect(findIndex(propEq("id", 1), people)).toEqual(0)
    expect(findIndex(propEq("name", "ritesh"), people)).toBe(1)
    expect(findIndex(propEq("name", "rohan"), people)).toBe(-1)
  })
})

describe("tail", () => {
  it("should return the tial of the list", () => {
    const items = [1, 2, 3, 4]

    expect(tail(items)).toEqual([2, 3, 4])
  })
})

describe("head", () => {
  it("should return the first element of list", () => {
    const items = [1, 2, 3, 4]
    expect(head(items)).toBe(1)
  })
})

describe("startsWith", () => {
  it("should return true if string starts with given prefix", () => {
    expect(startsWith("good", "good day")).toBe(true)
  })

  it("should return false if string does not start with given prefix", () => {
    expect(startsWith("fun", "crappy fun day")).toBe(false)
  })

  it("should take care of undefined/null input", () => {
    expect(startsWith("fun", undefined)).toBe(false)
  })
})
