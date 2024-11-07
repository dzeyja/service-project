import { classNames } from "shared/lib/classNames/classNames"
import cls from './HomePage.module.scss'
import { Intro } from "../Intro/Intro"
import { FreeBanner } from "../FreeBanner/FreeBanner"
import { PricesBanner } from "../PricesBanner/PricesBanner"
import { WorkSchema } from "../WorkSchema/WorkSchema"
import { Discount } from "../Discount/Discount"
import { Reviews } from "../Reviews/Reviews"

interface HomePageProps {
    className?: string
}

export default function HomePage({ className }: HomePageProps) {

    return (
            <div className={classNames(cls.HomePage, {}, [className])}>
                <Intro className={cls.intro}/>
                <FreeBanner />
                <PricesBanner />
                <WorkSchema />
                <Discount />
                <Reviews />
            </div>
    )
}
