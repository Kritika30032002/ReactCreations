# Twitter Clone Frontend

Twitter clone built using React, Redux.


## Features

1. Signup/Login
2. Add Tweet
3. Follow people
4. Like, Retweet, comment
5. View profile
6. Search users in explore section
7. Add bookmarks
8. Dark mode

## Upcoming Features

1. Notifications
2. Live updations of like, retweet

## Run locally

- Create a .env file with the following contents:

```javascript
    REACT_APP_SERVER_URL=http://localhost:5000
    REACT_APP_SECRET_KEY=<YOUR_SECRET_KEY>
```
Note: You need to also setup the backend repository for APIs to work

- `npm install && npm start`

## Demo account

```javascript
username: demoaccount
password: 12345678
```

## Demo

![Feed](demo/feed.png)



# Twitter Clone backend

## Run locally

Requirements: Node, npm, MySQL

Create `.env` file at the root of the project with the following contents:

```javascript
    DB_NAME=<DATABASE_NAME>
    DB_USER=<DATABASE_USER>
    DB_PASSWORD=<DATABASE_PASSWORD>
    DB_HOST=<DATABASE_HOST>
    DB_PORT=<DATABASE_PORT>
    CLOUDINARY_URL=<CLOUDINARY_URL>
    SECRET_KEY=<YOUR_SECRET_KEY>
```

`npm install`

`npm start`
