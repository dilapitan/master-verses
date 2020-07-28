import React from 'react'

function MemoryVerse({ verse }) {
  return (
    <div>
      <p style={{ fontWeight: 600 }}>{verse.verse}</p>
      <p>{verse.verseBody}</p>
    </div>
  )
}

export default MemoryVerse
