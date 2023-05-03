import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    } else {
      localStorage.setItem('contacts', JSON.stringify([]));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <div className="phonebook-container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h1>Contacts</h1>
        <ContactList />
      </div>
    );
  }
}

export default Phonebook;
