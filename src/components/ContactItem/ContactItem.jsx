import { Item, Name, Number, Button } from './ContactItem.styled';
import { PropTypes } from 'prop-types';
import { deleteContact } from '../../redux/operation';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Name>{info.name}</Name>
      <Number>{info.phone} </Number>

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
    createdAt: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
