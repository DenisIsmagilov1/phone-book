import React from 'react'
import ContactGroup from './ContactGroup'

function ContactList({ contactGroups }) {

  const contactGroupItems = []

  for (let title in contactGroups) {
    contactGroupItems.push(<ContactGroup contacts={contactGroups[title]} title={title} key={title} />)
  }

  return (
    <div>
      <ul className="contacts">
        {contactGroupItems.length != 0 ? contactGroupItems : 'Not found'}
      </ul>
    </div>
  )
}

export default ContactList
