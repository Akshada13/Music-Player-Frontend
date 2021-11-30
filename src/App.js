import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage';
import DbContent from './Dbcomponents/DbContent.js/DbContent';
import Addsong from './Dbcomponents/Addsongs/Addsong';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/DbContent" component={DbContent} exact />
          <Route path="/addsong" component={Addsong} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
