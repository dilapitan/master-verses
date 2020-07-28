import React, { useEffect, useState } from 'react'

import { Switch, Route } from 'react-router-dom'

import About from '../views/About'
import MemoryVersesList from '../views/MemoryVersesList'
import Randomize from '../views/Randomize'

import { getMemoryVerses } from '../../services/FirestoreService'

function MainContent() {
  const [verses, setVerses] = useState([])

  useEffect(() => {
    let mv = []
    getMemoryVerses()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          mv.push(doc.data())
        })
        setVerses(mv)
      })
      .catch((error) => console.log(error))
  }, [])

  let memoryVersesComponent, randomizeComponent
  if (verses.length) {
    memoryVersesComponent = <MemoryVersesList verses={verses} />
    randomizeComponent = <Randomize verses={verses} />
  } else {
    memoryVersesComponent = null
    randomizeComponent = null
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => memoryVersesComponent} />
        <Route exact path="/randomize" render={() => randomizeComponent} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  )
}

export default MainContent
