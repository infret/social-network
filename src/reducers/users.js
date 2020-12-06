const ADD_USER = 'ADD_USER'

const initialState = {
	users: [
		{
			id: '0',
			name: 'Vlad Peach',
			avatar:
				'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
			status: 'online',
			birth: '15 May',
			home: 'Moscow',
			friends: '19',
		},
		{
			id: '1',
			name: 'Nick Null',
			avatar:
				'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			birth: '15 Dec',
			status: 'offline',
			home: 'Verhnaya Pyshma',
			friends: '38',
		},
		{
			id: '2',
			name: 'Serge Jar',
			avatar:
				'https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60',
			birth: '27 Sep',
			status: 'offline',
			home: 'Samara',
			friends: '106',
		},
	],
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			state.users.push({
				id: '3',
				name: 'ban',
				avatar: 'ban',
				birth: 'ban',
				status: 'ban',
				home: 'ban',
				friends: 'ban',
			})
			return state
		default:
			return state
	}
}
