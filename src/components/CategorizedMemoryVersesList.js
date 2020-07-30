import React from 'react'

import SubCategorizedMemoryVersesList from './SubCategorizedMemoryVersesList'

function CategorizedMemoryVerses({ category }) {
  return (
    <div>
      {Object.keys(category).map((key) => (
        <SubCategorizedMemoryVersesList
          key={key}
          subCategory={key}
          subCategoryVerses={category[key]}
        />
      ))}
    </div>
  )
}

export default CategorizedMemoryVerses
