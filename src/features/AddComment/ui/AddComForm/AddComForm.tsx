import { classNames } from "shared/lib/classNames/classNames"
import cls from './AddComForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { addComment } from "../../module/services/addComment"
import { FormEvent, useState } from "react"

interface AddComFormProps {
    className?: string
    masterId: number
}

export function AddComForm({ className, masterId }: AddComFormProps) {
    const [text, setText] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const dispatch = useDispatch()

    const onChange = (val: string) => {
        setText(val)
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setIsSubmitted(true)

        try {
            await dispatch(addComment({text, masterId}))
            setText('')

        } catch(e) {
            console.error('Error comment')
        } finally {
            setIsSubmitted(false)
        }
        
    }

    return (
        <div className={classNames(cls.AddComForm, {}, [])}>
            <form onSubmit={onSubmit}>
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
                    submit
                >
                    {isSubmitted ? 'Добавление...' : 'Добавить коментарий'}
                </Button>
            </form>
        </div>
    )
}
