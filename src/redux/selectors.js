import { createSelector } from '@reduxjs/toolkit';

export const getContact = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilteredContact = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContact;
  }
);
