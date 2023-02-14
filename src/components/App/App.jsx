import { Container } from './App.styled';
import { Filter } from '../Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filterContacts = () => {
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {filterContacts().length || filter ? (
        filterContacts().length ? (
          <>
            <Filter />
            <ContactList contacts={filterContacts()} />
          </>
        ) : (
          <>
            <Filter />
            <p>Contact not found</p>
          </>
        )
      ) : (
        <p>There are no phone numbers in Contacts!</p>
      )}
    </Container>
  );
};
