let state = {
	users: [
		{
			id: '0',
			name: 'Vlad Peach',
			avatar:
				'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
			state: 'online',
			birth: '15 May',
			status: 'low flex',
			home: 'Moscow',
			friends: '19',
			posts: [
				{
					text: 'Somebody once told me',
					date: '11 November 17:08',
				},
				{
					text: 'The world is gonna roll me',
					date: '12 November 17:42',
				},
			],
		},
		{
			id: '1',
			name: 'Nick Null',
			avatar:
				'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			birth: '15 January',
			state: 'offline',
			status: '~take my hand~',
			home: 'Samara',
			friends: '106',
		},
		{
			id: '2',
			name: 'Serge Jar',
			avatar:
				'https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60',
			birth: '15 January',
			state: 'offline',
			status: '~take my hand~',
			home: 'Samara',
			friends: '106',
		},
	],
	dialogs: [
		{
			companion_id: '1',
			companion_name: 'Nick Null' ,
			compation_avatar:
				'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
		}
	],
	messages: [
		{
			sender_id: '0',
			recipient_id: '1',
			text: 'Sup',
			date: '11 November 10:08',
		},
		{
			sender_id: '1',
			recipient_id: '0',
			text: 'Hey',
			date: '11 November 10:47',
		},
	],
}

export let AddPost = (postText) => {
	let newPost = {
		id: 2,
		sender_id: 0,
		text: postText,
		date: Date().toLocaleString(),
	}

	state.posts.push(newPost)
}

export default state
