import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './theme/Home/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Extending from './theme/Extending/Extending';
import PageOne from './theme/Extending/PageOne/PageOne';
import PageTwo from './theme/Extending/PageTwo/PageTwo';
import Swap from './theme/Swap/Swap';
import {RedirectToHome, RedirectToPathHome} from './components/Redirect/Redirect';
function App() {
  return (
    <div className="App">
     <Header/>
     <Switch> 
             
              <Route exact strict path="/send" component={RedirectToPathHome} />
              <Route exact strict path="/home" component={Home} />
              <Route exact strict path="/home/:outputCurrency" component={RedirectToHome} />


              <Route exact strict path="/swap" component={Swap} />
              <Route exact strict path="/dashboard" component={Dashboard} />
              <Route exact strict path="/extending" component={Extending} />
              <Route exact strict path="/extending/page-1" component={PageOne} />
              <Route exact strict path="/extending/page-2" component={PageTwo} />

              <Route  component={RedirectToHome} />
      </Switch>
    </div>
  );
}

export default App;
