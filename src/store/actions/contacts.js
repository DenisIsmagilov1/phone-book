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

export {
  changeSearchString,
  setContactDetail,
  updateContact
}
