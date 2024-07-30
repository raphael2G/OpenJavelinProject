import React from 'react';

import LoginForm from './loginForm';

import './login.css'
 
const Login = () => {
 
    return(
        <>
            <main id="login-main">        
                <section id="login-section">  
                    <LoginForm/>
                </section>
            </main>
        </>
    )
}
     
export default Login;