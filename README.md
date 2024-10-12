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
- [Vitest](https://vitest.dev/) (for testing)

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

# Postman Collection
To test the API endpoints, you can use the provided Postman collection.
1. **Download and import the collection:**
   - [Download Postman Collection](./postman_collection.json)
3. **Import into Postman:**
   - Open Postman
   - Click on Import and select the downloaded file.
4. **Set up variables:**
   - {{url}}: Base URL of the server (e.g., http://localhost:3000).
  
## Testing

This project uses [Vitest](https://vitest.dev/) for unit testing.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```
