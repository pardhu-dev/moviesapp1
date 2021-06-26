import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Popular from './components/Popular'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'
import BlogsList from './components/BlogsList'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={BlogsList} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
