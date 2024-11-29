import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { AddComSchema } from "../types/AddComSchema";
import { commentActions } from "entities/Comments";

interface ThunkReturn {
    comment: AddComSchema
}

interface ThunkArg {
    text: string
    masterId: number
    username: string
}

export const addComment = createAsyncThunk<ThunkReturn, ThunkArg>(
    'comment/addComment',
    async ({text, masterId, username}, thunkAPI) => {
        try {
            const response = await axios.post('https://json-server-service.onrender.com/comments', {
                text, masterId, username
            })
            thunkAPI.dispatch(commentActions.setAddComment({text, masterId, username}))

            return response.data
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  