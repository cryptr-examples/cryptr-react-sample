# Cryptr with React

## 03 Set up the Cryptr React SDK

### Installation

🛠️️ First, you need to install our package as a dependency:

```bash
yarn add @cryptr/cryptr-react
```

### Configure the CryptrProvider component

🛠️️ Add your `cryptrConfig` (with your credentials to React) to `src/App.js`:

```javascript
const cryptrConfig = {
  audience: process.env.REACT_APP_CRYPTR_AUDIENCE,
  client_id: process.env.REACT_APP_CRYPTR_CLIENT_ID,
  default_locale: process.env.REACT_APP_CRYPTR_DEFAULT_LOCALE,
  default_redirect_uri: process.env.REACT_APP_CRYPTR_DEFAULT_REDIRECT_URI,
  telemetry: process.env.REACT_APP_CRYPTR_TELEMETRY,
  region: process.env.REACT_APP_CRYPTR_REGION,
  tenant_domain: process.env.REACT_APP_CRYPTR_TENANT_DOMAIN
}
```

🛠️️ Import `CryptrProvider` from `@cryptr/cryptr-react`

```javascript
import { CryptrProvider } from '@cryptr/cryptr-react'
```

🛠️️ Wrap your root component, such as `App`, with `CryptrProvider` to integrate Cryptr to your React app and integrate `cryptrConfig`.

```javascript
const App = () => {
  return (
    <CryptrProvider {...cryptrConfig}>
      <div className="App">
        <Router history={history}>
          <Nav />
          <Switch>
            <Route path="/" exact render={() => <Home />}/>
            <Route path="/profile" render={() => <Profile />}/>
          </Switch>
        </Router>
      </div>
    </CryptrProvider>
  );
}
 
export default App
```

The `CryptrProvider` is there to give Cryptr context to Child components. It will be able to handle the user session and retrieve the user’s info to handle your routing for example.

[Next](https://github.com/cryptr-examples/cryptr-react-sample/tree/04-add-user-authentication)
