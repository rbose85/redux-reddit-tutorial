import { combineReducers } from 'redux'
import * as actions from './actions'

function selectedReddit(state = 'reactjs', action) {
    switch (action.type) {

    case actions.SELECT_REDDIT:
        return action.reddit

    default:
        return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {

    case actions.INVALIDATE_REDDIT:
        return Object.assign({}, state, {
            didInvalidate: true
        })

    case actions.REQUEST_POSTS:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        })

    case actions.RECEIVE_POSTS:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        })

    default:
        return state
    }
}

function postsByReddit(state = {}, action) {
    switch (action.type) {

    case actions.INVALIDATE_REDDIT:
    case actions.RECEIVE_POSTS:
    case actions.REQUEST_POSTS:
        return Object.assign({}, state, {
            [action.reddit]: posts(state[action.reddit], action)
        })

    default:
        return state
    }
}

const reducer = combineReducers({
    postsByReddit,
    selectedReddit
})

export default reducer
