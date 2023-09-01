# Breezy Online Planner

BreezyOnlinePlanner is a full-stack task management application. 
It features a user-friendly frontend developed with React.js, a backend built with Node.js and Express, and uses Supabase for database storage and user authentication.
 
[Visit the BreezyOnlinePlanner App](https://breezyonlineplanner.netlify.app)

## Features
* User Authentication: Secure user registration, login, and password reset functionalities provided by Supabase.
* Task Management: Create, edit, and delete tasks to keep track of your daily activities.
* User-Centric: Each user can only access, edit and delete their own tasks, ensuring data privacy.
* Light and Dark Themes: Easily switch between light and dark themes to suit your preference.

## Usage
1. Visit the homepage to watch a demo video showcasing how the app works.
2. Log in or sign up using the secure authentication provided by Supabase.
3. Navigate to the Tasks page to start managing your tasks.
4. Create, edit, or delete tasks as needed.

## Tech stack

### Frontend
* React.js
* React Router
* Supabase Auth UI
* react-player
* react-paginate
* fortawesome icons

### Backend
* Node.js
* Express

### Database and Authentication
* Supabase

### Deployment and Hosting
* Netlify
* Render

## Testing
* Jest
* React Testing Library

## Installation
To run this project locally, follow these steps:
1. Clone this repository
2. Configure environment variables:
- Create .env files in the root directories of the frontend and backend folders
- Add the following environment variables to the .env files in the frontend:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_KEY=your_supabase_anon_key
REACT_BASE_URL=http://localhost:your_port_number
```
- Add the following environment variables to the .env files in the backend:
```
REACT_APP_PORT= your_port_number
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```
Please note that you will need to set up your own Supabase account and database, and obtain your own Supabase URL and key

3. Navigate to the server (backend) folder and install dependencies
```
cd server
npm install
```
4. Start the server
```
npm run dev
```
5. From the server folder, navigate to the client (frontend) folder and install dependencies
```
cd ..
cd client
npm install
```
6. Start the client
```
npm start
```
7. Visit http://localhost:3000 to view the app

# Contact
I built this project mainly for learning purposes, so any feedback and suggestions are greatly appreciated.

Please feel free to contact me for any questions or comments at:
<a href="mailto:bianca.buha@hotmail.com">[email me]</a>







