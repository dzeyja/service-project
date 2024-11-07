import { classNames } from "shared/lib/classNames/classNames"
import cls from './Reviews.module.scss'
import rev1 from 'shared/assets/icons/61a8f4cd9980b453813a29ec496e32ef_ce_1080x716x0x73_fitted_740x0 1.png'
import rev2 from 'shared/assets/icons/images 1.png'
import rev3 from 'shared/assets/icons/Без названия 2.png'

interface ReviewsProps {
    className?: string
}

export function Reviews({ className }: ReviewsProps) {

    return (
        <div className="container">
            <div className={classNames(cls.Reviews, {}, [className])}>
                <div className={cls.title}>
                    Отзывы
                </div>
                <div className={cls.reviewsWrapper}>
                    <div className={cls.review}>
                        <div className={cls.reviewTitle}>Константин </div>
                        <div className={cls.reviewText}>
                            С сайтом и сервисом этой компании всё просто отлично! 
                            Качество товара соответствует заявленному. Буду и впреть 
                            пользоваться товарами с этого сайта, и смело могу рекомендовать его людям.
                        </div>
                        <img src={rev2} className={cls.img} alt="" />
                    </div>
                    <div className={cls.review}>
                        <div className={cls.reviewTitle}>Алина</div>
                        <div className={cls.reviewText}>
                            Хочу выразить благодарность компании за качественно выполненную 
                            работу по ремонту стиральной машины! Все было качественно и 
                            оперативно: от принятия заявки диспетчером до работы мастера! 
                        </div>
                        <img src={rev1} className={cls.img} alt="" />
                    </div>
                    <div className={cls.review}>
                        <div className={cls.reviewTitle}>Дмитрий</div>
                        <div className={cls.reviewText}>
                            Благодарны за качественное и профессиональное обслуживание, 
                            быстро откликнулись. Мастер Сергей приехал в назначенное время, сделал все хорошо
                        </div>
                        <img src={rev3} className={cls.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
