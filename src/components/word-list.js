// @flow

import * as React from 'react'
import { useStoreState } from 'easy-peasy'

export function WordList() {
    const words = useStoreState(state => state.dictionary.words);

    return <ul>
        {words.map(word => {
            return <li key={word.word}>{word.word} : {word.translation}</li>
        })}
    </ul>
}