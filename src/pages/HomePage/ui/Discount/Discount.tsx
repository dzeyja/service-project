import { classNames } from "shared/lib/classNames/classNames"
import cls from './Discount.module.scss'
import man from 'shared/assets/img/sp-ok-plumber-min-560x660 2.png'
import posuda from 'shared/assets/img/503845_images_224829792 2.png'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { memo } from "react"

interface DiscountProps {
    className?: string
}

export const Discount = memo(({ className }: DiscountProps) => {

    return (
        <div className={classNames(cls.Discount, {}, [className])}>
             <div className="container">
                <div className={cls.banner}>
                    <div className={cls.textContent}>
                        <div className={cls.title}>
                            Получите скидку 15% прямо сейчас!
                        </div>
                        <div className={cls.suptitle}>
                            Вы выбираете LG, а мы в знак благодарности дарим Вам скидку 15% на все виды ремонтных работ в нашем центре!
                        </div>
                        <Button 
                            square 
                            size={ButtonSize.M} 
                            theme={ButtonTheme.RED}
                        >
                            Получить скидку 15%
                        </Button>
                    </div>
                    <div className={cls.imageContent}>
                        <img className={cls.washMash} src={posuda} alt="" />
                        <img className={cls.man} src={man} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
})
