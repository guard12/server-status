// @flow
import { action } from 'easy-peasy'

import type { Dictionary } from '../flow-types/types'

export const dictionaryModel: Dictionary = {
    id: null,
    words: [],
    addWord: action((state, payload) => {
        state.words.push(payload)
    })
}