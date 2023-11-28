import React from 'react';
import style from "./ContactList.module.css"
 
import AddContactItem from 'components/AddContactItem/AddContactItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  if (filter.toLowerCase() && !filteredContacts.length) {
    Notify.warning('No contacts matching your request', {
      position: ' top-right',
    });
  }

  return (
    <div className={style.contactList}>
      <ul>
        {filteredContacts.map(contact => {
          return <AddContactItem key={contact.id} contacts={contact} />;
        })}
      </ul>
    </div>
  );
}