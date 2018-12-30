import React from 'react'
import renderer from 'react-test-renderer'
import Select from './select'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('select', () => {
	it('renders correctly with weight', () => {
		const obj = { value: '9' }
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

	it('can generate options', () => {
		const fakeObj = { value: '-1' },
			select = shallow(
				<Select
					id="9"
					label="Point Break (1991) Should Have Won the Oscar"
					name={'PointBreak1991'}
					value={fakeObj.value}
					options={[
						{ id: 1, name: 'Johnny Utah' },
						{ id: 2, name: 'Bohdi' },
						{ id: 3, name: 'Tyler' }
					]}
					onChange={jest.fn()}
					className={'fbi-agent'}
				/>
			),
			options = select.find('option')

		// the default option + the array of 3 objects we set props.options to
		expect(options.length).toEqual(4)
	})
})
