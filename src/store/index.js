import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from './reducers/contacts';

const store = createStore(contactsReducer, applyMiddleware(thunk));

export default store;