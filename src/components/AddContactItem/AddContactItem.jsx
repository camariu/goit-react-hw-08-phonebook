import React from 'react';
import style from "./AddContactItem.module.css"

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import  {MdDelete } from "react-icons/md"

export default function AddContactItem({ contacts }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contacts.id));
    Notify.info(
      `${contacts.name} was successfully deleted from your phonebook`,
      {
        position: 'top-right',
      }
    );
  };

  return (
    <div>
      <ul className={style.contactList}>
          <li>{contacts.name} : {contacts.number}</li>
        <MdDelete onClick={handleDelete } size='30px' color='#fff' className={style.deleteButton}/>
      </ul>
    </div>
  );
}
