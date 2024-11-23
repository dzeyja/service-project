import { classNames } from "shared/lib/classNames/classNames"
import cls from './HomePage.module.scss'
import { Intro } from "../Intro/Intro"
import { FreeBanner } from "../FreeBanner/FreeBanner"
import { PricesBanner } from "../PricesBanner/PricesBanner"
import { WorkSchema } from "../WorkSchema/WorkSchema"
import { Discount } from "../Discount/Discount"
import { Reviews } from "../Reviews/Reviews"
import { OrderForm } from "../OrderForm/OrderForm"
import Map from "shared/ui/Map/Map"
import { MastersList } from "../Masters/MastersList/MastersList"

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
                <OrderForm />
                <MastersList />
                <Map />
            </div>
    )
}
