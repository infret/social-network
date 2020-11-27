import React from 'react'
import styled from 'styled-components'
import Message from './Message'

const StyledMessages = styled.div``

export default class Messenger extends React.Component {
	render() {
		return (
			<StyledMessages>
				<Message
					name='Владислав Печкин'
					avatar='https://sun1-27.userapi.com/impg/Gpwt9PAYpQ1fSbxgvqKzHsTYRz_rizsHoHH4xw/4lObKzpXve4.jpg?size=50x0&quality=88&crop=0,34,347,347&sign=dff5ecacb798c995e162897a4c2f4e72&ava=1'
					text='А он слепой!'
					date='12 ноя в 10:30'
				/>
			</StyledMessages>
		)
	}
}
