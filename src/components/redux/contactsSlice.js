import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) || [],
  reducers: {
    addContact(state, action) {
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      const updatedContacts = [...state, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
    deleteContact(state, action) {
      const updatedContacts = state.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return updatedContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
