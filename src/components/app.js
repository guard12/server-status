// @flow

import * as React from 'react'

import { WordForm } from './word-form'
import { WordList } from './word-list'

export default function App() {

	return <div>
		<h2>Dictionary</h2>
		<WordForm />
		<br />
		<WordList />
	</div>
}