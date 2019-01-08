import React from 'react'
import { string } from 'prop-types'
import './spinner.css'

const Spinner = props => (
	<svg
		className="svg"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
		width={props.width}
	>
		<circle
			stroke="#0000FF"
			strokeWidth="4"
			cx="50"
			cy="50"
			r="45"
			fill="none"
		/>
		<circle
			stroke="#0000cc"
			strokeWidth="20"
			cx="50"
			cy="50"
			r="33"
			fill="none"
		/>
		<circle
			stroke="#0000FF"
			strokeWidth="4"
			cx="50"
			cy="50"
			r="21"
			fill="none"
		/>
		<circle
			stroke="#323232"
			strokeWidth="12"
			cx="50"
			cy="50"
			r="14"
			fill="none"
		/>
		<text className="fo-five">
			<tspan x="13" y="51">
				45
			</tspan>
			<tspan x="12" y="57">
				lbs
			</tspan>
		</text>
		<text className="upside-down-fo-five">
			<tspan x="13" y="50">
				45
			</tspan>
			<tspan x="12" y="57">
				lbs
			</tspan>
		</text>
	</svg>
)

Spinner.propTypes = {
	width: string
}

export default Spinner
