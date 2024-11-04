import { classNames } from "shared/lib/classNames/classNames"
import cls from './HomePage.module.scss'
import { Intro } from "shared/ui/Intro/Intro"

interface HomePageProps {
    className?: string
}

export default function HomePage({ className }: HomePageProps) {

    return (
        <div className="container">
            <div className={classNames(cls.HomePage, {}, [className])}>
                <Intro className={cls.intro}/>
            </div>
        </div>
    )
}
