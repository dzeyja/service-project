import { classNames } from "shared/lib/classNames/classNames"
import cls from './FreeBanner.module.scss'
import washMash from 'shared/assets/img/6414573-1569396312 2.png'
import man from 'shared/assets/img/man 1.png'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"

interface FreeBannerProps {
    className?: string
}

export function FreeBanner({ className }: FreeBannerProps) {

    return (
        <div className={classNames(cls.FreeBanner, {}, [className])}>
            <div className="container">
                <div className={cls.banner}>
                    <div className={cls.textContent}>
                        <div className={cls.title}>
                            Заказать бесплатный выезд
                            мастера за 30 мин!
                        </div>
                        <div className={cls.suptitle}>
                            Выезд мастера и диагностика бесплатно, при условии ремонта, 
                            Мы следим за качеством облуживания.
                            К вам приедет мастер с опытом 
                            работы не менее пяти лет.
                            У нас быстро, от 30 минут выезд мастера.
                        </div>
                        <Button 
                            square 
                            size={ButtonSize.M} 
                            theme={ButtonTheme.RED}
                        >
                            Заказать мастера
                        </Button>
                    </div>
                    <div className={cls.imageContent}>
                        <img className={cls.washMash} src={washMash} alt="" />
                        <img className={cls.man} src={man} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
