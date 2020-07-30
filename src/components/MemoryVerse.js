import React from 'react'

function MemoryVerse({ mv }) {
  return (
    <div>
      <p style={{ fontWeight: 600 }}>{mv.verse}</p>
      <p>{mv.verseBody}</p>
    </div>
  )
}

export default MemoryVerse
