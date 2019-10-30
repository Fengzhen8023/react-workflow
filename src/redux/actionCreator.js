import { ADD_LINK_COMPLETED, ADD_LINK_ING } from './actionType'

export function createAddLinkCompletedAction() {
    return {
        type: ADD_LINK_COMPLETED
    }
}

export function createAddLinkIngAction() {
    return {
        type: ADD_LINK_ING
    }
}
