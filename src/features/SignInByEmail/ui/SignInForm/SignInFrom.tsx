import { classNames } from "shared/lib/classNames/classNames"
import cls from './SignInForm.module.scss'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { Input } from "shared/ui/Input/Input";
import { signInActions, signInReducer } from "../../module/slice/sigiInSlice";
import { signInByEmail } from "../../module/services/signInByEmail";
import { memo } from "react";
import { getSingInEmail } from "../../module/selectors/getSignInEmail/getSignInEmail";
import { getSingInPassword } from "../../module/selectors/getSignInPassword/getSignInPassword";
import { getSingInIsLoading } from "../../module/selectors/getSignInIsLoading/getSignInLoading";
import { getSingInMessage } from "../../module/selectors/getSignInMessage/getSignInMessage";
import { getSingInError } from "../../module/selectors/getSignInError/getSignInError";
import { DynamicModuleLoader } from "shared/lib/component/DynamicModuleLoader/DynamicModuleLoader";
import { USER_LOCALSTORAGE_KEY } from "shared/consts/localStorage/localStorage";

interface SignInProps {
    className?: string
}

const SignInForm = memo(({ className }: SignInProps) => {
    const dispatch = useDispatch()
    const email = useSelector(getSingInEmail)
    const password = useSelector(getSingInPassword)
    const isLoading = useSelector(getSingInIsLoading)
    const message = useSelector(getSingInMessage)
    const error = useSelector(getSingInError)

    const handleUserChange = (value: string) => {
        dispatch(signInActions.setUsername(value))
    }

    const handlePasswordChange = (value: string) => {
        dispatch(signInActions.setPassword(value))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        dispatch(signInByEmail({email, password}))
    }

    if(message) {
            setTimeout(() => {
                dispatch(signInActions.clearMessage())
            }, 2000)
    }

    if(error) {
        setTimeout(() => {
            dispatch(signInActions.clearError())
        }, 2000)
    }

    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    console.log(JSON.parse(user))

    return (
        <DynamicModuleLoader name='signInForm' reducer={signInReducer}>
            <form onSubmit={onSubmit} className={classNames(cls.SignInForm, {}, [className])}>
                <div className={cls.title}>
                    Авторизация
                </div>
                {error && <div className={cls.error}>{error}</div>}
                {message && <div className={cls.message}>{message}</div>}
                <Input
                    onChange={handleUserChange} 
                    type="text" 
                    placeholder="Email" 
                    className={cls.input}
                />
            <Input 
                    onChange={handlePasswordChange}
                    type="text"
                    placeholder="Password"
                    className={cls.input}
                />
                <Button 
                    square
                    size={ButtonSize.M}
                    theme={ButtonTheme.PRIMARY}
                    disabled={isLoading}
                >
                    Sign in
                </Button>
            </form>
        </DynamicModuleLoader>
    )
})

export default SignInForm
