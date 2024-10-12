# Task Management Application - Backend
A simple task manager application built with Node.js, Express, and MySQL.

## Features
- Create, read, update, and delete tasks
- Simple RESTful API
- Input validation

## Technologies Used
- Node.js
- Express
- MySQL
- Sequelize (ORM)
- dotenv (for environment variables)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abran89/task-manager-backend.git
   cd task-manager-backend
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **You should create a .env file in the root directory based on the .env.example file**

# Running the Application

-
    ```bash
    npm start
    ```

# API Endpoints
- POST /tasks - Create a new task
- GET /tasks - Retrieve all tasks
- GET /tasks/:id - Retrieve a task by ID
- PUT /tasks/:id - Update a task by ID
- DELETE /tasks/:id - Delete a task by ID
