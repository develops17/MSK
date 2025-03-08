import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypewriterEffect = () => {
  const [textTyped] = useTypewriter({
    words: ['Driving Growth', 'Helping Companies'],
    loop: 1, // Type the text once
    typeSpeed: 300, // Adjust typing speed
    deleteSpeed: 50, // Adjust deleting speed (if needed)
    delaySpeed: 1000, // Adjust delay before typing starts
  })

  return (
    <span>
      {textTyped}
      <Cursor cursorStyle="|" />
    </span>
  )
}

export default TypewriterEffect