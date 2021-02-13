import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IUser } from '../store'
import Avatar from './Avatar'

const StyledUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Username = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
`

interface propsInterface {
  user: IUser
  link: string
}

export default function User(props: propsInterface) {
  return (
    <StyledUser>
      <Avatar userId={props.user.id} src={props.user.avatar} />
      <Username to={props.link + props.user.id}>{props.user.username}</Username>
    </StyledUser>
  )
}
