import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// Returns type to reducer
export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};