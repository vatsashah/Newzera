// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import ActionBubble from '../../../Components/Buttons/actionBubble'

describe('Activity Button should render without any error', () => {
  it('Activity Button should render correctly', () => {
    const component = shallow(<ActionBubble />)
    expect(component).toMatchSnapshot()
  })
  it('Activity Button of type share should render correctly', () => {
    const wrapper = mount(<ActionBubble activityType="Share" />).props()
    expect(wrapper.activityType).toEqual('Share')
  })
  it('Activity Button of type react should render correctly', () => {
    const wrapper = mount(<ActionBubble activityType="React" />).props()
    expect(wrapper.activityType).toBe('React')
  })
  it('Activity Button of type raven should render correctly', () => {
    const wrapper = mount(<ActionBubble activityType="Raven" />).props()
    expect(wrapper.activityType).toBe('Raven')
  })
})
