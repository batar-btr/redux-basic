import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat([{ id: Date.now(), value: action.result }]) })
           
        case actionTypes.DELETE_RESULT:
            return updateObject(state, { results: state.results.filter(res => res.id !== action.payload) })
            
    }
    return state

}

export default reducer;