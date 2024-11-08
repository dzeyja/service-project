import { classNames } from "shared/lib/classNames/classNames"
import cls from './LoginForm.module.scss'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from 'shared/config/fireBase/fireBase';
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth } from "../../module/selectors/getUserAuth/getUserAuth";
import { loginActions } from "../../module/slice/loginSlice";
import { ChangeEvent } from "react";

interface LoginFormProps {
    className?: string
}

export function LoginForm({ className }: LoginFormProps) {
    const dispatch = useDispatch()
    const {email, password} = useSelector(getUserAuth)

    const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUsername(e.target.value))
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value))
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
  
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
  
  
      }

    return (
        <form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
            <input 
                onChange={handleUserChange} 
                type="text" 
                placeholder="email" 
            />
            <input 
                onChange={handlePasswordChange} 
                type="text" 
                placeholder="password"
            />
            <Button 
                square
                size={ButtonSize.M}
                theme={ButtonTheme.PRIMARY}
            >
                Log in
            </Button>
        </form>
    )
}
