import { createAsyncThunk } from "@reduxjs/toolkit"
import { userActions } from "entities/User";
import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "shared/config/fireBase/fireBase";

interface ThunkArg {
    email: string
    password: string
}

interface ThunkReturn {
    email: string
    uid: string
}

export const loginByEmail = createAsyncThunk<ThunkReturn, ThunkArg, {rejectValue: string}>(
    'user/loginByEmail',
    async ( {email, password}, thunkAPI) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user.email, user.uid);
            thunkAPI.dispatch(userActions.setUser(user.email))
            return {email: user.email ?? '', uid: user.uid}; 
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  