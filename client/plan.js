/* 

PLAN

Create React App Client
Structure src folder
 - create components folder
    - create App folder, move App.js, App.css, App.test.js into this folder
    - delete content in App.js, App.css
- change import paths in index.js to mirror the changes
- delete other unnecessary files (eg. logo)
- add "proxy": "http://localhost:5001" in package.json

create the App component
 - to start with, create very basic functionality, and start building from there

Make fetch request from frontend to backend, to test if they are connecting

Create new components, each with its specific functionality:
- GetAllTasks.js - fetch request to backend to get all tasks
    - add edit and delete buttons/icons for each individual task

- Create api folder, containing api.js file as an api layer
    - will contain functions to fetch the data, that will be then passed to other components

- Install react-router-don, to navigate through diferrent components

- CreateTask.js - functionality to create a new task

- EditTask.js - to modify a task

- in App.js, getTaskByID fundtion, to help with edit task functionality

*/