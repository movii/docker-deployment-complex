import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {
  return (
    <Router>
      <div className="App">

        <h1 className="app-title">Hello World React demostration from Docker</h1>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/OtherPage">Other Page</Link>

        <br/>

        <div>
          <Route exact to="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>

      </div>
    </Router>
  );
}

export default App;
