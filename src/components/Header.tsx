import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ProfileIcon from '../resources/profile.svg'
import HomeIcon from '../resources/home.svg'
import MessengerIcon from '../resources/message.svg'
import SearchIcon from '../resources/search.svg'
import PlusIcon from '../resources/plus.svg'
import HeartIcon from '../resources/heart.svg'
import styled from 'styled-components'
import Input from './Input'
import { IStore } from '../store'

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
  max-width: 1000px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 639px) {
    display: flex;
    justify-content: space-evenly;
  }
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

  @media (max-width: 639px) {
    display: none;
  }
`

const Nav = styled.nav`
  height: 100%;
  display: flex;
`

const Link = styled(NavLink)<{ active: boolean }>`
  border-bottom: ${(props) => props.active && '2px solid black'};
  padding: 13px;
`

const Button = styled.button<{ active: boolean }>`
  border-bottom: ${(props) => props.active && '2px solid black'};
  padding: 13px;
`

const Overlay = styled.div`
  position: fixed;
  top: 50px;
  width: 300px;
  margin: 0 auto;
  overflow-x: auto;
  background-color: white;
  border: 1px solid gainsboro;
`

interface Props {
  store: IStore
}

const Header = (props: Props) => {
  let [url, setUrl] = useState(window.location.pathname)
  let [overlay, setOverlay] = useState(false)

  useHistory().listen((location) => {
    setUrl(location.pathname)
  })

  return (
    <AppHeader>
      <HeaderContainer>
        <HeaderLogo to='/social-network'>social network</HeaderLogo>
        <Nav>
          <Link to='/social-network' active={url === '/social-network'}>
            <img src={HomeIcon} alt='' />
          </Link>
          <Link to='/social-network/explore' active={url.includes('/explore')}>
            <img src={SearchIcon} alt='' />
          </Link>
          <Button active={overlay} onClick={() => setOverlay(!overlay)}>
            <img src={PlusIcon} alt='' />
          </Button>
          {overlay && (
            <Overlay>
              <Input onclick={props.store.createPost} placeholder={'Add image url here'} />
            </Overlay>
          )}
          <Link to='/social-network/chats' active={url.includes('/chat')}>
            <img src={MessengerIcon} alt='' />
          </Link>
          <Link to='/social-network/liked' active={url.includes('/liked')}>
            <img src={HeartIcon} alt='' />
          </Link>
          <Link
            to={'/social-network/user/' + props.store.currentUserId}
            active={url.includes('/user')}
          >
            <img src={ProfileIcon} alt='' />
          </Link>
        </Nav>
      </HeaderContainer>
    </AppHeader>
  )
}
export default Header
