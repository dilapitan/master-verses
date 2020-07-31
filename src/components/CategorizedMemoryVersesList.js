import React from 'react'

import SubCategorizedMemoryVersesList from './SubCategorizedMemoryVersesList'

function CategorizedMemoryVerses({ category }) {
  const tempCategory = { ...category }

  delete tempCategory.category

  return (
    <div>
      {Object.keys(tempCategory)
        .sort()
        .map((key) => (
          <SubCategorizedMemoryVersesList
            key={key}
            subCategory={key}
            subCategoryVerses={tempCategory[key]}
          />
        ))}
    </div>
  )
}

export default CategorizedMemoryVerses
