var chai = require("chai")
var dirtyChai = require("dirty-chai")
var expect = chai.expect
chai.use(dirtyChai)
var find = require("lodash/find")
import countryData from "country-telephone-data"
var allCountries = countryData.allCountries

import replaceCountryCode from "../src/replace_country_code"

describe("country code replacement", () => {
  it("simple replacements", () => {
    let oldNumber = "+91"
    let currentSelectedCountry = find(allCountries, { iso2: "in" })
    let nextSelectedCountry = find(allCountries, { iso2: "iq" })
    let expectedNumber = "964"

    let newNumber = replaceCountryCode(
      currentSelectedCountry,
      nextSelectedCountry,
      oldNumber.replace(/\D/g, "")
    )
    expect(newNumber).to.equal(expectedNumber)
  })

  it("should take care of formatting nuances when replacing country codes", () => {
    // e.g. US virgin islands number formats to something like this '+1(340)'
    // the problem would be solved if we just take the numbers and replace country code and then reformat the number
    let oldNumber = "+1(340)"
    let currentSelectedCountry = find(allCountries, { iso2: "vi" })
    let nextSelectedCountry = find(allCountries, { iso2: "iq" })
    let expectedNumber = "964"

    let newNumber = replaceCountryCode(
      currentSelectedCountry,
      nextSelectedCountry,
      oldNumber.replace(/\D/g, "")
    )
    expect(newNumber).to.equal(expectedNumber)
  })
})
