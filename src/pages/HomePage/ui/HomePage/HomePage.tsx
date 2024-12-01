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
import { OrderModal } from "../OrderModal/OrderModal"
import { useState } from "react"

interface HomePageProps {
    className?: string
}

export default function HomePage({ className }: HomePageProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handlerOpen = () => {
        setIsOpen(true)
    }

    const handlerClose = () => {
        setIsOpen(false)
    }

    return (
            <div className={classNames(cls.HomePage, {}, [className])}>
                <Intro handlerOpen={handlerOpen} className={cls.intro}/>
                <FreeBanner handleOpen={handlerOpen}/>
                <PricesBanner />
                <WorkSchema />
                <Discount />
                <Reviews />
                <OrderForm />
                <MastersList />
                <Map />
                <OrderModal isOpen={isOpen} onClose={handlerClose}/>
            </div>
    )
}
