import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`

const PageTitle = styled.h1`
  font-size: 18px;
  margin: 0 auto;
  @media (min-width: 480px) {
    display: none;
  }
`

interface propsInterface {
  title: string
}

export default function PageHeader(props: propsInterface) {
  return (
    <StyledHeader>
      <PageTitle>{props.title}</PageTitle>
    </StyledHeader>
  )
}
