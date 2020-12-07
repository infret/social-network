// TODO: rewrite store to Redux, import reducers

const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'

export const store = {
	_state: {
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
		dialogs: [
			{
				companion_id: '1',
				companion_name: 'Nick Null',
				compation_avatar:
					'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			},
		],
		messages: [
			{
				sender_id: '0',
				recipient_id: '1',
				text: 'Sup',
				date: '11 Nov 10:08',
			},
			{
				sender_id: '1',
				recipient_id: '0',
				text: 'Hey',
				date: '11 Nov 10:47',
			},
		],
		posts: [
			{
				sender_id: '0',
				text: 'Somebody once told me',
				date: '11 Nov 17:08',
			},
			{
				sender_id: '1',
				text: 'The world is gonna roll',
				date: '12 Nov 17:42',
			},
		],
		textareaValue: ''
	},

	getState() {
		return store._state
	},

	dispatch(action){
		switch (action.type) {
			case UPDATE_POST_TEXT:
				store.getState.textareaValue = action.text
				return store.getState
			case 'ADD_POST':
				store.getState.posts.push({
					sender_id: '0',
					text: action.text,
					date: store.getCurrentDate(),
				})
				store.getState.textareaValue = ''
				return store.getState
			default:
				return store.getState
		}
	},

	addMessage(messageText) {
		if (messageText) {
			let newMessage = {
				sender_id: '0',
				recipient_id: '1',
				text: messageText,
				date: store.getCurrentDate(),
			}
			store._state.messages.push(newMessage)
		}
	},

	getCurrentDate() {
		const date = new Date()
		return (
			date.getDay() +
			' ' +
			date.toLocaleString('default', { month: 'short' }) +
			' ' +
			date.getHours() +
			':' +
			(date.getMinutes() < 10 ? '0' : '') +
			date.getMinutes()
		)
	},
}