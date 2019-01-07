import React from 'react'
import renderer from 'react-test-renderer'
import LoadingScreen from './loadingScreen'

it('renders correctly with weight', () => {
	const tree = renderer.create(<LoadingScreen />).toJSON()
	expect(tree).toMatchSnapshot()
})
