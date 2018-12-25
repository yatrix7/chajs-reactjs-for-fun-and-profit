import React, { Component } from 'react'
import { arrayOf, object } from 'prop-types'
import Lift from './lift'

class LiftContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			// initialize the lift
			lift: { name: '-1', sets: -1, reps: -1 }
		}

		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		// update the lift
		this.setState(
			{
				lift: {
					...this.state.lift,
					[e.target.name]: e.target.value
				}
			},
			console.log(this.state.lift)
		)
	}

	render() {
		const { lifts, reps, sets } = this.props

		return (
			<Lift
				{...{ lift: this.state.lift, lifts, sets, reps }}
				onChange={this.onChange}
			/>
		)
	}
}

LiftContainer.PropTypes = {
	lifts: arrayOf(object),
	sets: arrayOf(object),
	reps: arrayOf(object)
}

export default LiftContainer
