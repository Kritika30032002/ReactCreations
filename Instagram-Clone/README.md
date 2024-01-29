# Instagram-Clone using MERN Stack

Building an Instagram web app clone using MERN Stack ( MongoDB , Express.js , React.js , Node.js ) and bring some additional features .

# Preview :

<img src="https://github.com/TheLordA/Instagram-Web-App-MERN-Stack-Clone/blob/master/Demo/LoginPageDemo.PNG" alt="Login Page Demo" width="800">

<img src="https://github.com/TheLordA/Instagram-Web-App-MERN-Stack-Clone/blob/master/Demo/HomePageDemo.PNG" alt="Home Page Demo" width="800">

# Quick links :

1. [Usage](#usage)
2. [Todo](#todo)
3. [Contribute](#contribute)
4. [Image Copyright Claims](#image-copyright-claims)

# Usage :

1. Fork the repo and then clone it or download it.

2. First install all dependencies:

     ```bash
     # with npm
     npm install

     # or with yarn
     yarn
     ```

3. Create a `config/config.js` file and insert the following code it will contains all code variables. Replace values with yours !!!

    ```javascript
    PORT=YOUR_PORT
    SESSION_SECRET_LETTER="anything-secret"
    MYSQL_HOST="host"
    MYSQL_USER="user"
    MYSQL_PASSWORD="password"
    MYSQL_DATABASE="db"
    MAIL="your-email-for-sending email-verification-link"
    MAIL_PASSWORD="password-for-email"
    GOOGLE_GEOLOCATION_KEY='google-geolocation-key'
    ADMIN_PASSWORD='password-for-admin'
    ```

4. Start the server
     ```javascript
     npm run dev
     ```
5. Now run the app
     ```javacript
     npm start
     ```

# Todo List :

Features :

-    [x] Explore posts
-    [x] Search Users
-    [x] Like & comment posts
-    [x] Follow/UnFollow users
-    [x] Reset password using Emails
-    [x] Bookmark posts
-    [ ] Show notifications
-    [ ] Private messages
-    [ ] Rooms discussion
-    [ ] Like comments
-    [ ] Block members
-    [ ] Hashtags
-    [ ] Tags users
-    [ ] Add image filters
-    [ ] Show all online members (whom you've followed)
-    [ ] Story feature
-    [ ] IGTV


General :

-    [x] Folder restructuring
-    [x] Some serious code refactoring
-    [x] JSDoc & comments ( still have some more work to do )
-    [ ] Upgrade packages


**Thanks for reading**
