import { classNames } from "shared/lib/classNames/classNames"
import cls from './LoginForm.module.scss'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../module/slice/loginSlice";
import { Input } from "shared/ui/Input/Input";
import { loginByEmail } from "../../module/services/loginByEmail";
import { memo } from "react";
import { getUserAuthEmail } from "../../module/selectors/getUserAuthEmail/getUserAuthEmail";
import { getUserAuthPassword } from "../../module/selectors/getUserAuthPassword/getUserAuthPassword";
import { getUserAuthError } from "../../module/selectors/getUserAuthError/getUserAuthError";
import { getUserAuthMessage } from "../../module/selectors/getUserAuthMessage/getUserAuthMessage";
import { DynamicModuleLoader } from "shared/lib/component/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
    className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch()
    const email = useSelector(getUserAuthEmail)
    const password = useSelector(getUserAuthPassword)
    const error = useSelector(getUserAuthError)
    const message = useSelector(getUserAuthMessage)

    const handleUserChange = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const handlePasswordChange = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        dispatch(loginByEmail({email, password}))
    }

    if (message) {
        setTimeout(() => {
            dispatch(loginActions.clearMessage())
        }, 2000)
    }

    if (error) {
        setTimeout(() => {
            dispatch(loginActions.clearError())
        }, 2000)
    }

    return (
        <DynamicModuleLoader name='loginForm' reducer={loginReducer}>
            <form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
                <div className={cls.title}>
                    Регистрация
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
                    disabled
                >
                    Log in
                </Button>
            </form>
        </DynamicModuleLoader>
    )
})


export default LoginForm