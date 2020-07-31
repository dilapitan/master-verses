import React, { useState } from 'react'
import { Button, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function MemoryVerse({ mv }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [modalStyle] = React.useState(getModalStyle)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="text"
        color="primary"
        onClick={handleOpen}
        style={{ fontWeight: 600 }}
      >
        {mv.verse}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <p>{mv.verse}</p>
          <p>{mv.verseBody}</p>
        </div>
      </Modal>
    </div>
  )
}

export default MemoryVerse
