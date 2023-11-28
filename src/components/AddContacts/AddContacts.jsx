import React, { useState } from 'react';

import style from './AddContacts.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { addContact } from '../redux/operations';

export function AddContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'top-right',
      });
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name: name, number: number }));
    setName('');
    setNumber('');

    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'top-right',
    });
  };

  return (
    <div className={style.addContact}>
      <div className={style.addContactForm}>
        <form onSubmit={handleSubmit}>
          <h3>Name</h3>
          <input
            maxlength="10"
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            onChange={handleNameChange}
            required
            value={name}
          ></input>
          <h4>Phone Number</h4>
          <input
            maxlength="15"
            type="tel"
            name="number"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={number}
            onChange={handleNumberChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
      </div>
    </div>
  );
}
