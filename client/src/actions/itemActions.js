import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// Returns GET_ITEMS type to reducer
export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};