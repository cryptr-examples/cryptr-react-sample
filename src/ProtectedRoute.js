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