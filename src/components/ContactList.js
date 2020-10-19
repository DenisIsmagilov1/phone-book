import React from 'react'
import ContactItem from './ContactItem'

function ContactList({ contacts }) {

  const contactsItems = contacts.map(contact => <ContactItem contact={contact} />)

  return (
    <div>
      <ul>
        {contactsItems}
      </ul>
    </div>
  )
}

export default ContactList
