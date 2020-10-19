import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setContactDetail, updateContact } from '../store/actions/contacts'

function ContactDetail({ contactDetail, setContactDetail, updateContact }) {

  let { id, name, email, phone, website, avatar } = contactDetail;

  const [disabled, setDisabled] = useState(true)
  const [nameContact, setName] = useState(name)
  const [emailContact, setEmail] = useState(email)
  const [phoneContact, setPhone] = useState(phone)
  const [websiteContact, setWebsite] = useState(website)

  function onSubmit(event) {
    event.preventDefault()
    updateContact({
      id,
      name: nameContact,
      email: emailContact,
      phone: phoneContact,
      website: websiteContact
    })
    setDisabled(true)
  }

  return (
    <div className="modal">
      <div className="modal__body">
        <div onClick={() => setContactDetail(null)} className="modal__close">&#10006;</div>
        <div className="contact-detail">
          <div className="contact-detail__header">
            <div className="contact-detail__avatar">
              <img src={avatar}></img>
            </div>
            <button onClick={() => setDisabled(!disabled)} className="contact-detail__update button">Change</button>
          </div>
          <form onSubmit={onSubmit} className="contact-detail__form">
            <label for="name">Name</label>
            <input disabled={disabled} value={nameContact} onChange={(event) => setName(event.target.value)} id="name" className="input" />

            <label for="email">Email</label>
            <input disabled={disabled} value={emailContact} onChange={(event) => setEmail(event.target.value)} id="email" className="input" />

            <label for="phone">Phone</label>
            <input disabled={disabled} value={phoneContact} onChange={(event) => setPhone(event.target.value)} id="phone" className="input" />

            <label for="website">Website</label>
            <input disabled={disabled} value={websiteContact} onChange={(event) => setWebsite(event.target.value)} id="website" className="input" />

            <button disabled={disabled} className="button" type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  )


}

const mapStateToProps = ({ contactDetail }) => {
  return {
    contactDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setContactDetail,
    updateContact
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail)
