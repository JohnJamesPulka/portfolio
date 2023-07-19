// server.js
const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Create a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Create Express app
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// API endpoint for saving contact form data
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ message: 'An error occurred while submitting the form' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
