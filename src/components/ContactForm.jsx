import React, { useState } from "react";
import '../styles/ContactForm.css'

function ContactForm({ addContact, onCancel }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }
    const newContact = {
      id: Date.now(),
      name: `${firstName}`,
      username: `${lastName}`,
      phone: phone
    };
    addContact(newContact);
    setFirstName('');
    setLastName('');
    setPhone('');
  };

  const handleCancel = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Форма контакту</h2>
      <label>
        Ім'я:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Прізвище:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Телефон:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Зберегти</button>
      <button className="btn__cancel"
        onClick={handleCancel}
        type="button"
      >
        Скасувати
      </button>
    </form>
  );
}

export default ContactForm