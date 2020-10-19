import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { changeSearchString } from '../store/actions/contacts'

function SearchForm({ searchString, onChange }) {
  return (
    <div>
      <input
        value={searchString}
        onChange={(event) => onChange(event.target.value)}
        className="search-input input"
        placeholder="Type name"
      />
    </div>
  )
}

const mapStateToProps = ({ searchString }) => {
  return {
    searchString
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    onChange: changeSearchString
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(SearchForm)