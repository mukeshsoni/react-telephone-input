import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'
import ReactTelephoneInput from '../../src/ReactTelephoneInput'

Enzyme.configure({ adapter: new Adapter() })

test('Interaction test 1', () => {
  const wrapper = mount(
    <ReactTelephoneInput
      defaultCountry="us"
      initialValue="+9112121"
      preferredCountries={['us', 'ca', 'zz', 'hk']}
      onEnterKeyPress={() => {
        onEnterKeyPress()
      }}
    />
  )

  expect(toJson(wrapper)).toMatchSnapshot()
  wrapper
    .find('input')
    .at(0)
    .simulate('focus')
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+91 121211', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 50, which: 50 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+91 12121-12', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+91 12121-121', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('blur')
  wrapper
    .find('input')
    .at(0)
    .simulate('focus')
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+36(121)211-211', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 50, which: 50 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+36(121)211-2112', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: '+36(121)211-21121', checked: false } })
  wrapper
    .find('input')
    .at(0)
    .simulate('blur')
  expect(toJson(wrapper)).toMatchSnapshot()
})
