import React from 'react'

import { Divider, Typography } from '@material-ui/core'

function MemoryVersesList({ verses }) {
  if (verses.length) console.log(verses)

  return (
    <div>
      <Typography variant="h6">Memory Verses List</Typography>
      <Divider />
    </div>
  )
}

export default MemoryVersesList
