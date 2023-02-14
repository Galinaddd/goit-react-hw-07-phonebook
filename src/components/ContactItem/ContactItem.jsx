import { Item, Name, Number, Button } from './ContactItem.styled';
import { PropTypes } from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Name>{info.name}</Name>
      <Number>{info.number} </Number>

      <Button
        type="button"
        onClick={() => {
          dispatch(deleteContact(info.id));
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  info: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
