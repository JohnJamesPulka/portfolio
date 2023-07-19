// ContactUs.tsx
/*
import React from 'react';
import axios from 'axios';

const ContactUs: React.FC = () => {

  import axios from 'axios';

// ...

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    await axios.post('/api/submit-form', { name, phoneNumber, email, message });
    console.log('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  


  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <textarea placeholder="Message" className="border p-2 rounded" rows={6}></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Send
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Address</h4>
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

*/









/*

import React, { useState } from 'react';
import { MongoClient } from 'mongodb';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uri = 'mongodb+srv://John:88627797js@mongodbportfolio.irowvfp.mongodb.net/'; // Replace with your MongoDB connection string
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db('your-database-name');
      const collection = db.collection('your-collection-name');

      await collection.insertOne({ name, email, message });
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      await client.close();
    }
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Send
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Address</h4>
                <p>123 Main Street</p>
                <p>New York, NY 10001</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

*/











import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('/api/submit-form', { name, phoneNumber, email, message });
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    // Clear form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border p-2 rounded"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Send
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Address</h4>
                <p>16 Jerry Iriabe Street</p>
                <p>Lagos, Lekki Phase 1</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p>+(234)7046182023</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p>info@zekkah.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
};

export default ContactUs;


