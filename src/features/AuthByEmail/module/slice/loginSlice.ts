import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
    email: '',
    password: ''
}

const loginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice