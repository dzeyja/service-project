import { classNames } from "shared/lib/classNames/classNames"
import cls from './Intro.module.scss'
import introImg from '../../assets/img/Group 2 (1).png'
import introBg from '../../assets/img/Rectangle 57.png'
import { Button, ButtonTheme } from "../Button/Button"

interface IntroProps {
    className?: string
}

export function Intro({ className }: IntroProps) {

    return (
        <div className={classNames(cls.Intro, {}, [className])}>
            <div className={cls.introWrapper}>
                <div className={cls.textContent}>
                    <div className={cls.title}>
                        Сервисный центер<br/> 
                        <span>INDESIT</span> в Алматы
                    </div>
                    <div className={cls.suptitle}>
                        Обходитесь без лишних затрат
                    </div>
                    <Button theme={ButtonTheme.PRIMARY}>
                        Вызвать мастера
                    </Button>
                    <div className={cls.info}>
                        <span>*</span> Выезд и диагностика бесплатно при условии ремонта
                    </div>
                    <div className={cls.additional}>
                        <div className={cls.additionalItem}>
                            <div className={cls.number}>0</div>
                            <div className={cls.text}>
                                ₸<br/> <span>диагностика</span>
                            </div>
                        </div>
                        <div className={cls.additionalItem}>
                            <div className={cls.number}>1</div>
                            <div className={cls.text}>
                                день<br/> <span>ремонта</span>
                            </div>
                        </div>
                        <div className={cls.additionalItem}>
                            <div className={cls.number}>3</div>
                            <div className={cls.text}>
                                года<br/> <span>гарантии</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={cls.introImg} src={introImg} alt="" />
            </div>
            <img className={cls.intro} src={introBg} alt="" />
        </div>
    )
}
