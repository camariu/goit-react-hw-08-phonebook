import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, resetAuthState } from "./operations";

const usersSlice = createSlice ({
    name: "user",
    initialState: {
        user: null,
        isAuthentificated: false,
        isLoading: true,
        error: null,
    },

    reducers: {
        resetAuthState(state) {
          state.isAuthentificated = false;
        },
      },

    extraReducers:{
        [register.fulfilled](state,action){
            state.user = action.payload;
            state.isAuthentificated = true;
            state.isLoading =  false;
            state.error = null
        },
        [login.fulfilled](state,action){
            state.user = action.payload;
            state.isAuthentificated = true;
            state.isLoading =  false;
            state.error = null
        },
        [logout.fulfilled](state,action){
            state.user = null;
            state.isAuthentificated = false;
            state.isLoading = false;
            state.error = null
        },
    }
})

export const userReducer = usersSlice.reducer
