this app uses the api forupdated accurate results, currently its usimy my api key, till one month it will work or it may get max 1500 requestes, then you have to update that key  which can be done on url[https://app.exchangerate-api.com]
to run project use:
```
npm install
npm audit fix
npm npm start
```
#how to renew api
-visit url[https://www.exchangerate-api.com/]
-signin
-click on get new key
-copy key
-paste in /src/config/api.ts
-eg const API_KEY: string = your-api-key;