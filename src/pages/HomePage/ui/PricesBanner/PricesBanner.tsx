import { classNames } from "shared/lib/classNames/classNames"
import cls from './PricesBanner.module.scss'
import { memo } from "react"

interface PricesBannerProps {
    className?: string
}

export const PricesBanner = memo(({ className }: PricesBannerProps) => {

    return (
        <div className={classNames(cls.PricesBanner, {}, [className])}>
            <div className="container">
                <div className={cls.title}>
                    Сервис <span>INDESIT</span> предлагает лучшие цены
                </div>
                <div className={cls.cardWrapper}>
                    <div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт микроволновки</div>
                        <div className={cls.cardSuptitle}>
                            Замена слюды, магнетрона, 
                            восстановление кнопок и др
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div>
                    <div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт пылесоса
                        </div>
                        <div className={cls.cardSuptitle}>
                        Замена или восстановление 
                        шланга, схемы управления, 
                        двигателя и пр
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт аудиотехники
                        </div>
                        <div className={cls.cardSuptitle}>
                        Колонки, домашние кинотеатры, 
                        музыкальные центры и др. виды.
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Выезд мастера</div>
                        <div className={cls.cardSuptitle}>
                        В удобное для Вас 
время. На дом или 
в офис!
                        </div>
                        <div className={cls.price}>БЕСПЛАТНО</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт микроволновки</div>
                        <div className={cls.cardSuptitle}>
                            Замена слюды, магнетрона, 
                            восстановление кнопок и др
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт микроволновки</div>
                        <div className={cls.cardSuptitle}>
                            Замена слюды, магнетрона, 
                            восстановление кнопок и др
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт микроволновки</div>
                        <div className={cls.cardSuptitle}>
                            Замена слюды, магнетрона, 
                            восстановление кнопок и др
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div><div className={cls.card}>
                        <div className={cls.cardTitle}>Ремонт микроволновки</div>
                        <div className={cls.cardSuptitle}>
                            Замена слюды, магнетрона, 
                            восстановление кнопок и др
                        </div>
                        <div className={cls.price}>От 2500ТГ</div>
                    </div>
                </div>
            </div>
        </div>
    )
})
