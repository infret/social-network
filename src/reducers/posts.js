import {getCurrentDate} from '../store'

const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const ADD_POST = 'ADD_POST'

const initialState = {
  posts: [
    {
      sender_id: '0',
      text: 'Somebody once told me',
      date: '11 November 17:08',
    },
    {
      sender_id: '0',
      text: 'The world is gonna roll me',
      date: '12 November 17:42',
    },
  ],
  postText: '',
}

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_POST_TEXT:
			state.newpostText = action.text
			return state
		case ADD_POST:
			state.posts.push({
				sender_id: '0',
				recipient_id: '1',
				text: state.newPostText,
				date: getCurrentDate(),
      })
      state.newpostText = ''
			return state
		default:
			return state
	}
}
