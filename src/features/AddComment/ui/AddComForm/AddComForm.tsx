import { classNames } from "shared/lib/classNames/classNames"
import cls from './AddComForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../../module/services/addComment"
import { useState } from "react"

interface AddComFormProps {
    className?: string
    masterId: number
}

export function AddComForm({ className, masterId }: AddComFormProps) {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onChange = (val: string) => {
        setText(val)
    }

    const onClickk = (e: any) => {
        e.preventDefault()
        setTimeout(() => {
            window.location.reload()
            dispatch(addComment({text, masterId}))
            setText('')
        }, 2000)
        
    }

    return (
        <div className={classNames(cls.AddComForm, {}, [])}>
            <form>
                <Input 
                    className={classNames(cls.input, {}, [className])}
                    value={text} 
                    placeholder='Комментарий' 
                    onChange={onChange}
                />
                <Button
                    theme={ButtonTheme.PRIMARY}
                    size={ButtonSize.M}
                    square
                    onClick={onClickk}
                    submit
                >
                    Добавить комментарий
                </Button>
            </form>
        </div>
    )
}
