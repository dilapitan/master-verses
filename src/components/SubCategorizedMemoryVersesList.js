import React from 'react'

import MemoryVerse from './MemoryVerse'
import { Divider, Grid, Typography } from '@material-ui/core'

function SubCategorizedMemoryVersesList({ subCategory, subCategoryVerses }) {
  const cleanSubcategory = subCategory.replace(/_/g, ' ').replace(/\w\./i, '')

  return (
    <div>
      <Typography variant="subtitle1">{cleanSubcategory}</Typography>
      <Grid container>
        {subCategoryVerses.map((subCategoryVerse, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <MemoryVerse mv={subCategoryVerse} />
          </Grid>
        ))}
      </Grid>
      <Divider />
    </div>
  )
}

export default SubCategorizedMemoryVersesList
