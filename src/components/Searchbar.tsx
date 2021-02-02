import React from 'react'
import styled from 'styled-components'
import WhiteSearchIcon from '../resources/white-search-icon.svg'

const StyledSearchbar = styled.form`
  height: 34px;
  display: flex;
  align-items: center;
  padding: 12px;
`

const StyledInput = styled.input`
  width: calc(100% - 40px);
  font-size: 14px;
  border: none;
  border-radius: 4px 0 0 6px;
  height: 34px;
  padding-left: 12px;
`

export default function Searchbar() {
  return (
    <StyledSearchbar>
      <StyledInput type='text' placeholder='Search' />
    </StyledSearchbar>
  )
}
