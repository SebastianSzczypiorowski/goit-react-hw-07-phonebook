import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { setFilters } from 'components/redux/filtersSlice';
import { getContacts, getFilter } from 'components/redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );
  const handleFilterUpdate = e => {
    e.preventDefault();
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
              {contact.name} {contact.phone}
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
