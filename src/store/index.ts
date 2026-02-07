import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import bookingFormReducer from './bookingFormSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    bookingForm: bookingFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
