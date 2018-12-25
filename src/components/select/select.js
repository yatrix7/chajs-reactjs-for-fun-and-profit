import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import './select.css'

const Select = ({ id, label, options, onChange, className }) => (
	<div className={className}>
		{label && (
			<label htmlFor={id} className={'label'}>
				{label}
			</label>
		)}
		<select
			id={id}
			name="lift"
			className={'form-control'}
			onChange={onChange}
		>
			<option defaultValue value={-1}>
				-
			</option>
			{options.map(option => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</select>
	</div>
)

Select.propTypes = {
	id: string.isRequired,
	label: string,
	options: arrayOf(object),
	onChange: func
}

export default Select
