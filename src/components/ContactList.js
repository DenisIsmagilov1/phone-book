import React from 'react'
import ContactItem from './ContactItem'

function ContactList({ contacts }) {

  const contactsItems = contacts.map(contact => <ContactItem contact={contact} key={contact.phone} />)

  return (
    <div>
      <ul className="contacts">
        {contactsItems.length !== 0 ? contactsItems : 'Not Found'}
      </ul>
    </div>
  )
}

export default ContactList
