import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Label, AddContactForm, Input } from './ContactForm.styled';
import { addContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

// import { PropTypes } from 'prop-types';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const newContact = {
      id: nanoid(5),
      name,
      number,
    };
    const NameNornalized = name.toLowerCase();
    const IsInContacts = contacts.some(
      contact => contact.name.toLowerCase() === NameNornalized
    );
    if (IsInContacts) {
      alert(`${name} is olready in contacts`);
    } else {
      dispatch(addContacts(newContact));
    }

    // onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <AddContactForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit">Add Contacts</button>
      </AddContactForm>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
