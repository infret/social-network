import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  border: none;
  border-radius: 4px 0 0 6px;
  height: 26px;
  padding: 4px;
  display: block;
  font-size: 15px;
  text-align: center;
  margin: 8px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
`

export default function Searchbar() {
  return <StyledInput type='text' placeholder='Search' />
}
