// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import EntityCard from '../../../Components/Entity/entityCard'

describe('Entity Card should render without any error', () => {
  it('Entity Card should render correctly', () => {
    const component = shallow(<EntityCard />)
    expect(component).toMatchSnapshot()
  })
  it('Entity is not being followed', () => {
    const wrapper = mount(<EntityCard />).props()
    expect(wrapper.entityIsFollowing).toEqual(false)
  })
  it('Entity is being followed', () => {
    const wrapper = mount(<EntityCard entityIsFollowing />).props()
    expect(wrapper.entityIsFollowing).toEqual(true)
  })
})
