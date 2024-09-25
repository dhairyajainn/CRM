import React, { useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "", company: "", email: "", phone: "" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleAddContact = () => {
    setContacts([...contacts, { id: Date.now(), ...newContact }]);
    setModalOpen(false);
    setNewContact({ name: "", company: "", email: "", phone: "" });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          + Add Contact
        </button>
      </div>

      <table className="min-w-full border border-gray-500">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Contact Name</th>
            <th className="px-4 py-2 border">Company Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="px-4 py-2 border">{contact.name}</td>
              <td className="px-4 py-2 border">{contact.company}</td>
              <td className="px-4 py-2 border">{contact.email}</td>
              <td className="px-4 py-2 border">{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Add New Contact</h2>
            <input
              type="text"
              placeholder="Contact Name"
              className="w-full mb-2 p-2 border rounded"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full mb-2 p-2 border rounded"
              value={newContact.company}
              onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 border rounded"
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full mb-4 p-2 border rounded"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddContact}
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
