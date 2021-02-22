import React, { MutableRefObject, useRef } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-top: 1px solid gainsboro;
  height: 100%;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  height: 20px;
`

const StyledSubmit = styled.button`
  color: dodgerblue;
  font-size: 15px;
  margin-left: 6px;
`

interface Props {
  id?: any
  onclick: (text: string, post_id: number) => void
  placeholder: string
}

export default function TextareaForm(props: Props) {
  let textareaRef = useRef() as MutableRefObject<HTMLTextAreaElement>

  function handleChange() {
    if (
      textareaRef.current.scrollHeight > textareaRef.current.clientHeight &&
      textareaRef.current.clientHeight < 160
    ) {
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }

  return (
    <StyledForm>
      <StyledTextarea ref={textareaRef} onChange={handleChange} placeholder={props.placeholder} />
      <StyledSubmit value='' onClick={() => props.onclick(textareaRef.current.value, props.id)}>
        Send
      </StyledSubmit>
    </StyledForm>
  )
}
