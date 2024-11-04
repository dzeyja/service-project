import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className="container">
                <div className={cls.header}>
                    <div className={cls.logo}>
                        INDESIT
                    </div>
                    <div className={cls.links}>
                        <div>Home</div>
                        <div>Contacts</div>
                        <div>About Us</div>
                        <div>Hello</div>
                    </div>
                    <div className={cls.login}>
                            Log in
                    </div>
                </div>
            </div>
        </div>
    )
}
