import { createSlice, createAction } from '@reduxjs/toolkit';

const themeSlices = createSlice({
    name: 'themeSlices',
    initialState: {
        themeSlices: 'light',
        languageSlices: 'en',
    },
    reducers: {

        selectTheme(state, action) {
            state.themeSlices = state.themeSlices === 'light' ? 'dark' : 'light';
        },
        selectLanguage(state, action) {
            state.languageSlices = state.languageSlices === 'en' ? 'ar' : 'en';
        },

    },
});

export default themeSlices.reducer;
export const { selectTheme, selectLanguage } = themeSlices.actions;










