import firebaseApp from './firebase/firebaseConfig'
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import DashBoard from './pages/Dashboard'
import Appbar from './components/appbar/AppBar'
function App() {

  console.log(firebaseApp)
  

  return (
    <Router>
      <Appbar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route  path="/login"><LoginPage/></Route>
        <Route  path="/register"><RegisterPage/></Route>
        <Route  path="/dashboard"><DashBoard/></Route>
        <Route  path="*"><PageNotFound/></Route>
      </Switch>
    </Router>
        
  );
}

export default App;    