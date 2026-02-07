import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Language } from '../types';

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: 'cs',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
