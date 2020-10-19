import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setContactDetail } from '../store/actions/contacts'

function ContactItem({ contact, setContactDetail }) {
  const { name, phone } = contact;

  return (
    <li onClick={() => setContactDetail(contact)} className="contacts__item">
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

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    setContactDetail
  }, dispatch)
}

export default connect(null, mapActionsToProps)(ContactItem)
