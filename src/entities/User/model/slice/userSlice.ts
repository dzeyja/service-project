import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {
    id: '',
    username: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload            
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice