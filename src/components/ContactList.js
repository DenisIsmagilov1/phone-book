import React from 'react'
import { connect } from 'react-redux'
import ContactGroup from './ContactGroup'

function ContactList({ contacts, searchString }) {

  function getContact() {
    return contacts.filter(contact => contact.name.toLowerCase().includes(searchString.toLowerCase()))
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

export default connect(mapStateToProps)(ContactList)
