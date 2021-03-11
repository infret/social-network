import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Router, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import BackIcon from '../resources/back.svg'
import { withRouter } from 'react-router-dom'

const MobileHeader = styled.div`
  background-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  position: sticky;
`

const Heading = styled.h1`
  font-size: 20px;
  margin: 0 auto;
`

const Button = styled.button`
  height: 100%;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${BackIcon});
  position: absolute;
`

const Header = observer(() => {
  let [url, setUrl] = useState(window.location.pathname)
  let [title, setTitle] = useState(document.title)
  let history = useHistory()
  useEffect(() => {
    setTitle(document.title)
  })
  history.listen((location) => {
    setUrl(location.pathname)
  })
  console.log(url.split('/'))
  return (
    <MobileHeader>
      {url.split('/')[url.split('/').length - 1] !== 'social-network' && (
        <Button onClick={() => history.goBack()} />
      )}
      <Heading>{title}</Heading>
    </MobileHeader>
  )
})
export default withRouter(Header)
