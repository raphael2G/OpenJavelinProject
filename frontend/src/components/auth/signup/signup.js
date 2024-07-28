import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

import './signup.css';

 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/login")
            console.log("Successfully created user");
            console.log("User:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
 
   
    }
 
    return (
        <main id="signup-main">        
            <section id="signup-section">
                <div id="signup-container">
                    <div id="signup-form-container">                                                                                     
                        <form id="signup-form">                                                                                            
                            <div className="signup-input-container">
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="signup-email-address"
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  
                                    required                                    
                                    placeholder="Email address"                                
                                />
                            </div>
    
                            <div className="signup-input-container">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="signup-password"
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required                                 
                                    placeholder="Password"              
                                />
                            </div>                                             
                            
                            <div id="signup-button-container">
                                <button
                                    type="submit" 
                                    onClick={onSubmit}                        
                                >  
                                    Sign up                                
                                </button>
                            </div>
                                                                         
                        </form>
                       
                        <p id="signup-login-text" className="text-sm text-white text-center">
                            Already have an account?{' '}
                            <NavLink to="/login">
                                Log in
                            </NavLink>
                        </p>                   
                    </div>
                </div>
            </section>
        </main>
      )
}
    
export default Signup;
    