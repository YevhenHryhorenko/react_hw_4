import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm.jsx";
import ContactTable from "./ContactTable.jsx";
import '../styles/Contacts.css'

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Не вдалося отримати дані про контакти');
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.log('Помилка отримання контактів:', error.message);
    }
  };  

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className='wrapper'>
      <h1>Список контактів</h1>
      {
        contacts && contacts.length > 0 ? (
          <ContactTable contacts={contacts} deleteContact={deleteContact} />
        ) : (
          <h2>Немає контактів</h2>
        )
      }
      
      {showForm ? (
        <ContactForm addContact={addContact} onCancel={handleCancelForm} />
      ) : (
        <button className='add-contact' onClick={() => setShowForm(true)}>Додати контакт</button>
      )}
    </div>
  );
}

export default Contacts
