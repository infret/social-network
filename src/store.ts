export interface userInterface {
	name: string,
	avatar: string,
	online: boolean,
	birth: string,
	home: string,
	friends: number
}

export interface messageInterface {
	sender_id?: number,
	recipient_id?: number,
	text: string,
	date: string,
	name? : string,
	avatar? : string,
	companion_id?: number
}

export interface postInterface {
	sender_id?: number,
	text: string,
	date: string
	name : string,
	avatar : string
}

export interface dataInterface {
	currentUserId: number,
	users: Array<userInterface>,
	messages: Array<messageInterface>
	posts: Array<postInterface>
}

export let data = {
	currentUserId: 0,
	users: [
		{
			name: 'Vlad Peach',
			avatar: 'https://images.unsplash.com/photo-1503212556734-c0ca0c49c8b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbGhvdWV0dGV8ZW58MHwyfDB8&auto=format&fit=crop&w=400&q=60',
			online: true,
			birth: '15 May',
			home: 'Moscow',
			friends: 19,
		},
		{
			name: 'Nick Null',
			avatar: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
			birth: '15 January',
			online: false,
			home: 'Samara',
			friends: 36,
		},
		{
			name: 'Serge Jar',
			avatar: 'https://images.unsplash.com/photo-1500389723459-ca24a5564899?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBzaGFkb3d8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60',
			birth: '15 January',
			online: false,
			home: 'Samara',
			friends: 106,
		},
	],
	messages: [
		{
			sender_id: 0,
			recipient_id: 1,
			text: 'Sup',
			date: '11 Nov, 10:08',
		},
		{
			sender_id: 1,
			recipient_id: 0,
			text: 'Hey',
			date: '11 Nov, 10:47',
		},
	],
	posts: [
		{
			sender_id: 0,
			text: 'Somebody once told me',
			date: '11 Nov, 17:08',
		},
		{
			sender_id: 1,
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