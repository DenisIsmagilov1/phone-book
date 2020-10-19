const changeSearchString = (string) => {
  return {
    type: 'CHANGE_SEARCH_STRING',
    payload: string
  }
}

export {
  changeSearchString
}
