# Cryptr with React

## 05 Secure the profile page

### Protect your routes

Now is the time to protect your private pages with a guard. Thanks to this little helper, we will easily take advantage of the React router.

```bash
touch src/ProtectedRoute.js
```

🛠️️ Open up `src/ProtectedRoute.js` and copy/paste this code:

```javascript
import React from 'react'
import { Route } from "react-router-dom"
import { useCryptr } from '@cryptr/cryptr-react'
 
 
const ProtectedRoute = ({ component: Component, ...rest }) => {
   const {isAuthenticated, signinWithRedirect} = useCryptr() 
 
   return (  
       <Route {...rest} render={(props) => (
           isAuthenticated() === true
               ? <Component {...props} />
               : signinWithRedirect()
       )} />
)}
 
export default ProtectedRoute
```

__NOTE: `isAuthenticated()` is a boolean function. Its value is `true` when Cryptr has authenticated the user and `false` when it has not.__

Inside the render of the `<Router>` component, we check whether the user is authenticated. If true, the protected component is displayed, if `false`, the user is redirected to sign form.

🛠️️ Now open `src/App.js`, import `ProtectedRoute` and replace the Route component of the profile path with `<ProtectedRoute path="/profile" component={Profile}/>`

```javascript
import './App.css'
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history'
import Nav from './components/Nav'
import Home from './pages/home'
import Profile from './pages/profile'
import { CryptrProvider } from '@cryptr/cryptr-react'
// 1. import ProtectedRoute
import ProtectedRoute from './ProtectedRoute'
 
const cryptrConfig = {
 audience: process.env.REACT_APP_CRYPTR_AUDIENCE,
 client_id: process.env.REACT_APP_CRYPTR_CLIENT_ID,
 default_locale: process.env.REACT_APP_CRYPTR_DEFAULT_LOCALE,
 default_redirect_uri: process.env.REACT_APP_CRYPTR_DEFAULT_REDIRECT_URI,
 telemetry: process.env.REACT_APP_CRYPTR_TELEMETRY,
 region: process.env.REACT_APP_CRYPTR_REGION,
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
           {/* 2. Replace Route with ProtectedRoute */}
           <ProtectedRoute path="/profile" component={Profile}/>
         </Switch>
       </Router>
     </div>
   </CryptrProvider>
 );
}
 
export default App
```

The implementation is now finished. Restart your application and try to go to the profile page, you will be taken to the login page, which is exactly what should happen.

### Retrieve User information

Everything in our authentication is gravitating around your end-user.
At some point, you may want to retrieve and display user data such as email, metadata, or other attributes attached to their authentication.  
 
If you want to retrieve user data such as emails for example, you can do it through our hook named `useCryptr()`

Now, we can update the profile page in `src/pages/profile.js`

🛠 First, import `useCryptr` from `@cryptr/cryptr-react`

```javascript
import React from 'react'
// 1. import useCryptr
import { useCryptr } from '@cryptr/cryptr-react'
 
const Profile = () => {
 // ...
```

🛠 Next, create the `cryptrUser` constant for user data

```javascript
import React from 'react'
// 1. import useCryptr
import { useCryptr } from '@cryptr/cryptr-react'
 
const Profile = () => {
 
 // 2. Create cryptrUser for user data
 const {user: cryptrUser} = useCryptr()
```

🛠 Then, replace the lorem ipsum of `p` tag with `cryptrUser` to display the email.

```javascript
import React from 'react'
// 1. import useCryptr
import { useCryptr } from '@cryptr/cryptr-react'
 
const Profile = () => {
 
 // 2. Create cryptrUser for user data
 const {user: cryptrUser} = useCryptr()
 return (
   <div className="py-36 bg-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="lg:text-center">
         <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           This is a profile page
         </p>
         <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">  
           {/* 3. Use cryptrUser to display email */}
           {cryptrUser().email}
         </p>
       </div>
     </div>
   </div>
 )
}
 
export default Profile
```

It’s done! You can now start the application with `yarn start`

Once you’ve logged in, you can view the profile page.

Congratulations if you made it to the end!
I hope this was helpful, and thanks for reading! 🙂
