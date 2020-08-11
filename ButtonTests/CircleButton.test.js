// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import CircleEllipse from '../../../Components/Buttons/circleEllipse'

describe('CircleEllipse', () => {
  it('Circular Button should render correctly', () => {
    const component = shallow(<CircleEllipse />)
    expect(component).toMatchSnapshot()
  })
  it('Circular Button should be disabled', () => {
    const wrapper = mount(<CircleEllipse disabled />).props()
    expect(wrapper.disabled).toBe(true)
  })
  it('Circular Button should be filled', () => {
    const wrapper = mount(<CircleEllipse filled />).props()
    expect(wrapper.filled).toBe(true)
  })
})
