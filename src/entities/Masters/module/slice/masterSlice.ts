import { createSlice } from "@reduxjs/toolkit";
import { MasterSchema } from "../types/MasterSchema";
import { getMasters } from "../services/getMasters";

const initialState: MasterSchema = {
    masters: [],
    isLoading: false
}

const masterSlice = createSlice({
    name: 'masters',
    initialState,
    reducers: {
    },
    extraReducers: (build) => {
        build
            .addCase(getMasters.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMasters.fulfilled, (state, action) => {
                console.log(action.payload)
                state.masters = action.payload
            })
    }
})

export const { actions: masterActions } = masterSlice
export const { reducer: masterReducer } = masterSlice