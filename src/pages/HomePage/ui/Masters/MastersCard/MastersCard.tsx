import { classNames } from "shared/lib/classNames/classNames"
import cls from './MastersCard.module.scss'
import { Comment } from "entities/Comments"
import { Master } from "entities/Masters"
import { AddComForm } from "features/AddComment"
import { memo, useState } from "react"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { useSelector } from "react-redux"
import { getUser } from "entities/User"

interface MastersCardProps {
    className?: string
    filteredComments: Comment[]
    master: Master
}

export const MastersCard = memo((props: MastersCardProps) => {
    const {
        master,
        filteredComments,
        className
    } = props

    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div key={master.id} className={classNames(cls.masterCard, {}, [className])}>
            <img src={master.img} alt="" />
            <div className={cls.title}>{master.name} Мастер</div>
            <div className={cls.desc}>{master.description}</div>
            <Button 
                onClick={handleVisible} 
                theme={ButtonTheme.CLEAR}
            >
                    {   isVisible 
                    ? 'Скрыть комментарий'
                    : 'Показать комментарий'}
            </Button>
            {isVisible && 
            <>
                <div className={cls.commentsSection}>
                    {filteredComments.length > 0 ? (
                      filteredComments.map((comment) => (
                        <div key={comment.id} className={cls.comment}>
                            <div className={cls.userName}>
                              {comment.username}
                            </div>
                            <div className={cls.text}>
                              {comment.text}
                            </div>
                        </div>
                      ))
                    ) : (
                      <div className={cls.noComments}>No comments yet</div>
                    )}
                  </div>
                <AddComForm className={cls.addCom} masterId={master.id}/>
            </>
            }
        </div>
    )
})
