import '../PhoneBook/Phonebook.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';
import { getContacts } from 'components/redux/selectors';

function ContactForm() {
  // const contacts = useSelector(state => state.contacts)
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already present in the phonebook`);
      return;
    } else if (!name || !phone) {
      alert('Please fill in all fields');
      return;
    }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(addTask(event.target.elements.text.value));
  //   form.reset();

  //   // if (contacts.some(contact => contact.name === nameInput)) {
  //   //   alert(`${nameInput} is already present in the phonebook`);
  //   //   return;
  //   // } else if (!nameInput || !numberInput) {
  //   //   alert('Please fill in all fields');
  //   //   return;
  //   // }
  // };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
        id="phone"
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
