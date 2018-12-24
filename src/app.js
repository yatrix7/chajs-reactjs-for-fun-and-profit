import React, { Component } from 'react'
import './app.css'
import WorkoutPlannerPage from './components/workoutPlanner/workoutPlannerPage'

class App extends Component {
	render() {
		return (
			<div className="App">
				<WorkoutPlannerPage />
			</div>
		)
	}
}

export default App
