import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import instanceReducer from './slices/instanceSlice';
import loadingReducer from './slices/loadingSlice';

const middlewareEnhancer = [thunk];

const reducer = combineReducers({
  instance: instanceReducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewareEnhancer),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
