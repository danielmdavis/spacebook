import React, { Component } from 'react'
import SpacebookPage from './SpacebookPage.jsx'

class SpacebookCover extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: this.props.colors,
      body: this.props.content,
      pivotX: this.props.pivot[0],
      pivotY: this.props.pivot[1]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (arr) {
    arr.push(arr.shift())
  }

  render () {
    let [space, up] = this.props.press

    if (space[0]) {
      const colors = this.state.colors
      const body = this.state.body
      if (space[1].type === 'keydown') {
        colors.push(colors.shift())
        this.state.colors = colors
        body.push(body.shift())
        this.state.body = body
      }
      if (space.type === 'keyup') { space = undefined }
    }

    if (up[0]) {
      if (this.state.showMenu) {
        this.state.showMenu = false
      } else {
        this.state.showMenu = true
      }
    }

    const boxes = this.props.boxes
    const center = [this.state.pivotX, this.state.pivotY]

    let x = this.props.position[0]
    let y = this.props.position[1]

    let xOffset, yOffset

    if (x <= center[0]) {
      xOffset = center[0] - x
    } else {
      xOffset = x - center[0]
    }
    if (y <= center[1]) {
      yOffset = center[1] - y
    } else {
      yOffset = y - center[1]
    }
    //  to ensure it's run once for the first one
    if (this.props.position[0] <= center[0]) {
      x = x + xOffset
    } else {
      x = x - xOffset
    }
    if (this.props.position[1] <= center[1]) {
      y = y + yOffset
    } else {
      y = y - yOffset
    }

    let colorId = -1
    const boxArr = boxes.map((box) => {
      if (this.props.position[0] <= center[0]) {
        x = x + (xOffset / this.props.depth)
      } else {
        x = x - (xOffset / this.props.depth)
      }
      if (this.props.position[1] <= center[1]) {
        y = y + (yOffset / (this.props.depth * 2))
      } else {
        y = y - (yOffset / (this.props.depth * 2))
      }
      colorId += 1
      return (
        <SpacebookPage
          key={box}
          zIndex={box}
          color={this.state.colors[colorId]}
          body={this.state.body[colorId]}
          relative={[x, y]}
          center={center}
          dimensions={this.props.dimensions}
          opacity={this.props.opacity}
        />
      )
    })

    return (
      <div className='cover'>
        {boxArr}
      </div>
    )
  }
}

export default SpacebookCover
