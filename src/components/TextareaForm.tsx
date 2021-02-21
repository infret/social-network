import React, { MutableRefObject, useRef } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  padding: 12px;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 15px;
  height: 20px;
`

const StyledSubmit = styled.button<{ icon: string }>`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  height: 28px;
  width: 28px;
  border: none;
  margin-left: 12px;
`

interface Props {
  placeholder: string
  icon: string
  onclick: (postText: string) => void
}

export default function TextareaForm(props: Props) {
  let textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>

  function handleKeyUp() {
    if (
      textareaRef.current.scrollHeight > textareaRef.current.clientHeight &&
      textareaRef.current.clientHeight < 200
    ) {
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }

  return (
    <StyledForm>
      <StyledTextarea ref={textareaRef} placeholder={props.placeholder} onKeyUp={handleKeyUp} />
      <StyledSubmit
        value=''
        onClick={() => props.onclick(textareaRef.current.value)}
        icon={props.icon}
      />
    </StyledForm>
  )
}
