import { Container } from './App.styled';

import { ContactForm } from 'components/ContactForm/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operation';
import { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </Container>
  );
};
