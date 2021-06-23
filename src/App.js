import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Popular from './components/Popular'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BlogsList} />
      <Route path="/popular" component={Popular} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
