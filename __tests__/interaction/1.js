import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson, { createSerializer } from 'enzyme-to-json'
import ReactTelephoneInput from '../../src/ReactTelephoneInput'

Enzyme.configure({ adapter: new Adapter() })

test('Interaction test 1', () => {
  const onEnterKeyPress = jest.fn()

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
    .simulate('keyDown', { keyCode: 13, which: 13 })
  wrapper
    .find('input')
    .at(0)
    .simulate('blur')
  expect(onEnterKeyPress.mock.calls.length).toEqual(1)
  expect(toJson(wrapper)).toMatchSnapshot()
})

test('Interaction test 2', () => {
  const onChange = jest.fn()

  const props = {
    preferredCountries: ['af', 'al'],
    defaultCountry: 'in',
    flagsImagePath: '/flags.723494a4.png',
    initialValue: '+9112121',
    inputProps: {
      autoFocus: true
    },
    onChange: formattedNumber => onChange(formattedNumber)
  }

  const wrapper = mount(<ReactTelephoneInput {...props} />)

  expect(toJson(wrapper)).toMatchSnapshot()
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_5"]').simulate('focus')
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_5"]').simulate('click')
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('change', { target: { value: '+91 121211', checked: false } })
  expect(onChange).toBeCalledWith('+91 12121-1')
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('keyDown', { keyCode: 50, which: 50 })
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('change', { target: { value: '+91 12121-12', checked: false } })
  expect(onChange).toBeCalledWith('+91 12121-12')
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('keyDown', { keyCode: 49, which: 49 })
  wrapper
    .find('[data-test-id="src_reacttelephoneinput_test_id_5"]')
    .simulate('change', { target: { value: '+91 12121-121', checked: false } })
  expect(onChange).toBeCalledWith('+91 12121-121')
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_5"]').simulate('blur')
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_7"]').simulate('click')
  wrapper
    .find('div')
    .at(9)
    .simulate('scroll')
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_5"]').simulate('focus')
  wrapper.find('[data-test-id="src_reacttelephoneinput_test_id_5"]').simulate('blur')

  // verify the number of times onChange would have been called
  expect(onChange.mock.calls.length).toBe(3)
  expect(toJson(wrapper)).toMatchSnapshot()
})
