import React    from 'react';
import { Link } from 'react-router-dom'

export default class NavMain extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <p><Link to="/">home</Link> | <Link to="/about">about</Link></p>
      </div>
    )
  }
}
