import { Container } from './App.styled';

import { ContactForm } from 'components/ContactForm/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </Container>
  );
};
