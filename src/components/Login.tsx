import React, { MutableRefObject, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { IStore } from '../store'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 640px;
  margin: auto;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  margin: 10px 0;
  font-family: 'Lobster Two';
`

const Input = styled.input`
  height: 36px;
  border: 1px solid gainsboro;
  border-radius: 4px;
  font-size: 15px;
  height: 36px;
  min-width: 120px;
  padding: 0 12px;
  margin: 8px 0;
`

const Button = styled.input`
  height: 36px;
  padding: 0 12px;
`

interface Props {
  store: IStore
}

const Login = (props: Props) => {
  const history = useHistory()
  let username = useRef() as MutableRefObject<HTMLInputElement>
  document.title = 'Login or register'
  return (
    <Page>
      <Heading>social network</Heading>
      <Input type='text' placeholder='Enter username' ref={username} />
      <Input type='password' placeholder='Enter password' />
      <Input
        type='submit'
        value='Login'
        onClick={() => {
          username.current.value && props.store.users.filter((user) => user.username === username.current.value).length &&
            props.store.setCurrentUser(
              props.store.users.filter((user) => user.username === username.current.value)[0].id
            )
          history.push('/social-network')
        }}
      />
    </Page>
  )
}
export default Login
