import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ProfileIcon from '../resources/profile-icon.svg'
import FeedIcon from '../resources/feed-icon.svg'
import BlueFriendsIcon from '../resources/blue-friends-icon.svg'
import MessengerIcon from '../resources/messenger-icon.svg'
import BlueSearchIcon from '../resources/blue-search-icon.svg'

const StyledNav = styled.nav``

const StyledLink = styled(NavLink)`
  height: 44px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  &:hover {
  }
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
      <StyledLink to={'/user/' + props.currentUserId}>
        <StyledImg src={ProfileIcon} />
      </StyledLink>
      <StyledLink to='/feed'>
        <StyledImg src={FeedIcon} />
      </StyledLink>
      <StyledLink to='/messenger'>
        <StyledImg src={MessengerIcon} />
      </StyledLink>
      <StyledLink to='/friends'>
        <StyledImg src={BlueFriendsIcon} />
      </StyledLink>
      <StyledLink to='/search'>
        <StyledImg src={BlueSearchIcon} />
      </StyledLink>
    </StyledNav>
  )
}
