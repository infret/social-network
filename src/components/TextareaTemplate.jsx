import React from 'react'
import styled from 'styled-components'
import Card from './CardTemplate'

const Template = styled(Card)`
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
	background-color: white;
	background-image: url(${(props) => props.icon});
	background-repeat: no-repeat;
	background-position: center;
	height: 28px;
	width: 28px;
	border: none;
	margin-left: 12px;
`

const TextareaTemplate = (props) => {
	let textarea = React.createRef()
	const handleKeyDown = (textarea) => {
		textarea.target.style.height = 'inherit'
		textarea.target.style.height = `${Math.min(
			textarea.target.scrollHeight,
			150
		)}px`
	}
	return (
		<Template>
			<StyledTextarea
				placeholder={props.placeholder}
				ref={textarea}
				// value={props.textareaValue}
				//onChange={props.updateTextareaValue}
				onKeyDown={handleKeyDown}
			/>
			<StyledSubmit
				type='submit'
				value=''
				onClick={(textarea) =>
					props.dispatch({
						type: props.action,
						text: textarea.current.value,
					})
				}
				icon={props.icon}
			></StyledSubmit>
		</Template>
	)
}
export default TextareaTemplate
