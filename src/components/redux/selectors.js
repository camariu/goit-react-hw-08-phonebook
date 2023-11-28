import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.filter.filter;

export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;

export const selectIsAuthentificated = ( state ) => state.user.isAuthentificated

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);