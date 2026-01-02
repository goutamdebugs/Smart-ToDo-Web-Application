# Smart ToDo API

A simple TODO REST API built with Node.js, Express and MongoDB.  
It is documented with **Swagger** — making it much easier to test and integrate the API.

---
## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- Swagger (swagger-jsdoc, swagger-ui-express)
## Quick start

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB running locally or a remote MongoDB URI
### Project Structure
```bash
SMART-TODO-API
├── node_modules/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── jwt.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models/
│   │   ├── Task.model.js
│   │   └── User.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   ├── utils/
│   │   ├── hash.js
│   │   └── token.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
└── package.json
````
### Clone & install
```bash
git clone https://github.com/goutamdebugs/Smart-ToDo-Web-Application.git
cd Smart-ToDo-Web-Application
npm install
```
###  .env
```bash
PORT=5000
MONGODB_URL=mongodb://localhost:27017/todo-app-api
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d
BASE_URL=http://localhost:5000
```
### Run locally
```bash
npm run dev
# or
npm start
```
## When the server starts, you will see a message like this in the console:
```bash
server running on port 5000
API URL: http://localhost:5000
swagger Docs: http://localhost:5000/api-docs
```
# Swagger API Documentation
Swagger UI is integrated directly inside ``` server.js. ```
```bash
http://localhost:5000/api-docs
````
## From Swagger UI, you can:

-View all available endpoints

-Test APIs with request bodies

-Authorize JWT protected routes
#### Authentication (JWT)
Protected routes require a Bearer Token.

##### How to authorize in Swagger:
This API comes with built-in documentation. Once the server is running, visit:
``` http://localhost:5000/api-docs ```
You can test all APIs directly from the Swagger interface. Note that for protected routes (Tasks), you need to authorize using the JWT token received after login.
```bash
Method,Endpoint,Description
POST,/api/auth/register  #Register a new user
POST,/api/auth/login     #Login user & get Token
````

### Tasks (Protected)
Headers required: Authorization: Bearer <token>
```
GET	/api/tasks	#Get all tasks
POST	/api/tasks	#Create a new task
GET	/api/tasks/:id	#Get a specific task details
PUT	/api/tasks/:id	#Update a task
DELETE	/api/tasks/:id	#Delete a task
```
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1d3f4afd-6902-4383-8aad-e46a79f26556" />
<img width="1199" height="709" alt="image" src="https://github.com/user-attachments/assets/29ba2979-da03-4185-8e79-e8dcd82eb7c9" />
<br>
---
copy this token for --
---
<br>
<img width="689" height="432" alt="image" src="https://github.com/user-attachments/assets/2b95361c-70ec-4be0-a861-e51ae1c904c8" />
<br>


