// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import EntityList from '../../../Components/Entity/listOfEntities'

describe('Entity List should render without any error', () => {
  it('Entity List should render correctly', () => {
    const component = shallow(<EntityList />)
    expect(component).toMatchSnapshot()
  })
  it('Entities in EntityList should have same number of entity names and entity images', () => {
    const wrapper = mount(<EntityList />).props()
    const numberOfEntityNames = wrapper.entityName.length
    const numberOfEntityImages = wrapper.entityImg.length
    expect(numberOfEntityImages).toEqual(numberOfEntityNames)
  })
})
