import initState from './initState'
import { ADD_LINK_COMPLETED, ADD_LINK_ING } from './actionType'

const Reducer = (state = initState, action) => {
    if(action.type === ADD_LINK_COMPLETED) {
        state.isAddLinkCompleted = true
        return state
    }
    if(action.type === ADD_LINK_ING) {
        state.isAddLinkCompleted = false
        return state
    }

    return state

}

export default Reducer