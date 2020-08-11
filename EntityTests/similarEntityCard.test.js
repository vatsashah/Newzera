// Importing required library
import React from 'react'
import { shallow, mount } from 'enzyme'

// Importing component to be tested
import SimilarEntityCard from '../../../Components/Entity/similarEntityCard'

describe('Similar entity Card should render without any error', () => {
  it('Similar entity Card should render correctly', () => {
    const component = shallow(<SimilarEntityCard />)
    expect(component).toMatchSnapshot()
  })
  it('Entities in Similar Entity cards section should have same number of entity names and entity images', () => {
    const wrapper = mount(<SimilarEntityCard />).props()
    const numberOfEntityNames = wrapper.entityName.length
    const numberOfEntityImages = wrapper.entityImg.length
    expect(numberOfEntityImages).toEqual(numberOfEntityNames)
  })
})
