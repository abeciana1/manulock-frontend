import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import instanceReducer from './slices/instanceSlice';

const middlewareEnhancer = [thunk];

const store = configureStore({
  redux: {
    instance: instanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareEnhancer),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
