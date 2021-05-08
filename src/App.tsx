import React, { VFC } from 'react'
import './App.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Header from './components/atoms/Header'
import Footer from './components/Organism/Footer'

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/detail">Detail</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
