import { useState, useRef } from "react"

export default function Quiz () {
  console.log('rendering app')
  const answerRef = useRef()
  const random1 = Math.ceil(Math.random() * 10)
  const random2 = Math.ceil(Math.random() * 10)
  function checkAnswer () {
    console.log('MousePosition', mouseRef.current)
    const sum = random1 + random2
    const correct = Number(answerRef.current) === sum
    if (correct) {
      alert('Correct!')
    } else {
      alert('Wrong!')
    }
  }
  return (
    <>
      <p>{random1} + {random2} = ???</p>
      <input
        onChange={e => {
          answerRef.current = e.target.value
        }}
      />
      <button
        onClick={checkAnswer}
      >
        Check
      </button>
    </>
  )
}