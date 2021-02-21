import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ProfileIcon from '../resources/profile.svg'
import HomeIcon from '../resources/home.svg'
import MessengerIcon from '../resources/message.svg'
import SearchIcon from '../resources/search.svg'
import LogoIcon from '../resources/logo.svg'
import PlusIcon from '../resources/plus.svg'
import HeartIcon from '../resources/heart.svg'
import styled from 'styled-components'

const AppHeader = styled.header`
  height: 50px;
  width: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  border-bottom: 1px solid gainsboro;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
`

const HeaderLogo = styled(NavLink)`
  height: 100%;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 22px;
  display: flex;
  margin-left: 12px;
  align-items: center;
  font-family: 'Lobster Two';
`

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
`

const StyledLink = styled(NavLink)<{ active: boolean }>`
  border-bottom: ${(props) => props.active && '2px solid black'};
  padding: 13px;
`

interface Props {
  currentUserId: number
}

const Header = (props: Props) => {
  let [url, setUrl] = useState(window.location.pathname)

  useHistory().listen((location) => {
    setUrl(location.pathname)
  })

  return (
    <AppHeader>
      <HeaderContainer>
        <HeaderLogo to='/social-network'>social network</HeaderLogo>
        <StyledNav>
          <StyledLink to='/social-network' active={url === '/social-network'}>
            <img src={HomeIcon} alt='' />
          </StyledLink>
          <StyledLink to='/social-network/explore' active={url.includes('/explore')}>
            <img src={SearchIcon} alt='' />
          </StyledLink>
          <StyledLink to='/social-network/create' active={url.includes('/create')}>
            <img src={PlusIcon} alt='' />
          </StyledLink>
          <StyledLink to='/social-network/chats' active={url.includes('/messenger')}>
            <img src={MessengerIcon} alt='' />
          </StyledLink>
          <StyledLink to='/social-network/liked' active={url.includes('/liked')}>
            <img src={HeartIcon} alt='' />
          </StyledLink>
          <StyledLink to={'/social-network/user/' + props.currentUserId} active={url.includes('/user')}>
            <img src={ProfileIcon} alt='' />
          </StyledLink>
        </StyledNav>
      </HeaderContainer>
    </AppHeader>
  )
}
export default Header
