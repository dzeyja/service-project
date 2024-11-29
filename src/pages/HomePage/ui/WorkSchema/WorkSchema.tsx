import { classNames } from "shared/lib/classNames/classNames"
import cls from './WorkSchema.module.scss'
import StepOne from 'shared/assets/icons/step1 1.svg'
import StepTwo from 'shared/assets/icons/step2 1.svg'
import StepThree from 'shared/assets/icons/step3 1.svg'
import StepFour from 'shared/assets/icons/step4 1.svg'
import StepFive from 'shared/assets/icons/step5 1.svg'
import StepSix from 'shared/assets/icons/step6 1.svg'
import { memo } from "react"

interface WorkSchemaProps {
    className?: string
}

export const WorkSchema = memo(({ className }: WorkSchemaProps) => {

    return (
        <div className={classNames(cls.WorkSchema, {}, [className])}>
            <div className="container">
                <div className={cls.title}>
                    Схема работы
                </div>
                <div className={cls.cardWrapper}>
                    <div className={cls.card}>
                        <StepOne />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Консультация
                            </div>
                            <div className={cls.cardSuptitle}>
                                Персональный менеджер
                                ответит на все ваши вопросы и
                                будет держать вас в курсе всех
                                этапов работ
                            </div>
                            <div className={cls.step}>
                                1 ШАГ
                            </div>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <StepTwo />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Доставка
                            </div>
                            <div className={cls.cardSuptitle}>
                                Курьер приедет в течении 1 часа или мы можем принять устройство в сервисе
                            </div>
                            <div className={cls.step}>
                                2 ШАГ
                            </div>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <StepThree />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Диагностика
                            </div>
                            <div className={cls.cardSuptitle}>
                                Осуществим диагностику за счет компании, даже если вы откажетесь от ремонта
                            </div>
                            <div className={cls.step}>
                                3 ШАГ
                            </div>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <StepFour />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Согласование
                            </div>
                            <div className={cls.cardSuptitle}>
                                Персональный менеджер согласует с вами сроки и стоимость ремонта
                            </div>
                            <div className={cls.step}>
                                4 ШАГ
                            </div>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <StepFive />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Выдача
                            </div>
                            <div className={cls.cardSuptitle}>
                                Бесплатно доставим устройство к вам домой или вы можете забрать его сами
                            </div>
                            <div className={cls.step}>
                                5 ШАГ
                            </div>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <StepSix />
                        <div className={cls.textContent}>
                            <div className={cls.cardTitle}>
                                Диагностика
                            </div>
                            <div className={cls.cardSuptitle}>
                                Оплата производится после ремонта и проверки устройства клиентом
                            </div>
                            <div className={cls.step}>
                                6 ШАГ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
