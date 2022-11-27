import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/slices/contactsSlice';
import { getContact } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { ContactItem, ContactBtn, ContactInfo } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formatting = filteredContact();

  return (
    <ul>
      {formatting.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactBtn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
