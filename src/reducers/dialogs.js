const ADD_DIALOG = 'ADD_DIALOG'

const initialState = {
	dialogs: [
		{
			companion_id: '1',
			companion_name: 'Nick Null',
			compation_avatar:
				'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
		},
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DIALOG:
			state.messages.push({
				companion_id: '1',
				companion_name: 'Nick Null',
				compation_avatar:
					'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			})
			return state
		default:
			return state
	}
}

export default dialogsReducer
