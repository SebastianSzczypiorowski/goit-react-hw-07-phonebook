import '../PhoneBook/Phonebook.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/operations';

function ContactForm() {
  // const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(event.target);
    dispatch(addContact(event.target.elements.name.value));
    form.reset();
    // if (contacts.some(contact => contact.name === nameInput)) {
    //   alert(`${nameInput} is already present in the phonebook`);
    //   return;
    // } else if (!nameInput || !numberInput) {
    //   alert('Please fill in all fields');
    //   return;
    // }
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
      <button type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
