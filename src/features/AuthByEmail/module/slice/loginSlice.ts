import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByEmail } from "../services/loginByEmail";

const initialState: LoginSchema = {
    email: '',
    password: '',
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
        }
    },
    extraReducers: (build) => {
        build
            .addCase(loginByEmail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByEmail.rejected, (state) => {
                state.isLoading = false
            })
    }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice