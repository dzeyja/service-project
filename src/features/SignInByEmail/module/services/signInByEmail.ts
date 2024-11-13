import { createAsyncThunk } from "@reduxjs/toolkit"
import { userActions } from "entities/User";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "shared/config/fireBase/fireBase";

interface ThunkArg {
    email: string
    password: string
}

interface ThunkReturn {
    email: string
    uid: string
    message: string
}

export const signInByEmail = createAsyncThunk<ThunkReturn, ThunkArg, {rejectValue: string}>(
    'user/signInByEmail',
    async ( {email, password}, thunkAPI) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userAuth = {
                email: user.email,
                id: user.uid
            }
            console.log(user.email, user.uid);
            thunkAPI.dispatch(userActions.setUser(userAuth))
            return {email: user.email ?? '', uid: user.uid, message: "Авторизация прошла успешно"}; 
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  