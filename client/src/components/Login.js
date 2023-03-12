import React, {Component, useState} from 'react';
import '../css/login.css';
import whiteStroke from '../images/white-paint-stroke.png';
import Main from './Main';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const credentials = [
        {username: "admin", password: "admin"},
        {username: "user1", password: "user1"},
        {username: "user2", password: "user2"},
        {username: "user3", password: "user3"}
    ];
    const onSubmitHandler = (e) => {
        console.log('clicked');
        for(var i = 0; i < credentials.length; i++){
            if(username === credentials[i].username && password === credentials[i].password){
                setAuthenticated(true);
                console.log(credentials[i].username, credentials[i].password);
            }
        }
    }
    const Content = () => {}
    if(authenticated === true){
        return <Main/>
    }else{
        return (
            <div className='login-parent'>
                <div className='login-wrapper'>
                    <div className='login-login'>
                        <label className='login-label '>
                            username
                            <input onChange={(e)=>{setUsername(e.target.value)}} placeholder='user@gmail.com'/>
                        </label>
                        <label className='login-label '>
                            password
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='***'/>
                        </label>
                        
                        <div className='login-buttons-wrapper'>
                            <div onClick={onSubmitHandler} className='login-button login-buttons-login'>login</div>
                            <div className='login-button login-buttons-register'>register</div>
                        </div>
                    </div>
                    <div className='login-logo-and-buttons'>
                        <div className='login-logo'>
                            <img src={whiteStroke} alt="paint"/>
                            <img src={whiteStroke} alt="paint"/>
                            <div>konekto <span>chatto</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;