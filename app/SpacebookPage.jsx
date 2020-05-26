import React from 'react'

const SpacebookPage = (props) => {
// half of dimensions is added to center div on center, half of div dimensions
// for width must also include double padding as well

  const style = {
    zIndex: props.zIndex,
    left: props.relative[0] - (props.dimensions[0] / 2 + 25),
    top: props.relative[1] - (props.dimensions[1] / 2 + 5),
    backgroundColor: props.color,
    width: props.dimensions[0],
    height: props.dimensions[1],
    opacity: props.opacity
  }

  return (
    <div>
      <div className='box' style={style}>

        <div>{props.body}</div>
      </div>
    </div>
  )
}

export default SpacebookPage
