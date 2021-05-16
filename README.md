# Cryptr with React

## 02 Application Keys

### Add your Cryptr credentials

🛠️️ Add a `.env` file to your environment with the following command:

```bash
touch .env
```

🛠️️ Then fill the `.env` file with the variables you'll have retrieved from your Cryptr application. Don't forget to replace `YOUR_CLIENT_ID` & `YOUR_DOMAIN` with your own domain.

```javascript
REACT_APP_CRYPTR_AUDIENCE=http://localhost:3000
REACT_APP_CRYPTR_CLIENT_ID=YOUR_CLIENT_ID
REACT_APP_CRYPTR_DEFAULT_LOCALE=en
REACT_APP_CRYPTR_DEFAULT_REDIRECT_URI=http://localhost:3000
REACT_APP_CRYPTR_TENANT_DOMAIN=YOUR_DOMAIN
REACT_APP_CRYPTR_TELEMETRY=FALSE
REACT_APP_CRYPTR_REGION=eu
```

[Next](https://github.com/cryptr-examples/cryptr-react-sample/tree/03-set-up-the-cryptr-react-sdk)
