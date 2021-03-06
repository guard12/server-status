import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from 'easy-peasy'

import { store } from './store/store'
import App from './components/app'

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('app')
)
