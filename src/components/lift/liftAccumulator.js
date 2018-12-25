import React from 'react'
import Lift from './lift'

const LiftAccumulator = ({ lift, lifts, sets, reps, onChange }) => (
	<div>
		{lifts.map(lift => (
			<Lift {...lift} />
		))}
		<button
			type="button"
			class="btn btn-primary"
			onClick={this.props.addLift}
		>
			Add Lift
		</button>
	</div>
)

export default LiftAccumulator
