import { IReview } from "@/shared/types";
import { Rating } from "@/shared/ui";
import { formatDate } from "@/shared/utils";
import React, { FC } from "react";

type Props = {
  review: IReview;
};

const ReviewCard: FC<Props> = ({ review }) => {
  const { fullName, date, stars, text } = review;
  return (
    <>
      <h3 className="text-xl text-gray-900 font-medium mb-1">{fullName}</h3>
      <div className="text-s text-gray-400 mb-1">{formatDate(date)}</div>
      <Rating rating={stars} className="mb-2" />
      <p>{text}</p>
    </>
  );
};

export default ReviewCard;
