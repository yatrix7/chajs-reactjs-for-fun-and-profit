import React from 'react'
import renderer from 'react-test-renderer'
import Spinner from './spinner'

it('renders correctly with weight', () => {
	const tree = renderer.create(<Spinner />).toJSON()
	expect(tree).toMatchSnapshot()
})
