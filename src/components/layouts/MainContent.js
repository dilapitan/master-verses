import React from 'react'

import { Switch, Route } from 'react-router-dom'

import About from '../views/About'
import MemoryVersesList from '../views/MemoryVersesList'
import Randomize from '../views/Randomize'

function MainContent() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={MemoryVersesList} />
        <Route path="/randomize" exact component={Randomize} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  )
}

export default MainContent
