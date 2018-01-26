import React from 'react';
import logo from '../assets/images/logo.svg';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>hello internet.</h1>
        <p><a href="">take me home</a> | <a href="">country roads</a></p>
        <img className="logo" src={logo} />
      </div>
    )
  }
}
