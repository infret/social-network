import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 220px;
  height: 26px;
  padding: 4px 12px;
  font-size: 15px;
  text-align: center;
  margin: 8px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
  :focus {
    text-align: left;
  }
`

export default function Searchbar() {
  return <StyledInput type='text' placeholder='Search' />
}
