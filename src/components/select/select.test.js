import React from 'react'
import renderer from 'react-test-renderer'
import Select from './select'

it('renders correctly with weight', () => {
	const obj = { value: 9 }
	const tree = renderer
		.create(
			<Select
				id={'9'}
				name={'keanumovies'}
				label={'Keanu Movies'}
				value={obj.value}
				options={[
					{ id: 1, name: 'Point Break' },
					{ id: 2, name: 'John Wick' },
					{ id: 3, name: 'The Matrix' }
				]}
				onChange={jest.fn()}
				className={'keanu-movies'}
			/>
		)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
