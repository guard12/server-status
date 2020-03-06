// @flow

import * as React from 'react'
import { useStoreActions } from 'easy-peasy'

export function WordForm() {
    const [ word, setWord ] = React.useState("")
    const [ translation, setTranslation ] = React.useState("")

    const addWordToDictionary = useStoreActions(actions => actions.dictionary.addWord)

    return <div>
        <input
            type="text"
            placeholder="word"
            value={word}
            onChange={event => setWord(event.target.value)}
        />
        <input
            type="text"
            placeholder="translation"
            value={translation}
            onChange={event => setTranslation(event.target.value)}
        />
        <button
            onClick={() => addWordToDictionary({
                word,
                translation,
            })}
        >Add</button>
    </div>
}