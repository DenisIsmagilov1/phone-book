import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContactGroup from './ContactGroup'
import { fetchContactsRequest } from '../store/actions/contacts'

function ContactList({ contacts, searchString, fetchContactsRequest }) {

  useEffect(() => {
    fetchContactsRequest()
  }, [])

  function getContact() {
    const contactsSort = contacts.sort(({ name: x1 }, { name: x2 }) => x1 > x2 ? 1 : -1)

    return contactsSort.filter(contact => contact.name.toLowerCase().includes(searchString.toLowerCase()))
  }

  function getContactGroups() {
    const contacts = getContact();
    const contactGroups = {}

    for (let contact of contacts) {
      let firstChar = contact.name[0].toUpperCase();
      if (!Array.isArray(contactGroups[firstChar])) {
        contactGroups[firstChar] = []
      }
      contactGroups[firstChar].push(contact)
    }

    return contactGroups
  }

  const contactGroups = getContactGroups()

  const contactGroupItems = []

  for (let title in contactGroups) {
    contactGroupItems.push(<ContactGroup contacts={contactGroups[title]} title={title} key={title} />)
  }

  return (
    <div>
      <ul className="contacts">
        {contactGroupItems.length !== 0 ? contactGroupItems : 'Not found'}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ contacts, searchString }) => {
  return {
    contacts,
    searchString
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchContactsRequest
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
