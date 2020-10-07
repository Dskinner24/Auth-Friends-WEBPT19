import { FETCH_FRIEND, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_FAIL, POST_FRIEND, POST_FRIEND_SUCCESS, POST_FRIEND_FAIL } from '../actions/actions';

const initialState = {
    friends: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIEND:
            return {
                ...state, isFetching: true
            }
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case FETCH_FRIEND_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POST_FRIEND:
            return {
                ...state,
                isPosting: true,
                friends: [...state.friends]
            }
        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                isPosting: false,
                friends: action.payload
            }
        case POST_FRIEND_FAIL:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default friendsReducer;