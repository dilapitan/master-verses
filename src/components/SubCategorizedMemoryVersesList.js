import React from 'react'

import MemoryVerse from './MemoryVerse'
import { Divider, Grid, Typography } from '@material-ui/core'

function SubCategorizedMemoryVersesList({ subCategory, subCategoryVerses }) {
  const cleanSubcategory = subCategory.replace(/_/g, ' ').replace(/\w\./i, '')

  return (
    <div>
      <Typography variant="h6">{cleanSubcategory}</Typography>
      <br />
      <Grid container spacing={4}>
        {subCategoryVerses.map((subCategoryVerse, key) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <MemoryVerse mv={subCategoryVerse} />
          </Grid>
        ))}
      </Grid>
      <br />
      <Divider />
    </div>
  )
}

export default SubCategorizedMemoryVersesList
