import { useState, useEffect } from "react"

export default function Space() {
  console.log('rendering')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  // Every time we press the space bar the count goes up by 1
  useEffect(() => {
    console.log('adding new event listener')
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        setCount((oldCount) => {
          const newCount = oldCount + 1
          return newCount
        })
      }
    })
  }, [])

  useEffect(() => {
    console.log('count or message changed', count)
  }, [count])

  return (
    <>
      <div>Spaces: {count}</div>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  )
}
