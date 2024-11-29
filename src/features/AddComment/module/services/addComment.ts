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
}

export const addComment = createAsyncThunk<ThunkReturn, ThunkArg>(
    'comment/addComment',
    async ({text, masterId}, thunkAPI) => {
        try {
            const response = await axios.post('https://json-server-service.onrender.com/comments', {
                text, masterId
            })
            thunkAPI.dispatch(commentActions.setAddComment({text, masterId}))

            return response.data
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  