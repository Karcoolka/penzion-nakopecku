import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BookingFormData, FormStatus } from '../types';

interface BookingFormState {
  data: BookingFormData;
  status: FormStatus;
  errorMessage: string;
}

const initialState: BookingFormState = {
  data: {
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    numberOfPeople: '',
    notes: '',
    gdprConsent: false,
  },
  status: 'idle',
  errorMessage: '',
};

const bookingFormSlice = createSlice({
  name: 'bookingForm',
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: keyof BookingFormData; value: string | boolean }>
    ) {
      const { field, value } = action.payload;
      (state.data as Record<string, string | boolean>)[field] = value;
    },
    setFormStatus(state, action: PayloadAction<FormStatus>) {
      state.status = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    resetForm(state) {
      state.data = initialState.data;
      state.status = 'idle';
      state.errorMessage = '';
    },
  },
});

export const { updateField, setFormStatus, setErrorMessage, resetForm } =
  bookingFormSlice.actions;
export default bookingFormSlice.reducer;
