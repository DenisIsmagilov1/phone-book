import React from 'react'
import ContactItem from './ContactItem'

function ContactGroup({ contacts, title }) {

  const contactsItems = contacts.map(contact => <ContactItem contact={contact} key={contact.phone} />)

  return (
    <div className="contacts__group">
      <span className="contacts__group__title">
        {title}
      </span>
      {contactsItems}
    </div>
  )
}

export default ContactGroup
