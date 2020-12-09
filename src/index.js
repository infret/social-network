import { createGlobalStyle } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const GlobalStyle = createGlobalStyle`
body {
	--blue: #2787f5;
	--darker-blue: #267cde;
	--white: #ffffff;
	--grey: #eeeeee;
	--darker-grey: #dddddd;
	--dark-grey: #999999;
	--elevation: 0 1px 4px 0 rgba(0, 0, 0, 0.05), 0 0 4px 0 rgba(0, 0, 0, 0.05);

	background-color: var(--grey);
	margin: 0;
	font-family: sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow-y: scroll;
}

:focus {
	outline: none;
}

textarea, pre {
	resize: none;
	overflow: auto;
	font-family: sans-serif;
	font-style: normal;
}
`

export const renderEntireApp = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
			<GlobalStyle />
		</React.StrictMode>,
		document.getElementById('root')
	)
}

renderEntireApp()
