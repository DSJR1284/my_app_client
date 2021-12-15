import {combineReducers} from 'redux'
import {boardsReducer} from './boardsReducer'
import {postsReducer} from './postsReducer'

export const rootReducer = combineReducers({
    boards: boardsReducer,
    posts: postsReducer
})
