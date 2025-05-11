// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface Parameter {
  rating: number,
  onClick: React.SetStateAction<T>
}
export const StarRating = ({ rating, onClick }: Parameter) => {
  return (
    <>
      {[...Array(5)].map((_, index) =>
      (<span key={index} onClick={() => onClick(index)} className="ps-1">

        {rating > index ? (
          <AiFillStar fontSize="20" />
        ) : (
          <AiOutlineStar fontSize="20" />
        )}

      </span>)
      )}
    </>
  );
};
