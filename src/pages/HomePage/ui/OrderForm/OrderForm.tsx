import { classNames } from "shared/lib/classNames/classNames"
import cls from './OrderForm.module.scss'
import { Input } from "shared/ui/Input/Input"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"

interface OrderFormProps {
    className?: string
}

export function OrderForm({ className }: OrderFormProps) {

    return (
        <div className={classNames(cls.OrderForm, {}, [className])}>
            <form className={cls.form}>
                <Input className={cls.input}/>
                <Input className={cls.input}/>
                <Button 
                    square
                    theme={ButtonTheme.PRIMARY}
                    size={ButtonSize.M}    
                >
                    Заказать
                </Button>
            </form>
        </div>
    )
}
