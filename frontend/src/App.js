import Form from '@/components/form/form';
import './App.css';

import Header from '@/components/header/header'
import Home from '@/components/home/home';
import Profile from '@/components/profile/profile';
import Login from '@/components/auth/login/login';
import Signup from '@/components/auth/signup/signup';
import FormSubmission from '@/components/formSubmission/formSubmission';
import PageNotFound from '@/components/pageNotFound/pageNotFound';
import { Toaster } from "@/components/ui/toaster"



import { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom';



import { auth } from './firebase/firebase';


function App() {

  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    });
  });

  const PrivateRoutes = () => {
    return (
      isLoggedin ? <Outlet/> : <Navigate to='/login'/>
    );
  }


  return (
    <Router>
      <div>
        <Header isLoggedin={isLoggedin} auth={auth}/>
        <section>                              
            <Routes>                                                                        
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path='/profile' element={<Profile uid={auth?.currentUser?.uid}/>} />
              <Route path="*" element={<PageNotFound/>}/>
              
              <Route element={<PrivateRoutes/>}>
                <Route path="/formSubmission" element={<FormSubmission/>}/>
                <Route path='/form' element={<Form uid={auth?.currentUser?.uid}/>} />
              </Route>
              
            </Routes>                    
        </section>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
