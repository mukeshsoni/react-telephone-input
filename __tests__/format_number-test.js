var chai = require("chai")
var dirtyChai = require("dirty-chai")
var expect = chai.expect
chai.use(dirtyChai)
var find = require("lodash/find")
import countryData from "country-telephone-data"
var allCountries = countryData.allCountries

import formatNumber from "../src/format_number"

describe("format number", () => {
  it("should format number with just dial code", () => {
    let country = find(allCountries, { iso2: "in" })
    let number = "91"
    let expectedFormattedNumber = "+91"

    expect(formatNumber(number, country.format, true)).to.equal(
      expectedFormattedNumber
    )
  })

  it("simple format - should format number with dial code and some other numeric text", () => {
    let country = find(allCountries, { iso2: "in" })
    let number = "9187124"
    let expectedFormattedNumber = "+91 87124"

    expect(formatNumber(number, country.format, true)).to.equal(
      expectedFormattedNumber
    )
  })

  it("complex format - should format number with dashes in them", () => {
    let country = find(allCountries, { iso2: "us" })
    let number = "187124"
    let expectedFormattedNumber = "+1 (871) 24"
    let formattedNumber = formatNumber(number, country.format, true)

    expect(formattedNumber).to.equal(expectedFormattedNumber)
  })

  // the number if formatted without closing bracket because otherwise user can never delete characters using backspace
  // when the cursor is at a backspace
  it("should format number correctly at the boundary of brackets", () => {
    let country = find(allCountries, { iso2: "us" })
    let number = "1871"
    let expectedFormattedNumber = "+1 (871"
    let formattedNumber = formatNumber(number, country.format, true)

    expect(formattedNumber).to.equal(expectedFormattedNumber)
  })
})
