import {v4 as uuid} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'HTML Boilerplate' },
    { id: uuid(), name: 'React navbar' },
    { id: uuid(), name: 'Email Form' },
    { id: uuid(), name: 'JS Lazy Loader' },
    { id: uuid(), name: 'Reducer' }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}