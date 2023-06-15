/*
PLAN
Make folder server
Make a file server.js
cd to server
npm init -y - to create package.json

INSTALL DEPENDENCIES:
 - npm install express - to create server
 - npm install nodemon - to run server
 - npm install cors - to allow cross origin requests
 - npm install dotenv - to store private information => add .env file to .gitignore
 - npm install pg - to connect to postgresql

 - add "type": "module" to package.json
 - add "dev": "nodemon -r dotenv/config server.js" to package.json (in scripts)

 ADD FILES:
- add .gitignore file
- add .env file

ADD FOLDERS TO CREATE A CLEAR STRUCTURE OF THE PROJECT:
- add folder "routes" - to store all routes
- add folder "controllers" - to store all controllers
- add folder "models" - to store all models
- add folder "db" - to store db file, that will be used to connect to db

SET UP server.js

 - add file tasksController.js to controllers folder
 - add file tasksModel.js to models folder
 - add file tasksRoute.js to routes folder

SET UP db.js
- write code to connect to db

SET UP tasksModel.js
- write functions

SET UP tasksController.js
- write functions

SET UP tasksRoute.js
- write routes

(MODELS >> CONTROLLERS >> ROUTES)

TEST ALL ROUTES IN THUNDER CLIENT
*/