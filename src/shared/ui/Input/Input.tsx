import { classNames } from "shared/lib/classNames/classNames"
import cls from './Input.module.scss'
import { ChangeEvent, InputHTMLAttributes } from "react"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    onChange?: (value:string) => void
    value?: string
    type?: any
    placeholder?: string
}

export function Input(props: InputProps) {
    const {
        className,
        onChange,
        value,
        type,
        placeholder,
        ...otherProps
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <input 
            className={classNames(cls.Input, {}, [className])}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            {...otherProps}
        />
    )
}
