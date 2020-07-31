import React from 'react'
import { Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

/* const useStyles = makeStyles(() => {
  tabRoot: {
    maxWidth: 30
  }
}) */

function MemoryVerse({ mv }) {
  return (
    <Button variant="text" color="primary" style={{ fontWeight: 600 }}>
      {mv.verse}
    </Button>
  )
}

export default MemoryVerse
