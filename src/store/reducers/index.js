import { combineReducers } from 'redux'

import counterReducer from './counter'
import resultsReducer from './result'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

export default rootReducer