import { createSlice } from "@reduxjs/toolkit";
import { CommentSchema } from "../types/CommentSchema";
import { getComment } from "../services/getComments";

const initialState: CommentSchema = {
   comments: [],
   isLoading: false,
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
    },
    extraReducers: (build) => {
        build
            .addCase(getComment.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getComment.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addCase(getComment.rejected, (state) => {
                state.error = 'error'
            })
    }
})

export const { actions: commentActions } = commentSlice
export const { reducer: commentReducer } = commentSlice