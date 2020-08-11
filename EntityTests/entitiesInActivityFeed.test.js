// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import EntitiesInActivityFeed from '../../../Components/Entity/entitiesInActivityFeed'

describe('Entities In Activity Feed should render without any error', () => {
  it('Entities In Activity Feed should render correctly', () => {
    const component = shallow(<EntitiesInActivityFeed />)
    expect(component).toMatchSnapshot()
  })
  it('Entities In Activity Feed should have same number of entity names and entity images', () => {
    const wrapper = mount(<EntitiesInActivityFeed />).props()
    const numberOfEntityNames = wrapper.followingEntityNames.length
    const numberOfEntityImages = wrapper.followingEntityImages.length
    expect(numberOfEntityImages).toEqual(numberOfEntityNames)
  })
})
