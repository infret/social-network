import React, { MutableRefObject, useRef } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 15px;
  height: 20px;
  line-height: 20px;
  bottom: 0;
  margin-left: 12px;
`

const StyledSubmit = styled.button`
  color: dodgerblue;
  font-size: 15px;
  height: 20px;
  line-height: 20px;
  width: 30px;
  margin-right: 15px;
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
      <StyledSubmit onClick={() => props.onclick(textareaRef.current.value, props.id)}>
        Send
      </StyledSubmit>
    </StyledForm>
  )
}
