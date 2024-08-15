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




        <div id="bottom-banner" tabindex="-1" class="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex items-center mx-auto">
                <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
                        <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                    </span>
                    <span> 
                      Hey! Thanks for checking this out. The site is currently still under constructing. That means some links are broken (check out our 404 page 👀) and not all claims are completely true (yet!). They're just their to communicate the idea. If you're a javelin thrower, fill out the form! It works!</span>
                </p>
            </div>
        </div>



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
