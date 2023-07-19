const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'google',
  auth: {
    user: 'yagazhigler@gmail.com',
    pass: '886277Js',
  },
});

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Form = mongoose.model('Form', formSchema);


app.post('/api/submit-form', (req, res) => {
  const { name, phoneNumber, email, message } = req.body;

  // Create a new Form document
  const newForm = new Form({
    name,
    phoneNumber,
    email,
    message,
  });

  // Save the form data to the database
  newForm.save((error, savedForm) => {
    if (error) {
      console.error('Error saving form:', error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Form data saved to database:', savedForm);

      // Send email notification
      const mailOptions = {
        from: 'your_email_address',
        to: 'your_personal_email_address',
        subject: 'New Form Submission',
        text: `Name: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Email sent:', info.response);
          res.status(200).send('Form submitted successfully!');
        }
      });
    }
  });
});

