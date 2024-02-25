import {createSlice,createAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [], 
    reducers:{

        addUser(state,action){
            state.push(action.payload)
        },

        removeUser(state,action){
            console.log('delete',action.payload); 
            state.splice(action.payload, 1);
        },
        
        deleteUsers(state,action){}
    },
});



console.log(userSlice.actions);

export default userSlice.reducer;

export const {addUser,removeUser} = userSlice.actions;










