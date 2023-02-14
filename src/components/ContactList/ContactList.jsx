import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} info={contact} />
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
