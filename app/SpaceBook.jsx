import React from 'react'
import { useKeyPress, useMouse } from 'react-use'
import SpacebookCover from './SpacebookCover.jsx'

const Spacebook = (props) => {
  const ref = React.useRef(null)
  const { docX, docY } = useMouse(ref)
  const keys = [' ', 'ArrowUp', 'ArrowDown', 'r']
  const states = []
  for (const key of keys) states.push(useKeyPress(key))

  const pivot = (props.pivot) ? props.pivot : [720, 380]
  const dimensions = (props.dimensions) ? props.dimensions : [290, 500]
  const colors = (props.colors) ? props.colors : ['crimson', 'darkorange', 'gold', 'darkgreen', 'darkcyan', 'darkblue', 'darkviolet']
  while (colors.length < props.content.length) {
    const colorsOriginalLength = colors.length
    for (let i = 0; i < (props.content.length - colorsOriginalLength); i++) {
      colors.push(colors[i])
    }
  }
  const opacity = (props.opacity) ? props.opacity : '75%'
  const depth = (props.depth) ? props.depth : 6

  const descendingArray = []
  descendingArray.push(props.content.length)
  while (descendingArray.length < props.content.length) {
    descendingArray.push(descendingArray[descendingArray.length - 1] - 1)
  }

  return (
    <div ref={ref}>
      <SpacebookCover
        boxes={descendingArray}
        position={[docX, docY]}
        pivot={pivot}
        dimensions={dimensions}
        colors={colors}
        opacity={opacity}
        content={props.content}
        press={states}
        depth={depth}
      />
    </div>
  )
}

export default Spacebook
