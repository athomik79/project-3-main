import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import { tokenConfig } from './auth';

// Returns GET_ITEMS type to reducer
export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios({
    method: 'GET',
    url: '/api/items'
  })
    .then((res) =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(err.response.data, err.response.status)
    );
};

// Sending Requests to API endpoints in items.js from routes/api folder
export const addItem = (item) => (dispatch, getState) => {
  axios
    .post('/api/items', item, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(err.response.data, err.response.status)
    );
};

export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(err.response.data, err.response.status)
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};