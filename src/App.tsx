import React, { VFC } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './components/Pages/Home'
import Detail from './Detail'
import DefaultLayout from './components/Templates/DefaultLayout'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Box>
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
        </Box>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
