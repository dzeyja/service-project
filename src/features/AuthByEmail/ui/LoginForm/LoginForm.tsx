import { classNames } from "shared/lib/classNames/classNames"
import cls from './LoginForm.module.scss'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth } from "../../module/selectors/getUserAuth/getUserAuth";
import { loginActions } from "../../module/slice/loginSlice";
import { Input } from "shared/ui/Input/Input";
import { loginByEmail } from "../../module/services/loginByEmail";

interface LoginFormProps {
    className?: string
}

export function LoginForm({ className }: LoginFormProps) {
    const dispatch = useDispatch()
    const {email, password} = useSelector(getUserAuth)

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

    return (
        <form onSubmit={onSubmit} className={classNames(cls.LoginForm, {}, [className])}>
            <div className={cls.title}>
                Регистрация
            </div>
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
            >
                Log in
            </Button>
        </form>
    )
}
