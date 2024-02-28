import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './slices';
import userDetail from "./userDetail";
import themeSlices from "./themeSlices";

const rootReducer = combineReducers({
    users: userSlice,
    userDetail: userDetail,
    themeSlices: themeSlices,

   
});

export default rootReducer;