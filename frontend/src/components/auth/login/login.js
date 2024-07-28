import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'

import './login.css'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/form")
            console.log("Successfully logged in user");
            console.log("User:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
 
    return(
        <>
            <main id="login-main">        
                <section id="login-section">
                    <div id="login-container">   
                        <div id="login-form-container">                                                                                                                                                 
                            <form id="login-form">                                              
                                <div className="login-input-container">
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"                                    
                                        required                                                                                
                                        placeholder="Email address"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
        
                                <div className="login-input-container">
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"                                    
                                        required                                                                                
                                        placeholder="Password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                                                    
                                <div id="login-button-container">
                                    <button                                    
                                        onClick={onLogin}                                        
                                    >      
                                        Login                                                                  
                                    </button>
                                </div>                               
                            </form>
                        
                            <p id="login-signup-text" className="text-sm text-white text-center">
                                Already have an account? {' '}
                                <NavLink to="/signup">
                                    Sign up
                                </NavLink>
                            </p>                    
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
     
export default Login;