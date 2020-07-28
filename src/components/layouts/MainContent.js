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

  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <MemoryVersesList verses={verses} />}
        />
        <Route
          path="/randomize"
          exact
          render={() => <Randomize verses={verses} />}
        />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  )
}

export default MainContent
