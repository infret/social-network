import React, {createRef} from 'react'
import styled from 'styled-components'
import Card from './Card'
import {dataInterface, postInterface} from '../store'

const StyledForm = styled(Card)`
  margin-top: 6px;
  display: flex;
  align-items: center;
  padding: 12px;
`

const StyledTextarea = styled.textarea`
  background-color: var(--grey);
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 15px;
  height: 20px;

  &:hover {
    background-color: var(--darker-grey);
  }
`

const StyledSubmit = styled.submit<{icon: string;}>`
  background-color: var(--white);
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  height: 28px;
  width: 28px;
  border: none;
  margin-left: 12px;
`

interface propsInterface {
  placeholder: string,
  icon: string,
  userId: number,
  onclick : (postText : string) => void
}

export default function TextareaForm(props : propsInterface){

  let textarea = createRef<HTMLInputElement>()

  function autoGrow (oField : HTMLInputElement) {
    if (oField.scrollHeight > oField.clientHeight) {
      oField.style.height = oField.scrollHeight + "px";
    }
  }

  return (
      <StyledForm>
        <StyledTextarea
            placeholder={props.placeholder}
            onKeyDown={autoGrow(this : HTMLInputElement)}
        />
        <StyledSubmit
            type='submit'
            value=''
            onClick={() => props.onclick(textarea.current?.value)}
            icon={props.icon}
        />
      </StyledForm>
  )
}