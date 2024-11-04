import { classNames } from "shared/lib/classNames/classNames"
import cls from './Button.module.scss'
import { HTMLAttributes, ReactNode } from "react"

export enum ButtonTheme {
    PRIMARY = 'primary'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: ButtonTheme
}

export function Button(props:ButtonProps) {
    const {
        className,
        children,
        theme
    } = props

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])}>
            {children}
        </button>
    )
}
