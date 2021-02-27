import { observer } from 'mobx-react-lite'
import React, { MutableRefObject, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { IStore } from '../store'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding-top: 10vh;
`

const Heading = styled.h1`
  margin: 10px 0;
  font-family: 'Lobster Two';
  text-align: center;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding: 20px;
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

const Note = styled.p`
  padding: 20px 12px;
  box-sizing: border-box;
  width: 100%;
  max-width: 540px;
`

const Link = styled.a`
  display: block;
  text-transform: lowercase;
  font-family: serif;
  margin: 20px auto;
`

interface Props {
  store: IStore
}

const Login = observer((props: Props) => {
  const history = useHistory()
  const loginUsername = useRef() as MutableRefObject<HTMLInputElement>
  const registerUsername = useRef() as MutableRefObject<HTMLInputElement>
  const avatar = useRef() as MutableRefObject<HTMLInputElement>
  const status = useRef() as MutableRefObject<HTMLInputElement>
  document.title = 'Login or register'
  return (
    <Page>
      <Heading>social network</Heading>
      <Container>
        <Form>
          <Input type='text' placeholder='Enter username' ref={loginUsername} />
          <Input
            type='submit'
            value='Login'
            onClick={() => {
              if (loginUsername.current.value) {
                if (
                  props.store.users.filter((user) => user.username === loginUsername.current.value)
                    .length
                ) {
                  props.store.setCurrentUser(loginUsername.current.value)
                  history.push('/social-network')
                } else {
                  alert('Incorrect username')
                }
              }
            }}
          />
        </Form>
        <Form>
          <Input type='text' placeholder='Enter username' ref={registerUsername} />
          <Input type='text' placeholder='Enter link to image' ref={avatar} />
          <Input type='text' placeholder='Write something about you' ref={status} />
          <Input
            type='submit'
            value='Register'
            onClick={() => {
              if (registerUsername.current.value) {
                if (
                  !props.store.users.filter(
                    (user) => user.username === registerUsername.current.value
                  ).length
                ) {
                  props.store.createUser(
                    registerUsername.current.value,
                    avatar.current.value,
                    status.current.value
                  )
                  props.store.setCurrentUser(registerUsername.current.value)
                  history.push('/social-network')
                } else {
                  alert('User already exists')
                }
              }
            }}
          />
        </Form>
      </Container>
      <Note>
        Note: this page is for demonstration purposes. All data and profile activity (messages,
        posts, etc.) exist only in the current browser session and disappear when the site is
        closed. No password is required, you can log in with any existing username (e.g.
        <b> infret</b>) or register a new one. When registering, specify your username and
        optionally link to your profile picture (avatar) and your profile status.
      </Note>
      <Link href='https://infret.github.io'>
        <i>by Infret</i>
      </Link>
    </Page>
  )
})
export default Login
