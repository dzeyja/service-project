import { classNames } from "shared/lib/classNames/classNames"
import cls from './OrderForm.module.scss'
import { memo, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import { bonusActions } from "entities/Bonus";


interface OrderFormProps {
    className?: string
}

export const OrderForm = memo(({ className }: OrderFormProps) => {
    const form = useRef();
    const dispatch = useDispatch()
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();
        dispatch(bonusActions.incrementBonus())
        setIsSending(true)

        emailjs
        .sendForm('service_mmo6uzq', 'template_4n125dg', form.current, {
            publicKey: 'j8--Ih-F0S9ZhQFfs',
        })
        .then(
            () => {
        setIsSending(false)
        console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
        setIsSending(false)

            }
      );
   };

   return (
        <div className={classNames(cls.OrderForm, {}, [className])}>
            <form ref={form} className={cls.form}>
                <div className={cls.title}>
                    Оставьте заявку на ремонт
                </div>
                <Input 
                    placeholder="Имя" 
                    type='text' 
                    name="user_name"
                />
                <Input 
                    className={cls.hiddenInput}
                    placeholder="Email" 
                    type='email' 
                    value="zhalgasaitbay@gmail.com"
                    name="user_email"
                />
                <Input 
                    type='number'
                    placeholder="Номер" 
                    name="message"
                />
                <Input 
                    placeholder="Адресс" 
                    name="message"
                />
                <Input 
                    placeholder="Описание проблемы" 
                    name="message"
                />
                <Button 
                    square 
                    theme={ButtonTheme.PRIMARY} 
                    size={ButtonSize.M} 
                    onClick={sendEmail}
                >
                    {isSending ? 'Отправляется...' : 'Оставить заявку'}
                </Button>
            </form>
         </div>
   )
})
