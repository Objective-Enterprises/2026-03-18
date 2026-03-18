import { useState, useRef } from "react"

// let count = 5

export default function Count () {
  const [count, setCount] = useState(0)
  // const countRef = useRef(0)
  return (
    <button
      onClick={() => {
        console.log('clicked')
        // count += 1 // count++ // count = count + 1
        // const newCount = count + 1
        // setCount(newCount)
        setCount(count + 1) // Notifies React that a re-render is needed (Loudly, Foreground)
        // countRef.current += 1 // Does not notify React that a re-render is needed (Silent, Background)
        console.log('count', countRef.current)
      }}
    >
      Count: {countRef.current}
    </button>
  )
}