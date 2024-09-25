import React, { useState } from 'react';

function ContactForm({ addContact }) {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      addContact(contact);
      setContact({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
