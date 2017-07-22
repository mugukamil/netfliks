/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import Search from '../js/Search'
import ShowCard from '../js/ShowCard'
import { shows } from '../public/data.json'
import { store, rootReducer } from '../js/Store'

// test('Should render the brand', () => {
//     const wrapper = shallow(<Search />)

//     expect(wrapper.contains(<h1 className="brand">svideo</h1>)).toBe(true)
// })

// test('should render as many shows as there are data for', () => {
//     const wrapper = shallow(<Search />)

//     expect(wrapper.find(ShowCard).length).toEqual(shows.length)
// })

// test('should filter correctly given new state', () => {
//     const wrapper = mount(<Search />)
//     const input = wrapper.find('.search-input')

//     input.node.value = 'house'
//     input.simulate('change')
//     expect(wrapper.state('searchTerm')).toEqual('house')
//     expect(wrapper.find('.show-card').length).toEqual(2)

// })

test('Store should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })

    expect(state).toEqual({ searchTerm: '' })
})

test('Store should handle searchTerm actions', () => {
    const state = rootReducer({searchTerm: 'some random string'}, { type: 'setSearchTerm', value: 'correct string' })

    expect(state).toEqual({ searchTerm: 'correct string' })
})
