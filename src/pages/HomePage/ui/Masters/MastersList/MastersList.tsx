import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MastersList.module.scss";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCom, getComment } from "entities/Comments";
import { getMasters, getMastersState } from "entities/Masters";
import { AddComForm } from "features/AddComment";

interface MastersListProps {
  className?: string;
}

export const MastersList = memo(({ className }: MastersListProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMasters());
    dispatch(getComment());
  }, [dispatch]);

  const masters = useSelector(getMastersState);
  const comments = useSelector(getCom);

  return (
    <div className="container">
      <div className={classNames(cls.MastersList, {}, [className])}>
        {masters.map((master) => {
          const filteredComments = comments.filter(
            (comment) => comment.masterId === master.id
          );

          return (
            <div key={master.id} className={cls.masterCard}>
              <h3>{master.name}</h3>
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
              </div>
              <AddComForm className={cls.addCom} masterId={master.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
})
