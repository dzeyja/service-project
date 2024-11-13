import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/UserSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage/localStorage";

const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload            
        },
        initUserAuto: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if(user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = null
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice