import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'components/redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'components/redux/selectors';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="phonebook-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}

export default Phonebook;
