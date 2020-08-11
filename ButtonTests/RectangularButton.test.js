// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import RectangleButton from '../../../Components/Buttons/defaultButton'

describe('RectangleButton should render without any error', () => {
  it('RectangleButton should render correctly', () => {
    const component = shallow(<RectangleButton />)
    expect(component).toMatchSnapshot()
  })
  it('RectangleButton should be disabled', () => {
    const wrapper = mount(<RectangleButton disabled />).props()
    expect(wrapper.disabled).toBe(true)
  })
  it('RectangleButton should be bordered', () => {
    const wrapper = mount(<RectangleButton bordered />).props()
    expect(wrapper.bordered).toBe(true)
  })
  it('RectangleButton should be filled', () => {
    const wrapper = mount(<RectangleButton filled />).props()
    expect(wrapper.filled).toBe(true)
  })
})
