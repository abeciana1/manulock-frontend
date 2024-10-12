import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const middlewareEnhancer = [thunk];

const store = configureStore({
  redux: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareEnhancer),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
