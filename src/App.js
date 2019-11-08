import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/Home';
import CardsList from './pages/CardsList';
import CardDetail from './pages/CardDetail';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cards" exact component={CardsList} />
          <Route path="/cards/:photoId" component={CardDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
