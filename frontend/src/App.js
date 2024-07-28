import Form from './components/form/form';
import './App.css';

import About from './components/about/about';
import Login from './components/auth/login/login';
import Signup from './components/auth/signup/signup';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

import Header from './components/header/header'


import { auth } from './firebase/firebase';




function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
        console.log("user is logged in");
      } else {
        setIsLoggedIn(false)
        console.log("user is not logged in");
      }
      console.log(user);
    });
  });

  return (
    <Router>
      <div>
        <Header isLoggedin={isLoggedin} auth={auth}/>
        <section>                              
            <Routes>                                                                        
              <Route path="/" element={<></>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
