import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import './lift.css'

const LiftSelector = ({ name, label, lifts, onChange }) => (
	<div className={'lift-selector'}>
		{label && (
			<label for={name} className={'lift-selector__label'}>
				{label}
			</label>
		)}
		<select
			id={name}
			name={name}
			className={'form-control'}
			onChange={onChange}
		>
			{lifts.map(exercise => (
				<option value={exercise.id}>{exercise.name}</option>
			))}
		</select>
	</div>
)

LiftSelector.propTypes = {
	name: string.isRequired,
	label: string,
	lifts: arrayOf(object),
	onChange: func
}

export default LiftSelector
