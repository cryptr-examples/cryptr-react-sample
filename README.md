# Cryptr with React

## 04 Add user authentication

### Signup button

🛠 Open up home page in the `src/pages/home.js` and import `SignUpButton`

```javascript
import { SignUpButton } from '@cryptr/cryptr-react'
```

🛠 Replace « Signup » button with `SignUpButton`:

```javascript
<SignUpButton
  className="cursor-pointer sm:mr-8 md:mr-10 rounded-md shadow flex items-center justify-center px-8 py-3 border border-transparent text-sm leading-6 font-bold shadow-md rounded-md uppercase text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:border-yellow-500 focus:shadow-outline-yellow transition duration-150 ease-in-out md:py-3 md:text-base md:px-10"
>
  Signup
</SignUpButton>
```

### Login and logout buttons

🛠 Open up nav component in the `src/components/Nav.js` and import `LogOutButton` and `SignInButton`

```javascript
import { LogOutButton, SignInButton } from '@cryptr/cryptr-react'
```

🛠 Replace « Login » button and « Logout » button with `SignInButton` and `LogOutButton`:

```javascript
<SignInButton type="button"
  className="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out">
  <span>Login</span>
</SignInButton>
<LogOutButton type="button"
  className="relative inline-flex items-center px-5 py-3 border border-transparent text-base uppercase leading-5 font-bold rounded-md text-yellow-500 shadow-md hover:shadow-xl focus:outline-none transition duration-150 ease-in-out">
  Logout
</LogOutButton>
```

🛠 Run the server & try to connect. Your React application redirects you to your sign form page, where you can sign in or sign up with an email.

__NOTE: You can log in with a sandbox email and we send you a magic link which should directly arrive in your personal inbox.__

[Next](https://github.com/cryptr-examples/cryptr-react-sample/tree/05-secure-the-profile-page)
