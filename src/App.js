import './App.css'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import Nav from './components/Nav'
import Home from './pages/home'
import Profile from './pages/profile'
import { CryptrProvider } from '@cryptr/cryptr-react'
import ProtectedRoute from './ProtectedRoute'

const cryptrConfig = {
  audience: process.env.REACT_APP_CRYPTR_AUDIENCE,
  client_id: process.env.REACT_APP_CRYPTR_CLIENT_ID,
  cryptr_base_url: process.env.REACT_APP_CRYPTR_BASE_URL,
  default_locale: process.env.REACT_APP_CRYPTR_DEFAULT_LOCALE,
  default_redirect_uri: process.env.REACT_APP_CRYPTR_DEFAULT_REDIRECT_URI,
  telemetry: process.env.REACT_APP_CRYPTR_TELEMETRY,
  tenant_domain: process.env.REACT_APP_CRYPTR_TENANT_DOMAIN
}

const App = () => {
  return (
    <CryptrProvider {...cryptrConfig}>
      <div className="App">
        <Router history={history}>
          <Nav />
          <Switch>
            <Route path="/" exact render={() => <Home />}/>
            <ProtectedRoute path="/profile" component={Profile}/>
          </Switch>
        </Router>
      </div>
    </CryptrProvider>
  );
}

export default App;
