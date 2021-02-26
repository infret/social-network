import React, { MutableRefObject, useRef, useState } from 'react'
import styled from 'styled-components'
import ConfirmIcon from '../resources/confirm.svg'

const Form = styled.div<{ height: number }>`
  display: flex;
  height: ${(props) => props.height + 'px'};
  align-items: center;
  padding: 16px 0 4px 0;
  width: 100%;
`

const Textarea = styled.textarea`
  width: 100%;
  font-size: 15px;
  height: 100%;
  vertical-align: middle;
  margin: 0 0 0 12px;
`

const Button = styled.button`
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 60px;
  margin-bottom: 12px;
  background-image: url(${ConfirmIcon});
  cursor: pointer;
`

interface Props {
  id?: any
  onclick: (text: string, id: number) => void
  placeholder: string
}

export default function Input(props: Props) {
  let textarea = useRef() as MutableRefObject<HTMLTextAreaElement>
  const [height, setHeight] = useState(30)

  function handleChange() {
    height < 100 && setHeight(textarea.current.scrollHeight)
    textarea.current.value === '' && setHeight(30)
  }

  return (
    <Form height={height}>
      <Textarea ref={textarea} onChange={handleChange} placeholder={props.placeholder} />
      <Button
        onClick={() => {
          textarea.current.value && props.onclick(textarea.current.value, props.id)
          textarea.current.value = ''
          setHeight(30)
        }}
      ></Button>
    </Form>
  )
}
