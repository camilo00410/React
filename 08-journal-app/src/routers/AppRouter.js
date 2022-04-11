import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config.js'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if( user?.uid){
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }

      setChecking(false);
    });
  }, [ dispatch, setChecking, setIsLoggedIn ])

  if(checking){
    return (
      <h1>Espere...</h1>
    )
  }
  

  return (
    <Router>
        <div>
            <Switch>
                  <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />


                <Redirect to="/auth/login" />
                
            </Switch>
        </div>
    </Router>

    
  )
}
