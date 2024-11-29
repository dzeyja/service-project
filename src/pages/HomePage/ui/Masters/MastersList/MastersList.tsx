import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MastersList.module.scss";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCom, getComment } from "entities/Comments";
import { getMasters, getMastersState } from "entities/Masters";
import { AddComForm } from "features/AddComment";
import { MastersCard } from "../MastersCard/MastersCard";

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

          return <MastersCard 
                    key={master.id}
                    master={master} 
                    filteredComments={filteredComments}
                 />
        })}
      </div>
    </div>
  );
})
