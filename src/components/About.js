import React from 'react';
import logo from '../assets/images/logo.svg';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>welcome to about.</h2>
        <img className="logo" src={logo} />
      </div>
    )
  }
}
