import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postFriend } from '../actions/actions';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriends = (props) => {
    const [friend, setFriend] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    })

    const inputHandler = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postFriend(friend)
    }

    return (
        <div className='friend'>
            <form>
                <label htmlFor='name'>Friend's Name</label>
                <input
                    type='text'
                    name='name'
                    label='name'
                    placeHolder='Enter Name Here'
                    value={props.name}
                    onChange={inputHandler}
                />
                <label htmlFor='age'>Friend's Age</label>
                <input
                    type='text'
                    name='age'
                    label='age'
                    placeHolder='Enter Age Here'
                    value={props.age}
                    onChange={inputHandler}
                />
                <label htmlFor='email'>Friend's Email</label>
                <input
                    type='text'
                    name='email'
                    label='email'
                    placeHolder='Enter Email Here'
                    value={props.email}
                    onChange={inputHandler}
                />
                <button onClick={submitHandler}>Add Friend</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        friends: state.friends,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postFriend})(AddFriends)