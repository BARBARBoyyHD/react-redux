import React from 'react'
import { FETCH_API_SUCCESS,FETCH_API_REQUEST,FETCH_API_ERROR } from './apiTypes'

const initialState = {
    loading: false,
    data:[],
    error:""
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_REQUEST:
          return { ...state, loading: true };
        case FETCH_API_SUCCESS:
          return { loading: false, data: action.payload, error: '' };
        case FETCH_API_ERROR:
          return { loading: false, data: [], error: action.payload };
        default:
          return state;
      }
}

export default apiReducer
