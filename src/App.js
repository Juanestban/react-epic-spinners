import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'

import './App.css'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </HelmetProvider>
    </div>
  )
}

export default App
