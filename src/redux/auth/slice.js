import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
    user: {
        email: null,
        password: null,
    },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {

    }
})

export const authReducer = authSlice.reducer;