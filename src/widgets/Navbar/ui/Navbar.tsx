import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { LoginModal } from "features/AuthByEmail"
import { useState } from "react"
import { SignInModal } from "features/SignInByEmail"
import { useDispatch, useSelector } from "react-redux"
import { getUser, getUserEmail, userActions } from "entities/User"
import { getBonus } from "entities/Bonus/model/selectors/getBonus/getBonus"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const [loginIsOpen, setLoginIsOpen] = useState(false)
    const [signinIsOpen, setSigninIsOpen] = useState(false)
    const userEmail = useSelector(getUserEmail)
    const bonus = useSelector(getBonus)
    const dispatch = useDispatch()

    const handleLoginOpen = () => {
        setLoginIsOpen(true)
    }

    const handleSigninOpen = () => {
        setSigninIsOpen(true)
    }

    const logout = () => {
        dispatch(userActions.logout())
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className="container">
                <div className={cls.header}>
                    <div className={cls.logo}>
                        INDESIT 
                    </div>
                    <div>
                        {userEmail ?
                            <div className={cls.bonus}>
                                {bonus} бонусов
                            </div> : 
                            <div className={cls.bonus}>
                                Бонусы доступны после регистраций
                            </div>
                        }
                    </div>
                    <div className={cls.number}>
                        Горячяя линия: +7 (700) 707 7707
                    </div>
                    {userEmail ? 
                        <>
                            <div className={cls.user}>
                                {userEmail}
                            </div>
                            <div className={cls.logout} onClick={logout}>
                                Выйти
                            </div> 
                        </> :
                        <div className={cls.auth}>
                            <div className={cls.singIn} onClick={handleSigninOpen}>
                                Войти
                            </div>
                            <div onClick={handleLoginOpen} className={cls.login}>
                                Зарегестрироватся
                            </div>
                        </div>
                    }
                    <LoginModal 
                        isOpen={loginIsOpen}
                        onClose={() => setLoginIsOpen(false)}
                    />
                    <SignInModal 
                        isOpen={signinIsOpen}
                        onClose={() => setSigninIsOpen(false)}
                    />
                </div>
            </div>
        </div>
    )
}
