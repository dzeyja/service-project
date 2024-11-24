import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { Master } from "../types/MasterSchema";


export const getMasters = createAsyncThunk<Master[]>(
    'masters/getMasters',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://json-server-service.onrender.com/masters')
            console.log(response.data)
            return response.data
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  