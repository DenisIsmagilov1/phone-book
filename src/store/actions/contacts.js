const changeSearchString = (string) => {
  return {
    type: 'CHANGE_SEARCH_STRING',
    payload: string
  }
}

const setContactDetail = (contact) => {
  return {
    type: 'SET_CONTACT_DETAIL',
    payload: contact
  }
}

const updateContact = (contact) => {
  return {
    type: 'UPDATE_CONTACT',
    payload: contact
  }
}

const fetchContactsRequest = () => (dispatch) => {
  fetch('http://demo.sibers.com/users')
    .then(res => res.json())
    .then(res => dispatch({
      type: 'REQUEST_CONTACTS_SUCCESS',
      payload: res
    }))
}

export {
  changeSearchString,
  setContactDetail,
  updateContact,
  fetchContactsRequest
}
