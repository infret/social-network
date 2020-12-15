export let data = {
	currentUserId: '0',
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
			birth: '15 January',
			status: 'offline',
			home: 'Samara',
			friends: '106',
		},
		{
			id: '2',
			name: 'Serge Jar',
			avatar:
					'https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60',
			birth: '15 January',
			status: 'offline',
			home: 'Samara',
			friends: '106',
		},
	],
	messages: [
		{
			sender_id: '0',
			recipient_id: '1',
			text: 'Sup',
			date: '11 Nov, 10:08',
		},
		{
			sender_id: '1',
			recipient_id: '0',
			text: 'Hey',
			date: '11 Nov, 10:47',
		},
	],
	posts: [
		{
			sender_id: '0',
			text: 'Somebody once told me',
			date: '11 Nov, 17:08',
		},
		{
			sender_id: '1',
			text: 'The world is gonna roll me',
			date: '12 Nov, 17:42',
		},
	],
}

export function getCurrentDate() {
	return new Intl.DateTimeFormat('en-GB', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	}).format(Date.now())
}

export function getPosts(sender_id) {
	let posts = []
	for (let i = 0; i < data.posts.length; i++) {
		if (sender_id) {
			if (data.posts[i].sender_id === sender_id) {
				posts.push({
					name: data.users[sender_id].name,
					avatar: data.users[sender_id].avatar,
					text: data.posts[i].text,
					date: data.posts[i].date,
				})
			}
		} else {
			posts.push({
				name: data.users[data.posts[i].sender_id].name,
				avatar: data.users[data.posts[i].sender_id].avatar,
				text: data.posts[i].text,
				date: data.posts[i].date,
			})
		}
	}
	return posts
}

export function getMessages(companion_id) {
	let messages = []
	data.messages.forEach((item, i) => {
		if ((data.messages[i].sender_id === companion_id && data.messages[i].recipient_id === data.currentUserId) || (data.messages[i].sender_id === data.currentUserId && data.messages[i].recipient_id === companion_id)) {
			messages.push({
				name: data.users[data.messages[i].sender_id].name,
				avatar: data.users[data.messages[i].sender_id].avatar,
				text: data.posts[i].text,
				date: data.posts[i].date,
			})
		}
	})
	return messages
}

// for (let i = 0; i < data.messages.length; i++) {
// 	if ((data.messages[i].sender_id === companion_id && data.messages[i].recipient_id === data.currentUserId) || (data.messages[i].sender_id === data.currentUserId && data.messages[i].recipient_id === companion_id)) {
// 		messages.push({
// 			name: data.users[data.messages[i].sender_id].name,
// 			avatar: data.users[data.messages[i].sender_id].avatar,
// 			text: data.posts[i].text,
// 			date: data.posts[i].date,
// 		})
// 	}
// }

export function getDialogs() {
	let dialogs = []
	for (let i = 0; i < data.messages.length; i++) {
		if (data.messages[i].recipient_id === data.currentUserId) {
			dialogs.push({
				id: data.users[data.messages[i].sender_id].id,
				name: data.users[data.messages[i].sender_id].name,
				avatar: data.users[data.messages[i].sender_id].avatar,
				text: data.messages[i].text,
				date: data.messages[i].date,
			})
		}
	}
	return dialogs
}