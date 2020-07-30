import React from 'react'

import MemoryVerse from './MemoryVerse'
import { Divider } from '@material-ui/core'

function SubCategorizedMemoryVersesList({ subCategory, subCategoryVerses }) {
  const cleanSubcategory = subCategory.replace(/_/g, ' ').replace(/\w\./i, '')

  return (
    <div>
      <p>{cleanSubcategory}</p>
      {subCategoryVerses.map((subCategoryVerse, key) => (
        <MemoryVerse key={key} mv={subCategoryVerse} />
      ))}
      <Divider />
    </div>
  )
}

export default SubCategorizedMemoryVersesList
