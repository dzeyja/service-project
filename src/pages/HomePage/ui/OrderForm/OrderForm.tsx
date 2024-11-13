import { classNames } from "shared/lib/classNames/classNames"
import cls from './OrderForm.module.scss'
import { useRef } from "react"
import emailjs from '@emailjs/browser';
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";


interface OrderFormProps {
    className?: string
}

export function OrderForm({ className }: OrderFormProps) {
    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
        .sendForm('service_mmo6uzq', 'template_4n125dg', form.current, {
            publicKey: 'j8--Ih-F0S9ZhQFfs',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
      );
   };

   return (
        <div className={classNames(cls.OrderForm, {}, [className])}>
            <form ref={form} className={cls.form}>
                <div className={cls.title}>
                    Оставьте заявку
                </div>
                <Input 
                    placeholder="Имя" 
                    type='text' 
                    name="user_name"
                />
                <Input 
                    placeholder="Email" 
                    type='email' 
                    value="zharylkasynov_d@mail.ru"
                    name="user_email"
                />
                <Input 
                    placeholder="Сообщение" 
                    name="message"
                />
                <Button 
                    square 
                    theme={ButtonTheme.PRIMARY} 
                    size={ButtonSize.M} 
                    onClick={sendEmail}
                >
                    Отправить заявку
                </Button>
            </form>
         </div>
   )
}
