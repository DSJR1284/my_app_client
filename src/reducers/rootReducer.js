import {combineReducers} from 'redux'
import {gameReducer} from './gameReducer'
import {charReducer} from './charReducer'

export const rootReducer = combineReducers({
    game: gameReducer,
    char: charReducer
})
