import '../PhoneBook/Phonebook.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';

function ContactForm() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // @ts-ignore
    const nameInput = document.querySelector('#name').value;
    // @ts-ignore
    const numberInput = document.querySelector('#number').value;

    if (contacts.some(contact => contact.name === nameInput)) {
      alert(`${nameInput} is already present in the phonebook`);
      return;
    } else if (!nameInput || !numberInput) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(
      addContact({
        name: nameInput,
        number: numberInput,
      })
    );
  };

  return (
    <form className="contact-form">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
