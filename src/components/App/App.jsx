import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from 'react-loader-spinner';

import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

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
      {isLoading && !error && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#dbd5d5"
          barColor="#e7c587"
        />
      )}
      <ContactList />
    </Box>
  );
};
