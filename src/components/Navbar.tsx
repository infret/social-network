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
  height: 50px;
  display: flex;
  @media (max-width: 480px) {
    width: 100%;
    top: auto;
    bottom: 0;
    justify-content: space-evenly;
    border-top: 1px solid gainsboro;
  }
`

const StyledLink = styled(NavLink)`
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  margin: 0 10px;
  width: auto;
  height: 28px;
`

interface propsInterface {
  currentUserId: number
}

export default function Sidebar(props: propsInterface) {
  return (
    <StyledNav>
      <StyledLink to='/feed'>
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
