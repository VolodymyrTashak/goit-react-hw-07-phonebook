import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import Box from '../Box/Box.styled';
import { Text, Title } from './App.styled';

export const App = () => {
  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm />
      <Text>Contacts</Text>
      <Filter />
      <ContactList />
    </Box>
  );
};
