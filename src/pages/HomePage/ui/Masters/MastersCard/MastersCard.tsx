import { classNames } from "shared/lib/classNames/classNames"
import cls from './MastersCard.module.scss'
import { Comment } from "entities/Comments"
import { Master } from "entities/Masters"
import { AddComForm } from "features/AddComment"
import { memo, useState } from "react"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"

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

    const [isVisible, setIsVisible] = useState(true)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div key={master.id} className={classNames(cls.masterCard, {}, [className])}>
            <div>{master.name}</div>
            <div className={cls.desc}>{master.description}</div>
            <Button 
                onClick={handleVisible} 
                square theme={ButtonTheme.PRIMARY} 
                size={ButtonSize.M}
            >
                {isVisible ?
                    'Скрыть комментарий'
                    : 'Показать комментарий'}
            </Button>
            {isVisible && 
              <div className={cls.commentsSection}>
                {filteredComments.length > 0 ? (
                  filteredComments.map((comment) => (
                    <div key={comment.id} className={cls.comment}>
                      {comment.text}
                    </div>
                  ))
                ) : (
                  <div className={cls.noComments}>No comments yet</div>
                )}
                <AddComForm className={cls.addCom} masterId={master.id}/>
              </div>
            }
        </div>
    )
})
