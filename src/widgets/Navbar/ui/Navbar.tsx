import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { LoginModal } from "features/AuthByEmail"
import { useState } from "react"

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

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
                    <div onClick={handleOpen} className={cls.login}>
                            Log in
                    </div>
                    <LoginModal 
                        isOpen={isOpen}
                        onClose={() =>setIsOpen(false)}
                    />
                </div>
            </div>
        </div>
    )
}
