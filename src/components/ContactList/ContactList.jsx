import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length ? (
        <>
          <List>
            {visibleContacts.map(contact => (
              <ContactItem key={contact.id} info={contact} />
            ))}
          </List>
        </>
      ) : (
        <p>Contact not found</p>
      )}
    </>
  );
};
