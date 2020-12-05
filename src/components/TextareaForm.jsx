import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledForm = styled(Card)`
	margin-top: 6px;
	display: flex;
	align-items: center;
	padding: 12px;
`

const StyledTextarea = styled.textarea`
	background-color: var(--grey);
	width: 100%;
	font-size: 14px;
	border: none;
	border-radius: 4px;
	padding: 12px;
	font-size: 15px;
	height: 20px;
	&:hover {
		background-color: var(--darker-grey);
	}
`

const StyledSubmit = styled.input`
	background-color: var(--white);
	background-image: url(${(props) => props.icon});
	background-repeat: no-repeat;
	background-position: center;
	height: 28px;
	width: 28px;
	border: none;
	margin-left: 12px;
`

export default class PostInput extends React.Component {
	handleKeyDown(textarea) {
		textarea.target.style.height = 'inherit'
		textarea.target.style.height = `${Math.min(
			textarea.target.scrollHeight,
			150
		)}px`
	}

	render() {
		let textarea = React.createRef()

		return (
			<StyledForm>
				<StyledTextarea
					placeholder={this.props.placeholder}
					ref={textarea}
					onKeyDown={this.handleKeyDown}
				/>
				<StyledSubmit
					type='submit'
					value=''
					onClick={() => this.props.onclick(textarea.current.value)}
					icon={this.props.icon}
				></StyledSubmit>
			</StyledForm>
		)
	}
}
