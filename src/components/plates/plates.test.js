import React from 'react'
import renderer from 'react-test-renderer'
import Plates from './plates'

it('renders correctly with weight', () => {
	const tree = renderer
		.create(
			<Plates weight={355} className={'point-break-is-a-great-movie'} />
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})

it('renders correctly with no weight', () => {
	const tree = renderer
		.create(
			<Plates weight={0} className={'point-break-is-a-great-movie'} />
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
