import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import Select from '../select/select'
import shortid from 'shortid'

const Lift = ({ onChange, label, lifts, sets, reps }) => {
	const id = shortid.generate()

	return (
		<div className={'container'}>
			<div className={'row'}>
				<Select
					className={'col-sm'}
					id={`lift-${id}`}
					label={label}
					onChange={onChange}
					options={lifts}
				/>
			</div>
			<div className={'row'}>
				<div className={'col-sm'}>
					<label htmlFor={`weight-${id}`} className={'label'}>
						Weight
					</label>
					<input
						type="text"
						id={`weight-${id}`}
						name="weight"
						className={'form-control'}
						onChange={onChange}
					/>
				</div>
				<Select
					// explict setting of props
					id={`sets-${id}`}
					className={'col-sm'}
					name="sets"
					label="Sets"
					onChange={onChange}
					options={sets}
				/>
				<Select
					className={'col-sm'}
					// using spread operator to pass props
					{...{
						id: `reps-${id}`,
						name: 'reps',
						label: 'Reps',
						onChange,
						options: reps
					}}
				/>
			</div>
		</div>
	)
}

Lift.defaultProps = {
	label: 'Lift'
}

Lift.propTypes = {
	name: string.isRequired,
	label: string,
	lifts: arrayOf(object),
	reps: arrayOf(object),
	sets: arrayOf(object),
	onChange: func
}

export default Lift
