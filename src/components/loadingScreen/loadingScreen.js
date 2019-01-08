import React from 'react'
import Spinner from '../spinner/spinner'
import './loadingScreen.css'

const LoadingScreen = () => {
	return (
		<div className={'loading-screen'}>
			<Spinner width="400px" />
		</div>
	)
}

export default LoadingScreen
