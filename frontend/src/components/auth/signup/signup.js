import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';

import SignupForm from './signupForm';

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
            alert("Failed to create account. Please try again.");
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
 
    return (
        <main id="signup-main">        
            <section id="signup-section">                
                <SignupForm/>
            </section>
        </main>
      )
}
    
export default Signup;
    