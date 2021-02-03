import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ProfileIcon from '../resources/profile.svg'
import HomeIcon from '../resources/home.svg'
import MessengerIcon from '../resources/message.svg'
import SearchIcon from '../resources/search.svg'

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 220px;
  height: 52px;
  display: flex;
  justify-content: space-evenly;
  z-index: 100;
  @media (max-width: 480px) {
    width: 100%;
    top: auto;
    bottom: 0;
    border-top: 1px solid gainsboro;
  }
`

const StyledLink = styled(NavLink)`
  padding: 13px;
`

const StyledImg = styled.img`
  width: auto;
  height: 26px;
`

interface propsInterface {
  currentUserId: number
}

export default function Sidebar(props: propsInterface) {
  return (
    <StyledNav>
      <StyledLink to='/'>
        <StyledImg src={HomeIcon} />
      </StyledLink>
      <StyledLink to='/search'>
        <StyledImg src={SearchIcon} />
      </StyledLink>
      <StyledLink to='/messenger'>
        <StyledImg src={MessengerIcon} />
      </StyledLink>
      <StyledLink to={'/user/' + props.currentUserId}>
        <StyledImg src={ProfileIcon} />
      </StyledLink>
    </StyledNav>
  )
}
