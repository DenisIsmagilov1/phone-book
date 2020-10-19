import React from 'react';
import ContactList from './components/ContactList';
import SearchForm from './components/SearchForm';

function App() {

  return (
    <div className="wrapper">
      Phone book
      <SearchForm />
      <ContactList />
    </div>
  );
}

export default App;
