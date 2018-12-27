import shortid from 'shortid'

const liftFactory = function() {
	return {
		// need an id for uniqueness
		id: shortid.generate(),
		liftId: '-1',
		weight: 45,
		sets: -1,
		reps: -1
	}
}

liftFactory.of = liftFactory

export default liftFactory
