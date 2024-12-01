import { classNames } from "shared/lib/classNames/classNames"
import cls from './Discount.module.scss'
import man from 'shared/assets/img/sp-ok-plumber-min-560x660 2.png'
import posuda from 'shared/assets/img/503845_images_224829792 2.png'
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { memo } from "react"
import { PdfUploaderDownloader } from "shared/ui/PdfViewer/PdfViewer"

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
                            Посмотрите наш прайс-лист
                        </div>
                        <div className={cls.suptitle}>
                        В нём вы найдёте полный перечень наших услуг и актуальные цены. Мы предлагаем качественный сервис и прозрачные условия работы, чтобы вы могли сделать правильный выбор!
                        </div>
                        <PdfUploaderDownloader />
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
