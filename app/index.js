import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Spacebook from './Spacebook.jsx'

class App extends React.Component {
  render () {

    const colorArr = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']


    return (
      <Spacebook
        colors={colorArr}
      />
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
