# Messenger Clone
Fully responsive messenger clone on MERN Stack

#### Tech Stack
-Next.js 13
-React
-Tailwind
-Prisma
-MongoDB
-NextAuth
-Pusher


#### Demo
Check out the demo of the Messenger clone on YouTube: [Messenger Clone Demo](https://www.youtube.com/watch?v=HHVamziJsWs)

### Prerequisites

**Node version 14.x**

### Clone the Repository
   ```bash
   git clone https://github.com/Kritika30032002/ReactCreations.git
   ```

### Navigate to the Project Directory
   ```bash
   cd ReactCreations\Messenger_Clone
   ```

### Install packages

   ```shell
   npm i
   ```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
