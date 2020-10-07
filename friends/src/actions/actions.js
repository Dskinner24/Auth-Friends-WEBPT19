import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAIL = 'FETCH_FRIEND_FAIL';

export const fetchFriend = () => (dispatch) => {
    dispatch({ type: FETCH_FRIEND })
    axiosWithAuth()
        .get('/friends')
        .then( res => {
            console.log("Fetch Success", res.data)
            dispatch({ type: FETCH_FRIEND_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error('Could not retrieve data', err)
            dispatch({ type: FETCH_FRIEND_FAIL, payload: err })
        })
}

export const POST_FRIEND = 'POST_FRIEND';
export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
export const POST_FRIEND_FAIL = 'POST_FRIEND_FAIL';

export const postFriend = (friend) => (dispatch) => {
    dispatch({ type: POST_FRIEND })
    axiosWithAuth()
        .post('/friends', friend)
        .then( res => {
            console.log('Post was successful', res.data);
            dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data })
        })
        .catch( err => {
            console.log('Error with posting', err);
            dispatch({ type: POST_FRIEND_FAIL, payload: err })
        })
}