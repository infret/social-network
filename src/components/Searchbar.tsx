import React from 'react'
import styled from 'styled-components'
import { IStore } from '../store'
import CloseIcon from '../resources/close.svg'

const StyledForm = styled.div`
  width: 300px;
  height: 36px;
  margin: 8px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: calc(100% - 30px);
  height: 100%;
  font-size: 15px;
  margin-left: 10px;
`

const Button = styled.button`
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 22px;
  width: 22px;
  justify-self: end;
  margin-right: 10px;
`

interface Props {
  store: IStore
}

export default function Searchbar(props: Props) {
  return (
    <StyledForm>
      <Input
        type='search'
        placeholder='Search'
        value={props.store.searchBy}
        onChange={(e) => props.store.setSearch(e.target.value)}
      />
      {props.store.searchBy && <Button onClick={() => props.store.setSearch('')}></Button>}
    </StyledForm>
  )
}
