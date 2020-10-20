const initialState = {
  searchString: '',
  contacts: [],
  contactDetail: null
}

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_SEARCH_STRING': {
      return {
        ...state,
        searchString: action.payload
      }
    };
    case 'SET_CONTACT_DETAIL': {
      return {
        ...state,
        contactDetail: action.payload
      }
    };
    case 'UPDATE_CONTACT': {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      const newContacts = [
        ...state.contacts.slice(0, index),
        {
          ...state.contacts[index],
          ...action.payload
        },
        ...state.contacts.slice(index + 1),
      ];

      localStorage.setItem('contacts', JSON.stringify(newContacts))

      return {
        ...state,
        contacts: newContacts
      }
    };
    case 'REQUEST_CONTACTS_SUCCESS': {
      return {
        ...state,
        contacts: action.payload
      }
    };
    default:
      return state
  }
}

export default contactsReducer;