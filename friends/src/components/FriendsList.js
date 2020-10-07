import React from 'react';

import AddFriends from './AddFriends';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    constructor(){
        super()
            this.state = {
                friends: []
            }
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => console.log(err.message))
    }

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                    <div>
                        <h2>{friend.name}</h2>
                    </div>
                ))}
                <AddFriends />
            </div>
        );
    }
}

export default FriendsList;