import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInSchema } from "../types/SignInSchema";
import { signInByEmail } from "../services/signInByEmail";
// import { loginByEmail } from "../services/loginByEmail";

const initialState: SignInSchema = {
    email: '',
    password: '',
    isLoading: false,
    message: '',
    error: ''    
}

const signInSlice = createSlice({
    name: 'signInForm',
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
            .addCase(signInByEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(signInByEmail.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message
            })     
            .addCase(signInByEmail.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: signInActions } = signInSlice
export const { reducer: signInReducer } = signInSlice