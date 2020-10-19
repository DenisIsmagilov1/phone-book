import React from 'react'

function ContactList({ contacts }) {

  const contactsItems = contacts.map(contact => <li>{contact.name} {contact.phone}</li>)

  return (
    <div>
      <ul>
        {contactsItems}
      </ul>
    </div>
  )
}

export default ContactList
