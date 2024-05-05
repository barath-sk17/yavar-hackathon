# Todo List App with Sequelize, Express.js, and PostgreSQL

This project is a simple Todo List application built with Node.js, Express.js, and Sequelize. It uses PostgreSQL as the database engine and implements migrations to set up a relational database schema. The application demonstrates a basic relationship between users, todos, and todo items, allowing users to create, update, and delete todos and their respective items.

## Project Structure

The project consists of three main tables:

- `Users`: Contains user information such as `name`, `email`, and `password`.
- `Todos`: Represents a todo list created by a user, with a foreign key reference to the `Users` table.
- `TodoItems`: Represents individual items within a todo list, with a foreign key reference to the `Todos` table.

## Technology Stack

- **Backend Framework**: Express.js
- **ORM**: Sequelize
- **Database**: PostgreSQL

## Getting Started

To run this project, ensure you have [Node.js](https://nodejs.org/en/), [Sequelize CLI](https://sequelize.org/master/manual/migrations.html), and a PostgreSQL database set up. Follow the steps below to set up and run the application.

### Installation

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up the Database**
   Ensure you have PostgreSQL running and create a new database. Update the Sequelize connection details in `config/config.json` to match your database configuration.

4. **Run Migrations**
   After configuring the database, run the following command to create the tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

### Running the Application

1. **Start the Server**
   To start the application, use:
   ```bash
   npm start
   ```

2. **Access the Application**
   Once the server is running, access your application via `http://localhost:3000` or your configured port.

## Usage

After setting up the application and starting the server, you can interact with the todo list through API endpoints. Here are some examples of how you can use the app:

- **Creating a User**
  - Endpoint: `POST /users`
  - Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`

  - **Sign Up**
 ![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/6fd6dd38-48b9-4107-89f2-43c5d1209136)
 ![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/eec02639-a42b-43cf-bc42-aed85adbcedd)

  - **Sign In**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/50084266-b873-463c-b812-f8369d523ca9)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/8960644e-35a9-408b-8a39-be2a62ebdf0c)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/a0679996-ed51-4a2d-b8cd-537c3b6b56fb)


- **Creating a Todo**
  - Endpoint: `POST /todos`
  - Body: `{ "title": "My First Todo" }`



  - **Fetch all**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/93297e2e-53fb-432e-8006-4eff5ee920e9)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/d439090a-0b6a-4015-a297-429f86db2351)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/6ed03dc1-70dd-4a17-bf57-4b5ea69cfaea)

  - **Update and Fetch all**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/a8e18759-46e5-45d8-b890-cc3a249ac67b)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/72fd2369-6a60-4acb-bbd2-08c0459d4253)

  - **Delete**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/598e477a-9d48-494b-8391-50cb56ca396d)



- **Creating a Todo Item**
  - Endpoint: `POST /todoitems`
  - Body: `{ "text": "Buy groceries", "todoId": 1 }`

  - **Fetch all**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/0b571da5-2e2f-4c14-b975-6a7b3ea9cfce)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/9dc732ac-bd70-4f03-b3da-990058f6d212)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/5ed48d4d-eb96-4808-a65d-b1b56d7918f2)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/997b00e1-d06a-4a3a-b2c0-c7f74983a90c)

- **Updating a Todo Item's Status**
  - Endpoint: `PATCH /todoitems/:id`
  - Body: `{ "isCompleted": true }`
    
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/49602fed-2621-456f-b070-8df259a28af0)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/e373a34f-9a6d-422e-8100-e744940de596)

  - **Delete**
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/6d7c6978-7ac3-4700-895e-489c2fd8edf2)
![image](https://github.com/barath-sk17/yavar-hackathon/assets/127032804/3daa9a4e-6eb2-46b6-9319-804702679876)


## Rollback Migrations

If you need to undo a migration, use the following command to drop the tables:

```bash
npx sequelize-cli db:migrate:undo
```
