import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Spiner } from 'components/Spiner/Spiner';

import Box from '../Box/Box.styled';
import { Text, Title } from './App.styled';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm />
      <Text>Contacts</Text>
      <Filter />
      {isLoading && !error && <Spiner />}
      <ContactList />
    </Box>
  );
};
