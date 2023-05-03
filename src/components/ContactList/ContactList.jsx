import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';
import { setFilters } from 'components/redux/filtersSlice';

function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  const handleFilterUpdate = e => {
    dispatch(setFilters(e.target.value));
  };
  return (
    <>
      <div className="contacts-filter">
        <label htmlFor="filter-input">Find contacts by name</label>
        <input
          id="filter-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter"
          onChange={handleFilterUpdate}
        />
      </div>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}
              {contact.number}
              <button
                type="button"
                name={contact.name}
                onClick={() => {
                  handleDelete(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
