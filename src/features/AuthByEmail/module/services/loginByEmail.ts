import { createAsyncThunk } from "@reduxjs/toolkit"
import { userActions } from "entities/User";
import { createUserWithEmailAndPassword, sendEmailVerification, User } from "firebase/auth";
import { auth } from "shared/config/fireBase/fireBase";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage/localStorage";

interface ThunkArg {
    email: string
    password: string
}

interface ThunkReturn {
    email: string
    uid: string
    message: string
}

export const loginByEmail = createAsyncThunk<ThunkReturn, ThunkArg, {rejectValue: string}>(
    'user/loginByEmail',
    async ( {email, password}, thunkAPI) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            if(user) {
                await sendEmailVerification(user)
                console.log('Писмо с подтверждением отправлено!')
            }
            
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify({email, password}))
            
            const userAuth = {
                email: user.email,
                id: user.uid
            }
            
            thunkAPI.dispatch(userActions.setUser(userAuth))
            return {
                email: user.email ?? '', 
                uid: user.uid, 
                message: "Регистрация прошла успешно. Проверьте почту для подтверждения."}; 
        } catch (error) {
            const errorMessage = (error as any).message;
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    },
)
  
  