import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './slices';
import userDetail from "./userDetail";

const rootReducer = combineReducers({
    users: userSlice,
    userDetail: userDetail
});

export default rootReducer;