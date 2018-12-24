import React from 'react'
import LiftSelector from './liftSelector'
import './lift.css'

const Lift = function({ name, onChange, label, lifts }) {
	const optionsFactory = count =>
		Array.from({ length: count }, (v, k) => k + 1).map(x => (
			<option value={x}>{x}</option>
		))

	return (
		<div className={'container'}>
			<div className={'row'}>
				<div class="col-sm">
					<LiftSelector
						{...{
							name,
							label,
							onChange,
							lifts
						}}
					/>
				</div>
			</div>
			<div className={'row'}>
				<div class="col-sm">
					<label for="weight" className={'lift-input__label'}>
						Weight
					</label>
					<input type="text" id="weight" class="form-control" />
				</div>
				<div class="col-sm">
					<label for="weight" className={'lift-input__label'}>
						Sets
					</label>
					<select
						id="sets"
						name="sets"
						className={'form-control'}
						onChange={onChange}
					>
						{optionsFactory(10)}
					</select>
				</div>
				<div class="col-sm">
					<label for="weight" className={'lift-input__label'}>
						Reps
					</label>
					<select
						id="reps"
						name="reps"
						className={'form-control'}
						onChange={onChange}
					>
						{optionsFactory(10)}
					</select>
				</div>
			</div>
		</div>
	)
}

Lift.propTypes = {}

export default Lift
