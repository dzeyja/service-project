import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { Comment } from "../types/CommentSchema";

export const getComment = createAsyncThunk<Comment[]>(
    'comment/getComment',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://json-server-service.onrender.com/comments')
            console.log(response.data)
            return response.data
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  