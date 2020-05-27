import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Spacebook from './Spacebook.jsx'

class App extends React.Component {
  render () {
    return (
      <Spacebook
        content={['foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', 'foo', 'bar', ]}
      />
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
