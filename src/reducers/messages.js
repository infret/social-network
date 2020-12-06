import { getCurrentDate } from '../store'

const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
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
	messageText: '',
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE_TEXT:
			state.newMessageText = action.text
			return state
		case ADD_MESSAGE:
			state.messages.push({
				sender_id: '0',
				recipient_id: '1',
				text: state.newMessageText,
				date: getCurrentDate(),
			})
			state.newMessageText = ''
			return state
		default:
			return state
	}
}

export default messagesReducer
