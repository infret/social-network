import { createGlobalStyle } from 'styled-components'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:focus {
		outline: none;
	}

	button {
		background-color: transparent;
		border: none;
		padding: none;
	}

	textarea, pre {
		resize: none;
		overflow: auto;
		font-family: sans-serif;
		font-style: normal;
	}
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
