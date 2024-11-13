import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByEmail } from "../services/loginByEmail";

const initialState: LoginSchema = {
    email: '',
    password: '',
    error: '',
    message: '',
    isLoading: false
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
        },
        clearMessage: (state) => {
            state.message = ''
        },
        clearError: (state) => {
            state.error = ''
        }
    },
    extraReducers: (build) => {
        build
            .addCase(loginByEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginByEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice