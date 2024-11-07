import { classNames } from "shared/lib/classNames/classNames"
import cls from './Button.module.scss'
import { HTMLAttributes, ReactNode } from "react"

export enum ButtonTheme {
    PRIMARY = 'primary',
    RED = 'red'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children: ReactNode
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    
}

export function Button(props:ButtonProps) {
    const {
        className,
        children,
        theme, 
        square,
        size,
        ...otherProps
    } = props

    const mods:Record<string, boolean> = {
        [cls.square]: square
    }

    return (
        <button {...otherProps} className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}>
            {children}
        </button>
    )
}
