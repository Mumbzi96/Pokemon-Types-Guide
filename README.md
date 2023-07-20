# Main

The app displays the pokemon types and shows strength/weakness of each.

# Database Info

Data is available on a Mongo Atlas database but will be turned local later on to make it faster.
Reason it won't be a database is because I'm hosting the app on render and they don't provide local database hosting.

# Folder Structure

The root of the project mainly contains:

- package.json & node_modules to use concurrently
- Server folder
- Client folder

## package.json

The commands are mainly put here to make access to the app faster. Check the scripts in the file for more info, but here are the important ones:

- "dev":"concurrently \" cd client && npm run dev\" \"cd server && npm run dev\" ",
- "install-modules":"npm i && cd server && npm i && cd .. && cd client && npm i",
- "build-server":"cd server && npm run build",
- "build-client":"cd client && npm run build"

## Server

The server folder uses ExpressJS and connects to MongoDB Atlas. Make sure to check the configuration folder. In case you want to fork the app, create a "config.env" file in that folder that is based on the "configSample.env"

## Client
The client folder contains all frontend related views and uses ReactJS (built with vite). I will be adding readme files in there to explain the code a bit more.

# My Dev Usage
My main usage is simple, I run both apps conccurrently using "npm run dev" and each of the apps have their own port being used. Development mode is pretty easy.

# My App Hosting
To host the app on render, I'm building the client then copying the content of the "client/dist" folder into the "server/react-build" folder. After that, I'm pusing the code, and since render gets the code from Github repo, I connect to it there. So in summary, Render runs the server, the server contains the build of the client and uses it.

## A different way
You can also do a build of the client and a build of the server and run them separately or together.