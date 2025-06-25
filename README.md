![Screenshot 2025-06-25 221255](https://github.com/user-attachments/assets/655c3559-94e9-46a2-b580-7c802ee0fcf0)
![Screenshot 2025-06-25 221242](https://github.com/user-attachments/assets/705fd354-e7a5-49c6-bfa4-08cd34c4b440)
# Expense Tracker

A full-stack expense tracker application built with Node.js, Express, MongoDB, and React. Users can add, edit, delete, and visualize their expenses.

## Features
- Add, edit, and delete expense records
- Visualize expenses by category and month
- Responsive and user-friendly interface
- Clean and maintainable code

## Project Structure
```
New folder (3)/
  backend/    # Node.js + Express + MongoDB API
  frontend/   # React app
  README.md   # This file
```

## Setup Instructions

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)

### 1. Backend Setup
```bash
cd backend
npm install
node server.js
```
The backend runs on [http://localhost:5000](http://localhost:5000)

### 2. Frontend Setup
```bash![Screenshot 2025-06-25 221242](https://github.com/user-attachments/assets/9![Screenshot 2025-06-25 221255](https://github.com/user-attachments/assets/067dfaf8-3563-4990-ae73-f3e6d7a71314)
ade005b-5298-444e-8541-b091a65d7c19)

cd frontend
npm install
npm start
```
The frontend runs on [http://localhost:3000](http://localhost:3000)

### 3. MongoDB Setup
- Make sure MongoDB is running locally on the default port (27017), or update the connection string in `backend/server.js`.

## Architecture & Flow
- **Backend**: REST API with Express. CRUD endpoints for expenses. Data stored in MongoDB.
- **Frontend**: React app with components for form, list, and dashboard. Uses Axios for API calls. Recharts for data visualization.
- **Data Flow**: User interacts with React UI → API requests sent to Express backend → MongoDB stores/retrieves data → Data visualized in charts.

## Endpoints
- `POST   /expenses`   Add a new expense
- `GET    /expenses`   Get all expenses
- `PUT    /expenses/:id` Update an expense
- `DELETE /expenses/:id` Delete an expense

## Customization
- To use a remote MongoDB, update the connection string in `backend/server.js`.
- For user authentication, extend the backend and frontend (not included by default).

## License
MIT 
