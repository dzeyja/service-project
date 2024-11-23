import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddComSchema } from "../types/AddComSchema";
import { addComment } from "../services/addComment";

const initialState: AddComSchema = {
    text: '',
    masterId: 0,
    isLoading: false
}

const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
    },
    extraReducers: (build) => {
        build
        .addCase(addComment.pending, (state) => {
            state.isLoading = true
        })
        .addCase(addComment.fulfilled, (state,) => {
            state.isLoading = false
        })
    }
})

export const { actions: addCommentActions } = addCommentSlice
export const { reducer: addCommentReducer } = addCommentSlice