import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </HelmetProvider>
    </div>
  )
}

export default App
