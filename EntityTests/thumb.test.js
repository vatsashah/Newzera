// Importing required library
import React from 'react'
import { shallow } from 'enzyme'

// Importing component to be tested
import Thumb from '../../../Components/Entity/thumb'

describe('Thumbnails should render without any error', () => {
  it('Thumbnails should render correctly', () => {
    const component = shallow(<Thumb />)
    expect(component).toMatchSnapshot()
  })
})
