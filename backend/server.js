const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expensesRoutes = require('./routes/expenses');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/expenses', expensesRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 