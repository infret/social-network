import React from 'react'
import styled from 'styled-components'
import WhiteSearchIcon from '../resources/white-search-icon.svg'

const Template = styled.form`
	height: 34px;
	display: flex;
	align-items: center;
	padding: 12px;
`

const StyledInput = styled.input`
	background-color: var(--grey);
	width: calc(100% - 40px);
	font-size: 14px;
	border: none;
	border-radius: 4px 0 0 6px;
	height: 34px;
	padding-left: 12px;

	&:hover {
		background-color: var(--darker-grey);
	}
`

const StyledButton = styled.input`
	background-color: var(--blue);
	background-image: url(${WhiteSearchIcon});
	background-repeat: no-repeat;
	background-position: center;
	height: 36px;
	width: 40px;
	border: none;
	border-radius: 0 6px 6px 0;

	&:hover {
		background-color: var(--darker-blue);
	}
`
const SearchbarTemplate = (props) => {
	return (
		<Template>
			<StyledInput type='text' placeholder='Search' />
			<StyledButton type='submit' value='' />
		</Template>
	)
}
export default SearchbarTemplate
