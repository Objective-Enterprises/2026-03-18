import { useState, useRef } from "react"

export default function Mouse () {
  const [display, setDisplay] = useState({ x: 0, y: 0 })
  console.log('rendering app')
  const mouseRef = useRef() // -> { current: undefined }
  console.log("mouseRef", mouseRef)
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  function checkAnswer () {
    console.log('MousePosition', mouseRef.current)
    setDisplay(mouseRef.current) // Does re-render UI
  }
  // Track the mouse position
  function handleMouseMove (e) {
    // setMousePosition({ x: e.clientX, y: e.clientY })
    mouseRef.current = { x: e.clientX, y: e.clientY } // Does not rerender UI
    console.log('mouse moved')
  }
  document.addEventListener('mousemove', handleMouseMove)
  return (
    <>
      <button
        onClick={checkAnswer}
      >
        Check
      </button>
      <div>
        Mouse Position: {display.x}, {display.y}
      </div>
    </>
  )
}