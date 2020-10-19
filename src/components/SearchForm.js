import React from 'react'

function SearchForm({ onChange }) {
  return (
    <div>
      <input onChange={(event) => onChange(event.target.value)} className="search-input" placeholder="Type name" />
    </div>
  )
}

export default SearchForm