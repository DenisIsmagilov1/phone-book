import React from 'react'

function ContactItem({ contact }) {
  const { name, phone } = contact;

  return (
    <li className="contacts__item">
      <div className="contacts__avatar">
        {name[0]}
      </div>
      <div className="contacts__info">
        <span className="contacts__name">{name}</span>
        <span className="contacts__phone">{phone}</span>
      </div>
    </li>
  )
}

export default ContactItem
