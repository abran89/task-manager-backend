const express = require('express');
const router = express.Router();


// Get all tasks
router.get('/tasks', (req, res) =>{});

// Create a new task
router.post('/tasks', (req, res) =>{});

// Get a specific task by its ID
router.get('/tasks/:id', (req, res) =>{});

// Update a task by its ID
router.put('/tasks/:id', (req, res) =>{});

// Delete a task by its ID
router.delete('/tasks/:id', (req, res) =>{});

module.exports = router;