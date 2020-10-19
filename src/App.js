import React from 'react';
import { connect } from 'react-redux'

import ContactList from './components/ContactList';
import SearchForm from './components/SearchForm';
import ContactDetail from './components/ContactDetail';

function App({ contactDetail }) {

  return (
    <div className="wrapper">
      Phone book
      <SearchForm />
      <ContactList />
      {contactDetail ? <ContactDetail /> : ''}
    </div>
  );
}

const mapStateToProps = ({ contactDetail }) => {
  return {
    contactDetail
  }
}

export default connect(mapStateToProps)(App);
