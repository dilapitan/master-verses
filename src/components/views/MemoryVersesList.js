import React, { useState } from 'react'

import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import MemoryVerse from '../MemoryVerse'

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 250,
  },
}))

function MemoryVersesList({ verses }) {
  const [categorizedVerses, setCategorizedVerses] = useState(verses)
  const [category, setCategory] = useState('All')
  const classes = useStyles()

  const handleChange = (event) => {
    setCategory(event.target.value)
    filterVersesBasedOnCategory(event.target.value)
  }

  const filterVersesBasedOnCategory = (category) => {
    if (category === 'All') setCategorizedVerses(verses)
    else {
      const updatedCategorizedVerses = verses.filter((verse) => {
        return verse.category === category
      })
      setCategorizedVerses(updatedCategorizedVerses)

      return updatedCategorizedVerses
    }
  }

  return (
    <div>
      <Typography variant="h6">Memory Verses List</Typography>
      <Divider />

      <br />
      <br />

      <FormControl className={classes.formControl}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleChange}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Christ the Source">A. Christ the Source</MenuItem>
          <MenuItem value="Abundant Resources">B. Abundant Resources</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      {categorizedVerses.map((verse) => (
        <MemoryVerse key={verse.verse} verse={verse} />
      ))}
    </div>
  )
}

export default MemoryVersesList
