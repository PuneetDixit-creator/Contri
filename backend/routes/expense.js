const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add an expense
router.post('/', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).send(expense);
  } catch (error) {
    res.status(400).send(error);
  }
});

git initmodule.exports = router;  // Ensure router is exported correctly

