import React, { Component } from 'react'
import { arrayOf, object, func } from 'prop-types'
import Lift from './lift'
import liftFactory from '../../helpers/liftFactory'

class LiftContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lift: liftFactory.of()
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
			// keep the state synced with parent
			this.props.onUpdate(this.state.lift)
		)
	}

	render() {
		const { lifts, reps, sets } = this.props

		return (
			<Lift
				lift={this.state.lift}
				lifts={lifts}
				sets={sets}
				reps={reps}
				onChange={this.onChange}
			/>
		)
	}
}

LiftContainer.propTypes = {
	lifts: arrayOf(object),
	sets: arrayOf(object),
	reps: arrayOf(object),
	onUpdate: func.isRequired
}

export default LiftContainer
