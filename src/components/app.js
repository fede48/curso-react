import React from 'react'
import Exercises from '../pages/exercises'
import ExerciseNew from '../pages/exerciseNew'
import { Route, BrowserRouter, Switch  } from 'react-router-dom'
import NotFound from '../pages/notFound'

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/exercise" component={Exercises} />
        <Route exact path="exercise/new" component={ExerciseNew} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  )  
}

export default App