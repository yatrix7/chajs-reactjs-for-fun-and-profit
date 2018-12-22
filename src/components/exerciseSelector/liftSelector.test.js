import React from 'react'
import { arrayOf, object } from 'prop-types'

const LiftSelector = ({ lifts }) => (
	<div class="form-group col-md-4">
		<label for="exercise">Lift</label>
		<select id="exercise" class="form-control">
			{lifts.map(exercise => (
				// concession for simplicity: not the best unique value to act as a key
				// wouldn't do this in production as each exercise would have an id
				<option value={exercise.id}>{exercise.name}</option>
			))}
		</select>
	</div>
)

LiftSelector.propTypes = {
	lifts: arrayOf(object)
}

export default LiftSelector
