import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ProfileIcon from '../resources/profile.svg'
import HomeIcon from '../resources/home.svg'
import MessengerIcon from '../resources/message.svg'
import SearchIcon from '../resources/search.svg'
import LogoIcon from '../resources/logo.svg'
import styled from 'styled-components'

const AppHeader = styled.header`
  height: 50px;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;
  background: white;
  border-bottom: 1px solid gainsboro;
`

const HeaderLogo = styled(NavLink)`
  width: 200px;
  height: 100%;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StyledNav = styled.nav`
  width: 200px;
  height: 100%;
  display: flex;
`

const StyledLink = styled(NavLink)<{ active: boolean }>`
  border-bottom: ${(props) => props.active && '2px solid black'};
  padding: 13px;
`

interface propsInterface {
  currentUserId: number
}

const Header = (props: propsInterface) => {
  let [url, setUrl] = useState(window.location.pathname)

  useHistory().listen((location) => {
    setUrl(location.pathname)
  })

  return (
    <AppHeader>
      <HeaderLogo to='/'>
        <img src={LogoIcon} alt='' />
        Social network
      </HeaderLogo>
      <StyledNav>
        <StyledLink to='/' active={url === '/'}>
          <img src={HomeIcon} alt='' />
        </StyledLink>
        <StyledLink to='/search' active={url.includes('/search')}>
          <img src={SearchIcon} alt='' />
        </StyledLink>
        <StyledLink to='/messenger' active={url.includes('/messenger')}>
          <img src={MessengerIcon} alt='' />
        </StyledLink>
        <StyledLink to={'/user/' + props.currentUserId} active={url.includes('/user')}>
          <img src={ProfileIcon} alt='' />
        </StyledLink>
      </StyledNav>
    </AppHeader>
  )
}
export default Header
