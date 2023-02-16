import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = () => {
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <>
      {visibleContacts.length || filter ? (
        visibleContacts.length ? (
          <>
            <Filter />
            <List>
              {visibleContacts.map(contact => (
                <ContactItem key={contact.id} info={contact} />
              ))}
            </List>
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
    </>
  );
};
