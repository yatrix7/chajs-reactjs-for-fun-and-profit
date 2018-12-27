import React from 'react'
import Lift from './lift'
import { func, arrayOf, object } from 'prop-types'

const Lifts = ({
	lifts,
	liftOptions,
	setOptions,
	repOptions,
	onChange,
	onUpdate
}) => (
	<div>
		{lifts.map((lift, index) => (
			<>
				<Lift
					lift={lift}
					lifts={liftOptions}
					sets={setOptions}
					reps={repOptions}
					onChange={onChange}
					onUpdate={onUpdate}
				/>
				{index < lifts.length - 1 && <hr />}
			</>
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

Lifts.propTypes = {
	lifts: arrayOf(object).isRequired,
	liftOptions: arrayOf(object).isRequired,
	setOptions: arrayOf(object).isRequired,
	repOptions: arrayOf(object).isRequired,
	onChange: func.isRequired,
	onUpdate: func.isRequired
}

export default Lifts
