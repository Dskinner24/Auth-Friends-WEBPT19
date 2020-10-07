import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then((res) => {
                console.log('login success', res);
                localStorage.setItem('authToken', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch((err) => {
                console.log('login failed', err.message);
                localStorage.removeItem("authToken");
            })
    }

    render() {
        return (
            <div className='login'>
                <form>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.login}>Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;