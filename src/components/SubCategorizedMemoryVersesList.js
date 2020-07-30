import React from 'react'

function SubCategorizedMemoryVersesList({ subCategory, subCategoryVerses }) {
  const cleanSubcategory = subCategory.replace(/_/g, ' ').replace(/\w\./i, '')

  return <div>{cleanSubcategory}</div>
}

export default SubCategorizedMemoryVersesList
