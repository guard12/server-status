// @flow

export type Dictionary = {
    id: number,
    words?: Array<Word>,
}

export type Word = {
    id: number,
    word: string,
    translation: string, 
}