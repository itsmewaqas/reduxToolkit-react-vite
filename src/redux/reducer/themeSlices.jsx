import { createSlice, createAction } from '@reduxjs/toolkit';

const themeSlices = createSlice({
    name: 'themeSlices',
    initialState: {
        themeSlices: 'light',
        languageSlices:'en',
    },
    reducers: {

        selectTheme(state, action) {
            state.themeSlices = action.payload;
        },
        selectLanguage(state, action) {
            state.languageSlices = action.payload;
        },

    },
});

console.log('themeSlices.actions', themeSlices.actions);

export default themeSlices.reducer;

export const { selectTheme, selectLanguage } = themeSlices.actions;










