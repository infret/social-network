import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IUser } from '../store'

const Component = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
`

const Username = styled.p`
  color: black;
  text-decoration: none;
  font-weight: 600;
`

const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px;
  object-fit: cover;
`

interface Props {
  user: IUser
  link: string
}

export default function User(props: Props) {
  return (
    <Component to={props.link + props.user.id}>
      <Avatar src={props.user.avatar} />
      <Username>{props.user.username}</Username>
    </Component>
  )
}
