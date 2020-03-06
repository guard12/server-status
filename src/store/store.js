import { createStore } from 'easy-peasy'
import { dictionaryModel } from '../models/dictionary'

const storeModel = {
    dictionary: dictionaryModel,
}

export const store = createStore(storeModel)
