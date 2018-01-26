import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Pages
import Home from './components/Home';
import About from './components/About';

// UI Components
import NavMain from './components/NavMain';

const Routes = () => (
  <Router>
    <div style={{textAlign: 'center'}}>
      <h1>hello internet.</h1>

      <NavMain />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      
    </div>
  </Router>
)

export default Routes;
