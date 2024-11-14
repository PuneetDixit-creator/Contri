const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware function example
const exampleMiddleware = (req, res, next) => {
  console.log('Middleware function executed');
  next();
};

// Use middleware function
app.use(exampleMiddleware);

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/expenseSplittingApp'; // Replace with your local MongoDB connection string

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
