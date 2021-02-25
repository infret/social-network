import React, { MutableRefObject, useRef, useState } from 'react'
import styled from 'styled-components'
import ConfirmIcon from '../resources/confirm.svg'

const Form = styled.div<{ height: number }>`
  display: flex;
  width: 100%;
  height: ${(props) => props.height + 'px'};
  align-items: center;
  position: relative;
  padding: 6px 12px;
  margin-top: 12px;
`

const Textarea = styled.textarea`
  width: 100%;
  font-size: 15px;
  height: 100%;
  vertical-align: middle;
`

const Button = styled.button`
  background-repeat: no-repeat;
  margin-bottom: 8px;
`

interface Props {
  id?: any
  onclick: (text: string, post_id: number) => void
  placeholder: string
}

export default function TextareaForm(props: Props) {
  let textarea = useRef() as MutableRefObject<HTMLTextAreaElement>
  const [height, setHeight] = useState(26)

  function handleChange() {
    height < 100 && setHeight(textarea.current.scrollHeight)
    textarea.current.value === '' && setHeight(30)
  }

  return (
    <Form height={height}>
      <Textarea ref={textarea} onChange={handleChange} placeholder={props.placeholder} />
      <Button
        onClick={() => textarea.current.value && props.onclick(textarea.current.value, props.id)}
      >
        <img src={ConfirmIcon} alt='Send' />
      </Button>
    </Form>
  )
}
