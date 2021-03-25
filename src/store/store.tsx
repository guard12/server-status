import { createStore } from 'easy-peasy'
import { serverModel } from '../models/server'

const storeModel = {
    server: serverModel,
}

export const store = createStore(storeModel)
