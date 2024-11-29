import { classNames } from "shared/lib/classNames/classNames"
import cls from './Button.module.scss'
import { HTMLAttributes, memo, ReactNode } from "react"

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
    disabled?: boolean
    submit?: boolean
}

export const Button = memo((props:ButtonProps) => {
    const {
        className,
        children,
        theme, 
        square,
        size,
        disabled,
        submit,
        ...otherProps
    } = props

    const mods:Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button type={submit ? 'submit' : undefined} {...otherProps} className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}>
            {children}
        </button>
    )
})
