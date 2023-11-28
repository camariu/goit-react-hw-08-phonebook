import React from 'react';
import { filterContacts } from '../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';
import style from "./Filter.module.css"
 
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={style.filter}>
      <input
        type="text"
        name="filter"
        placeholder="Find contact"
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
