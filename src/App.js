import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={Signup} />
      </Switch>

    </div>
  );
}

export default App;
