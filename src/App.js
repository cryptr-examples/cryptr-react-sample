import './App.css'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import Nav from './components/Nav'
import Home from './pages/home'
import Profile from './pages/profile'

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/" exact render={() => <Home />}/>
          <Route path="/profile" render={() => <Profile />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
