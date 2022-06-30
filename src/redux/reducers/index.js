import { combineReducers } from 'redux'

import todoReducer from './todoReducer'

const reducer = combineReducers({
    todoReducer
})

export default (state, action) => reducer(state, action);
