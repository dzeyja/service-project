import { classNames } from "shared/lib/classNames/classNames"
import cls from './AddComForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { getComText } from "../../module/selecors/getComText/getComText"
import { addCommentActions } from "../../module/slice/addComSlice"
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
        dispatch(addComment({text, masterId}))
    }

    return (
        <div className={classNames(cls.AddComForm, {}, [className])}>
            <form>
                <Input 
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
